import React from 'react'
import '../styles/Navbar.css'
import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";

const Navbar = () => {    

    return (
        <div className="logo">
           <motion.div
                initial={{ x: -450 }}
                animate={{ x: 1600}}
                transition={{ delay: 0, duration: 20, loop: Infinity }}                
                >
           <img src={Logo} alt='Logo Image' style={{ width: '400px' }} />
           </motion.div>           
        </div>
    )
}

export default Navbar