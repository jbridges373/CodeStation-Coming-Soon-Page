import React from 'react'
import '../styles/Video.css'
import spaceVideo from '../assets/tube.mp4'
import { motion } from "framer-motion";

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255, 255, 255)",
        boxShadow: "0px 0px 8px rgb(255, 255, 255)",
        transition: {
            yoyo: Infinity,
        }
    }
}


const Video = () => {   
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>COMING SOON</h1>
                <p>Your journey to coding the World begins here.</p>
                <div>
                    <motion.button className='btn'
                        variants={buttonVariants}
                        whileHover="hover"
                        >
                      Training
                    </motion.button>
                    <motion.button className='btn btn-light'
                        variants={buttonVariants}
                        whileHover="hover"
                        >
                        Launch
                    </motion.button>
                </div>

                {/* Networking */}
                <motion.div 
                    className="networking"
                    initial={{
                        y: -200,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -400,
                        scale: 1.5,
                        opacity: [1, 0]
                    }}
                    transition={{
                        delay: 1,
                        duration: 5,
                    }}                        
                    >
                    <h2>Networking</h2>
                </motion.div>

                {/* Job Placement */}
                <motion.div 
                    className="placement"
                    initial={{
                        y: -200,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -450,
                        scale: 1.5,
                        opacity: [1, 0]
                    }}
                    transition={{
                        delay: 3,
                        duration: 7,
                    }}                        
                    >
                    <h2>Job Placement</h2>
                </motion.div>

                {/* Coding Contest */}
                <motion.div 
                    className="contest"
                    initial={{
                        y: -300,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -550,
                        scale: 1.5,
                        opacity: [1, 0]
                    }}
                    transition={{
                        delay: 6,
                        duration: 8,
                    }}                        
                    >
                    <h2>Coding Contest</h2>
                </motion.div>

                {/* React */}
                <motion.div 
                    className="react"
                    initial={{
                        y: -350,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -600,
                        scale: 1.5,
                        opacity: [1, 0]
                    }}
                    transition={{
                        delay: 9,
                        duration: 8,
                    }}                        
                    >
                    <h2>React</h2>
                </motion.div>

                {/* JavaScript */}
                <motion.div 
                    className="javascript"
                    initial={{
                        y: -400,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -650,
                        scale: 1.5,
                        opacity: [1, 0]
                    }}
                    transition={{
                        delay: 13,
                        duration: 8,
                    }}                        
                    >
                    <h2>JavaScript</h2>
                </motion.div>

                {/* CSS */}
                <motion.div 
                    className="css"
                    initial={{
                        y: -450,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -700,
                        scale: 1.5,
                        opacity: [1, 0]
                    }}
                    transition={{
                        delay: 16,
                        duration: 8,
                    }}                        
                    >
                    <h2>CSS</h2>
                </motion.div>

                {/* Tailwind */}
                <motion.div 
                    className="tailwind"
                    initial={{
                        y: -500,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -750,
                        scale: 1.5,
                        opacity: [1, 0]
                    }}
                    transition={{
                        delay: 19,
                        duration: 8,
                    }}                        
                    >
                    <h2>Tailwind</h2>
                </motion.div>

                {/* MongoDB */}
                <motion.div 
                    className="mongo"
                    initial={{
                        y: -550,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -800,
                        scale: 1.5,
                        opacity: [1, 0]
                    }}
                    transition={{
                        delay: 22,
                        duration: 8,
                    }}                        
                    >
                    <h2>MongoDB</h2>
                </motion.div>

                {/* Firebase */}
                <motion.div 
                    className="firebase"
                    initial={{
                        y: -600,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -850,
                        scale: 1.5,
                        opacity: [1, 0]
                    }}
                    transition={{
                        delay: 25,
                        duration: 8,
                    }}                        
                    >
                    <h2>Firebase</h2>
                </motion.div>                      
            </div>
        </div>
    )
}

export default Video