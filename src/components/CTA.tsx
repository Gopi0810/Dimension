import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTA = () => {
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
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-cosmic opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full gradient-aurora opacity-20 floating" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full gradient-cosmic opacity-15 floating" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Ready to transform your{" "}
            <span className="gradient-text">development workflow?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in">
            Join thousands of developers already building the future with Dimension.
          </p>

          {/* Email Signup Form */}
          <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-12 animate-scale-in">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 bg-background/50 backdrop-blur-sm border-border/50 text-lg"
              required
            />
            <Button 
              type="submit"
              size="lg"
              className="h-14 px-8 gradient-cosmic hover:opacity-90 transition-opacity glow-primary pulse-glow"
            >
              {isJoined ? "✅ Joined!" : "Get Early Access"}
            </Button>
          </form>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">10K+</div>
              <div className="text-muted-foreground">Developers waiting</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground">Expert support</div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 animate-fade-in">
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by teams at leading companies
          </p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            {['Stripe', 'Shopify', 'Discord', 'Figma', 'Linear'].map((company, index) => (
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

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
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
    </section>
  );
};

export default CTA;