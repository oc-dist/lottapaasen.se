import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Coffee, Heart, Users, Calendar, MapPin, Facebook, Instagram } from "lucide-react";

const HomePage = () => {
  const scrollToGallery = () => {
    // This would scroll to gallery section or navigate to gallery page
    console.log("Navigate to gallery");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        subtitle="Fika var du vill"
        title="Välkommen till en av Skånes mest berömda kaffestugor"
        backgroundImage="/images/logga_20test_204.png"
        ctaText="Se mer i vårt Galleri"
        ctaAction={scrollToGallery}
      />

      {/* Location & Atmosphere */}
      <Section background="muted" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
            Idylliskt belägen vid Söderåsen
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Caféet ligger vackert belägen på Söderåsens norrsida i backen ned mot Ljungbyhed.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Välj om du vill njuta av din fika inne eller ute i vår fina trädgård. Vi har även några sittplatser ute som är skyddade mot väder och vind.
              </p>
              <div className="flex items-center gap-2 text-accent">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">I vår härliga trädgård</span>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/IMG_7_mellan.jpg"
                alt="Lotta på Åsen trädgård"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* What We Offer */}
      <Section padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            Njut av
          </h2>
          <p className="text-xl text-muted-foreground">
            Något för alla
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Fika"
            description="Traditionell svensk fika med hembakat"
            image="/images/67.jpg"
            icon={<Coffee className="w-8 h-8" />}
          />
          
          <FeatureCard
            title="Många sittplatser"
            description="Både inne och ute i vår vackra trädgård"
            icon={<Users className="w-8 h-8" />}
          />
          
          <FeatureCard
            title="Allergianpassat"
            description="Vi har alltid alternativ anpassade för allergier eller för dig som till exempel har valt att äta vegetarisk eller vegansk kost."
            icon={<Heart className="w-8 h-8" />}
          />
        </div>
        
        <div className="text-center mt-8">
          <Link href="/menu">
            <Button variant="outline" size="lg" className="rounded-full">
              Läs mer under vår Meny
            </Button>
          </Link>
        </div>
      </Section>

      {/* Traditional Waffles */}
      <Section background="card" padding="lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">Tradition sedan 1800-talet</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
              Vi bakar med tradition
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vi gör våra våfflor från grunden och tillagar dem efter recept med ursprung från 1800-talet.
              </p>
              <p className="text-lg font-medium text-primary">
                Serveras med sylt & grädde!
              </p>
            </div>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/images/sm_C3_A5kakor_201___serialized1.jpg"
              alt="Traditionella våfflor"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Events & Bookings */}
      <Section padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            För just ditt event
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Boka Lotta
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vi hjälper dig gärna med ditt företagsevenemang eller din privata tillställning. 
            Du kan boka hela lokalen, trädgården eller del av lokalen under hela året.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Bussresor",
            "Föreningsträffar", 
            "Begravningskaffe",
            "Födelsedagar",
            "Möhippa/svensexa",
            "Dop m.m."
          ].map((service, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">{service}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/contact">
            <Button size="lg" className="rounded-full">
              Kontakta oss för bokning
            </Button>
          </Link>
        </div>
      </Section>

      {/* History */}
      <Section background="muted" padding="lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/images/39___serialized3.jpg"
              alt="Historien om Lotta"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <Badge variant="secondary" className="mb-4">Sedan 1978</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
              Anpassat för dig
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Vi är ett väletablerat företag som funnits på söderåsen sedan 1978. Det var Lotten Plahn som i samarbete med bussresor startade caféet år 1978.
              </p>
              <p>
                Huset som caféet ligger i idag härstammar från 1800-talet och det finns många historier som cirkulerar i bygden om familjen och dessa byggnader.
              </p>
              <p>
                Marianne och Thomas Dahl tog över caféet år 2020 och driver det i egen regi. Tillsammans med deras personal erbjuder de äkta gammeldags fika och goda smörgåsar.
              </p>
              <p className="text-primary font-medium text-lg">
                Varmt välkomna hit!
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Dog Friendly */}
      <Section padding="md">
        <Card className="max-w-2xl mx-auto text-center p-8 bg-accent/10 border-accent/20">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">
              Vi är också välkomna
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utomhus i vår trädgård är det tillåtet att ha med sig sin skötsamma och kopplade hund under fikapausen.
            </p>
            <p className="text-primary font-medium">
              Vi bjuder på vatten!
            </p>
          </CardContent>
        </Card>
      </Section>

      {/* Söderåsen Area */}
      <Section background="card" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            Besök oss på söderåsen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-serif">UPPLEVELSER</h3>
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Fantastisk natur med spännande lekplatser, äventyrliga vandringsleder för stora och små samt gott om djur, både vilda och tama&rdquo;
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-serif">SMAKRIKT</h3>
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Här finns många möjligheter att smaka på lokala delikatesser och att ta del av riktigt mathantverk samt möjlighet att köpa råvarorna direkt från bonden&rdquo;
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-serif">KREATIVT</h3>
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Runt söderåsen finns flertalet kreativa företagare som bjuder på riktigt hantverk. Här finns också gott om loppisar och olika kurser om du vill vara kreativ själv&rdquo;
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact & Social */}
      <Section padding="md">
        <Card className="max-w-md mx-auto text-center p-6">
          <CardContent className="p-0 space-y-4">
            <h3 className="text-xl font-bold text-foreground font-serif">
              Följ oss
            </h3>
            <p className="text-muted-foreground">www.lottapaasen.se</p>
            <div className="flex justify-center gap-4">
              <Link href="https://www.facebook.com/people/Lotta-p%C3%A5-%C3%A5sen/100045411761881/" target="_blank">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
              </Link>
              <Link href="https://www.instagram.com/lottapaasen/" target="_blank">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </Section>
    </Layout>
  );
};

export default HomePage;
