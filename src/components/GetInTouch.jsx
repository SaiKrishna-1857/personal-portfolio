import React, { useRef, useState } from "react";
import styles from "../GetInTouch.module.css";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import emailjs from 'emailjs-com';

function GetInTouch() {
    const form = useRef();
    const [messageStatus, setMessageStatus] = useState("");
    const [error, setError] = useState("");
    const [messageCount, setMessageCount] = useState(0);

    const sendEmail = (e) => {
        e.preventDefault();

        const userName = form.current.user_name.value;
        const userEmail = form.current.user_email.value;
        const message = form.current.message.value;

        if (!userName || !userEmail || !message) {
            setError("All fields are required.");
            setMessageStatus("");
            return;
        }

        if (messageCount > 250) {
            setError("Message cannot exceed 250 words.");
            setMessageStatus("");
            return;
        }

        emailjs.sendForm(
            'service_my1tx8d', 
            'template_qi7x3tm', 
            form.current, 
            'C16O_disInA2eZgu-'
        )
        .then((result) => {
            setMessageStatus("Message sent successfully!");
            setError("");
            form.current.reset();
            setMessageCount(0);

            setTimeout(() => {
                setMessageStatus("");
            }, 3000);
        }, (error) => {
            setError("An error occurred, please try again.");
            setMessageStatus("");
        });
    };

    const handleMessageChange = (e) => {
        const words = e.target.value.trim().split(/\s+/).length;
        setMessageCount(words);
    };

    return (
        <div className={styles.contactContainer}>
            <div className={styles.socialContainer}>
                <h2>Connect with Me</h2>
                <div className={styles.socialIcons}>
                    <a href="https://www.linkedin.com/in/saikrishnas/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/SaiKrishna-1857" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/saikrishna_1857/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://x.com/SaiKrishna_1857" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="mailto:saikrishna.sangeetha@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            <div className={styles.formContainer}>
                <h2>Send a Message</h2>
                <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
                    <label>Name</label>
                    <input type="text" name="user_name" required />

                    <label>Email</label>
                    <input type="email" name="user_email" required />

                    <label>Message (Max 250 words)</label>
                    <textarea name="message" required onChange={handleMessageChange}></textarea>
                    <small className={styles.wordCount}>{messageCount} / 250 words</small>

                    {error && <div className={styles.errorAlert}>{error}</div>}
                    {messageStatus && <div className={styles.successAlert}>{messageStatus}</div>}

                    <button type="submit" className={styles.sendButton}>Send</button>
                </form>
            </div>
        </div>
    );
}

export default GetInTouch;
