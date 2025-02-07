import { useToast } from "@/hooks/use-toast";
import { Volume2 } from "lucide-react";

const Hero = () => {
  const { toast } = useToast();
  const audio = new Audio("/audio/dog-bark.mp3"); // Usa un percorso assoluto

  const playBark = () => {
    audio.currentTime = 0; // Reset audio a inizio
    audio.play().catch(console.error);

    toast({
      title: "Woof! Woof! 🐕",
      description: "To the moon! 🚀",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="animate-float mb-8">
          <img
            src="/lovable-uploads/0921f0fa-5e58-49a6-8f94-251a78de1fbe.png"
            alt="Buddy Mascot"
            className="w-48 h-48 mx-auto"
          />
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold text-buddy-gray mb-6">
          Buddy is a good boy
        </h1>

        <p className="text-xl sm:text-2xl text-buddy-gray/80 mb-8">
          Woofing to the Moon! 🚀
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={playBark}
            className="px-8 py-4 bg-buddy-orange text-white rounded-full font-bold text-lg hover:bg-buddy-orange/90 transition-colors flex items-center gap-2 group"
          >
            <Volume2 className="w-5 h-5 group-hover:animate-bark" />
            Make Buddy Bark!
          </button>

          <a
            href="https://dexscreener.com/solana/6VcgPRirH122Dvzcvj4owVno963arZBaZCzb3qWfpump"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-buddy-blue text-white rounded-full font-bold text-lg hover:bg-buddy-blue/90 transition-colors"
          >
            Buy $BUDDY
          </a>
        </div>

        <div className="text-sm text-buddy-gray/60 font-mono break-all">
          CA: 6VcgPRirH122Dvzcvj4owVno963arZBaZCzb3qWfpump
        </div>
      </div>
    </div>
  );
};

export default Hero;
