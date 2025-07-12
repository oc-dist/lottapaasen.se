
import Layout from "@/components/Layout";
import ImageGallery from "@/components/ImageGallery";
import SocialMediaSection from "@/components/SocialMediaSection";
import { Separator } from "@/components/ui/separator";

export default function GalleryPage() {
  // Café images
  const cafeImages = [
    "/images/IMG_17___serialized1.JPG",
    "/images/1___serialized1.jpg",
    "/images/34___serialized3.jpg",
    "/images/111.jpg",
    "/images/vindskyddet.jpg",
    "/images/22.jpg",
    "/images/3___serialized1.jpg",
    "/images/17___serialized2.jpg",
    "/images/rita.jpg",
    "/images/IMG_8_minst.jpg",
    "/images/28.jpg",
    "/images/IMG_0154___serialized1.JPG",
    "/images/IMG_0039___serialized1.JPG",
    "/images/18.jpg",
    "/images/57___serialized2.jpg",
    "/images/54___serialized2.jpg"
  ];

  // Corporate events images
  const corporateEventImages = [
    "/images/52___serialized3.jpg",
    "/images/51___serialized3.jpg",
    "/images/50___serialized3.jpg",
    "/images/49___serialized2.jpg"
  ];

  // Motorcycle visits images
  const motorcycleImages = [
    "/images/IMG_0092___serialized3.JPG",
    "/images/6_2___serialized1.jpg",
    "/images/IMG_1073.JPG",
    "/images/IMG_1075___serialized1.JPG"
  ];

  // Fast and large vehicles images
  const vehicleImages = [
    "/images/14___serialized2.jpg",
    "/images/16___serialized2.jpg",
    "/images/47___serialized2.jpg",
    "/images/48___serialized1.jpg"
  ];

  // Private events images
  const privateEventImages = [
    "/images/45___serialized2.jpg",
    "/images/44___serialized2.jpg",
    "/images/43___serialized2.jpg",
    "/images/41___serialized3.jpg"
  ];

  return (
    <Layout>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-serif">
            Galleri
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Upptäck den vackra miljön och den autentiska atmosfären som gör Lotta på Åsen så speciell. 
            Från vår charmiga kaffestuga till våra naturskön trädgård och alla minnesvärda stunder vi delat med våra gäster.
          </p>
        </div>

        {/* Main Café Gallery */}
        <ImageGallery 
          title="Vårt Café" 
          images={cafeImages}
          className="scroll-mt-20"
        />

        <Separator className="my-12" />

        {/* Corporate Events Gallery */}
        <ImageGallery 
          title="Företagsevent m.m." 
          images={corporateEventImages}
          className="scroll-mt-20"
        />

        <Separator className="my-12" />

        {/* Motorcycle Visits Gallery */}
        <ImageGallery 
          title="Besök av motorcyklister" 
          images={motorcycleImages}
          className="scroll-mt-20"
        />

        <Separator className="my-12" />

        {/* Vehicle Visits Gallery */}
        <ImageGallery 
          title="Besök av snabba och stora fordon" 
          images={vehicleImages}
          className="scroll-mt-20"
        />

        <Separator className="my-12" />

        {/* Private Events Gallery */}
        <ImageGallery 
          title="Privata tillställningar m.m." 
          images={privateEventImages}
          className="scroll-mt-20"
        />

        <Separator className="my-12" />

        {/* Social Media Section */}
        <SocialMediaSection />

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl border border-border/50">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-serif">
            Besök oss
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Upplev själv den vackra miljön och den autentiska atmosfären som gör Lotta på Åsen så speciell. 
            Vi ser fram emot att välkomna dig till vår kaffestuga vid Söderåsen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>Hembakat fika</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>Våfflor enligt 1800-talsrecept</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>Naturskön trädgård</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
