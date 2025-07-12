
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary mb-4">
            Kontakta oss
          </h1>
          <p className="text-lg text-muted-foreground">
            Vi ser fram emot att höra från dig och välkomna dig till vår kaffestuga
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MapPin className="h-5 w-5" />
                Adress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Lotta på Åsen<br />
                Söderåsen Nationalpark<br />
                Skåne, Sverige
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Phone className="h-5 w-5" />
                Telefon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                +46 (0)XX XXX XX XX
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Mail className="h-5 w-5" />
                E-post
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                info@lottapaasen.se
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Clock className="h-5 w-5" />
                Öppettider
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Tisdag - Fredag: 10:00 - 16:00</p>
                <p>Lördag - Söndag: 10:00 - 17:00</p>
                <p>Måndag: Stängt</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-primary mb-4 text-center">
            Bokning för evenemang
          </h2>
          <p className="text-muted-foreground text-center mb-4">
            Vi erbjuder möjlighet att boka vår kaffestuga för privata evenemang, 
            företagsmöten och speciella tillfällen.
          </p>
          <p className="text-sm text-muted-foreground text-center">
            Kontakta oss via telefon eller e-post för mer information om 
            bokningar och priser.
          </p>
        </div>
      </div>
    </Layout>
  );
}
