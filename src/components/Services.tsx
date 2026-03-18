import { Globe, FileText, Users, Megaphone } from "lucide-react";

const services = [
  { icon: Globe, title: "Club Sourcing", desc: "We connect players with top global clubs." },
  { icon: FileText, title: "Negotiation", desc: "We handle contracts professionally." },
  { icon: Users, title: "Agent Representation", desc: "Long-term career management." },
  { icon: Megaphone, title: "Public Relations", desc: "Media and brand positioning." },
];

const Services = () => (
  <section id="services" className="py-20 px-6 md:px-20 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">What We Do</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {services.map((s) => (
        <div
          key={s.title}
          className="w-64 p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors"
        >
          <s.icon className="mx-auto mb-4 text-primary" size={36} />
          <h3 className="text-xl font-semibold text-foreground mb-2">{s.title}</h3>
          <p className="text-muted-foreground text-sm">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
