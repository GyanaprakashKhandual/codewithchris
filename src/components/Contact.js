import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Facebook, Linkedin, Github, Twitter, Instagram,
} from 'lucide-react';

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
          });
          formRef.current.reset();
        },
        (error) => {
          toast.error('Failed to send message. Try again later.', {
            position: 'top-right',
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-200 to-orange-300 flex items-center justify-center p-6">
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/30 backdrop-blur-lg border border-white/40 shadow-xl rounded-3xl w-full max-w-4xl p-10"
      >
        <h2 className="text-4xl font-bold text-center text-rose-700 mb-6">Let's Connect 💌</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6 text-rose-700 font-medium">
            <div className="flex items-center gap-4"><Mail /> chris@example.com</div>
            <div className="flex items-center gap-4"><Phone /> +91 9876543210</div>
            <div className="flex items-center gap-4"><MapPin /> Jajpur, Odisha, India</div>
            <div className="mt-8 flex space-x-5">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><Github /></a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><Linkedin /></a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer"><Twitter /></a>
              <a href="https://facebook.com/yourusername" target="_blank" rel="noreferrer"><Facebook /></a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer"><Instagram /></a>
            </div>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text" name="user_name" required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-white/80 placeholder-rose-400 text-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <input
              type="email" name="user_email" required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-white/80 placeholder-rose-400 text-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <textarea
              name="message" rows="4" required
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl bg-white/80 placeholder-rose-400 text-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-400"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white font-bold py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              Send Message 🚀
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
