import React, {useState, useEffect, useRef} from "react";
import Message from './Message';
import SendMessage from './SendMessage';
import {db} from '../firebase';
import {query, collection, orderBy, onSnapshot} from 'firebase/firestore';

const style = {
    main: `flex flex-col p-[10px] `,
    loading: `text-center text-gray-500 mt-4`
};

const Chat = () => {
    const [messages, setMessages]= useState([]);
    const [loading, setLoading] = useState(true);
    const scroll = useRef();

    useEffect(()=> {
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot)=>{
            let messages = [];
            querySnapshot.forEach((doc)=> {
                messages.push({...doc.data(), id: doc.id});
            });
            setMessages(messages)
            setLoading(false);
        });
        return () => unsubscribe()
    },[]);


    useEffect(() => {
        if (scroll.current) {
            scroll.current.scrollIntoView({ behavior: 'smooth' }); 
        }
    }, [messages]);

    return (
        <>
            <main className={style.main}>
                {loading ? (
                    <p className={style.loading}>Loading messages...</p> 
                ) : (
                    messages.map((message) => (
                        <Message key={message.id} message={message} />
                    ))
                )}
                <span ref={scroll}></span>
            </main>
            {/* Send message Component*/}
            <SendMessage scroll={scroll} />
        </>
    );
};

export default Chat
