import React from "react";
import SendButton from "../components/SendButton";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-semibold mb-10 text-center">Contact Us</h1>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border rounded-lg px-4 py-3 w-full focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email *"
            required
            className="border rounded-lg px-4 py-3 w-full focus:outline-none"
          />
        </div>

        <input
          type="tel"
          placeholder="Phone number"
          className="border rounded-lg px-4 py-3 w-full focus:outline-none"
        />

        <textarea
          rows="5"
          placeholder="Comment"
          className="border rounded-lg px-4 py-3 w-full focus:outline-none"
        ></textarea>

        <SendButton />
      </form>
    </div>
  );
};

export default Contact;
