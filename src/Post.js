import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import "./Post.css"

function Post({ name, desc, message, photoUrl}) {
    return (
        <div className='post'>
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{desc}</p>
                </div>
                
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption title={"Like"} Icon={ThumbUpOffAltIcon} />
                <InputOption title={"Comment"} Icon={CommentOutlinedIcon} />
                <InputOption title={"Repost"} Icon={RepeatOutlinedIcon} />
                <InputOption title={"Send"} Icon={SendOutlinedIcon} />
            </div>
        </div>
    )
}

export default Post 