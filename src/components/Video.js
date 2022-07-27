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
                <motion.h1 
                    animate={{
                        opacity: 0,
                    }}
                >
                    COMING SOON
                </motion.h1>
                <motion.p
                    animate={{
                        opacity: 0,
                    }}
                >
                    Your journey to coding the World begins here.
                </motion.p>
                <div>
                    <motion.button className='btn'
                        variants={buttonVariants}
                        whileHover="hover"
                        animate={{
                            opacity: 0,
                        }}
                        >
                      Training
                    </motion.button>
                    <motion.button className='btn btn-light'
                        variants={buttonVariants}
                        whileHover="hover"
                        animate={{
                            opacity: 0,
                        }}
                        >
                        Launch
                    </motion.button>
                </div>

                {/* Networking */}
                <motion.div 
                    className="networking"
                    initial={{
                        y: -120,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -150,
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
                        y: -180,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -210,
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
                        y: -240,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -265,
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
                        y: -295,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -320,
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
                        y: -355,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -380,
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
                        y: -410,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -430,
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
                        y: -470,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -495,
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
                        y: -530,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -550,
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
                        y: -580,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -605,
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

                {/* HTML */}
                <motion.div 
                    className="html"
                    initial={{
                        y: -640,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -670,
                        scale: 1.5,
                        opacity: [1, 0]
                    }}
                    transition={{
                        delay: 28,
                        duration: 8,
                    }}                        
                    >
                    <h2>HTML</h2>
                </motion.div> 

                {/* Animation */}
                <motion.div 
                    className="animation"
                    initial={{
                        y: -705,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -720,
                        scale: 1.5,
                        opacity: [1, 0]
                    }}
                    transition={{
                        delay: 32,
                        duration: 8,
                    }}                        
                    >
                    <h2>Animation</h2>
                </motion.div>

                {/* AWS */}
                <motion.div 
                    className="aws"
                    initial={{
                        y: -765,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -775,
                        scale: 1.5,
                        opacity: [1, 0]
                    }}
                    transition={{
                        delay: 36,
                        duration: 8,
                    }}                        
                    >
                    <h2>AWS</h2>
                </motion.div> 

                {/* MySQL */}
                <motion.div 
                    className="mysql"
                    initial={{
                        y: -820,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -840,
                        scale: 1.5,
                        opacity: [1, 0]
                    }}
                    transition={{
                        delay: 39,
                        duration: 8,
                    }}                        
                    >
                    <h2>MySQL</h2>
                </motion.div>

                {/* Python */}
                <motion.div 
                    className="python"
                    initial={{
                        y: -870,
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: -900,
                        scale: 1.5,
                        opacity: [1, 0]
                    }}
                    transition={{
                        delay: 44,
                        duration: 8,
                    }}                        
                    >
                    <h2>Python</h2>
                </motion.div>                          
            </div>
        </div>
    )
}

export default Video