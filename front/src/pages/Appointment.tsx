import { useState } from 'react';

export const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-[#5e9b9c] rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Full Name/ Anonymously Recognized Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-xl border border-gray-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-xl border border-gray-600"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-xl border border-gray-600"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-xl border border-gray-600"
        />
        <textarea
          name="message"
          placeholder="Additional details (optional)"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 rounded-xl border border-gray-600 resize-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};
