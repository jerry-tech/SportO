import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center text-center min-h-[90vh] px-4 overflow-hidden isolate"
    >
      {/* Animated background image (Ken Burns) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30 animate-hero-pan"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-black/65" />
      {/* Animated gradient wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 opacity-40 mix-blend-overlay animate-hero-gradient"
        style={{
          backgroundImage:
            "linear-gradient(120deg, hsl(var(--primary)/0.5), transparent 40%, hsl(var(--primary)/0.35) 80%)",
        }}
      />
      {/* Floating orbs */}
      <div
        aria-hidden
        className="absolute -z-10 w-72 h-72 rounded-full blur-3xl animate-hero-float"
        style={{
          background: "hsl(var(--primary) / 0.35)",
          top: "15%",
          left: "10%",
          animationDelay: "0s",
        }}
      />
      <div
        aria-hidden
        className="absolute -z-10 w-96 h-96 rounded-full blur-3xl animate-hero-float"
        style={{
          background: "hsl(var(--primary) / 0.25)",
          bottom: "10%",
          right: "8%",
          animationDelay: "2.5s",
        }}
      />
      <div
        aria-hidden
        className="absolute -z-10 w-56 h-56 rounded-full blur-3xl animate-hero-float"
        style={{
          background: "hsl(45 90% 60% / 0.25)",
          top: "55%",
          left: "55%",
          animationDelay: "4s",
        }}
      />
      {/* Sweeping light shine */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 h-full w-1/3 animate-hero-sweep"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(var(--primary)/0.15), transparent)",
          }}
        />
      </div>

      <div className="max-w-3xl relative">
        {/* Pulse rings behind title */}
        <div aria-hidden className="absolute inset-0 flex items-center justify-center -z-10">
          <span
            className="block w-40 h-40 rounded-full border border-primary/40 animate-hero-pulse-ring"
          />
          <span
            className="absolute block w-40 h-40 rounded-full border border-primary/30 animate-hero-pulse-ring"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight animate-hero-title-in">
          Welcome to <span className="text-primary">EliteSport</span> Limited
        </h1>
        <p
          className="text-muted-foreground text-lg md:text-xl mb-10 animate-hero-title-in"
          style={{ animationDelay: "0.2s" }}
        >
          Discovering and Developing Elite Football Talent Worldwide
        </p>
      </div>
    </section>
  );
};

export default Hero;
