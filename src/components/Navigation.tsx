import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Animate nav items on load
    gsap.fromTo('.nav-item', 
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
        delay: 0.5
      }
    );

    // Animate logo
    gsap.fromTo('.nav-logo', 
      {
        opacity: 0,
        scale: 0.8
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 0.3
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
        {/* Curved glass navigation container */}
        <div className="glass-card rounded-full px-6 py-4 flex items-center justify-between backdrop-blur-md bg-opacity-90">
          {/* Logo */}
          <div className="nav-logo flex items-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mr-3 rotate-12 hover:rotate-0 transition-transform duration-300">
              <span className="text-white font-bold text-xl">K4</span>
            </div>
            <div className="hidden md:block">
              <h2 className="font-bold text-dark-brown text-lg leading-tight">
                PT Kreasi Empat
              </h2>
              <p className="text-medium-brown text-sm -mt-1">Bersaudara</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-item px-6 py-3 rounded-full text-dark-brown hover:bg-warm-beige/30 hover:text-medium-brown transition-all duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Phone CTA */}
            <a 
              href="tel:+622112345678"
              className="hidden md:flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>Hubungi Kami</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="glass-card rounded-3xl p-6 backdrop-blur-md bg-opacity-95">
              <div className="space-y-4">
                {menuItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-4 rounded-2xl text-dark-brown hover:bg-warm-beige/30 hover:text-medium-brown transition-all duration-300 font-medium text-center"
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Mobile CTA */}
                <a 
                  href="tel:+622112345678"
                  className="flex items-center justify-center gap-2 bg-gradient-primary text-white px-6 py-4 rounded-2xl hover:scale-105 transition-transform duration-300 font-semibold mt-6"
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