import React, { useState, useEffect } from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EventIcon from '@mui/icons-material/Event';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import InputOption from './InputOption';
import Post from './Post';
import { db } from "./firebase"
import firebase from "firebase/compat/app"

function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        ))
    }, []);


    const sendPosts = (e) => {
        e.preventDefault();
        db.collection("posts").add(
            {
                name: "Elon Musk",
                desc: "Tesla | SpaceX | Starlink",
                message: input,
                photoUrl: "",
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }
        )
        setInput("");
    };

    return (
        <div className='feed'>
            <div className="feed__postContainer">
                <div className="createPost">
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                        <button
                            onClick={sendPosts} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__Options">
                    <InputOption title={"Photo"} Icon={InsertPhotoIcon} color={"#368FE8"} />
                    <InputOption title={"Video"} Icon={YouTubeIcon} color={"#5E9B40"} />
                    <InputOption title={"Audio Event"} Icon={EventIcon} color={"#C27C16"} />
                    <InputOption title={"Write Article"} Icon={NewspaperIcon} color={"E16745"} />
                </div>
            </div>

            {posts.map(({ id, data: { name, message, desc, photoUrl, } }) => (
                <Post
                    key={id}
                    name={name}
                    desc={desc}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}

        </div>
    )
}

export default Feed