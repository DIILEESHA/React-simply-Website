import React from 'react'
import '../styles/contact.css'
import cone from '../assets/l.jfif'
const Contact = () => {
    return (
        <div className="contact">
            <div className="left">
<img src={cone} alt="" />
            </div>
            <div className="right">
            <h1>Contact Us</h1>
            <form>
                <label htmlFor="name">Full Name</label>
                <input type="text" placeholder="Enter full name..." /><br/>
                <label htmlFor="email">Full Name</label>
                <input type="email" placeholder="Enter email..." />
                <label htmlFor="">Message</label>
                <textarea name="text"  cols="6" rows="5" required></textarea>
                <button type="submit">Send Message</button>

            </form>
            </div>
        </div>
        
    )
}

export default Contact
