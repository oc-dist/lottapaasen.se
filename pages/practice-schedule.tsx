
import Layout from "@/components/Layout";

export default function OpeningHoursPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary mb-4">
            Öppettider
          </h1>
          <p className="text-lg text-muted-foreground">
            Välkommen att besöka oss under våra öppettider
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold text-primary mb-4 text-center">
              Aktuella öppettider
            </h2>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="font-medium">Måndag</span>
                <span className="text-muted-foreground">Stängt</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="font-medium">Tisdag</span>
                <span className="text-muted-foreground">10:00 - 16:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="font-medium">Onsdag</span>
                <span className="text-muted-foreground">10:00 - 16:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="font-medium">Torsdag</span>
                <span className="text-muted-foreground">10:00 - 16:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="font-medium">Fredag</span>
                <span className="text-muted-foreground">10:00 - 16:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="font-medium">Lördag</span>
                <span className="text-muted-foreground">10:00 - 17:00</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium">Söndag</span>
                <span className="text-muted-foreground">10:00 - 17:00</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-muted p-4 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Observera:</strong> Öppettiderna kan variera under helger och 
              speciella evenemang. Kontakta oss för aktuell information.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
