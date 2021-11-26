import React from 'react';

interface MessageProps {
    children: React.ReactNode;
    variant?: string;
}

const Message: React.FunctionComponent<MessageProps> = ({
    children,
    variant
}: MessageProps) => {
    return (

        <div
            className={
                "text-white px-6 py-4 border-0 rounded relative mb-4 bg-" +
                variant +
                "-500"
            }
        >
            <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell" />
            </span>
            <span className="inline-block align-middle mr-8">
                {children}
            </span>
        </div>
    );
};

Message.defaultProps = {
    variant: 'blue'
};

export default Message;
