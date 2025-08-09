import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Truck, Users, MapPin, Star } from 'lucide-react';
import heroImage from '@/assets/hero-truck-fleet.jpg';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline();
    
    tl.from('.hero-title', {
      opacity: 0,
      y: 40,
      filter: 'blur(10px)',
      duration: 1.2,
      ease: 'power2.out'
    })
    .from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.8')
    .from('.hero-buttons', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.6')
    .from('.hero-stats', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4');

    // Image fade in
    gsap.from('.hero-image', {
      opacity: 0,
      scale: 1.1,
      duration: 1.5,
      ease: 'power2.out'
    });

    // Floating glow orbs
    gsap.to('.hero-orb', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.5
    });

  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with professional overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage} 
          alt="Professional truck fleet" 
          className="hero-image w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-brown/90 to-dark-brown/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Sewa Truk Profesional untuk
          <span className="block text-warm-beige">Segala Kebutuhan Anda</span>
        </h1>
        
        <p className="hero-subtitle text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
          Armada bersih, terawat, harga transparan, dukungan 24/7 seluruh Indonesia.
          Solusi terpercaya untuk kebutuhan logistik Anda.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button className="btn-primary bg-white text-dark-brown hover:bg-white/90 text-lg px-8 py-4">
            Pesan Truk Sekarang
          </Button>
          <Button className="btn-outline border-white text-white hover:bg-white hover:text-dark-brown text-lg px-8 py-4">
            Lihat Armada Kami
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="hero-stats professional-card bg-white/10 backdrop-blur-sm border-white/20 text-center p-4">
            <Users className="w-8 h-8 mx-auto mb-3 text-warm-beige" />
            <div className="text-3xl font-bold mb-1">5,000+</div>
            <div className="text-sm text-white/80">Pelanggan Setia</div>
          </div>
          <div className="hero-stats professional-card bg-white/10 backdrop-blur-sm border-white/20 text-center p-4">
            <Truck className="w-8 h-8 mx-auto mb-3 text-warm-beige" />
            <div className="text-3xl font-bold mb-1">200+</div>
            <div className="text-sm text-white/80">Armada Truk</div>
          </div>
          <div className="hero-stats professional-card bg-white/10 backdrop-blur-sm border-white/20 text-center p-4">
            <MapPin className="w-8 h-8 mx-auto mb-3 text-warm-beige" />
            <div className="text-3xl font-bold mb-1">50+</div>
            <div className="text-sm text-white/80">Kota Terjangkau</div>
          </div>
          <div className="hero-stats professional-card bg-white/10 backdrop-blur-sm border-white/20 text-center p-4">
            <Star className="w-8 h-8 mx-auto mb-3 text-warm-beige" />
            <div className="text-3xl font-bold mb-1">98%</div>
            <div className="text-sm text-white/80">Tingkat Kepuasan</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;