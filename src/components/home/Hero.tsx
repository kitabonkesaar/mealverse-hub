import { Button } from "@/components/ui/button";
import { Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-meals.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious meals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            100+ Verified Vendors
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Fresh Meals from Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Favorite Kitchens
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl">
            Subscribe to daily meal plans or order in bulk. Reliable, affordable, and delicious meals 
            delivered fresh to your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for vendors or cuisines..."
                className="pl-10 h-12"
              />
            </div>
            <Button variant="hero" size="lg" className="h-12">
              Explore Vendors
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">
                ✓
              </div>
              <div>
                <p className="font-semibold text-sm">FSSAI Certified</p>
                <p className="text-xs text-muted-foreground">100% Safe</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">
                ⭐
              </div>
              <div>
                <p className="font-semibold text-sm">4.8 Rating</p>
                <p className="text-xs text-muted-foreground">10k+ Reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">
                🚚
              </div>
              <div>
                <p className="font-semibold text-sm">On-Time Delivery</p>
                <p className="text-xs text-muted-foreground">95% Success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
