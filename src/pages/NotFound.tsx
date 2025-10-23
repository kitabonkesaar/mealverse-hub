import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Oops! The page you're looking for seems to have been moved or doesn't exist.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/">
                <Button variant="hero" size="lg">
                  <Home className="h-5 w-5" />
                  Go to Home
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={() => window.history.back()}>
                <ArrowLeft className="h-5 w-5" />
                Go Back
              </Button>
            </div>

            <div className="pt-12">
              <p className="text-sm text-muted-foreground">
                Looking for vendors?{" "}
                <Link to="/vendors" className="text-primary hover:underline font-medium">
                  Browse all vendors
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
