import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Calendar, ShieldCheck, Clock, Zap, Heart } from "lucide-react";

const SubscriptionBenefits = () => {
  const benefits = [
    {
      icon: Wallet,
      title: "Save Up to 30%",
      description: "Subscription plans are more affordable than daily orders",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Calendar,
      title: "Flexible Plans",
      description: "Pause, skip, or modify your meals anytime",
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      icon: Clock,
      title: "Time Saver",
      description: "No daily ordering hassle. Set it and forget it",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assured",
      description: "FSSAI certified vendors with hygiene standards",
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      icon: Zap,
      title: "Priority Delivery",
      description: "Subscribers get guaranteed delivery slots",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Heart,
      title: "Healthy Choices",
      description: "Balanced meals planned by nutrition experts",
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">Subscriptions</span>?
          </h2>
          <p className="text-muted-foreground">
            Join thousands of satisfied customers enjoying hassle-free daily meals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 hover:shadow-card transition-all duration-300 group">
              <CardContent className="p-6 space-y-4">
                <div className={`h-14 w-14 rounded-xl ${benefit.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <benefit.icon className={`h-7 w-7 ${benefit.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionBenefits;
