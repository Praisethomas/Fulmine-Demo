// Contact.js
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9wb57po', 'template_f7pc349', form.current, {
        publicKey: 'SLyDRy3AdqUuHoAjt',
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact-section"> {/* Added className */}
      <div className="container">
        <h2 className="--text-center">CONTACT US</h2>
        <form ref={form} onSubmit={sendEmail} className="--form-control --card --flex-center --dir-column">
          <label>NAME:</label>
          <input type="text" name="user_name" required /><br /><br></br>
          <label>EMAIL:</label>
          <input type="email" name="user_email" required /><br /><br></br>
          <label>SUBJECT:</label>
          <input type="text" name="subject" required /><br /><br /><br></br>
          <label>DETAILS:</label>
          <textarea name="message" cols="30" rows="10"></textarea><br /><br /><br />
          <button type="submit" className="--btn --btn-primary">send message</button><br />
        </form>
      </div>
      <footer>Fulmine</footer>
    </section>
  );
};

export default Contact;
