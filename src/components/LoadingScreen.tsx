import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Building2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 300);
      }
    });

    // Simple, professional loading animation
    tl.from('.loading-logo', {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: 'power2.out'
    })
    .from('.loading-text', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3')
    .from('.loading-bar', {
      scaleX: 0,
      duration: 1.5,
      ease: 'power2.inOut'
    }, '-=0.2')
    .to('.loading-screen', {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    });

  }, [onComplete]);

  return (
    <div className="loading-screen fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="loading-logo icon-container w-20 h-20 mx-auto mb-8">
          <Building2 className="w-10 h-10" />
        </div>
        
        <h1 className="loading-text text-3xl font-bold text-foreground mb-2">
          PT Kreasi Empat Bersaudara
        </h1>
        <p className="loading-text text-muted-foreground mb-8">
          Professional Truck Rental Services
        </p>
        
        <div className="loading-bar-container w-48 h-1 bg-muted rounded-full mx-auto">
          <div className="loading-bar h-full bg-primary rounded-full origin-left"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;