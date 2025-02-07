import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Index;