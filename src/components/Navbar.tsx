import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 72;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'For Investors', id: 'investors' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          <button
            onClick={() => scrollToSection('home')}
            className="font-bold text-xl flex items-center gap-2"
          >
            Eastern Homes MN
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2.5 rounded-xl font-medium transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-2 px-6 py-3 bg-primary text-primary-foreground rounded-[14px] font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-2 px-6 pb-6 bg-background/98 border-b border-border">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="px-4 py-2.5 rounded-xl font-medium text-left transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-[14px] font-semibold text-center"
          >
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
