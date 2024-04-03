import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import './Post.css';

export default function PostPage() {
    const location = useLocation();
    const { title, content, image } = location.state || {};

    return (
        <div>
            <Navbar></Navbar>
            <h1 className='title'>Review</h1>
            <div className='postContainer'>
                {image && (
                    <div className='postWrapper'>
                        <img src={image} alt="Food" className='postImage' />
                        <div className='postDetails'>
                            <h1 className='postTitle'>{title}</h1>
                            <div className='postContent'>
                                <p>{content}</p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>

    );
}
