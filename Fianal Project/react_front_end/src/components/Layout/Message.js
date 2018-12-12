import React from 'react';

const Message = props => {
    const { id, author, body } = props.data;

    let finalBody;

    if (Array.isArray(body)) {
        finalBody = body.map((item, index) => {
            return (
                <a
            href={item.url}
            className="c-chat__action"
            key={index}
            target="_blank"
                >
                {item.text}
        </a>
        );
        });
    } else {
        if (author === 'bot') {
            finalBody = (
                <div
            className="c-chat__message"
            dangerouslySetInnerHTML={{ __html: body }}
            />
        );
        } else {
            finalBody = <div className="c-chat__message">{body}</div>;
        }
    }

    return (
        <li className={'c-chat__item c-chat__item--' + author}>{finalBody}</li>
);
};

export default Message;
