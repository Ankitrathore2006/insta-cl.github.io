import React from 'react'
import './head.css';
import Home from './icons/Home.js';
import Instagram from './icons/Instagram.js';
import Search from './icons/Search.js';
import Explore from './icons/Explore.js';
import Reels from './icons/Reels.js';
import Message from './icons/Message.js';
import Notification from './icons/Notification.js';
import Create from './icons/Create.js';
import Thread from './icons/Thread.js';
import More from './icons/More.js';
import p from '../img/p.jpg';

export default function head() {
  return (
    <div className="hom">
            <div className="hed">
                <div className="in-hed">
                    <div>
                        <div className="ins-hed-logo">
                            <div className="_aagx">
                                <Instagram/>
                            </div>
                        </div>
                        <div className="ins-hed-nlink">
                            <ul>
                                <li className="active"><a href=""><span><Home/></span>
                                        <p>Home</p>
                                    </a></li>
                                <li><a href="/" ><span><Search/></span>
                                        <p>Search</p>
                                    </a></li>
                                <li><a href=""><span><Explore/></span>
                                        <p>Explore</p>
                                    </a></li>
                                <li><a href=""><span><Reels/></span>
                                        <p>Reels</p>
                                    </a></li>
                                <li><a href=""><span><Message/></span>
                                        <div><span>2</span></div>
                                        <p>Messages</p>
                                    </a></li>
                                <li><a href=""><span><Notification/></span>
                                        <p>Notification</p>
                                    </a></li>
                                <li><a href=""><span><Create/></span>
                                        <p>Create</p>
                                    </a></li>
                                <li><a href=""><span><img src={p} alt=""/></span>
                                        <p>Profile</p>
                                    </a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="ins-hed-bt">
                        <ul>
                            <li><a href="#"><span><Thread/></span>
                                    <p>Threads</p>
                                </a></li>
                            <li><a href="#"><span><More/></span>
                                    <p>More</p>
                                </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}
