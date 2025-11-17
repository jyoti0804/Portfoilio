import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitch,
  Github,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-gradient-to-b from-secondary/20 to-secondary/10 overflow-hidden"
    >
      {/* Background floating circles */}
      <motion.div
        className="absolute -top-10 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl"
        animate={{ x: [-40, 40, -40], y: [-30, 30, -30] }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="relative container mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-[16px] md:text-[17px] max-w-xl mx-auto leading-relaxed">
            I’m always open to collaborations, opportunities, or general inquiries.
            Feel free to reach out—I’d love to discuss ideas and connect professionally.
          </p>
        </motion.div>

        {/* Two-column Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl relative z-10"
          >
            {[
              {
                icon: <Mail className="h-7 w-7 text-primary" />,
                title: "Email",
                content: (
                  <a
                    href="mailto:jyoti7417410098@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-[16px]"
                  >
                    jyoti7417410098@gmail.com
                  </a>
                ),
              },
              {
                icon: <Phone className="h-7 w-7 text-primary" />,
                title: "Phone",
                content: (
                  <a
                    href="tel:+919536535164"
                    className="text-muted-foreground hover:text-primary transition-colors text-[16px]"
                  >
                    +91 9536535164
                  </a>
                ),
              },
              {
                icon: <MapPin className="h-7 w-7 text-primary" />,
                title: "Location",
                content: <p className="text-muted-foreground text-[16px]">Meerut, India</p>,
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                {item.icon}
                <h4 className="font-semibold text-[17px] text-white">{item.title}</h4>
                {item.content}
              </div>
            ))}

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-[17px] text-white">Connect With Me</h4>
              <div className="flex justify-center gap-6">
                {[
                  {
                    icon: <Linkedin className="h-6 w-6" />,
                    link: "https://www.linkedin.com/in/jyoti-agarwal-043886300",
                    color: "hover:text-blue-500",
                    title: "LinkedIn",
                  },
                  {
                    icon: <MessageCircle className="h-6 w-6" />,
                    link: "https://wa.me/917417410098",
                    color: "hover:text-green-500",
                    title: "WhatsApp",
                  },
                  {
                    icon: <Github className="h-6 w-6" />,
                    link: "https://github.com/jyoti0804",
                    color: "hover:text-gray-400",
                    title: "GitHub",
                  },
                  {
                    icon: <Twitch className="h-6 w-6" />,
                    link: "#",
                    color: "hover:text-purple-500",
                    title: "Twitch",
                  },
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className={`p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:border-primary/40 shadow-md ${item.color}`}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

{/* Right Column - Contact Form */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl relative z-10"
>
  {/* Form Header */}
  <div className="mb-6 text-center">
    <h3 className="text-2xl font-bold text-primary mb-2">Send Me a Message</h3>
    <p className="text-muted-foreground text-[15px]">
      Have a question or want to work together? Fill out the form below and I’ll get back to you!
    </p>
  </div>

  <form className="flex flex-col gap-6">
    <input
      type="text"
      placeholder="Your Name"
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
    />
    <textarea
      placeholder="Your Message"
      rows={5}
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
    />
    <button
      type="submit"
      className="bg-primary text-white font-semibold py-3 rounded-lg shadow-md hover:bg-primary/90 transition-colors"
    >
      Send Message
    </button>
  </form>
</motion.div>


        </div>
      </div>
    </section>
  );
};
