import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, MapPin, CheckCircle2, Phone, Mail } from "lucide-react";
import vendor1 from "@/assets/vendor-1.jpg";

const VendorDetail = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const vendor = {
    id: Number(id),
    name: "Authentic Thali Kitchen",
    image: vendor1,
    rating: 4.8,
    reviews: 1245,
    cuisine: "North Indian",
    deliveryTime: "30-40 min",
    location: "Satya Nagar, Bhubaneswar",
    phone: "+91 98765 43210",
    email: "contact@thalikitchen.com",
    description:
      "We specialize in authentic North Indian thalis with a perfect blend of traditional recipes and modern hygiene standards. Every meal is prepared fresh with quality ingredients.",
    tags: ["Vegetarian", "Jain Options", "FSSAI Certified"],
  };

  const menuItems = [
    { name: "Dal Makhani", price: 120, category: "Main Course" },
    { name: "Paneer Butter Masala", price: 150, category: "Main Course" },
    { name: "Tandoori Roti (2 pcs)", price: 30, category: "Breads" },
    { name: "Jeera Rice", price: 80, category: "Rice" },
    { name: "Mix Veg Curry", price: 100, category: "Main Course" },
    { name: "Raita", price: 40, category: "Sides" },
  ];

  const subscriptionPlans = [
    {
      name: "Daily Lunch",
      duration: "Per Day",
      price: 99,
      meals: ["1 Dal", "1 Sabzi", "4 Rotis", "Rice", "Salad"],
      popular: false,
    },
    {
      name: "Weekly Plan",
      duration: "7 Days",
      price: 649,
      originalPrice: 693,
      meals: ["Daily Lunch", "Free delivery", "Flexible days"],
      popular: true,
    },
    {
      name: "Monthly Plan",
      duration: "30 Days",
      price: 2499,
      originalPrice: 2970,
      meals: ["Daily Lunch", "Priority delivery", "Cancel anytime", "Special discounts"],
      popular: false,
    },
  ];

  const reviews = [
    {
      name: "Amit Kumar",
      rating: 5,
      comment: "Best tiffin service in town! Food is always fresh and tasty.",
      date: "2 days ago",
    },
    {
      name: "Sneha Patel",
      rating: 5,
      comment: "Hygienic packing and on-time delivery. Highly recommended!",
      date: "1 week ago",
    },
    {
      name: "Ravi Sharma",
      rating: 4,
      comment: "Good food quality. Portions could be slightly bigger.",
      date: "2 weeks ago",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <img
            src={vendor.image}
            alt={vendor.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </section>

        {/* Vendor Info */}
        <section className="relative -mt-20 z-10">
          <div className="container mx-auto px-4">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold mb-2">{vendor.name}</h1>
                      <p className="text-muted-foreground">{vendor.cuisine}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {vendor.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <span className="font-semibold">{vendor.rating}</span>
                        <span className="text-muted-foreground">({vendor.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-5 w-5" />
                        {vendor.deliveryTime}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-5 w-5" />
                        {vendor.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground">{vendor.description}</p>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <a href={`tel:${vendor.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                        <Phone className="h-4 w-4" />
                        {vendor.phone}
                      </a>
                      <a href={`mailto:${vendor.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                        <Mail className="h-4 w-4" />
                        {vendor.email}
                      </a>
                    </div>
                  </div>

                  <div className="lg:w-auto">
                    <Button variant="hero" size="lg" className="w-full lg:w-auto">
                      Start Subscription
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="plans" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
                <TabsTrigger value="plans">Subscription Plans</TabsTrigger>
                <TabsTrigger value="menu">Menu</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="plans" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {subscriptionPlans.map((plan, index) => (
                    <Card
                      key={index}
                      className={`relative overflow-hidden ${
                        plan.popular ? "border-2 border-primary shadow-elevated" : ""
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-secondary text-secondary-foreground">Most Popular</Badge>
                        </div>
                      )}
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                          <p className="text-sm text-muted-foreground">{plan.duration}</p>
                        </div>

                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-primary">₹{plan.price}</span>
                            {plan.originalPrice && (
                              <span className="text-lg text-muted-foreground line-through">
                                ₹{plan.originalPrice}
                              </span>
                            )}
                          </div>
                          {plan.originalPrice && (
                            <p className="text-xs text-secondary font-medium mt-1">
                              Save ₹{plan.originalPrice - plan.price}
                            </p>
                          )}
                        </div>

                        <ul className="space-y-2">
                          {plan.meals.map((meal, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                              <span>{meal}</span>
                            </li>
                          ))}
                        </ul>

                        <Button
                          variant={plan.popular ? "hero" : "outline"}
                          className="w-full"
                        >
                          Select Plan
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="menu" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {menuItems.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-xs text-muted-foreground">{item.category}</p>
                        </div>
                        <span className="text-lg font-bold text-primary">₹{item.price}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="space-y-4">
                  {reviews.map((review, index) => (
                    <Card key={index}>
                      <CardContent className="p-6 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                              {review.name.split(" ").map((n) => n[0]).join("")}
                            </div>
                            <div>
                              <p className="font-semibold">{review.name}</p>
                              <p className="text-xs text-muted-foreground">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VendorDetail;
