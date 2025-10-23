import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "MealVerse has been a lifesaver! Fresh home-style meals every day without any hassle. The subscription model saves me both time and money.",
      rating: 5,
      image: "PS",
    },
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content: "We order bulk meals for our office every day. The quality is consistent, delivery is always on time, and the pricing is competitive.",
      rating: 5,
      image: "RK",
    },
    {
      name: "Anita Patel",
      role: "College Student",
      content: "As a student living away from home, finding healthy meals was tough. MealVerse vendors offer authentic taste at affordable prices!",
      rating: 5,
      image: "AP",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-muted-foreground">
            Real stories from real people who love MealVerse
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 hover:shadow-card transition-all">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-10 w-10 text-primary/20" />
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
