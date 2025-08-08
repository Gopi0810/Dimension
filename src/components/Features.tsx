import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Collaborate on everything",
    description: "From deployments to tasks, work with your team every step of the way.",
    icon: "💬",
    gradient: "gradient-cosmic"
  },
  {
    title: "Lightning fast builds",
    description: "Deploy in seconds with our optimized infrastructure and smart caching.",
    icon: "⚡",
    gradient: "gradient-aurora"
  },
  {
    title: "Seamless integrations",
    description: "Connect your favorite tools - we'll handle the rest. Many integrations included.",
    icon: "🔗",
    gradient: "gradient-cosmic"
  },
  {
    title: "Real-time collaboration",
    description: "See changes as they happen. Code together, ship together.",
    icon: "🚀",
    gradient: "gradient-aurora"
  },
  {
    title: "Enterprise security",
    description: "Bank-level security with SOC 2 compliance and end-to-end encryption.",
    icon: "🔒",
    gradient: "gradient-cosmic"
  },
  {
    title: "Global edge network",
    description: "Deploy close to your users with our worldwide edge infrastructure.",
    icon: "🌍",
    gradient: "gradient-aurora"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build software <span className="gradient-text">faster, together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The most complete developer experience with everything you need to collaborate, deploy, and scale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover-lift bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-all">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-muted/30 backdrop-blur-sm border border-border/50 animate-glow-pulse">
            <span className="text-sm text-muted-foreground">
              ✨ More features coming soon
            </span>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full gradient-cosmic opacity-10 floating" />
      <div className="absolute bottom-1/4 left-10 w-24 h-24 rounded-full gradient-aurora opacity-15 floating" style={{ animationDelay: '3s' }} />
    </section>
  );
};

export default Features;