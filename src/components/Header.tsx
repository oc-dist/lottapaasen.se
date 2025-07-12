import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-primary">Lotta på Åsen</h1>
            <p className="hidden sm:block text-sm text-muted-foreground">
              Klassisk kaffestuga sedan 1978
            </p>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
