import { motion } from "framer-motion";
import { Building2, Users2 } from "lucide-react";
import companyBuilding from "@/assets/company-building.jpg";
import officeInterior from "@/assets/office-interior.jpg";

const Gallery = () => {
  const images = [
    {
      src: companyBuilding,
      title: "Our Modern Headquarters",
      description: "State-of-the-art facility with cutting-edge technology",
      icon: Building2
    },
    {
      src: officeInterior,
      title: "Collaborative Workspace",
      description: "Where innovation meets expertise",
      icon: Users2
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Our Facilities
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience world-class infrastructure designed for excellence
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl glass-card"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden"
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-8 text-white"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-primary/80 rounded-xl mb-4"
                >
                  <image.icon className="h-6 w-6" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                <p className="text-white/90">{image.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;