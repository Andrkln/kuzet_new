'use client'
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Box, Button, Textarea, VStack, Slide } from "@chakra-ui/react";
import useismobile from "@/hooks/isMobile";
import useChating from '@/hooks/useChat';
import useIsMobile from "@/hooks/isMobile";

const ChatPlace = () => {
    const { isLoading, responses: responsesFromHook, error, chat_id, submit } = useChating();
    const [message, setMessage] = useState("");
    const [responses, setResponses] = useState({greetins: 'Привет! Я — Эрик, ваш персональный помощник из компании «Кузет Стандарт». Я помогу с любыми вопросами, связанными с нашей охраной — от проверки доступности услуг по вашему адресу до подбора оборудования. Если вы захотите стать нашим клиентом, я также смогу помочь с оформлением договора.'});
    const [showChatWindow, setShowChatWindow] = useState(false);
    const ismobile = useismobile();
    const pd = ismobile ? `3%` : `0.5%`;
    const mobile = useIsMobile();
    const id = 0

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
    }, [responses])    

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
            suppressHydrationWarning
        >
            <Slide
                direction="bottom"
                in={showChatWindow}
                position={'fixed'}
                style={{
                    width: mobile ? '35ch' : '45ch',
                    maxWidth: "sm",
                    height: mobile ? '80vh' : '77vh',
                    padding: pd,
                    position: 'fixed',
                    left: mobile ? '20' : '10',
                }}
            >
                {showChatWindow && (
                    <VStack
                        backgroundColor="rgb(250, 226, 120)"
                        borderRadius="15px"
                        p={4}
                        spacing={4}
                        w={ mobile ? '35ch' : '100%'}
                        borderWidth={3}
                        borderColor={'black'}
                    >
                        <form onSubmit={handleSendMessage} style={{ width: "small" }}>
                            <VStack spacing={5}>
                                <Box
                                    minHeight={'40vh'}
                                    overflowY="auto"
                                    className="no-scrollbar"
                                    ref={chatBoxRef}
                                    h={'40vh'}
                                    maxHeight={'65vh'}
                                >
                                    {
                                        Object.entries(responses).map(([id, response]) => (
                                            <Box
                                                backgroundColor={id.startsWith('user-') ? "#62c0ff" : "white"}
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
                                        ))
                                    }
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
                                    placeholder="Вы можете задать мне любой вопрос о нашей компаний"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    disabled={isLoading}
                                    color={'black'}
                                    borderColor="black"
                                    w={mobile ? '90%' : '40ch'}
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
                                    color={'black)'}
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
            <Button onClick={toggleChatWindow}
            fontSize={'bold'}
            >
                {showChatWindow ? "скрыть чат" : "чат с AI"}
            </Button>
        </VStack>
    );
};

export default ChatPlace;
