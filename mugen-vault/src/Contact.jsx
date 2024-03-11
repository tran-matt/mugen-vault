import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h8iika6', 'template_qnr7pxw', form.current, 'LV9RL1SeHhQpzegjl')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
      });

    e.target.reset();
  };

  return (
    <div className="contact-container p-50 mx-auto max-w-lg">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full border-2 p-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full border-2 p-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-lg mb-2">Subject</label>
          <input type="text" id="subject" name="subject" className="w-full border-2 p-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg mb-2">Message</label>
          <textarea id="message" name="message" rows="5" className="w-full border-2 p-2" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
      </form>
    </div>
  );
}

export default Contact;
