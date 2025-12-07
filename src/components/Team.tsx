import { Users, Award, TrendingUp, CheckCircle2, Linkedin, Mail } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import ceoImage from "@/assets/ceo-profile.jpg";
import directorImage from "@/assets/director-profile.jpg";

const AnimatedCounter = ({ value }: { value: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
    const controls = animate(count, numericValue, {
      duration: 2,
      ease: "easeOut"
    });

    return controls.stop;
  }, [value, count]);

  const suffix = value.replace(/[0-9]/g, '');
  
  return (
    <motion.span ref={nodeRef}>
      <motion.span>{rounded}</motion.span>{suffix}
    </motion.span>
  );
};

const Team = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Expert Professionals" },
    { icon: Award, value: "500+", label: "Projects Completed" },
    { icon: TrendingUp, value: "99%", label: "Client Satisfaction" },
    { icon: CheckCircle2, value: "24 Hours", label: "Support Available" },
  ];

  const leaders = [
    {
      name: "Bhaskar",
      role: "Chief Executive Officer",
      image: ceoImage,
      email: "info@tmats.com",
      linkedin: "#"
    },
    {
      name: "Mounika",
      role: "Director of Operations",
      image: directorImage,
      email: "mounika@tmats.com",
      linkedin: "#"
    }
  ];

  return (
    <section id="team" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle orange accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Leadership
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Meet the visionaries driving excellence in traffic analysis
          </p>
        </motion.div>

        {/* Leadership Profiles */}
        <div className={`grid ${leaders.length === 1 ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"} gap-12 mb-20 max-w-5xl mx-auto place-items-center justify-center`}>
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl w-full max-w-lg mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative mb-6 overflow-hidden rounded-xl mx-auto w-full aspect-[4/5]"
              >
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="absolute inset-0 w-full h-full object-cover object-[center_15%]"
                />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-2 text-center">{leader.name}</h3>
              <p className="text-primary font-semibold mb-6 text-center">{leader.role}</p>
              
              <div className="flex gap-4 justify-center">
                <motion.a
                  href={`mailto:${leader.email}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-3 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors"
                  title={leader.email}
                >
                  <Mail className="h-5 w-5 text-primary" />
                </motion.a>
                <motion.a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="p-3 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              className="text-center"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-4"
              >
                <stat.icon className="h-8 w-8 text-primary" />
              </motion.div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-white/80 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Team Description */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg text-white/90 leading-relaxed mb-6">
            Our team comprises certified traffic engineers, data analysts, and technology specialists with decades of combined experience in transportation planning and traffic management.
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            We leverage cutting-edge technology and proven methodologies to deliver insights that drive better decision-making for transportation infrastructure projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
