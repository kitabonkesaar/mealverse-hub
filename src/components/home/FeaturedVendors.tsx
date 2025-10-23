import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import vendor1 from "@/assets/vendor-1.jpg";
import vendor2 from "@/assets/vendor-2.jpg";
import vendor3 from "@/assets/vendor-3.jpg";

const FeaturedVendors = () => {
  const vendors = [
    {
      id: 1,
      name: "Authentic Thali Kitchen",
      image: vendor1,
      rating: 4.8,
      reviews: 1245,
      cuisine: "North Indian",
      deliveryTime: "30-40 min",
      location: "Bhubaneswar",
      startingPrice: 99,
      tags: ["Vegetarian", "Jain Options"],
    },
    {
      id: 2,
      name: "South Spice Express",
      image: vendor2,
      rating: 4.9,
      reviews: 890,
      cuisine: "South Indian",
      deliveryTime: "25-35 min",
      location: "Cuttack",
      startingPrice: 89,
      tags: ["Breakfast Special", "Dosa"],
    },
    {
      id: 3,
      name: "Daily Meal Box",
      image: vendor3,
      rating: 4.7,
      reviews: 2100,
      cuisine: "Multi-Cuisine",
      deliveryTime: "35-45 min",
      location: "Bhubaneswar",
      startingPrice: 119,
      tags: ["Healthy", "Customizable"],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-primary">Vendors</span>
            </h2>
            <p className="text-muted-foreground">
              Handpicked kitchens offering the best subscription meal plans in your city
            </p>
          </div>
          <Link to="/vendors">
            <Button variant="outline" className="hidden sm:flex">
              View All
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vendors.map((vendor) => (
            <Card
              key={vendor.id}
              className="group hover:shadow-elevated transition-all duration-300 overflow-hidden border-2 hover:border-primary/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  {vendor.rating}
                  <span className="text-muted-foreground text-xs">({vendor.reviews})</span>
                </div>
              </div>

              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {vendor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{vendor.cuisine}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {vendor.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {vendor.deliveryTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {vendor.location}
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting from</p>
                    <p className="text-lg font-bold text-primary">₹{vendor.startingPrice}/day</p>
                  </div>
                  <Link to={`/vendor/${vendor.id}`}>
                    <Button variant="hero" size="sm">
                      View Plans
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link to="/vendors">
            <Button variant="outline" className="w-full">
              View All Vendors
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendors;
