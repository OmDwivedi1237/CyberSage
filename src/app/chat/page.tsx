'use client';

import React, { useState } from 'react';
import { PlaceholdersAndVanishInput } from '@/components/placeholders-and-vanish-input';
import { TextGenerateEffect } from '@/components/text-generate-effect';

const ChatPage: React.FC = () => {
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchResponse = async (userInput: string) => {
        setLoading(true);
        try {
            const res = await fetch('/api/fetchChatResponse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userInput }),
            });
            const data = await res.json();
            setResponse(data.response);
        } catch (error) {
            console.error('Error fetching response:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="chat-container">
            <PlaceholdersAndVanishInput
                placeholders={['Type your message here...', 'Ask me anything...', 'Need help? Just type...']}
                onChange={(e) => {}}
                onSubmit={(e) => {
                    e.preventDefault();
                    fetchResponse(e.currentTarget.elements[0].value);
                }}
            />
            <div className="response">
                {loading ? 'Loading...' : <TextGenerateEffect words={response} /> }
            </div>
            <style>{`
                .chat-container {
                    padding: 20px;
                    max-width: 600px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .response {
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    background: #09090b;
                }
            `}</style>
        </div>
    );
};

export default ChatPage;
