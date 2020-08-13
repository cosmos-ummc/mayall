import React from 'react';

import './Input.css';

const Input = ({setMessage, sendMessage, message, isBlocked}) => (

   <div>
    {
        isBlocked ?
        <form className="form">
            <input
                className="input inputNone"
                type="text"
                placeholder="The chatroom is blocked!"
                disabled={true}
                value={message}
                onChange={null}
                onKeyPress={null}
            />
            <button className="sendButton" disabled={true}>Send</button>
        </form>
        :
        <form className="form">
            <input
                className="input"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={({target: {value}}) => setMessage(value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
        </form>
    }
       {/*<input*/}
       {/*    className="input"*/}
       {/*    type="text"*/}
       {/*    placeholder="Type a message..."*/}
       {/*    value={message}*/}
       {/*    onChange={({target: {value}}) => setMessage(value)}*/}
       {/*    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}*/}
       {/*/>*/}
       {/*<button className="sendButton" onClick={e => sendMessage(e)}>Send</button>*/}
   </div>


);

export default Input;
