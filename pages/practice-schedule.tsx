
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Phone } from "lucide-react";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import Image from "next/image";

export default function OpeningHoursPage() {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 p-8 md:p-12">
          {/* Background Logo */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <Image
              src="/images/logga_20test_204.png"
              alt="Lotta på Åsen Logo"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          
          <div className="relative z-10 text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Nya öppettider 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Nya öppettider för sommaren och hösten 2025
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Vi tar emot bokningar av större sällskap även andra tider
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Phone className="mr-2 h-4 w-4" />
              Kontakta oss
            </Button>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full translate-y-12 -translate-x-12"></div>
        </div>

        {/* Opening Hours 2025 */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
              <Calendar className="h-8 w-8" />
              Öppettider År 2025
            </h2>
            <p className="text-muted-foreground">
              Följande datum har vi öppet mellan kl 11.00-17.00 (Köket stänger kl 16.45)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* June Schedule */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-primary flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Juni 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {[1, 6, 7, 8, 14, 15, 21, 22, 28, 29].map((date) => (
                      <Badge key={date} variant="secondary" className="text-sm">
                        {date}/6
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    <Clock className="inline h-4 w-4 mr-1" />
                    11:00 - 17:00 (Köket stänger 16:45)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Summer Schedule */}
            <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader className="bg-accent/5">
                <CardTitle className="text-primary flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Sommarsäsong
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <p className="font-semibold text-primary">1 juli - 10 augusti</p>
                    <p className="text-sm text-muted-foreground">
                      Tisdag - Söndag
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <Clock className="inline h-4 w-4 mr-1" />
                    11:00 - 17:00 (Köket stänger 16:45)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Weekend Schedule */}
          <Card className="border-2 border-orange-200 hover:border-orange-300 transition-colors">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-primary flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Helgöppet - Augusti & September
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { dates: "16-17/8", month: "Augusti" },
                  { dates: "23-24/8", month: "Augusti" },
                  { dates: "30-31/8", month: "Augusti" },
                  { dates: "6-7/9", month: "September" },
                  { dates: "13-14/9", month: "September" },
                  { dates: "20-21/9", month: "September" },
                  { dates: "27-28/9", month: "September" },
                ].map((weekend, index) => (
                  <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
                    <Badge variant="outline" className="mb-2">
                      {weekend.dates}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{weekend.month}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                <Clock className="inline h-4 w-4 mr-1" />
                11:00 - 17:00 (Köket stänger 16:45)
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Special Occasions */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-green-200 hover:border-green-300 transition-colors">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-primary text-center">
                Speciella Tillfällen 2025
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { occasion: "Nationaldagen", status: "Öppet", time: "11:00-17:00", color: "blue" },
                  { occasion: "Pingstafton", status: "Öppet", time: "11:00-17:00", color: "green" },
                  { occasion: "Pingstdagen", status: "Öppet", time: "11:00-17:00", color: "green" },
                  { occasion: "Midsommarafton", status: "Stängt", time: "", color: "red" },
                  { occasion: "Midsommardagen", status: "Öppet", time: "11:00-17:00", color: "green" },
                ].map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium text-primary">{event.occasion}</p>
                      {event.time && (
                        <p className="text-xs text-muted-foreground">{event.time}</p>
                      )}
                    </div>
                    <Badge 
                      variant={event.status === "Öppet" ? "default" : "destructive"}
                      className={event.status === "Öppet" ? "bg-green-100 text-green-800 hover:bg-green-200" : ""}
                    >
                      {event.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  Vill ni komma andra tider?
                </h3>
                <p className="text-muted-foreground">
                  Sällskap som vill komma andra tider, ring för bokning
                </p>
                <div className="flex items-center justify-center gap-2 text-lg font-semibold text-primary">
                  <Phone className="h-5 w-5" />
                  0739 - 44 11 69
                </div>
                <div className="pt-4 border-t border-border/50 space-y-3">
                  <p className="text-sm text-muted-foreground">
                    www.lottapaasen.se
                  </p>
                  <SocialMediaLinks />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
