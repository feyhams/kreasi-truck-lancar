import { useEffect } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 500);
      }
    });

    // Animate loading elements
    tl.from('.loading-text', {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power2.out'
    })
    .from('.loading-bar', {
      scaleX: 0,
      duration: 2,
      ease: 'power2.inOut'
    }, '-=0.5')
    .to('.loading-screen', {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut'
    });

    // Floating glow orbs
    gsap.to('.loading-orb', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.5
    });

  }, [onComplete]);

  return (
    <div className="loading-screen fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero">
      {/* Floating glow orbs */}
      <div className="loading-orb glow-orb w-20 h-20 absolute top-1/4 left-1/4"></div>
      <div className="loading-orb glow-orb w-16 h-16 absolute top-1/3 right-1/4"></div>
      <div className="loading-orb glow-orb w-12 h-12 absolute bottom-1/4 left-1/3"></div>
      
      <div className="text-center">
        <h1 className="loading-text text-4xl font-bold text-white mb-8">
          PT Kreasi Empat Bersaudara
        </h1>
        <div className="loading-bar-container w-64 h-1 bg-white/20 rounded-full mx-auto">
          <div className="loading-bar h-full bg-white rounded-full origin-left"></div>
        </div>
        <p className="loading-text text-white/80 mt-4">
          Memuat pengalaman sewa truk terbaik...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;