import React from 'react';
import { Button } from '@mui/material';
import { Message } from '@mui/icons-material'; // Import Icon tin nhắn
import './ButtonChat.css';

const ButtonChat = ({ children, link }) => {
    return (
        <Button
            classes={{ root:'button-chat' }}
            
            variant="contained"
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Message />} // Thêm Icon vào đầu nút
        >
            {/* Bọc text vào span để dễ ẩn khi responsive */}
            <span className="chat-text">{children}</span>
        </Button>
    );
};

export default ButtonChat;