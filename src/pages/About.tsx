
import { GraduationCap, Trophy, Medal, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Best Junior Handler",
      description: "Australian Shepherd Club's National Specialty (2011)",
    },
    {
      icon: Medal,
      title: "High in Trial",
      description: "Multiple awards at agility trials",
    },
    {
      icon: Award,
      title: "Top 15 Ranking",
      description: "Ranked 13th in 2019 by the Australian Shepherd Club of America in agility",
    },
    {
      icon: GraduationCap,
      title: "10+ Years Experience",
      description: "Professional dog grooming and training experience",
    },
  ];

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-inter text-navy">
              Meet Bethany Bleiler
            </h1>
            <p className="text-textGray font-dmSans text-lg">
              With over a decade of experience in dog training and multiple awards in confirmation 
              and agility, Bethany brings expertise and passion to every training session. Her 
              positive reinforcement methods help create stronger bonds between dogs and their owners.
            </p>
            <div className="space-x-4">
              <Link to="/contact">
                <Button className="bg-gold hover:bg-gold/90">Contact Me</Button>
              </Link>
            </div>
          </div>
          <div className="bg-lightBlue h-[500px] rounded-2xl flex items-center justify-center">
            <span className="text-navy font-dmSans">Trainer Image Placeholder</span>
          </div>
        </div>

        <div className="space-y-12">
          <h2 className="text-3xl font-bold font-inter text-navy text-center">
            Achievements & Experience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-cream border-none shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <achievement.icon className="w-12 h-12 text-gold mx-auto" />
                  <h3 className="text-xl font-bold font-inter text-navy">
                    {achievement.title}
                  </h3>
                  <p className="text-textGray font-dmSans">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
