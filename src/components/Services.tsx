import { LayoutGrid, Home } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: LayoutGrid,
      title: 'Land Development',
      description: 'Site selection, due diligence, entitlements, and infrastructure development for residential projects.',
    },
    {
      icon: Home,
      title: 'New Construction',
      description: 'Quality home building with efficient designs, modern amenities, and attention to detail.',
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            What We Do
          </span>
          <h2 className="text-3xl font-bold mb-4">Comprehensive Development Services</h2>
          <p className="text-muted-foreground">
            From raw land to move-in ready homes, we provide end-to-end solutions for residential development in the Twin Cities metro area.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-[700px] mx-auto">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-card border border-border rounded-2xl p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
