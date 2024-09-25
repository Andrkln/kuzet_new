'use client';
import { useState } from 'react';

const useChating = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [responses, setResponses] = useState({});
    const [error, setError] = useState(null);
    const [chat_id, setChatId] = useState(null);

    const submitChat = async (ChatData) => {
        setIsLoading(true);
        setError(null);
        setResponses({});

        try {
            const fetchResponse = await fetch('/api/chating', {
                method: 'POST',
                body: JSON.stringify(ChatData),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            if (!fetchResponse.ok) {
                throw new Error('Failed to get response from the server');
            }

            const reader = fetchResponse.body.getReader();
            const decoder = new TextDecoder();
            let incompleteChunk = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                const preChunkStr = decoder.decode(value);
                const preChunks = (incompleteChunk + preChunkStr).split('\n');
                incompleteChunk = preChunks.pop();
                for (let preChunk of preChunks) {
                    if (!preChunk.trim()) continue;

                    try {
                        const chunk = JSON.parse(preChunk);
                        if (chunk.chat_id) {
                            setChatId(chunk.chat_id);
                        }
                        if (chunk.id && chunk.message) {

                            setResponses(prevResponses => ({
                                ...prevResponses,
                                [chunk.id]: (prevResponses[chunk.id] || '') + chunk.message
                            }));
                        }
                    } catch (error) {
                        console.error("Error parsing chunk to JSON", error, "Chunk was:", preChunk);
                    }
                }
            }

            if (incompleteChunk) {
                try {
                    console.log('Incomplete chunk:', incompleteChunk);
                    const chunk = JSON.parse(incompleteChunk);
                    if (chunk.chat_id) {
                        setChatId(chunk.chat_id);
                    }
                    if (chunk.id && chunk.message) {
                        setResponses(prevResponses => ({
                            ...prevResponses,
                            [chunk.id]: (prevResponses[chunk.id] || '') + chunk.message
                        }));
                    }
                } catch (error) {
                    console.error("Error parsing remaining chunk to JSON", error, "Chunk was:", incompleteChunk);
                }
            }

        } catch (fetchError) {
            console.error('Error during fetch:', fetchError);
            setError(fetchError.toString());
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, responses, error, chat_id, submit: submitChat };
};

export default useChating;
