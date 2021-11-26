import React from 'react';
import { Alert } from 'antd';

type variantType =
    | "success"
    | "warning"
    | "info"
    | "error";
    
interface MessageProps {
    children: React.ReactNode;
    variant?: variantType;
}

const Message: React.FunctionComponent<MessageProps> = ({
    children,
    variant
}: MessageProps) => {
    return (
        <Alert message={children} type={variant} />
    );
};

Message.defaultProps = {
    variant: 'info'
};

export default Message;
