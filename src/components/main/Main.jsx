import { useEffect, useState } from 'react'

import { MessageContext } from '../../context/messageContext'

import MainBot from './MainBot'
import MainCenter from './MainCenter'
import MainTop from './MainTop'

const Main = () => {

    const [messages, setMessages] = useState([])
    const [getMessages, setGetMessages] = useState([])

    useEffect(() => {
        getMessage()
    }, [])

    const createMessage = (newMessage) => {
        setMessages([...messages, newMessage])
    }

    const getMessage = () => {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch('https://api.green-api.com/waInstance1101821072/receiveNotification/d8e7f366b4f84cf3b3d1ed9ba9742a9072dd03415a494e8ba4', requestOptions)
            .then(result => result.json())
            .then(data => {
                setGetMessages([...getMessages, data])
            }
            )
            .catch(error => console.log('error', error));
    }

    const postMessage = (message) => {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(message),
            redirect: 'follow'
        };


        fetch('https://api.green-api.com/waInstance1101821072/sendMessage/d8e7f366b4f84cf3b3d1ed9ba9742a9072dd03415a494e8ba4', requestOptions)
            .then(result => result.json())
            .then(data => console.log('post', data))
            .catch(error => console.log('error', error))
    }

    return (
        <MessageContext.Provider value={{
            messages,
            getMessages
        }}>
            <div className='main'>
                <MainTop />
                <MainCenter />
                <MainBot create={createMessage} postMessage={postMessage} getMessage={getMessage} />
            </div>
        </MessageContext.Provider>
    )
}

export default Main

