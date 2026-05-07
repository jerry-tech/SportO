import register from "@/assets/register.jpeg";

const About = () => (
  <section id="about" className="py-20 px-6 md:px-20 bg-section-alt text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">About Us</h2>
    <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
      <p>
        Founded in 2020, EliteSport Limited is a duly registered sports management company committed
        to discovering, developing, and placing exceptional football talents across top clubs in
        Africa, Europe, America, and Asia.
      </p>
      <p>
        Our team comprises experienced sports agents, journalists, coaches, professional scouts, and
        retired players who share a unified vision — bridging the gap between elite talent and
        world-class opportunities.
      </p>
    </div>
    <img
      src={register}
      alt="EliteSport football players training at sunset"
      loading="lazy"
      width={1280}
      height={720}
      className="mx-auto mt-12 w-full max-w-4xl rounded-lg shadow-lg"
    />
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSfR-Wgbrs5vfHBLGQW08ufYYgHaIJT4BIyhSUSgQAL2x6_C_A/viewform?usp=dialog"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-8 bg-primary text-primary-foreground font-display text-lg px-8 py-3 rounded hover:opacity-90 transition-opacity"
    >
      Register Now
    </a>
  </section>
);

export default About;
