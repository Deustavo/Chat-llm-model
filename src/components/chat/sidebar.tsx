"use client"

//Modules
import { useChat } from "@/store/chat";
// import { useModal } from "@/hooks/useModal";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { CSSProperties, useEffect, useState } from "react";
import store from "store2";
import { motion } from "framer-motion";

import {
    FiCheckCircle,
    FiExternalLink,
    FiKey,
    FiLogOut,
    FiMenu,
    FiMessageSquare,
    FiMoon,
    FiPlus,
    FiSun,
    FiTrash2,
    FiUser,
    FiX
} from "react-icons/fi";

// import {
//     APIKeyModal as APIKeyModalContent
// } from "../Layout/APIKeyModal";

export interface SideBarProps {
    isResponsive?: boolean
};

export default function Sidebar({ isResponsive, ...props }: SideBarProps) {
    const [isOpen, setIsOpen] = useState(true),
        handleOpen = () => setIsOpen(true),
        handleClose = () => setIsOpen(false);

    const [listRef] = useAutoAnimate();

    const {
        chat,
        selectedChat,
        addChat,
        setSelectedChat,
        removeChat,
        clearAll
    } = useChat();

    // const {
    //     Modal: AccountModal,
    //     handleOpen: handleOpenAccountModal
    // } = useModal();

    // const {
    //     Modal: APIKeyModal,
    //     handleOpen: handleOpenAPIKeyModal,
    //     handleClose: handleCloseAPIKeyModal
    // } = useModal();

    useEffect(() => {
        if (!isResponsive) handleClose();
    }, [isResponsive]);

    useEffect(() => {
        store.session("@chat", JSON.stringify(chat));
    }, [chat, selectedChat])

    const responsiveProps = isResponsive ? {
        position: "fixed" as CSSProperties['position'],
        left: isOpen ? 0 : '-100%',
        top: 0
    } : {};

    return (
        <>
            {!!(isResponsive) && (
                <div className="flex justify-between items-center p-2">
                    <button
                        aria-label="menu"
                        className="p-2"
                        onClick={handleOpen}
                    >
                        <FiMenu />
                    </button>
                    <h2 className="text-md">{selectedChat?.role}</h2>
                    <button
                        aria-label="add"
                        className="p-2"
                        onClick={() => addChat()}
                    >
                        <FiPlus />
                    </button>
                </div>
            )}
            {!!(isOpen) && (
                <div
                    className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-70 transition-all ease-in-out duration-500"
                    style={{ opacity: 1 }}
                />
            )}
            <div
                className={`flex flex-col justify-between h-full w-1/6 p-2 text-white bg-gray-900 z-10 transition-all ease-in-out duration-500 ${isResponsive ? 'fixed left-0 top-0' : ''}`}
                // style={{ left: isOpen ? 0 : '-100%' }}
            >
                {!!(isResponsive) && (
                    <button
                        aria-label="close button"
                        className="absolute right-0 transform translate-x-[125%] bg-gray-800 text-white p-2 rounded-full"
                        onClick={handleClose}
                    >
                        <FiX />
                    </button>
                )}
                <div>
                    <button
                        className="flex  w-full items-center p-2 border border-white/40 rounded transition-all ease-in-out duration-500 bg-transparent hover:bg-white/10"
                        onClick={() => addChat()}
                    >
                        <FiPlus size={16} className="mr-2" />
                        New chat
                    </button>
                    <div
                        className="mt-2 overflow-y-auto"
                        ref={listRef}
                    >
                        {chat?.map(({ id, role }) => {
                            return (
                                <button
                                    id={id}
                                    key={id}
                                    className={`flex justify-between w-full items-center p-2 rounded transition-all ease-in-out duration-500 ${selectedChat?.id == id ? "bg-white/20" : "bg-transparent"} hover:bg-white/10`}
                                    onClick={() => setSelectedChat({ id })}
                                >
                                    <div className="flex items-center">
                                        <FiMessageSquare className="mr-2" />
                                        <span className="flex-1 overflow-hidden text-ellipsis">{role}</span>
                                    </div>
                                    <FiTrash2
                                        className="ml-2"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeChat({ id });
                                        }}
                                        style={{
                                            display: selectedChat?.id == id ? "block" : "none"
                                        }}
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <div className="my-2 border-t border-white" />
                    <button
                        className="flex items-center p-2 w-full text-left bg-transparent hover:bg-blackAlpha-300"
                        onClick={clearAll}
                    >
                        <FiTrash2 className="mr-2" />
                        Clear conversations
                    </button>
                    {/* <button
                        className="flex items-center justify-start p-2 w-full text-left bg-transparent hover:bg-blackAlpha-300"
                        onClick={toggleColorMode}
                    >
                        {(colorMode == 'dark') ? <FiSun className="mr-2" /> : <FiMoon className="mr-2" />}
                        {(colorMode == 'dark') ? 'Light mode' : 'Dark mode'}
                    </button> */}
                    <button
                        className="flex items-center justify-start p-2 w-full text-left bg-transparent hover:bg-blackAlpha-300"
                        // onClick={handleOpenAPIKeyModal}
                    >
                        <FiKey className="mr-2" />
                        Change API Key
                    </button>
                </div>
            </div>

            {/* <AccountModal title="Your account">
                <Stack
                    direction={!isResponsive ? "row" : "column"}
                    spacing={4}
                    padding={4}
                    divider={(
                        <Divider
                            orientation={!isResponsive ? "vertical" : "horizontal"}
                        />
                    )}
                >
                    <Stack>
                        <Heading
                            size="md"
                        >Free Plan</Heading>
                        <Button disabled>Your Current Plan</Button>
                        {[
                            "Available when demand is low",
                            "Standard response speed",
                            "Regular model updates"
                        ].map((text, key) => (
                            <Text
                                display="flex"
                                alignItems="center"
                                gap={2}
                                key={key}
                            ><FiCheckCircle />{text}</Text>
                        ))}
                    </Stack>
                    <Stack>
                        <Stack direction="row">
                            <Heading
                                size="md"
                            >ChatGPT Plus</Heading>
                            <Heading
                                color="purple.400"
                                size="md"
                            >USD $20/mo</Heading>
                        </Stack>
                        <Button colorScheme="green">Upgrade plan</Button>
                        {[
                            "Available even when demand is high",
                            "Faster response speed",
                            "Priority access to new features"
                        ].map((text, key) => (
                            <Text
                                display="flex"
                                alignItems="center"
                                gap={2}
                                key={key}
                            ><FiCheckCircle color="#1a7f64" />{text}</Text>
                        ))}
                    </Stack>
                </Stack>
            </AccountModal> */}

            {/* <APIKeyModal
                title="API Key"
            >
                <APIKeyModalContent
                    onConfirm={handleCloseAPIKeyModal}
                />
            </APIKeyModal> */}
        </>
    );
};