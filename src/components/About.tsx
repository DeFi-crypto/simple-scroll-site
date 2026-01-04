const About = () => {
  return (
    <section id="about" className="py-20 section-muted">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-3xl font-bold">Meet Eastern Homes MN</h2>
        </div>
        <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center md:text-left text-center">
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-primary shadow-lg shadow-primary/20 md:mx-0 mx-auto">
            <img
              src="/images/mahesh.jpg"
              alt="Mahesh - Founder of Eastern Homes MN"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Mahesh</h3>
            <p className="text-muted-foreground mb-4">Founder & Developer</p>
            <p className="mb-4">
              With over 8+ years of experience in real estate development across the Twin Cities, I founded Eastern Homes MN with a simple mission: to build quality, luxury and affordable housing.
            </p>
            <p className="text-muted-foreground">
              We work closely with investors to create residential developments that meet the growing demand for housing in Minnesota and around Twin Cities. Our focus is on efficiency, quality, and long-term value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
