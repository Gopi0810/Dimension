import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsJoined(true);
      setTimeout(() => setIsJoined(false), 3000);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Announcement Banner */}
        <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm animate-fade-in">
          <span className="text-sm text-muted-foreground">
            🚀 Announcing our $2.4M Fundraise
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="block">Dimension is the new</span>
          <span className="gradient-text block">standard for collaboration</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
          Chat, code, cloud, deployments, and more. The most complete developer experience.
        </p>

        {/* Email Signup */}
        <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-16 animate-scale-in">
          <Input
            type="email"
            placeholder="Email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-background/50 backdrop-blur-sm border-border/50"
            required
          />
          <Button 
            type="submit"
            className="gradient-cosmic hover:opacity-90 transition-opacity glow-primary pulse-glow"
          >
            {isJoined ? "You've joined!" : "Join waitlist"}
          </Button>
        </form>

        {/* Trusted By */}
        <div className="animate-fade-in">
          <p className="text-sm text-muted-foreground mb-8">
            Join the maintainers and contributors to the largest open-source projects
          </p>
          
          <div className="flex items-center justify-center space-x-8 opacity-60">
            {['GitHub', 'Vercel', 'Linear', 'Figma', 'Railway'].map((company, index) => (
              <div
                key={company}
                className="text-lg font-semibold hover:opacity-100 transition-opacity cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full gradient-aurora opacity-30 floating" />
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full gradient-cosmic opacity-40 floating" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-20 w-12 h-12 rounded-full gradient-cosmic opacity-20 floating" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;