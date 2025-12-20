import { Award, TrendingUp, Users, Sprout, Calendar, Trophy } from "lucide-react";
import { SectionDecorator } from "./DecorativeElements";


const milestones = [
  {
    year: "2012",
    title: "Farm Established",
    description: "Started with just 2 acres of land and a vision for sustainable farming.",
    icon: Sprout,
  },
  {
    year: "2015",
    title: "First Major Contract",
    description: "Secured partnership with local restaurants and hotels for regular supply.",
    icon: TrendingUp,
  },
  {
    year: "2018",
    title: "Cooperative Membership",
    description: "Joined Kenya Farmers Cooperative, expanding market reach significantly.",
    icon: Users,
  },
  {
    year: "2021",
    title: "Award Recognition",
    description: "Named Best Smallholder Farmer in Kiambu County agricultural awards.",
    icon: Trophy,
  },
];

const achievements = [
  { number: "10+", label: "Years Experience", icon: Calendar },
  { number: "500+", label: "Happy Customers", icon: Users },
  { number: "15", label: "Acres Farmed", icon: Sprout },
  { number: "5", label: "Awards Won", icon: Award },
];

const MilestonesSection = () => {
  return (
    <section id="milestones" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
     
      
      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Milestones & Achievements
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A decade of growth, dedication, and commitment to excellence
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all hover:shadow-card group"
            >
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit mx-auto mb-3">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                {item.number}
              </p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
            
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-start gap-6 mb-8 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:-translate-x-1/2 z-10" />
                
                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="p-5 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all hover:shadow-card group">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <milestone.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
