import { useState } from "react"

import Svg from "../UI/Svg/Svg"

const MainBot = ({ create, postMessage, getMessage }) => {

    const [myMessage, setMyMessage] = useState({ chatId: '79178231654@c.us', message: '' })

    function postNewMessage(e) {
        e.preventDefault()
        const newMessage = {
            ...myMessage,
            id: Date.now()
        }
        create(newMessage)
        postMessage(newMessage)
    }

    return (
        <div className="main__bottom">
            <Svg id='something' />
            <Svg id='message' />

            <form onSubmit={postNewMessage} >
                <input
                    value={myMessage.message}
                    onChange={e => setMyMessage({ ...myMessage, chatId: '79178231654@c.us', message: e.target.value })}
                    type="text"
                    placeholder="Send message"
                />
            </form>
            <button onClick={getMessage}>Get message</button>

        </div>
    )
}

export default MainBot