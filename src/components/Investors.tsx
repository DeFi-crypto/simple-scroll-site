import { Clock, Home, CheckCircle } from 'lucide-react';

const Investors = () => {
  const stats = [
    {
      icon: Clock,
      title: '8+ Years',
      description: 'Experienced team in the market',
    },
    {
      icon: Home,
      title: 'Luxury Housing',
      description: 'Premium quality construction and design',
    },
    {
      icon: CheckCircle,
      title: 'Affordable Housing',
      description: 'Meeting community housing needs',
    },
  ];

  return (
    <section id="investors" className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Investment Opportunity
          </span>
          <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
          <p className="text-muted-foreground">
            Join Eastern Homes MN in building affordable housing solutions across the Twin Cities. We offer investment opportunities in residential and commercial development with competitive returns.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-card border border-border rounded-2xl p-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{stat.title}</h3>
              <p className="text-muted-foreground m-0">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Investors;
