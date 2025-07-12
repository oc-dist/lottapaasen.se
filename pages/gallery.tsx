
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

export default function GalleryPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary mb-4">
            Galleri
          </h1>
          <p className="text-lg text-muted-foreground">
            Bilder från vår vackra kaffestuga och naturskön trädgård
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder cards for gallery images */}
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 mx-auto mb-2 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📷</span>
                    </div>
                    <p className="text-sm">Bild {index + 1}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-card p-6 rounded-lg border border-border max-w-md mx-auto">
            <h2 className="text-lg font-semibold text-primary mb-2">
              Besök oss
            </h2>
            <p className="text-sm text-muted-foreground">
              Upplev själv den vackra miljön och den autentiska atmosfären 
              som gör Lotta på Åsen så speciell.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
