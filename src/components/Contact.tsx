import { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [showNotice, setShowNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowNotice(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setShowNotice(false), 5000);
  };

  return (
    <section id="contact" className="py-20 section-muted">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Eastern Homes MN</h2>
          <p className="text-muted-foreground">
            Tell us about your next low- to mid-size development. We'll follow up to discuss timelines, scope, and the right support for your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
          <div className="bg-card border border-border rounded-2xl p-7 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="font-medium text-sm">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="px-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="font-medium text-sm">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="px-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-phone" className="font-medium text-sm">
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="px-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="font-medium text-sm">
                  Project Details *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Share the location, size, and goals for your project."
                  className="px-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-[14px] font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                Send Message
              </button>
              {showNotice && (
                <div className="px-4 py-3.5 rounded-xl bg-green-500/10 text-green-700 font-semibold">
                  Thanks for reaching out! We'll respond shortly.
                </div>
              )}
            </form>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-muted/40 border border-border rounded-2xl p-7">
              <h3 className="text-xl font-semibold mb-5">Direct Contact</h3>
              <div className="flex gap-3 items-start mb-5">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold m-0">Email</p>
                  <a href="mailto:mahesh@easternhomesmn.com" className="text-muted-foreground hover:text-primary transition-colors">
                    mahesh@easternhomesmn.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold m-0">Primary Market</p>
                  <p className="text-muted-foreground m-0">Twin Cities, Minnesota</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-2xl p-7">
              <h3 className="text-xl font-semibold mb-2">What We Build</h3>
              <p className="text-muted-foreground m-0">
                We develop low- to mid-size residential properties with a focus on quality, efficient layouts, and long-term community value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
