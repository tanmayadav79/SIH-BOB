import { FaDiscord } from "react-icons/fa";

export const OnlineCommunity = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#567a7f] rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Join Our Discord Community</h2>
      <p className="mb-6 text-black text-sm  text-lg">
        Looking for more help, peer support, and mental health discussions? Our friendly Discord community is here for you. 
        Connect with others, share your experiences, and get advice in a safe, moderated environment.
      </p>
      <a
        href="https://discord.gg/auFhAuTX"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3  px-6 rounded-full shadow-lg transition"
      >
        <div className="flex items-center space-x-2 justify-center"> <FaDiscord size={22}/> </div>
        
        Join Our Discord
      </a>
    </div>
  );
};
