import { Button } from "@/components/ui/button";
import { Building2, Users, CheckCircle2, ArrowRight } from "lucide-react";
import bulkOrderImage from "@/assets/bulk-order.jpg";

const BulkOrders = () => {
  const benefits = [
    "Custom menus for your event or office",
    "Flexible quantity and timing",
    "Dedicated account manager",
    "Competitive bulk pricing",
    "On-time guaranteed delivery",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
              <img
                src={bulkOrderImage}
                alt="Bulk catering"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-background border-2 border-primary rounded-2xl p-6 shadow-elevated">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">500+</p>
                    <p className="text-sm text-muted-foreground">Bulk Orders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              <Building2 className="h-4 w-4" />
              For Businesses & Events
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Bulk Orders for{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Corporate & Events
              </span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Planning office lunches, hostel meals, or event catering? Get instant quotes 
              and customized meal packages for groups of any size.
            </p>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button variant="hero" size="lg">
                Get Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Corporate Clients</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">200+</p>
                <p className="text-sm text-muted-foreground">Events Catered</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkOrders;
