"use client"

//Modules
import { useRef, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FiSend } from "react-icons/fi";
import { useForm } from "react-hook-form";
import ChatMessages from "@/components/chat/messages";

import { useChat } from "@/store/chat";
import { useAgentApiKeyProps } from "@/store/agentApiKey";
import { http } from "@/http";

export interface ChatProps { };

interface ChatSchema {
    input: string
};

export default function CharacterChat({ ...props }: ChatProps) {
    const [isLoading, setIsLoading] = useState(false);

    const { apiKey } = useAgentApiKeyProps();
    
    const {
        selectedChat,
        addMessage,
        addChat,
        editChat
    } = useChat();

    const selectedId = selectedChat?.id;
    
    const selectedRole = selectedChat?.role;

    const {
        register,
        setValue,
        handleSubmit
    } = useForm<ChatSchema>();

    const overflowRef = useRef<HTMLDivElement>(null);

    const updateScroll = () => {
        overflowRef.current?.scrollTo(0, overflowRef.current.scrollHeight);
    };

    const [parentRef] = useAutoAnimate();

    const handleAsk = async ({ input: prompt }: ChatSchema) => {
        updateScroll();

        setValue("input", "");

        addMessage(selectedId, {
            emitter: "user",
            message: prompt
        });
        
        try {
            if (!selectedId) {
                throw new Error("No chat selected");
            }
    
            if (!prompt && isLoading) {
                throw new Error("No message to send");
            }
    


            const { status, data } = await http.post("/inference", {
                query: prompt,
            });

            // const { status, data } = await http.get("/");

            console.log("data", data);

            if (status === 200) {
                const message = String(data.result);

                addMessage(selectedId, {
                    emitter: "gpt",
                    message
                });

                if (selectedRole == "New chat" || selectedRole == undefined) {
                    // editChat(selectedId, { role: variable });
                };
            }

            updateScroll();

        } catch (error) {
            console.error(error);

            // const { response } = error as Error;

            // const message = response.data.error.message;

            // addMessage(selectedId, {
            //     emitter: "error",
            //     message
            // });

            // updateScroll();
        }
    };

    return (
        <div className="w-full h-full">
            <div
              className="max-w-3xl w-full mx-auto h-5/6 overflow-auto"
              ref={overflowRef}
            >
                <div
                  className="space-y-2 p-2"
                  ref={parentRef}
                  style={{ height: '100%' }}
                >
                  <ChatMessages setValue={setValue} />
                </div>
            </div>
            <div
              className="h-1/6 w-full p-4 bg-black bg-opacity-40 flex justify-center items-center overflow-hidden"
            >
                <div className="max-w-3xl w-full">
                    <div className="input-group flex items-center bg-white rounded-lg w-full py-2 px-4">
                        <input
                            autoFocus={true}
                            className="text-black mr-2 w-full"
                            {...register('input')}
                            onSubmit={console.log}
                            onKeyDown={(e) => {
                                if (e.key == "Enter") {
                                    handleAsk({ input: e.currentTarget.value })
                                };
                            }}
                        />
                        <button
                          aria-label="send_button"
                          className="bg-transparent flex items-center justify-center"
                          onClick={handleSubmit(handleAsk)}
                        >
                          {(!isLoading) ? (
                            <FiSend className="text-xl text-black" />
                          ) : (
                            <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full"></div>
                          )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};