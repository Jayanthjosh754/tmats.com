import { Target, Eye, Award } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide cutting-edge traffic monitoring solutions that help cities optimize transportation infrastructure and improve traffic flow.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "Leading the future of intelligent traffic management through innovative technology and data-driven insights.",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Excellence, innovation, and reliability in every project we undertake, ensuring accurate data and actionable insights.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
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
            About <span className="text-gradient">TM-ATS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in traffic analysis and transportation solutions
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={aboutImage}
              alt="Professional team analyzing traffic data"
              className="rounded-2xl shadow-strong w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Who We Are
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a leading provider of comprehensive traffic survey and analysis services, dedicated to helping municipalities, developers, and transportation planners make informed decisions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With advanced technology and expert analysis, we deliver accurate traffic data that supports infrastructure development, traffic management strategies, and urban planning initiatives.
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6"
              >
                <value.icon className="h-7 w-7 text-primary-foreground" />
              </motion.div>
              <h4 className="text-xl font-bold text-foreground mb-4">
                {value.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
