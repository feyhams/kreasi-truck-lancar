import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Fuel, User, MapPin, Package } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FleetSection = () => {
  useEffect(() => {
    gsap.fromTo('.fleet-card', 
      {
        opacity: 0,
        y: 60,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.fleet-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Hover animations
    document.querySelectorAll('.fleet-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

  }, []);

  const fleetTypes = [
    {
      title: 'Pickup Box',
      capacity: '1 - 2 Ton',
      dailyRate: 'Rp 350.000',
      features: ['BBM Termasuk', 'Dengan Sopir', 'Jarak 100km/hari'],
      image: '🚐'
    },
    {
      title: 'Truk Sedang',
      capacity: '3 - 5 Ton',
      dailyRate: 'Rp 750.000',
      features: ['BBM Termasuk', 'Dengan Sopir', 'Jarak 150km/hari'],
      image: '🚚'
    },
    {
      title: 'Truk Besar',
      capacity: '6 - 10 Ton',
      dailyRate: 'Rp 1.200.000',
      features: ['BBM Termasuk', 'Dengan Sopir', 'Jarak 200km/hari'],
      image: '🚛'
    }
  ];

  return (
    <section id="fleet" className="fleet-section py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-dark-brown mb-6">
            Armada Truk Terlengkap
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pilih jenis truk yang sesuai dengan kebutuhan Anda. 
            Semua armada terawat dan dilengkapi dengan sopir berpengalaman.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {fleetTypes.map((fleet, index) => (
            <div key={index} className="fleet-card glass-card p-8 text-center hover:shadow-glow transition-all duration-300">
              <div className="text-6xl mb-6">{fleet.image}</div>
              <h3 className="text-2xl font-bold text-dark-brown mb-3">{fleet.title}</h3>
              <div className="text-lg text-medium-brown font-semibold mb-2">
                Kapasitas: {fleet.capacity}
              </div>
              <div className="text-3xl font-bold text-dark-brown mb-6">
                {fleet.dailyRate}<span className="text-lg font-normal">/hari</span>
              </div>
              
              <div className="space-y-3 mb-8">
                {fleet.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-3 text-muted-foreground">
                    {idx === 0 && <Fuel className="w-5 h-5 text-medium-brown" />}
                    {idx === 1 && <User className="w-5 h-5 text-medium-brown" />}
                    {idx === 2 && <MapPin className="w-5 h-5 text-medium-brown" />}
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="btn-gradient w-full">
                Pesan Sekarang
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;