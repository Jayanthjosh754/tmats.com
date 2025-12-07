import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/lib/emailjs-config";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trim whitespace from all fields
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    // Basic validation
    if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email format validation
    if (!validateEmail(trimmedData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Name length validation
    if (trimmedData.name.length < 2) {
      toast({
        title: "Invalid Name",
        description: "Please enter your full name (at least 2 characters).",
        variant: "destructive",
      });
      return;
    }

    // Message length validation
    if (trimmedData.message.length < 10) {
      toast({
        title: "Message Too Short",
        description: "Please provide more details in your message (at least 10 characters).",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if EmailJS is configured
      if (
        EMAILJS_CONFIG.PUBLIC_KEY === "YOUR_PUBLIC_KEY_HERE" ||
        EMAILJS_CONFIG.SERVICE_ID === "YOUR_SERVICE_ID_HERE" ||
        EMAILJS_CONFIG.TEMPLATE_ID === "YOUR_TEMPLATE_ID_HERE"
      ) {
        console.error("EmailJS is not configured. Please set up your EmailJS credentials.");
        toast({
          title: "Configuration Error",
          description: "Email service is not configured. Please contact the administrator.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Prepare email template parameters
      const templateParams = {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        from_name: trimmedData.name,
        from_email: trimmedData.email,
        phone: trimmedData.phone || "Not provided",
        message: trimmedData.message,
        // Additional fields for better email formatting
        name: trimmedData.name,
        email: trimmedData.email,
        subject: `New Contact Form Submission from ${trimmedData.name}`,
        reply_to: trimmedData.email,
        company_name: EMAILJS_CONFIG.COMPANY_NAME,
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      // Optional: send auto-reply to the sender if configured
      if (EMAILJS_CONFIG.AUTOREPLY_TEMPLATE_ID) {
        const autoReplyParams = {
          to_email: trimmedData.email,
          to_name: trimmedData.name,
          message: trimmedData.message,
          company_name: EMAILJS_CONFIG.COMPANY_NAME,
          // For convenience, include a support address users can reply to
          support_email: EMAILJS_CONFIG.TO_EMAIL,
        };
        try {
          await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.AUTOREPLY_TEMPLATE_ID,
            autoReplyParams
          );
        } catch (autoErr) {
          // Don't fail the form just because auto-reply failed; log quietly
          console.warn("Auto-reply send failed:", autoErr);
        }
      }

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@tm-ats.com",
      link: "mailto:info@tm-ats.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7386174007",
      link: "tel:+917386174007",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bengaluru, India",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
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
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next traffic analysis project? Contact us today
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-card transition-colors duration-300 group"
                >
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <info.icon className="h-6 w-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      {info.title}
                    </div>
                    <div className="text-muted-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Our team is available Monday through Friday, 9:00 AM to 6:00 PM. 
              We typically respond to inquiries within 24 hours.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[150px]"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <motion.div whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary shadow-soft hover:shadow-medium transition-all duration-300 text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="mr-2 h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
