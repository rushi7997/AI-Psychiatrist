import React, { Component } from 'react';
import Message from './Layout/Message';
import { messages } from './data';
import './new.css';

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

// our component to render
class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            response: [],
            index: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demo = this.demo.bind(this);
        this.mockReply = this.mockReply.bind(this);
        this.addResponse = this.addResponse.bind(this);
    }

    componentDidMount() {
        this.demo();
    }

    addResponse(e){
        let myVar = {
            message: e
        };
        console.log(myVar);
        this.mySocketEmit(myVar);
    }

    mySocketResponse(){
        if(this.state.response[this.state.index-1] === this.state.response[this.state.index-2]) {
            socket.on('reply', (myRes) =>{
                    console.log("BVM");
                    this.setState({
                        response: [...this.state.response, myRes]
                    });
                    this.mockReply();
                }
            );
        }
    }

    mySocketEmit (clientResposne){
        socket.emit('client',clientResposne);
    }

    demo() {
        this.setState({
            messages: []
        });
        messages.map((item, index) => {
            setTimeout(() => this.addMessage(item), item.timeout);
        });

        setTimeout(() => {
            this.setState({
                messages: this.state.messages.slice(1, this.state.messages.length)
            });
        }, 700);
    }

    addMessage(item) {
        this.setState({
            messages: [...this.state.messages, item]
        });

        setTimeout(() => {
            const items = document.querySelectorAll('li');
            const lastItem = items[items.length - 1];
            document.querySelector('.c-chat__list').scrollTop = lastItem.offsetTop + lastItem.style.height;
        }, 100);
    }

    handleSubmit(e) {

        e.preventDefault();

        const ans = e.target.querySelector('input').value;

        const item = {
            author: 'human',
            body: ans
        };
        this.addMessage(item);
        // mock a reply
        this.addResponse(ans);

        this.mySocketResponse();
        console.log(this.state.messages);

        e.target.reset();
    };

    mockReply() {

        console.log(this.state.index);

        let response;
        const nextResponseIndex = this.state.index + 1;

        if (this.state.index === 0) {
            response = this.state.response[this.state.index];
        } else {
            if (this.state.response[nextResponseIndex - 1])
                response = this.state.response[nextResponseIndex - 1];
        }

        if (response) {
            this.setState({
                index: nextResponseIndex
            });
            console.log(this.state.index);

            if (Array.isArray(response)) {
                response.map((item, index) => {
                    setTimeout(
                        () => this.addMessage({ author: 'bot', body: item }),
                        600 + 500 * index
                    );
                });
            } else {
                setTimeout(
                    () => this.addMessage({ author: 'bot', body: response }),
                    600
                );
            }
        }
    };

    render() {
        let cssClass = 'c-chat';

        if (this.state.messages.length > 4) {
            cssClass += ' c-chat--ready';
        }

        // document.querySelector('input').focus();
        if (this.state.messages.length === 1) {
            document.querySelector('input').focus();
        }


        return (
            <div className={cssClass}>
                <ul className="c-chat__list">
                    {this.state.messages.map((message, index) => (
                        <Message key={index} data={message} />
                    ))}
                </ul>
                <form className="c-chat__input" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="input"
                        placeholder="Type your message here..."
                        autoFocus
                        autoComplete="off"
                        required
                    />
                </form>
            </div>
        );
    }
}

export default Chat;