import React from "react";
import { Button, InputGroup, Input } from "@chakra-ui/react";

// newMessage={newMessage} setNewMessage={setNewMessage} sendMessage={handleNewMessage} />

const ChatForm = ({ newMessage, questions, anwsers, setNewMessage, sendMessage }) => {
    return (
        <InputGroup mt={4}>
            <datalist id="answers">
                {questions.map((item, index) => (
                    <option key={index} value={item} />
                ))}
            </datalist>
            <Input
                list="answers"
                placeholder="Digite sua mensagem"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        sendMessage();
                    }
                }}
            />
            <Button
                colorScheme="yellow"
                onClick={() => {
                    sendMessage();
                }}
                ml={2}
            >
                Enviar
            </Button>
        </InputGroup>
    );
};

export default ChatForm;
