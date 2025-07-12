
import Layout from "@/components/Layout";

export default function MenuPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary mb-4">
            Vår Meny
          </h1>
          <p className="text-lg text-muted-foreground">
            Hembakat fika och traditionella rätter serverade med kärlek
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold text-primary mb-4">Våfflor</h2>
            <p className="text-muted-foreground mb-3">
              Våra berömda våfflor bakade enligt 1800-talsrecept
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Klassisk våffla med sylt och grädde</li>
              <li>• Våffla med färska bär</li>
              <li>• Våffla med glass</li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold text-primary mb-4">Hembakat</h2>
            <p className="text-muted-foreground mb-3">
              Färskt bakade kakor och bullar varje dag
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Kanelbullar</li>
              <li>• Prinsesstårta</li>
              <li>• Sockerkaka</li>
              <li>• Scones med sylt</li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold text-primary mb-4">Smörgåsar</h2>
            <p className="text-muted-foreground mb-3">
              Närproducerade ingredienser från lokala leverantörer
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Räksmörgås</li>
              <li>• Skinksmörgås</li>
              <li>• Vegetarisk smörgås</li>
              <li>• Dagens soppa</li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold text-primary mb-4">Drycker</h2>
            <p className="text-muted-foreground mb-3">
              Kaffe, te och andra läskande drycker
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Nybryggt kaffe</li>
              <li>• Olika tesorter</li>
              <li>• Varm choklad</li>
              <li>• Kalla drycker</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
