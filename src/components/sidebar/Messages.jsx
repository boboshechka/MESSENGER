import Image from "../UI/Image/Image"

const Messages = () => {
    return (
        <div className="message">
            <Image className="message-avatar circle" width={55} height={55} />
            <div className="message__content">
                <h4 className="message__content-name">Damir</h4>
                <p className="message__content-text">Lorem ipsum dolor sit amet</p>
            </div>

            <div className="message__info">
                <h4 className="message__date">14:08</h4>
                <p className="message__count">1</p>
            </div>
        </div>
    )
}

export default Messages