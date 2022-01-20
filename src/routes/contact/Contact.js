import React, { useRef, useState } from 'react'
import styles from "./styles.module.css"
import image18 from "../../images/18.PNG"
import { send } from 'emailjs-com'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Contact = () => {
    const MySwal = withReactContent(Swal)

    const [toSend, setToSend] = useState({
        from_name: '',
        reply_to: '',
        message: '',
        subject: ''
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const form = useRef()


    const sendEmail = (e) => {
        e.preventDefault();
        send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            toSend, 
            process.env.REACT_APP_EMAILJS_USER_ID,)
          .then((result) => {
              setToSend({
                from_name: '',
                reply_to: '',
                message: '',
                subject: ''
              })
              MySwal.fire({
                title: 'Message Has Been Successfully Sent!',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <>
      <div className={styles.relative}>
          <img src={image18}/>
          <div className={styles.title}>Contact Me</div>
      </div>
      <div className={styles.someText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo at metus 
          in efficitur. Nunc sit amet pretium urna, vel vehicula dui. Etiam sed dui vel nisl porta 
          tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed a lacus lectus. 
          Cras convallis, dolor ac posuere ultrices, ligula leo iaculis ipsum, imperdiet fringilla 
          sem lacus vitae arcu.
      </div>
      <div className={styles.someBigText}>
          Aenean Lacus Leo
      </div>
      <div className={styles.someText}>
          Maecenas consequat ultrices libero. Nunc nec mi orci. Sed iaculis, mauris et volutpat 
          finibus, turpis massa tincidunt enim, quis rutrum nunc odio vel velit. Aliquam dignissim 
          metus diam, eget elementum turpis tempor nec.
      </div>
      <form onSubmit={sendEmail} ref={form} className={styles.form} >
          <label htmlFor="from_name">Your Name (required)</label>
          <input value={toSend.from_name} onChange={handleChange} type="text" name="from_name" required />
          <label htmlFor="reply_to">Your Email (required)</label>
          <input value={toSend.reply_to} onChange={handleChange} type="email" name="reply_to" required />
          <label htmlFor="subject">Subject</label>
          <input value={toSend.subject} onChange={handleChange} type="text" name="subject" />
          <label htmlFor="message">Your Message</label>
          <textarea value={toSend.message} onChange={handleChange} cols="40" rows="10" name="message" />
          <button className={styles.button} type="submit">SEND</button>
      </form>
  </>
)
};

export default Contact;
