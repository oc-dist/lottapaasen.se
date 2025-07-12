
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function MenuPage() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Meny
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            För större förbokade sällskap och evenemang kan menyn anpassas efter önskemål.
          </p>
          <div className="mt-6 p-4 bg-accent/20 rounded-lg border border-accent/30">
            <p className="text-accent-foreground font-medium">
              Vi lagar även varmrätter på beställning.
            </p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Våffla */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                🧇 Våffla
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                med sylt och grädde
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">L</Badge>
                <Badge variant="secondary">G</Badge>
                <Badge variant="secondary">V</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Hembakade kakor */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                🍪 Hembakade kakor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Sju sorters småkakor
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                sorterna varierar från gång till gång
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">L</Badge>
                <Badge variant="secondary">G</Badge>
                <Badge variant="secondary">V</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Paj */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                🥧 Paj
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Smulpaj med fyllning efter säsong, serveras med vaniljsås eller glass.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">L</Badge>
                <Badge variant="secondary">G</Badge>
                <Badge variant="secondary">V</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Smörgåsar Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary text-center">Smörgåsar</h2>
          <p className="text-center text-muted-foreground">Rejäla smörgåsar med:</p>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">🧀</div>
                <h3 className="font-semibold text-primary mb-2">Ost</h3>
                <div className="flex gap-1 justify-center">
                  <Badge variant="secondary" className="text-xs">L</Badge>
                  <Badge variant="secondary" className="text-xs">G</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">🦐</div>
                <h3 className="font-semibold text-primary mb-2">Ägg och räkor</h3>
                <div className="flex gap-1 justify-center">
                  <Badge variant="secondary" className="text-xs">L</Badge>
                  <Badge variant="secondary" className="text-xs">G</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">🥩</div>
                <h3 className="font-semibold text-primary mb-2">Köttbullar</h3>
                <p className="text-sm text-muted-foreground mb-2">med rödbetssallad</p>
                <div className="flex gap-1 justify-center">
                  <Badge variant="secondary" className="text-xs">L</Badge>
                  <Badge variant="secondary" className="text-xs">G</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-accent">
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">🍤</div>
                <h3 className="font-semibold text-primary mb-2">Jumbo</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Extra stor smörgås: räkor, ägg och grönsaker
                </p>
                <div className="flex gap-1 justify-center">
                  <Badge variant="secondary" className="text-xs">L</Badge>
                  <Badge variant="secondary" className="text-xs">G</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Dietary Information */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-xl text-primary text-center">
              Alternativ kost
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-muted-foreground">
              Vissa saker på menyn går att anpassa. Se markeringar efter varje rätt.
            </p>
            
            <div className="grid gap-4 md:grid-cols-3 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="text-sm">L</Badge>
                <p className="text-sm font-medium">Laktosfritt</p>
              </div>
              <div className="space-y-2">
                <Badge variant="secondary" className="text-sm">G</Badge>
                <p className="text-sm font-medium">Glutenfritt</p>
              </div>
              <div className="space-y-2">
                <Badge variant="secondary" className="text-sm">V</Badge>
                <p className="text-sm font-medium">Vegetariskt / Veganskt</p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground text-center mt-4">
              Vid övriga allergier eller specialkost, kontakta oss för besked om vad som finns att tillgå.
            </p>
          </CardContent>
        </Card>

        {/* Image Gallery */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary text-center">Från vårt kök</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/images/55___serialized1.jpg", alt: "Hembakat fika" },
              { src: "/images/sm_C3_A5kakor_201___serialized1.jpg", alt: "Småkakor" },
              { src: "/images/20___serialized1.jpg", alt: "Våfflor" },
              { src: "/images/Jes_201___serialized2.jpg", alt: "Café miljö" },
              { src: "/images/IMG_5___serialized1.JPG", alt: "Smörgåsar" },
              { src: "/images/28.jpg", alt: "Traditionell mat" }
            ].map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center space-y-4 py-8">
          <p className="text-muted-foreground">
            www.lottapaasen.se
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.facebook.com/people/Lotta-p%C3%A5-%C3%A5sen/100045411761881/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Facebook
            </a>
            <a 
              href="https://www.instagram.com/lottapaasen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
