import { MessageSquare, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-dark-brown text-white py-16 px-6 overflow-hidden">
      {/* Floating particles */}
      <div className="glow-orb w-20 h-20 absolute top-10 left-10 opacity-30"></div>
      <div className="glow-orb w-16 h-16 absolute bottom-20 right-20 opacity-20"></div>
      <div className="glow-orb w-12 h-12 absolute top-1/2 left-1/4 opacity-25"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-warm-beige">
              PT Kreasi Empat Bersaudara
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Penyedia layanan sewa truk terpercaya di Indonesia. Melayani kebutuhan 
              logistik Anda dengan armada berkualitas dan pelayanan profesional sejak 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-warm-beige/20 rounded-full flex items-center justify-center text-warm-beige hover:bg-warm-beige hover:text-dark-brown transition-all">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-warm-beige/20 rounded-full flex items-center justify-center text-warm-beige hover:bg-warm-beige hover:text-dark-brown transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-warm-beige/20 rounded-full flex items-center justify-center text-warm-beige hover:bg-warm-beige hover:text-dark-brown transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-warm-beige">Menu Cepat</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-warm-beige transition-colors">Beranda</a></li>
              <li><a href="#" className="text-white/70 hover:text-warm-beige transition-colors">Armada</a></li>
              <li><a href="#" className="text-white/70 hover:text-warm-beige transition-colors">Layanan</a></li>
              <li><a href="#" className="text-white/70 hover:text-warm-beige transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="text-white/70 hover:text-warm-beige transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-warm-beige">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-warm-beige mt-0.5" />
                <span className="text-white/70 text-sm">
                  Jl. Raya Industri No. 123<br />
                  Jakarta Timur, DKI Jakarta
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-warm-beige" />
                <span className="text-white/70 text-sm">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-warm-beige" />
                <span className="text-white/70 text-sm">info@kreasiempatbersaudara.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; 2024 PT Kreasi Empat Bersaudara. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-warm-beige text-sm transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="text-white/60 hover:text-warm-beige text-sm transition-colors">
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;