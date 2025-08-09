import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Wrench, CreditCard, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  useEffect(() => {
    gsap.fromTo('.feature-card', 
      {
        opacity: 0,
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.why-choose-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const features = [
    {
      icon: MapPin,
      title: 'Jangkauan Luas',
      description: 'Melayani seluruh kota besar di Indonesia dengan jaringan yang terpercaya'
    },
    {
      icon: Wrench,
      title: 'Armada Terawat',
      description: 'Semua truk dalam kondisi prima dan menjalani perawatan rutin berkala'
    },
    {
      icon: CreditCard,
      title: 'Harga Transparan',
      description: 'Tidak ada biaya tersembunyi, semua tarif jelas dan kompetitif'
    },
    {
      icon: Phone,
      title: 'Dukungan 24/7',
      description: 'Tim customer service siap membantu Anda kapan saja dibutuhkan'
    }
  ];

  return (
    <section id="services" className="why-choose-section py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-dark-brown mb-6">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kami berkomitmen memberikan layanan sewa truk terbaik dengan standar 
            kualitas tinggi untuk kepuasan pelanggan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="feature-card text-center group">
              <div className="glass-card p-8 hover:shadow-glow transition-all duration-300 group-hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-brown mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;