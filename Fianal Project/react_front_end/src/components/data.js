import axios from "axios";

export const messages = [
    {
        author: 'loading',
        body: '...',
        timeout: 0
    },
    {
        author: 'bot',
        body: 'Hey! Greetings for the day! ',
        timeout: 800
    },
    {
        author: 'bot',
        body: 'Hello and welcome! ',
        timeout: 1500
    },
    {
        author: 'bot',
        body: "My name is Dr. A.I.Richard and consider me as your friend. Trust me that everything we talk would be between us and I'm sure when you walk out of here, you will feel less burden on your shoulders. Okay? So let’s start with telling me about yourself.\n",
        timeout: 3000
    },
    {
        author: 'bot',
        body: 'What is your name',
        timeout: 4000
    },
    {
        author: 'bot',
        body: "???",
        timeout: 5000
    }
];

// export let responses = [];
// export const responses = [
//     [
//         'This bot is silly',
//     ],
//     [
//         'Ok here is a joke...',
//         'When Alexander Graham Bell invented the telephone he had three missed calls from Chuck Norris'
//     ],
//     [
//         'Want another? Ok last one...',
//         'Chuck Norris can win a game of Connect 4 with 3 moves'
//     ],
//     "That's all friend, good bye :)"
// ];

// export default function setResponses(input) {
//     const myVar = input.target.querySelector('input').value;
//
//     axios.post('http://localhost:5000/',myVar).then( (response) => {
//         responses.push(response);
//         console.log(responses);
//     });
//     console.log(responses);
// }

// export responses