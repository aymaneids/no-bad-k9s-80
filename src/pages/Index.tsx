
import { PawPrint, Heart, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold font-inter text-navy">
              Building Strong Bonds Through <span className="text-gold">Positive Training</span>
            </h1>
            <p className="text-xl text-textGray font-dmSans max-w-2xl mx-auto">
              Professional dog training services that focus on positive reinforcement for a happier relationship with your furry friend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/services" className="bg-gold text-white px-8 py-3 rounded-full font-dmSans hover:bg-gold/90 transition-colors">
                View Our Services
              </Link>
              <Link to="/contact" className="bg-lightBlue text-navy px-8 py-3 rounded-full font-dmSans hover:bg-lightBlue/80 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-inter text-navy text-center mb-12">
            Our Training Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: PawPrint,
                title: "Puppy Training",
                description: "Start your puppy's journey with positive reinforcement techniques.",
              },
              {
                icon: Heart,
                title: "Basic Obedience",
                description: "Build a strong foundation of essential commands and behaviors.",
              },
              {
                icon: GraduationCap,
                title: "Behavior Modification",
                description: "Address specific behavioral challenges with proven methods.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-cream p-8 rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold font-inter text-navy mb-2">{service.title}</h3>
                <p className="text-textGray font-dmSans">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-inter text-navy">
                Meet Bethany Bleiler
              </h2>
              <p className="text-textGray font-dmSans">
                With over a decade of experience in dog training and multiple awards in confirmation and agility, Bethany brings expertise and passion to every training session.
              </p>
              <Link
                to="/about"
                className="inline-block bg-navy text-white px-8 py-3 rounded-full font-dmSans hover:bg-navy/90 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="bg-lightBlue h-[400px] rounded-2xl flex items-center justify-center">
              <span className="text-navy font-dmSans">Trainer Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
