
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ExternalLink, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const handleEmailClick = () => {
    window.location.href = "mailto:lottapaasen@icloud.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:0739-441169";
  };

  const handleAddressClick = () => {
    window.open("https://maps.google.com/?q=Slättåkra+920,+264+53+Ljungbyhed", "_blank");
  };

  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
          <div className="absolute inset-0 bg-black/20"></div>
          <Image
            src="/images/logga_20test_204.png"
            alt="Lotta på Åsen logga"
            fill
            className="object-contain p-8"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Kontakta oss
            </h1>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 max-w-md">
              <p className="text-primary font-medium mb-4">
                Ring oss på 0739 - 44 11 69 eller maila lottapaasen@icloud.com
              </p>
              <Button 
                onClick={handleEmailClick}
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2"
              >
                Kontakta
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Phone & Email Card */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/images/39.jpg"
                  alt="Kontakt information"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-primary">
                  <Phone className="h-5 w-5" />
                  <button 
                    onClick={handlePhoneClick}
                    className="text-lg font-medium hover:underline transition-colors"
                  >
                    0739 - 44 11 69
                  </button>
                </div>
                <div className="flex items-center justify-center gap-3 text-primary">
                  <Mail className="h-5 w-5" />
                  <button 
                    onClick={handleEmailClick}
                    className="text-lg font-medium hover:underline transition-colors"
                  >
                    lottapaasen@icloud.com
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Address Card */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/images/40.jpg"
                  alt="Hitta hit till Lotta på Åsen"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Hitta hit</h3>
              <div className="space-y-2 text-muted-foreground mb-4">
                <p>Ni hittar oss på adressen:</p>
                <button 
                  onClick={handleAddressClick}
                  className="text-primary font-medium hover:underline transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin className="h-4 w-4" />
                  Slättåkra 920, 264 53 Ljungbyhed
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Website & Social Media Card */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 md:col-span-2 lg:col-span-1">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ExternalLink className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Följ oss</h3>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="https://www.lottapaasen.se" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-primary font-medium hover:underline transition-colors"
                >
                  www.lottapaasen.se
                </a>
                
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://www.facebook.com/people/Lotta-p%C3%A5-%C3%A5sen/100045411761881/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/lottapaasen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Welcome Message */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Välkommen till Lotta på Åsen
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Vi ser fram emot att välkomna dig till vår traditionella kaffestuga vid Söderåsen. 
              Sedan 1978 har vi serverat hembakat fika och våfflor enligt gamla recept i en genuin miljö. 
              Tveka inte att höra av dig för frågor eller bokningar!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
