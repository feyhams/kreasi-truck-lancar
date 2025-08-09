import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const BookingForm = () => {
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();

  useEffect(() => {
    gsap.fromTo('.booking-form', 
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
          trigger: '.booking-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section className="booking-section py-20 px-6 bg-gradient-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-dark-brown mb-6">
            Pesan Truk dengan Mudah
          </h2>
          <p className="text-xl text-muted-foreground">
            Isi form di bawah untuk cek ketersediaan dan dapatkan penawaran terbaik
          </p>
        </div>

        <div className="booking-form glass-card p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-dark-brown">Lokasi Penjemputan</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-medium-brown" />
                <Input 
                  placeholder="Masukkan alamat penjemputan" 
                  className="pl-10 h-12 glass-card border-0 focus:ring-2 focus:ring-medium-brown"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-dark-brown">Lokasi Tujuan</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-medium-brown" />
                <Input 
                  placeholder="Masukkan alamat tujuan" 
                  className="pl-10 h-12 glass-card border-0 focus:ring-2 focus:ring-medium-brown"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-dark-brown">Tanggal Penjemputan</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-12 justify-start text-left font-normal glass-card border-0",
                      !pickupDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-5 w-5 text-medium-brown" />
                    {pickupDate ? format(pickupDate, "dd/MM/yyyy") : "Pilih tanggal"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={pickupDate}
                    onSelect={setPickupDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-dark-brown">Tanggal Pengembalian</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-12 justify-start text-left font-normal glass-card border-0",
                      !returnDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-5 w-5 text-medium-brown" />
                    {returnDate ? format(returnDate, "dd/MM/yyyy") : "Pilih tanggal"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-dark-brown">Jenis Truk</label>
              <Select>
                <SelectTrigger className="h-12 glass-card border-0 focus:ring-2 focus:ring-medium-brown">
                  <SelectValue placeholder="Pilih jenis truk yang dibutuhkan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pickup">Pickup Box (1-2 Ton)</SelectItem>
                  <SelectItem value="medium">Truk Sedang (3-5 Ton)</SelectItem>
                  <SelectItem value="large">Truk Besar (6-10 Ton)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="btn-hero w-full mt-8 text-lg py-4 hover:scale-105 transition-transform">
            Cek Ketersediaan & Pesan Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;