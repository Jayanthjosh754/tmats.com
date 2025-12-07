import { 
  ArrowRightLeft, 
  Camera, 
  Bike, 
  Users, 
  Clock, 
  Navigation,
  ParkingCircle,
  ShieldAlert,
  BarChart3
} from "lucide-react";
import servicesImage from "@/assets/services-tech.jpg";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: ArrowRightLeft,
      title: "Turning Movement Counts",
      description: "Comprehensive intersection analysis tracking vehicle movements across all directions.",
    },
    {
      icon: BarChart3,
      title: "Link Flow Traffic Counts",
      description: "Accurate traffic volume measurements on road segments for capacity planning.",
    },
    {
      icon: Bike,
      title: "Bicycle Counts",
      description: "Specialized counting services for cycling infrastructure planning and analysis.",
    },
    {
      icon: Users,
      title: "Pedestrian Counts",
      description: "Detailed pedestrian flow analysis for walkability studies and safety assessments.",
    },
    {
      icon: Clock,
      title: "Queue Length Surveys",
      description: "Traffic queue measurement to optimize signal timing and reduce congestion.",
    },
    {
      icon: Navigation,
      title: "Roundabout Counts",
      description: "Complex roundabout traffic pattern analysis for efficiency improvements.",
    },
    {
      icon: ParkingCircle,
      title: "Parking Surveys",
      description: "Comprehensive parking utilization studies and demand forecasting.",
    },
    {
      icon: Camera,
      title: "Number Plate Recognition",
      description: "Advanced ANPR technology for origin-destination studies and traffic analysis.",
    },
    {
      icon: ShieldAlert,
      title: "Illegal Movement Survey",
      description: "Identification and documentation of traffic violations for safety improvements.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive traffic survey solutions tailored to your needs
          </p>
        </motion.div>

        {/* Featured Service Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="mb-16 overflow-hidden rounded-2xl shadow-strong"
        >
          <img
            src={servicesImage}
            alt="Traffic monitoring technology"
            className="w-full h-64 md:h-96 object-cover"
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-primary/50 cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-all duration-300"
              >
                <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-all duration-300" />
              </motion.div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
