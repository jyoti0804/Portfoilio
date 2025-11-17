import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "The Fit Club",
    description:
      "A responsive fitness management web app for browsing workouts, tracking progress, and personalized training plans.",
    image: "/fitclub.png",
    tags: [
      "TypeScript",
      "React.js",
      "Redux",
      "Framer Motion",
      "Shadcn UI",
      "Tailwind CSS",
      "Clerk",
      "Axios",
    ],
    demoUrl: "https://the-fit-club-kohl.vercel.app/",
    githubUrl: "https://github.com/jyoti0804/The-Fit-Club",
  },
  {
    id: 2,
    title: "MyAdmin Dashboard",
    description:
      "A fully responsive admin panel with analytics, user management, and real-time data visualization.",
    image: "/admin-dashboard.png",
    tags: ["JavaScript", "React.js", "Framer Motion", "MUI", "Clerk"],
    demoUrl: "https://my-admin-dashboard-fhah.vercel.app/",
    githubUrl: "https://github.com/jyoti0804/MyAdmin-Dashboard",
  },
  {
    id: 3,
    title: "Fresh Fruits Store",
    description:
      "An intuitive e-commerce web app for ordering fresh fruits with smooth UX and optimized performance.",
    image: "/fruits-store.png",
    tags: ["JavaScript", "React.js", "Redux", "Axios"],
    demoUrl: "https://jyoti-fresh-fruits-store.vercel.app/",
    githubUrl: "https://github.com/jyoti0804/Fresh-Fruits-Store",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one focuses on performance,
          clean UI, and modern development practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-card rounded-lg overflow-hidden shadow-xs border border-transparent hover:border-primary transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[230px] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/jyoti0804"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
