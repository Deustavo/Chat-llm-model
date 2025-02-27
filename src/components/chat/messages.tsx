"use client"

import React from 'react';
import ReactMarkdown from 'react-markdown';

import gptAvatar from "@/assets/gpt-avatar.svg";
import warning from "@/assets/warning.svg";
import user from "@/assets/user.png";

import { useChat } from "@/store/chat";

import Instructions from "@/components/chat/instructions";

interface ChatSchema {
    input: string
};

export default function ChatMessages({ setValue }: { setValue: (name: keyof ChatSchema, value: any) => void }) {
    const { selectedChat } = useChat();

    const hasSelectedChat: boolean = !!selectedChat && selectedChat.content.length > 0;

    return (
        <>
            {hasSelectedChat ? (
                selectedChat.content.map(({ emitter, message }, key) => {
                    const getAvatar = () => {
                        switch (emitter) {
                            case 'gpt':
                                return gptAvatar.src;
                            case 'error':
                                return warning.src;
                            default:
                                return user.src;
                        }
                    };

                    const getMessage = () => {
                        if (message.slice(0, 2) === '\n\n') {
                            return message.slice(2);
                        }
                        return message;
                    };

                    return (
                        <div
                            key={key}
                            // className={`flex flex-row p-4 rounded-lg ${emitter === 'gpt' ? 'bg-black bg-opacity-20' : 'bg-transparent'} space-x-4`}
                            className="flex flex-row p-4 rounded-lg space-x-4"
                        >
                            <img
                                className="w-10 h-10 rounded-full"
                                alt={emitter}
                                src={getAvatar()}
                            />
                            <div className="whitespace-pre-wrap mt-3 overflow-hidden">
                                <ReactMarkdown>
                                    {getMessage()}
                                </ReactMarkdown>
                            </div>
                        </div>
                    );
                })
            ) : (
                <Instructions onClick={(text) => setValue('input', text)} />
            )}
        </>
    );
};
