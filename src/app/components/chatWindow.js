'use client';
import React, { useState, useEffect } from "react";
import { Box, Button, Textarea, VStack, Slide } from "@chakra-ui/react";
import useismobile from "@/hooks/isMobile";
import useChating from '@/hooks/useChat';

const ChatPlace = () => {
    const { isLoading, responses: responsesFromHook, error, chat_id, submit } = useChating();
    const [message, setMessage] = useState("");
    const [responses, setResponses] = useState({});
    const [showChatWindow, setShowChatWindow] = useState(false);
    const ismobile = useismobile();
    const pd = ismobile ? `3%` : `0.5%`;

    const toggleChatWindow = () => setShowChatWindow(!showChatWindow);

    useEffect(() => {
        if (responsesFromHook && Object.keys(responsesFromHook).length > 0) {
            setResponses(prevResponses => ({
                ...prevResponses,
                ...responsesFromHook
            }));
        }
    }, [responsesFromHook]);

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
                style={{
                    width: "30ch",
                    maxWidth: "sm",
                    left: '10',
                    height: '48ch',
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
                    >
                        <form onSubmit={handleSendMessage} style={{ width: "small" }}>
                            <VStack spacing={5}>
                                <Box h="120px" overflowY="auto" className="no-scrollbar">
                                    {
                                        Object.entries(responses).map(([id, response]) => (
                                            <Box
                                                backgroundColor={id.startsWith('user-') ? "#E0F7FA" : "white"}
                                                borderRadius="5px"
                                                borderStyle="solid"
                                                borderWidth="1px"
                                                borderColor="black"
                                                key={id}
                                                w={'25ch'}
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
                                    maxWidth={60}
                                    placeholder="Вы можете задать мне любой вопрос о кузет коргау"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    disabled={isLoading}
                                    color={'blue'}
                                    borderColor="black"
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
