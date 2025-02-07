import { Twitter, Send } from "lucide-react";
import Navbar from "@/components/Navbar";

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-buddy-gray text-center mb-12">
          Join the Buddy Community
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <a
            href="https://t.me/buddysolana"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <Send className="w-8 h-8 text-[#0088cc]" />
            <span className="text-xl font-semibold text-buddy-gray">Telegram</span>
          </a>
          
          <a
            href="https://x.com/buddysolana"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <Twitter className="w-8 h-8 text-[#1DA1F2]" />
            <span className="text-xl font-semibold text-buddy-gray">Twitter</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Community;