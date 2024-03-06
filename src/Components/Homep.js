import React from 'react'
import './Homep.css';
import profilephoto from '../img/p.jpg';
import Demophoto from '../img/5.jpg';
import PostCard from './PostCard';
import Story from './Story';

export default function Homep() {
  return (
            <div className="pag">
                <div className="d1">
                    <div className="story-show">
                        <ul>
                        {/* STORY HERE */}
                            <Story photo={profilephoto} name="anujrathor.."/>
                            
                            <Story photo={profilephoto} name="anujrathor.."/>
                            
                            <Story photo={profilephoto} name="anujrathor.."/>
                            
                            <Story photo={profilephoto} name="anujrathor.."/>
                            
                            <Story photo={profilephoto} name="anujrathor.."/>
                            
                            <Story photo={profilephoto} name="anujrathor.."/>
                            
                            <Story photo={profilephoto} name="anujrathor.."/>

                            <Story photo={profilephoto} name="anujrathor.."/>
                            
                            
                        </ul>
                    </div>
                    <div className="post">
                        <div className="post-show">

                             { /*POST HERE*/ }
                             <PostCard profileimg={profilephoto} profilename="ankitr_2506" posttime="5d" music="Original audio" post={Demophoto} likes="2,5054" posttittle="Never give up .." />
                             
                             <PostCard profileimg={profilephoto} profilename="ankitr_2506" posttime="5d" music="Original audio" post={Demophoto} likes="2,5054" posttittle="Never give up .." />

                             <PostCard profileimg={profilephoto} profilename="ankitr_2506" posttime="5d" music="Original audio" post={Demophoto} likes="2,5054" posttittle="Never give up .." />

                            

                        </div>
                    </div>
                </div>


                <div className="d2">
                    <div className="porfile-d">

                            <div>
                                <img src={profilephoto} alt=""/>
                                <div>
                                    <strong>ankit_r2508</strong>
                                    <p>Ankit Rathore</p>
                                </div>
                            </div>

                            <div className="et">
                                <a href="">Switch</a>
                            </div>

                    </div>
                    <div className="sugg">
                        <div className="sug1"><p>Suggested for you</p> <a href="">See All</a></div>
                        
                        <div className="porfile-d">
                            <div>
                                <img src={profilephoto} alt=""/>
                                <div>
                                    <strong>ankit_r2508</strong>
                                    <p>New to instagram</p>
                                </div>
                            </div>
                            <div className="et">
                                <a href="">Follow</a>
                            </div>
                        </div>
                        <div className="porfile-d">
                            <div>
                                <img src={profilephoto} alt=""/>
                                <div>
                                    <strong>ankit_r2508</strong>
                                    <p>New to instagram</p>
                                </div>
                            </div>
                            <div className="et">
                                <a href="">Follow</a>
                            </div>
                        </div>
                        <div className="porfile-d">
                            <div>
                                <img src={profilephoto} alt=""/>
                                <div>
                                    <strong>ankit_r2508</strong>
                                    <p>New to instagram</p>
                                </div>
                            </div>
                            <div className="et">
                                <a href="">Follow</a>
                            </div>
                        </div>
                        <div className="porfile-d">
                            <div>
                                <img src={profilephoto} alt=""/>
                                <div>
                                    <strong>ankit_r2508</strong>
                                    <p>New to instagram</p>
                                </div>
                            </div>
                            <div className="et">
                                <a href="">Follow</a>
                            </div>
                        </div>
                        <div className="porfile-d">
                            <div>
                                <img src={profilephoto} alt=""/>
                                <div>
                                    <strong>ankit_r2508</strong>
                                    <p>New to instagram</p>
                                </div>
                            </div>
                            <div className="et">
                                <a href="">Follow</a>
                            </div>
                        </div>
                        
                        <div className="text1">
                            <span>© 2024 Instagram from Meta</span>
                        </div>
                    </div>

                </div>
            </div>
  )
}
