import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Heart, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "We partner only with FSSAI certified vendors who maintain the highest hygiene standards.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We're here to make meal management effortless.",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Every vendor is thoroughly verified and monitored for consistent quality.",
    },
    {
      icon: TrendingUp,
      title: "Vendor Success",
      description: "We empower local kitchens to grow their business digitally.",
    },
  ];

  const stats = [
    { number: "100+", label: "Verified Vendors" },
    { number: "10k+", label: "Happy Customers" },
    { number: "50k+", label: "Meals Delivered" },
    { number: "15+", label: "Cities" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                About <span className="text-primary">MealVerse</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                We're on a mission to connect communities with trusted local kitchens, 
                making fresh, home-style meals accessible to everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Target className="h-4 w-4" />
                  Our Mission
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Transforming How People Eat{" "}
                  <span className="text-primary">Every Day</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  MealVerse was born from a simple observation: people want reliable, 
                  home-style meals without the hassle of daily ordering or cooking. 
                  At the same time, talented home cooks and small kitchens needed a 
                  platform to reach more customers.
                </p>
                <p className="text-muted-foreground">
                  We bridge this gap by creating a marketplace where trust, quality, 
                  and convenience come together. Our subscription model ensures predictable 
                  income for vendors and consistent meals for customers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-primary">Core Values</span>
              </h2>
              <p className="text-muted-foreground">
                These principles guide everything we do at MealVerse
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2">
                <CardContent className="p-8 md:p-12 space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold">Our Story</h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Founded in 2023, MealVerse started as a solution to a personal problem. 
                    Our founders, working professionals themselves, struggled to find reliable 
                    meal services that offered both quality and convenience.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    After experiencing inconsistent food delivery apps and missing home-cooked 
                    meals, they realized there was a better way. By creating a dedicated platform 
                    for subscription-based meal services, they could help both customers and 
                    local vendors thrive.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Today, MealVerse serves thousands of customers across multiple cities, 
                    partnering with over 100 verified vendors. We've expanded to include 
                    bulk ordering for corporate clients and events, while maintaining our 
                    core focus on quality, reliability, and community.
                  </p>

                  <div className="pt-6 border-t border-border">
                    <p className="text-lg font-semibold text-primary">
                      "Fresh meals from your favorite kitchens — delivered fresh, every day."
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">— The MealVerse Team</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
