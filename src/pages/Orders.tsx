import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone, Package } from "lucide-react";

const Orders = () => {
  const orders = [
    {
      id: "ORD001",
      vendor: "Authentic Thali Kitchen",
      status: "Delivered",
      date: "Today, 1:30 PM",
      items: "Lunch Pack",
      price: 99,
      rating: null,
    },
    {
      id: "ORD002",
      vendor: "South Spice Express",
      status: "On the way",
      date: "Today, 7:00 PM",
      items: "Dinner Pack",
      price: 129,
      rating: null,
    },
    {
      id: "ORD003",
      vendor: "Daily Meal Box",
      status: "Delivered",
      date: "Yesterday, 12:45 PM",
      items: "Lunch Pack",
      price: 119,
      rating: 5,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-secondary/10 text-secondary";
      case "On the way":
        return "bg-primary/10 text-primary";
      case "Preparing":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen flex flex-col pb-20 md:pb-0">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">My Orders</h1>
            <p className="text-muted-foreground">Track and manage your meal deliveries</p>
          </div>

          <div className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id} className="overflow-hidden border-2 hover:border-primary/20 transition-all rounded-2xl">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{order.vendor}</h3>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Order #{order.id}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-primary">₹{order.price}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Package className="h-4 w-4" />
                      <span>{order.items}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{order.date}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {order.status === "On the way" && (
                      <>
                        <Button variant="hero" className="flex-1 h-10" size="sm">
                          <MapPin className="h-4 w-4" />
                          Track Order
                        </Button>
                        <Button variant="outline" size="icon" className="h-10 w-10">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                    {order.status === "Delivered" && !order.rating && (
                      <Button variant="outline" className="flex-1 h-10" size="sm">
                        Rate Order
                      </Button>
                    )}
                    {order.status === "Delivered" && order.rating && (
                      <Button variant="ghost" className="flex-1 h-10" size="sm">
                        Reorder
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {orders.length === 0 && (
            <Card className="text-center p-12 rounded-3xl">
              <div className="max-w-sm mx-auto space-y-4">
                <Package className="h-16 w-16 mx-auto text-muted-foreground/50" />
                <h3 className="text-xl font-semibold">No orders yet</h3>
                <p className="text-muted-foreground">
                  Start exploring vendors and place your first order!
                </p>
                <Button variant="hero" className="mt-4">
                  Browse Vendors
                </Button>
              </div>
            </Card>
          )}
        </div>
      </main>
      <MobileNav />
    </div>
  );
};

export default Orders;
