import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaAction?: () => void;
  overlay?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText,
  ctaAction,
  overlay = true
}: HeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
          </div>
          {overlay && (
            <div className="absolute inset-0 bg-black/40 z-10" />
          )}
        </>
      )}
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6">
          {subtitle && (
            <p className="text-lg font-medium text-accent-foreground/80 tracking-wide uppercase">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          
          {ctaText && ctaAction && (
            <div className="pt-4">
              <Button
                onClick={ctaAction}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}