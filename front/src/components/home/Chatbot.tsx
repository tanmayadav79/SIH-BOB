import { useState } from 'react';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-15 right-3 z-50 bg-black text-white p-4 rounded-full shadow-lg"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="fixed bottom-25 right-2 w-80 h-80 bg-[#567a7f] rounded-lg shadow-lg z-50 flex flex-col">
          <header className="bg-black text-white p-4 rounded-t-lg font-bold">
            Chat with BOB Bot
          </header>
          <div className="flex-1 p-4 overflow-auto">
            <p className="text-black">Hello! How can we help you today?</p>
          </div>
          <footer className="p-4 flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border border-gray-700 rounded-xl px-3 py-2 focus:outline-none"
            />
            <button className="bg-white text-black font-semibold px-4 rounded-xl ml-2 hover:bg-blue-700">
              Send
            </button>
          </footer>
        </div>
      )}
    </>
  );
};
