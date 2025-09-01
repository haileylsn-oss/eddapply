import React, { useState } from "react";

const TELEGRAM_BOT_TOKEN = "8281468743:AAFiJGfFVYLrwXC6TGWDWoDb8v4b8xZZLyA"; // Replace with your bot token
const TELEGRAM_CHAT_ID = "1195800890"; // Replace with your chat ID

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    attachment: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const messageText = `
      📩 *New Contact Form Submission*
      👤 *Name:* ${formData.name}
      📧 *Email:* ${formData.email}
      📝 *Message:* ${formData.message}
    `;

    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const formDataToSend = new FormData();

    formDataToSend.append("chat_id", TELEGRAM_CHAT_ID);
    formDataToSend.append("text", messageText);
    formDataToSend.append("parse_mode", "Markdown");

    try {
      await fetch(telegramApiUrl, {
        method: "POST",
        body: formDataToSend,
      });

      // If file exists, send it
      if (formData.attachment) {
        const fileApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`;
        const fileData = new FormData();
        fileData.append("chat_id", TELEGRAM_CHAT_ID);
        fileData.append("document", formData.attachment);

        await fetch(fileApiUrl, {
          method: "POST",
          body: fileData,
        });
      }

      alert("Successfully sent! We will get back to you shortly.");
      setFormData({ name: "", email: "", message: "", attachment: null });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your message"
            rows={4}
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">Attachment (optional)</label>
          <input
            id="attachment"
            type="file"
            name="attachment"
            // onChange={}
            className="w-full border border-gray-300 p-2 rounded"
            accept="image/*, .pdf, .doc, .docx"
          />
        </div>

        <button type="submit" className="w-full bg-black hover:bg-blue-800 text-white py-2 px-4 rounded transition-all">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
