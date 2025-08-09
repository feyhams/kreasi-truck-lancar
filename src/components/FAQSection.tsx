import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
  useEffect(() => {
    gsap.fromTo('.faq-container', 
      {
        opacity: 0,
        y: 40
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.faq-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const faqs = [
    {
      question: 'Dokumen apa saja yang diperlukan untuk menyewa truk?',
      answer: 'Anda memerlukan KTP yang masih berlaku dan SIM B1/B2 untuk yang ingin menyetir sendiri. Untuk perusahaan, diperlukan juga NPWP dan surat keterangan usaha.'
    },
    {
      question: 'Apakah BBM sudah termasuk dalam tarif sewa?',
      answer: 'Ya, untuk paket standar BBM sudah termasuk dengan batasan jarak sesuai paket yang dipilih. Untuk jarak lebih jauh, akan dikenakan biaya tambahan yang transparan.'
    },
    {
      question: 'Bisakah saya menyewa truk tanpa sopir?',
      answer: 'Ya, kami menyediakan layanan sewa truk tanpa sopir dengan syarat memiliki SIM yang sesuai dan deposit keamanan. Tarif akan lebih ekonomis tanpa sopir.'
    },
    {
      question: 'Bagaimana sistem perhitungan tarif sewa?',
      answer: 'Tarif dihitung berdasarkan durasi sewa (harian) dan jarak tempuh. Kami juga menyediakan paket bulanan dengan tarif khusus yang lebih hemat.'
    },
    {
      question: 'Wilayah mana saja yang dilayani?',
      answer: 'Kami melayani seluruh kota besar di Indonesia termasuk Jakarta, Surabaya, Bandung, Medan, Makassar, dan kota-kota besar lainnya. Hubungi CS untuk informasi area spesifik.'
    }
  ];

  return (
    <section id="faq" className="faq-section py-20 px-6 bg-gradient-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-dark-brown mb-6">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-xl text-muted-foreground">
            Temukan jawaban untuk pertanyaan umum seputar layanan sewa truk kami
          </p>
        </div>

        <div className="faq-container glass-card p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-warm-beige/30 rounded-lg px-6 data-[state=open]:bg-warm-beige/10"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-dark-brown hover:text-medium-brown">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;