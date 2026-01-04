const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 72;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/60 border-t border-border py-14">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <strong>Eastern Homes MN</strong>
            </div>
            <p className="text-muted-foreground text-sm">
              Building affordable housing solutions for medium-sized builders in the Twin Cities area.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'For Investors', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-').replace('for-', ''))}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-5">Services</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>Land Development</li>
              <li>New Construction</li>
              <li>Affordable Housing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-5">Contact</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>Twin Cities, Minnesota</li>
              <li>
                <a href="mailto:mahesh@easternhomesmn.com" className="hover:text-primary transition-colors">
                  mahesh@easternhomesmn.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground text-sm">
          © {currentYear} Eastern Homes MN. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
