import { Search, CalendarCheck, Truck, Star } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse Vendors",
      description: "Discover verified local kitchens and tiffin services in your area",
    },
    {
      icon: CalendarCheck,
      title: "Choose Your Plan",
      description: "Pick daily, weekly, or monthly subscription plans that suit your needs",
    },
    {
      icon: Truck,
      title: "Fresh Delivery",
      description: "Get hot meals delivered to your doorstep at your preferred time",
    },
    {
      icon: Star,
      title: "Enjoy & Review",
      description: "Savor delicious meals and share your experience with the community",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-primary">MealVerse</span> Works
          </h2>
          <p className="text-muted-foreground">
            Getting your favorite meals is easier than ever. Just four simple steps to deliciousness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/20 to-transparent" />
              )}
              
              <div className="text-center space-y-4">
                <div className="relative inline-flex">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative h-24 w-24 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
