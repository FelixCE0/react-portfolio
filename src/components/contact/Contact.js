import React, { useState } from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContactLeft from './ContactLeft'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    // Removed validation block as requested
    // NOTE: Email sending will still fail until EmailJS credentials are configured.

    // EmailJS configuration
    // Using fallback values in case fields were empty
    const templateParams = {
      from_name: username || 'Not Provided',
      from_email: email || 'Not Provided',
      to_email: 'correafelix7@gmail.com',
      phone_number: phoneNumber || 'Not Provided',
      subject: subject || 'No Subject',
      message: message || 'No Message',
    };

    // Send email using EmailJS
    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      templateParams,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // Updated success message slightly
        setSuccessMsg(`Thank you ${username || 'User'}, your message submission has been processed!`);
        setErrMsg("");
        // Clear fields regardless of initial state
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.log('FAILED...', error);
        // Keeping the original error message for consistency
        setErrMsg("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-lightText-light dark:text-lightText-dark mb-4">
            Get in Touch
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Have a question or want to work together?
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-borderColor-light dark:border-borderColor-dark bg-cardBg-light dark:bg-cardBg-dark p-6">
                <h3 className="text-xl font-semibold text-lightText-light dark:text-lightText-dark mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Email</p>
                    <p className="text-lightText-light dark:text-lightText-dark">correafelix7@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Phone</p>
                    <p className="text-lightText-light dark:text-lightText-dark">786-626-2257</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3">Social</p>
                    <div className="flex gap-4">
                      <a href="#" className="bannerIcon">
                        <FaGithub />
                      </a>
                      <a href="#" className="bannerIcon">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-borderColor-light dark:border-borderColor-dark bg-cardBg-light dark:bg-cardBg-dark p-6">
                <form className="space-y-6">
                  {errMsg && (
                    <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 text-sm">
                      {errMsg}
                    </div>
                  )}
                  {successMsg && (
                    <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/10 text-green-600 dark:text-green-400 text-sm">
                      {successMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="contactInput"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="contactInput"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="contactInput"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="contactInput"
                      placeholder="How can I help you?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="contactTextArea"
                      rows="6"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSend}
                    type="submit"
                    className="w-full bg-designColor text-white py-3 px-4 rounded-lg font-medium hover:bg-designColor/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;