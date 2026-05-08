import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center text-center min-h-[90vh] px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
          Welcome to <span className="text-primary">EliteSport</span> Limited
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-10">
          Discovering and Developing Elite Football Talent Worldwide
        </p>
        {/* <button
          onClick={scrollToContact}
          className="bg-primary text-primary-foreground font-display text-lg px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join Now
        </button> */}
      </div>
    </section>
  );
};

export default Hero;
