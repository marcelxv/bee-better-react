import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function ChatbotCTA() {
  return (
    <div style={{ position: 'fixed', bottom: '0', right: '0', margin: '1rem' }}>
        <Link to="/bill">
            <Button>
                Chatbot
            </Button>
        </Link>
    </div>
  );
}

export default ChatbotCTA;
