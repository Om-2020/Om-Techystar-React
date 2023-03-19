import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"


function Home() {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>TechStarOm</h1>
                    <p>Solution to all your problems</p>
                </main>

            </div>

            <div className="home2">
                <img src={vg} alt="Graphics"></img>
                <div>
                    <p>
                        We are your one and only solution to the  tech problems you face
                        every day. We are leading tech company whose aim is to solve
                        problem whose facing daily in technology.
                    </p>
                </div>

            </div>
            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>My name is Om Prakash Bharti, I am fullstack developer and Competitive Programmer.
                        I have solved 700 problems on various coding platforms and 5 star in SQL at Hackerrank.
                        I love problem solving.
                    </p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{animationDelay:"0.3s"}}>
                            <AiFillGoogleCircle/>
                            <p>Google</p>
                        </div>

                        <div style={{ animationDelay: "0.5s" }}>
                            <AiFillAmazonCircle/>
                            <p>Amazon</p>
                          
                        </div>

                        <div style={{ animationDelay: "0.7s" }}>
                            <AiFillYoutube/>
                            <p>Youtube</p>
                            
                        </div>

                        <div style={{ animationDelay: "0.1s" }}>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                            
                        </div>


                    </article>
                </div>

            </div>

        </>
    )
};

export default Home;