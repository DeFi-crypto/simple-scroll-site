import { Layers } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 72;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-20 pt-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-72px)]">
          <div className="flex flex-col gap-6 lg:text-left text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold w-fit lg:mx-0 mx-auto">
              <Layers size={16} />
              Twin Cities Housing Development
            </span>
            <h1 className="text-4xl lg:text-[2.75rem] font-bold leading-tight">
              Building Communities, One Home at a Time
            </h1>
            <p className="text-muted-foreground text-lg">
              We specialize in affordable housing development for medium-sized builders across Minneapolis and St. Paul. From land acquisition to finished homes, we handle every step.
            </p>
            <div className="flex gap-3 flex-wrap lg:justify-start justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-[14px] font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                Start Your Project
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-transparent border border-border rounded-[14px] font-semibold transition-all hover:bg-primary/10 hover:border-primary hover:text-primary"
              >
                View Our Work
              </button>
            </div>
            <div className="flex gap-8 pt-6 border-t border-border mt-4 lg:justify-start justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">8+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden lg:order-none order-first">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
              alt="Modern residential home in Twin Cities"
              className="w-full h-[320px] lg:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
