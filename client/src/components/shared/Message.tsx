import React from 'react';

interface MessageProps {
    children: React.ReactNode;
    variant?: string;
}

const Message: React.FunctionComponent<MessageProps> = ({
    children,
    variant
}: MessageProps) => {
    return <div className="bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700">{children}</div>;
};

Message.defaultProps = {
    variant: 'info'
};

export default Message;
