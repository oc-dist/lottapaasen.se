import Layout from "@/components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Välkommen till Lotta på Åsen
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            En klassisk kaffestuga idylliskt belägen vid Söderåsen, Skåne. 
            Här serverar vi hembakat fika, våfflor bakade enligt 1800-talsrecept 
            och smörgåsar i en genuin miljö med naturskön trädgård.
          </p>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border max-w-md mx-auto">
          <h2 className="text-lg font-semibold text-primary mb-2">
            Sedan 1978
          </h2>
          <p className="text-sm text-muted-foreground">
            Med anor från 1978 erbjuder vi en autentisk upplevelse av svensk 
            kaffestugstradition i hjärtat av Söderåsens naturreservat.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
