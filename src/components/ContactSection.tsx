import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Instagram, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  useEffect(() => {
    gsap.fromTo('.contact-form', 
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.contact-info', 
      {
        opacity: 0,
        x: 50
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Floating particles
    gsap.to('.contact-orb', {
      y: -15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.8
    });

  }, []);

  return (
    <section className="contact-section py-20 px-6 relative overflow-hidden">
      {/* Floating glow orbs */}
      <div className="contact-orb glow-orb w-24 h-24 absolute top-20 right-20"></div>
      <div className="contact-orb glow-orb w-16 h-16 absolute bottom-32 left-20"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-dark-brown mb-6">
            Hubungi Kami
          </h2>
          <p className="text-xl text-muted-foreground">
            Tim kami siap membantu Anda 24/7. Konsultasi gratis untuk kebutuhan sewa truk Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="contact-form">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-dark-brown mb-6">
                Kirim Pesan
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-dark-brown">Nama Lengkap</label>
                    <Input 
                      placeholder="Masukkan nama Anda" 
                      className="h-12 glass-card border-0 focus:ring-2 focus:ring-medium-brown"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-dark-brown">Email</label>
                    <Input 
                      type="email"
                      placeholder="email@example.com" 
                      className="h-12 glass-card border-0 focus:ring-2 focus:ring-medium-brown"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-dark-brown">Pesan</label>
                  <Textarea 
                    placeholder="Ceritakan kebutuhan sewa truk Anda..."
                    rows={5}
                    className="glass-card border-0 focus:ring-2 focus:ring-medium-brown resize-none"
                  />
                </div>

                <Button className="btn-hero w-full">
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold text-dark-brown mb-6">
                Informasi Kontak
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-dark-brown mb-2">Alamat Kantor</h4>
                  <p className="text-muted-foreground">
                    Jl. Raya Industri No. 123<br />
                    Jakarta Timur, DKI Jakarta 13450<br />
                    Indonesia
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-dark-brown mb-2">Jam Operasional</h4>
                  <p className="text-muted-foreground">
                    Senin - Jumat: 08:00 - 18:00 WIB<br />
                    Sabtu: 08:00 - 15:00 WIB<br />
                    Minggu: Emergency Service Only
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-dark-brown mb-4">Social Media</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                      <MessageSquare className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-warm-beige/30">
                  <p className="text-sm text-muted-foreground">
                    <strong>Hotline 24/7:</strong> +62 21 1234 5678<br />
                    <strong>WhatsApp:</strong> +62 812 3456 7890<br />
                    <strong>Email:</strong> info@kreasiempatbersaudara.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;