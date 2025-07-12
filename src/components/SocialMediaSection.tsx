import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Facebook, Instagram } from 'lucide-react';

export default function SocialMediaSection() {
  return (
    <div className="text-center space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-serif">
          Följ oss
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4"></div>
        <p className="text-muted-foreground max-w-md mx-auto">
          Håll dig uppdaterad med våra senaste nyheter, specialerbjudanden och vackra bilder från kaffestugan.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 max-w-md mx-auto">
        <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <CardContent className="p-6">
            <Button
              variant="ghost"
              className="w-full h-auto p-0 hover:bg-transparent group"
              asChild
            >
              <a
                href="https://www.facebook.com/people/Lotta-p%C3%A5-%C3%A5sen/100045411761881/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-3"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Facebook className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-primary group-hover:text-blue-600 transition-colors">
                    Facebook
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Besök vår sida
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <CardContent className="p-6">
            <Button
              variant="ghost"
              className="w-full h-auto p-0 hover:bg-transparent group"
              asChild
            >
              <a
                href="https://www.instagram.com/lottapaasen/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-3"
              >
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <Instagram className="h-8 w-8 text-pink-600" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-primary group-hover:text-pink-600 transition-colors">
                    Instagram
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    @lottapaasen
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-pink-600 transition-colors" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="bg-card p-6 rounded-lg border border-border max-w-lg mx-auto">
        <h3 className="text-lg font-semibold text-primary mb-2 font-serif">
          www.lottapaasen.se
        </h3>
        <p className="text-sm text-muted-foreground">
          Dela dina upplevelser med oss genom att tagga oss i dina bilder. 
          Vi älskar att se hur våra gäster njuter av tiden hos oss!
        </p>
      </div>
    </div>
  );
}