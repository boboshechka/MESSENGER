import { useContext } from "react"

import { MessageContext } from "../../context/messageContext"

const MainCenter = () => {
    const { messages, getMessages } = useContext(MessageContext)

    return (
        <div className="main__center">
            <div >
                {getMessages && getMessages.map(gm =>
                    <div key={gm.body.idMessage} className="main__center-interviewer" >{gm.body.idMessage} - принятое сообщение</div>
                )}
            </div>
            <div>
                {messages && messages.map(m =>
                    <div key={m.id} className="main__center-our">{m.message} - отправленное сообщение</div>
                )}
            </div>
        </div>
    )
}

export default MainCenter