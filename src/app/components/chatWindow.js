'use client';
import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Textarea, VStack, Slide } from "@chakra-ui/react";
import useismobile from "@/hooks/isMobile";
import useChating from '@/hooks/useChat';
import useIsMobile from "@/hooks/isMobile";

const ChatPlace = () => {
    const { isLoading, responses: responsesFromHook, error, chat_id, submit } = useChating();
    const [message, setMessage] = useState("");
    const [responses, setResponses] = useState({});
    const [showChatWindow, setShowChatWindow] = useState(false);
    const ismobile = useismobile();
    const pd = ismobile ? `3%` : `0.5%`;
    const mobile = useIsMobile();

    // Ref for the chat container
    const chatBoxRef = useRef();

    const toggleChatWindow = () => setShowChatWindow(!showChatWindow);

    useEffect(() => {
        if (responsesFromHook && Object.keys(responsesFromHook).length > 0) {
            setResponses(prevResponses => ({
                ...prevResponses,
                ...responsesFromHook
            }));
        }
    }, [responsesFromHook]);

    // Scroll to bottom when a new message is added
    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [responses]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        const userMessageId = `user-${Date.now()}`;
        setResponses(prevResponses => ({
            ...prevResponses,
            [userMessageId]: message
        }));

        await submit({ message, chat_id });
        setMessage("");
    };

    return (
        <VStack
            spacing={5}
            position="fixed"
            bottom="5"
            right={0}
            p={5}
            zIndex={100}
        >
            <Slide
                direction="bottom"
                in={showChatWindow}
                w={50}
                h={40}
                style={{
                    width: mobile ? '35ch': '45ch',
                    maxWidth: "sm",
                    left: '10',
                    height: '70ch',
                    padding: pd,
                    position: 'fixed'
                }}
            >
                {showChatWindow && (
                    <VStack
                        backgroundColor="wheat"
                        borderRadius="15px"
                        p={4}
                        spacing={4}
                        w="full"
                        borderWidth={3}
                        borderColor={'blue'}
                        h={'65vh'}
                    >
                        <form onSubmit={handleSendMessage} style={{ width: "small" }}>
                            <VStack spacing={5}>
                                <Box
                                    h={320}
                                    overflowY="auto"
                                    className="no-scrollbar"
                                    ref={chatBoxRef} // Attach ref to the Box for scrolling
                                >
                                    {
                                        Object.entries(responses).map(([id, response]) => (
                                            <Box
                                                backgroundColor={id.startsWith('user-') ? "#E0F7FA" : "white"}
                                                borderRadius="5px"
                                                borderStyle="solid"
                                                borderWidth="1px"
                                                borderColor="black"
                                                key={id}
                                                w={mobile ? '30ch': '40ch'}
                                                mb={5}
                                                minHeight={'20px'}
                                                p={1}
                                            >
                                                {response}
                                            </Box>
                                        ))
                                    }
                                </Box>
                                <Textarea
                                    maxWidth={'150%'}
                                    placeholder="Вы можете задать мне любой вопрос о нашей компаний"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    disabled={isLoading}
                                    color={'blue'}
                                    borderColor="black"
                                    w={mobile ? '30ch': '40ch'}
                                    sx={{
                                        '::placeholder': {
                                            color: 'blue',
                                        },
                                    }}
                                />
                                <Button
                                    type="submit"
                                    isLoading={isLoading}
                                    borderStyle={'solid'}
                                    borderWidth={2}
                                    color={'blue'}
                                    borderColor={'black'}
                                    bg={'rgb(252, 226, 114)'}
                                    _hover={{
                                        bg: "white",
                                    }}
                                >
                                    Send
                                </Button>
                            </VStack>
                        </form>
                    </VStack>
                )}
            </Slide>
            <Button onClick={toggleChatWindow}>
                {showChatWindow ? "скрыть чат" : "чат с AI"}
            </Button>
        </VStack>
    );
};

export default ChatPlace;
