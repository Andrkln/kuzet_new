'use client'
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Box, Button, Textarea, VStack, Slide } from "@chakra-ui/react";
import useIsMobile from "@/hooks/isMobile";
import useChating from '@/hooks/useChat';

const ChatPlace = () => {
    const { isLoading, responses: responsesFromHook, error, chat_id, submit } = useChating();
    const [message, setMessage] = useState("");
    const [responses, setResponses] = useState({
        bot_0: 'Привет! Я — Эрик, ваш персональный помощник из компании «Кузет Стандарт». Я помогу с любыми вопросами, связанными с нашей охраной — от проверки доступности услуг по вашему адресу до подбора оборудования. Если вы захотите стать нашим клиентом, я также смогу помочь с оформлением договора.'
    });
    const [showChatWindow, setShowChatWindow] = useState(false);
    const [messageId, setMessageId] = useState(1); // Message counter
    const isMobile = useIsMobile();
    const pd = isMobile ? `3%` : `0.5%`;

    const chatBoxRef = useRef();
    const textareaRef = useRef();

    const toggleChatWindow = () => setShowChatWindow(!showChatWindow);

    useEffect(() => {
        if (responsesFromHook && Object.keys(responsesFromHook).length > 0) {
            setResponses(prevResponses => ({
                ...prevResponses,
                ...responsesFromHook
            }));
        }
    }, [responsesFromHook]);

    useLayoutEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [responses]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        const userMessageId = `user_${messageId}`;
        const botMessageId = `bot_${messageId}`;

        setResponses(prevResponses => ({
            ...prevResponses,
            [userMessageId]: message
        }));

        setMessageId(prevId => prevId + 1);

        setMessage("");

        try {
            const response = await submit({ message, chat_id });
            if (response) {
                setResponses(prevResponses => ({
                    ...prevResponses,
                    [botMessageId]: response
                }));
            }
        } catch (err) {
            console.error("Error sending message:", err);
        }
    };

    return (
        <VStack
            spacing={5}
            bottom="5"
            right={0}
            p={5}
            zIndex={100}
            position={'fixed'}
            display={'flex'}
            align={'center'}
            justify={'center'}
        >
            <Slide
                direction="bottom"
                in={showChatWindow}
                style={{
                    maxWidth: "sm",
                    height: isMobile ? '80vh' : '77vh',
                    padding: pd,
                }}
            >
                {showChatWindow && (
                    <VStack
                        backgroundColor="rgb(250, 226, 120)"
                        borderRadius="15px"
                        p={4}
                        spacing={4}
                        w={['35ch', '45ch']}
                        borderWidth={3}
                        borderColor={'black'}
                        position={'absolute'}
                        right={0}
                        mr={'1ch'}
                        mt={[-2, -10]}
                    >
                        <form onSubmit={handleSendMessage} style={{ width: "100%" }}>
                            <VStack spacing={5}>
                                <Box
                                    minHeight={'40vh'}
                                    overflowY="auto"
                                    className="no-scrollbar"
                                    ref={chatBoxRef}
                                    h={'40vh'}
                                    maxHeight={'65vh'}
                                    w={'100%'}
                                >
                                    {Object.entries(responses).map(([id, response]) => (
                                        <Box
                                            backgroundColor={id.startsWith('user') ? "#62c0ff" : "white"}
                                            borderRadius="5px"
                                            borderStyle="solid"
                                            borderWidth="1px"
                                            borderColor="black"
                                            key={id}
                                            w={'100%'}
                                            mt={5}
                                            minHeight={'20px'}
                                            p={1}
                                        >
                                            {response}
                                        </Box>
                                    ))}
                                </Box>
                                <Textarea
                                    ref={textareaRef}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSendMessage(e);
                                        }
                                    }}
                                    maxWidth={'150%'}
                                    placeholder="Вы можете задать мне любой вопрос о нашей компании"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    disabled={isLoading}
                                    color={'black'}
                                    borderColor="black"
                                    w={isMobile ? '90%' : '40ch'}
                                    sx={{
                                        '::placeholder': {
                                            color: 'rgb(95, 94, 94)',
                                        },
                                    }}
                                />
                                <Button
                                    type="submit"
                                    isLoading={isLoading}
                                    borderStyle={'solid'}
                                    borderWidth={2}
                                    color={'black'}
                                    borderColor={'black'}
                                    bg={'rgb(252, 226, 114)'}
                                    _hover={{
                                        bg: "white",
                                    }}
                                >
                                    Отправить
                                </Button>
                            </VStack>
                        </form>
                    </VStack>
                )}
            </Slide>
            <Button onClick={toggleChatWindow} fontSize={'bold'}>
                {showChatWindow ? "Скрыть чат" : "Чат с AI"}
            </Button>
        </VStack>
    );
};

export default ChatPlace;
