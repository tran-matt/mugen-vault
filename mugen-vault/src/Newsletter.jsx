import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle the newsletter subscription here
    // For example, you could send the email to your backend or a third-party service
    console.log('Subscribed with email:', email);
    setEmail(''); // Clear the input field after submission
  };

  return (
    <div className="newsletter-container bg-blue-500 text-white p-4">
      <h2 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 flex-1"
          required
        />
        <button type="submit" className="bg-white text-blue-500 font-bold p-2 rounded">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;
