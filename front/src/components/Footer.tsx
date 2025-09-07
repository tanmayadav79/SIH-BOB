import { FaDiscord } from "react-icons/fa";
export default function Footer() {
    return (
       <footer className='py-4 mt-5'>
            <div className='flex flex-col sm:flex-row items-center justify-center sm:gap-4 text-center text-gray-600 max-w-3xl mx-auto'>
                <p className='text-xs font-semibold'>2025 Balance Over Breakdown</p>
                <span className='hidden sm:inline-block w-px h-4 bg-gray-600'/>
                <p className='text-xs font-medium'>Join Us</p>
                <div className='flex gap-3 mt-2 sm:mt-0'>
                    <a href="https://www.discord.com" aria-label="Discord" className='hover:text-indigo-700'>
                        <FaDiscord size={22}  />
                    </a>
                </div>
            </div>

       </footer>
    );
}