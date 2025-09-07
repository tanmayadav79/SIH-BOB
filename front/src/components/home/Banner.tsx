export const Banner = () => {
  return (
    <div 
      className="w-full sm:w-1/2 h-[300px] flex items-center justify-center mx-auto text-white bg-cover bg-center shadow-2xl rounded-2xl"
      style={{ backgroundImage: "url('https://images5.alphacoders.com/134/thumb-1920-1345409.png')" }}
    >
      <div className="flex flex-col items-center text-black text-center p-6 max-w-xl mx-auto py-5 bg-[#5e8b9c] bg-opacity-50 rounded-xl">
        <h1 className="text-3xl font-extrabold tracking-wide mb-4">
          Nurture Your Mind, Embrace Wellness
        </h1>
        <p className="text-sm mt-2 font-semibold max-w-xl">
          Explore mental health resources, daily self-care tips, and community support.
        </p>
        <a 
          href="https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response" 
          className="inline-block bg-blue-500 text-black py-2 px-4 mt-8 text-md font-bold rounded-full shadow-lg"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};
