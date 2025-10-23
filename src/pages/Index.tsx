import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedVendors from "@/components/home/FeaturedVendors";
import SubscriptionBenefits from "@/components/home/SubscriptionBenefits";
import BulkOrders from "@/components/home/BulkOrders";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col pb-20 md:pb-0">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <FeaturedVendors />
        <SubscriptionBenefits />
        <BulkOrders />
        <Testimonials />
        <CTA />
      </main>
      <MobileNav />
      <Footer className="hidden md:block" />
    </div>
  );
};

export default Index;
