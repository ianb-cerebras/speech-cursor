import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl text-gray-800 mb-8">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg text-gray-700 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-4">
              Feel free to reach out if you have any questions or would like to discuss potential opportunities.
            </p>
            <div className="space-y-2 text-gray-600">
              <p>Email: contact@example.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>LinkedIn: linkedin.com/in/example</p>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm mb-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
