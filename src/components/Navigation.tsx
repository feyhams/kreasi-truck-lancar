import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Building2 } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Simple, professional animations
    gsap.fromTo('.nav-item', 
      {
        opacity: 0,
        y: -10
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.05,
        delay: 0.3
      }
    );

    gsap.fromTo('.nav-logo', 
      {
        opacity: 0,
        x: -20
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
        delay: 0.1
      }
    );
  }, []);

  const menuItems = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Armada', href: '#fleet' },
    { name: 'Pesan', href: '#booking' },
    { name: 'Layanan', href: '#services' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto">
        {/* Clean professional navigation */}
        <div className="glass-card rounded-lg px-6 py-4 flex items-center justify-between">
          {/* Professional Logo */}
          <div className="nav-logo flex items-center">
            <div className="icon-container mr-3">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="hidden md:block">
              <h2 className="font-bold text-dark-brown text-lg leading-tight">
                PT Kreasi Empat Bersaudara
              </h2>
              <p className="text-muted-foreground text-sm -mt-1">Truck Rental Services</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-item px-4 py-2 rounded-md text-foreground hover:bg-muted hover:text-primary transition-all duration-200 font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Professional CTA */}
            <a 
              href="tel:+622112345678"
              className="hidden md:flex items-center gap-2 btn-primary text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Hubungi Kami</span>
            </a>

            {/* Clean Mobile Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden w-10 h-10 bg-primary rounded-md flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Clean Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2">
            <div className="glass-card rounded-lg p-4">
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 rounded-md text-foreground hover:bg-muted hover:text-primary transition-all duration-200 font-medium text-center"
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Mobile CTA */}
                <a 
                  href="tel:+622112345678"
                  className="flex items-center justify-center gap-2 btn-primary w-full mt-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hubungi Kami</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;