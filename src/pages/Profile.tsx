import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  User, MapPin, Bell, CreditCard, Heart, HelpCircle, 
  Settings, LogOut, ChevronRight, Star, Package 
} from "lucide-react";

const Profile = () => {
  const menuItems = [
    { icon: User, label: "Edit Profile", path: "/profile/edit" },
    { icon: MapPin, label: "Manage Addresses", path: "/addresses", badge: "2" },
    { icon: Package, label: "My Subscriptions", path: "/subscriptions", badge: "1" },
    { icon: CreditCard, label: "Payment Methods", path: "/payments" },
    { icon: Heart, label: "Favorite Vendors", path: "/favorites", badge: "5" },
    { icon: Bell, label: "Notifications", path: "/notifications" },
    { icon: HelpCircle, label: "Help & Support", path: "/support" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="min-h-screen flex flex-col pb-20 md:pb-0 bg-gradient-to-b from-primary/5 to-background">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6 md:py-8">
          {/* Profile Header */}
          <Card className="mb-6 rounded-3xl border-2 overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-primary to-secondary" />
            <CardContent className="relative pt-0 pb-6 px-6">
              <div className="flex items-start gap-4 -mt-12">
                <Avatar className="h-20 w-20 border-4 border-background shadow-lg">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground text-2xl font-bold">
                    SK
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 mt-14">
                  <h2 className="text-2xl font-bold">Satya Kumar</h2>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
                <Button variant="outline" size="sm" className="mt-14 rounded-full">
                  Edit
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">42</p>
                  <p className="text-xs text-muted-foreground">Orders</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">4.8</p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">1</p>
                  <p className="text-xs text-muted-foreground">Active Plan</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Menu Items */}
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:border-primary/20 transition-all cursor-pointer rounded-2xl"
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Logout */}
            <Card className="overflow-hidden hover:border-destructive/20 transition-all cursor-pointer rounded-2xl">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center">
                      <LogOut className="h-5 w-5 text-destructive" />
                    </div>
                    <span className="font-medium text-destructive">Logout</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Version Info */}
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>MealVerse v1.0.0</p>
          </div>
        </div>
      </main>
      <MobileNav />
    </div>
  );
};

export default Profile;
