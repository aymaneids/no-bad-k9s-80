
import { PawPrint, BookOpen, Brain, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: PawPrint,
      title: "Puppy Training",
      description: "Start your puppy's journey with positive reinforcement techniques. Build good habits early and create a strong foundation for lifelong learning.",
      price: "From $75/session",
    },
    {
      icon: BookOpen,
      title: "Basic Obedience",
      description: "Learn essential commands and establish good behavior patterns. Perfect for dogs of any age who need to master the basics.",
      price: "From $85/session",
    },
    {
      icon: Brain,
      title: "Behavior Modification",
      description: "Address specific behavioral challenges with proven positive reinforcement methods. Transform unwanted behaviors into positive responses.",
      price: "From $95/session",
    },
    {
      icon: Target,
      title: "Advanced Training",
      description: "Take your dog's skills to the next level with advanced commands and agility training. Perfect for dogs who have mastered the basics.",
      price: "From $100/session",
    },
  ];

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-inter text-navy">
            Our Training Services
          </h1>
          <p className="text-textGray font-dmSans text-lg max-w-2xl mx-auto">
            We offer a range of training services designed to help you and your dog build a 
            stronger bond through positive reinforcement methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-cream border-none shadow-lg">
              <CardHeader>
                <service.icon className="w-12 h-12 text-gold mb-4" />
                <CardTitle className="text-2xl font-bold font-inter text-navy">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-lg text-textGray font-dmSans">
                  {service.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-textGray font-dmSans">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6 bg-lightBlue p-12 rounded-2xl">
          <h2 className="text-3xl font-bold font-inter text-navy">
            Ready to Start Training?
          </h2>
          <p className="text-textGray font-dmSans text-lg max-w-2xl mx-auto">
            Book your first session today and begin your journey towards a better relationship 
            with your dog.
          </p>
          <Link to="/contact">
            <Button className="bg-gold hover:bg-gold/90 text-white px-8">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
