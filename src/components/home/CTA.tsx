import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-secondary p-12 md:p-16">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">
              Ready to Transform Your Daily Meals?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of happy customers enjoying fresh, delicious meals every day. 
              Start your subscription today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-base h-14 px-8 bg-background text-foreground hover:bg-background/90"
              >
                <Smartphone className="h-5 w-5" />
                Get Started Now
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-base h-14 px-8 border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Become a Vendor
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  ✓
                </div>
                <span className="text-sm font-medium">No Hidden Charges</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  ✓
                </div>
                <span className="text-sm font-medium">Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  ✓
                </div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
