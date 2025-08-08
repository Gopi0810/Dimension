const integrations = [
  { name: "GitHub", color: "bg-gray-900" },
  { name: "Vercel", color: "bg-black" },
  { name: "Railway", color: "bg-purple-600" },
  { name: "Netlify", color: "bg-teal-500" },
  { name: "Cloudflare", color: "bg-orange-500" },
  { name: "AWS", color: "bg-yellow-600" },
  { name: "Linear", color: "bg-blue-600" },
  { name: "Figma", color: "bg-pink-500" },
  { name: "Slack", color: "bg-green-600" },
  { name: "Discord", color: "bg-indigo-600" },
  { name: "Notion", color: "bg-gray-800" },
  { name: "Stripe", color: "bg-blue-500" }
];

const Integrations = () => {
  return (
    <section id="integrations" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Crafted for your <span className="gradient-text">favorite tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect your tools - we'll handle the rest. Many integrations, with more to come.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className="group relative flex flex-col items-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Logo Placeholder */}
              <div className={`w-12 h-12 rounded-lg ${integration.color} mb-3 group-hover:scale-110 transition-transform flex items-center justify-center`}>
                <span className="text-white font-bold text-sm">
                  {integration.name.charAt(0)}
                </span>
              </div>

              {/* Name */}
              <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                {integration.name}
              </span>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-r from-primary/5 to-accent/5" />
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-muted/30 backdrop-blur-sm border border-border/50 mb-6">
            <span className="text-sm text-muted-foreground mr-2">🔌</span>
            <span className="text-sm text-muted-foreground">
              More integrations shipping every week
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'Redis'].map((coming, index) => (
              <span
                key={coming}
                className="px-3 py-1 text-xs rounded-full bg-muted/20 text-muted-foreground border border-border/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                {coming} - Coming Soon
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-10 left-1/4 w-40 h-40 rounded-full gradient-aurora opacity-5 floating" />
      <div className="absolute bottom-10 right-1/4 w-32 h-32 rounded-full gradient-cosmic opacity-10 floating" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Integrations;