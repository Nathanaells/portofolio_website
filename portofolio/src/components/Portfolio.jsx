import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "WeatherApp",
      description:
        "Fullstack app with Express & Postgres, React + Globe.gl front-end, Google OAuth, and Google-Gemini chatbot for weather queries from database and user input.",
      tech: ["React", "Node.js", "PostgreSQL", "Express", "Globe.gl"],
      link: "https://weatherapp-zeta-bice.vercel.app/", // Ganti dengan link project Anda
      github: "#", // Ganti dengan link GitHub Anda
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool built with React Native and MongoDB. Real-time updates using GraphQL subscriptions and team collaboration features.",
      tech: ["React Native", "GraphQL", "MongoDB", "Apollo"],
      link: "#",
      github: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with REST API integration. Built with React and Tailwind CSS featuring responsive design.",
      tech: ["React", "Tailwind CSS", "REST API", "Chart.js"],
      link: "#",
      github: "#",
    },
    {
      title: "DriveSmart Educational Game",
      description:
        "Interactive educational game with UX/UI components and Behaviour Tree logic. Developed during internship at Spaceland Studio.",
      tech: ["Game Design", "UX/UI", "Interactive Design"],
      link: "#",
      github: "#",
    },
  ];

  const skills = {
    frontend: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST API",
      "Apollo GraphQL",
      "PostgreSQL",
      "MongoDB",
    ],
    tools: ["Git", "GitHub", "Postman", "VSCode", "Jest"],
    soft: [
      "Critical Thinking",
      "Problem Solving",
      "Team Collaboration",
      "Time Management",
    ],
  };

  const experiences = [
    {
      role: "Fullstack JavaScript Program",
      company: "Hacktiv8 Indonesia",
      period: "Sept 2025 - Dec 2025",
      description:
        "Graduated with final score of 98. Intensive training in frontend and backend development, API integration, and database implementation.",
      achievements: [
        "Built 10+ full-stack projects",
        "Mastered React and Node.js ecosystem",
        "Implemented RESTful and GraphQL APIs",
      ],
    },
    {
      role: "Game Designer",
      company: "Spaceland Studio",
      period: "Aug 2024 - Jan 2025",
      description:
        "Developed interactive UX/UI components for educational game DriveSmart.",
      achievements: [
        "Implemented Behaviour Tree logic",
        "Designed core interaction scripts",
        "Improved visual design and UX",
      ],
    },
    {
      role: "Digital Marketing Intern",
      company: "Yayasan Insan Sekolah Kasih",
      period: "Sept 2023 - Dec 2023",
      description:
        "Managed digital marketing strategies to improve school visibility.",
      achievements: [
        "Optimized social media branding",
        "Increased audience engagement",
        "Produced content for multiple platforms",
      ],
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-white">NS</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "skills",
                "experience",
                "projects",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-white transition-colors ${
                    activeSection === section ? "text-white" : "text-gray-400"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "home",
                "about",
                "skills",
                "experience",
                "projects",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-white/5 rounded-md text-gray-300 hover:text-white transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white flex items-center justify-center text-5xl font-bold text-black">
              NS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              Nathanael David
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
              Fullstack Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8">
              Front-End Developer with experience building responsive web and
              mobile applications. Passionate about creating elegant solutions
              and delivering exceptional user experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://github.com/Nathanaells"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-lg transition-colors font-medium"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/nathanaelsinaga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/5 rounded-lg transition-colors"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a
              href="mailto:nathanaelsinaga27@gmail.com"
              className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/5 rounded-lg transition-colors"
            >
              <Mail size={20} /> Email
            </a>
          </div>

          <button
            onClick={() => scrollToSection("projects")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-lg font-semibold text-lg transition-all"
          >
            View My Work <ChevronRight />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                Background
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                I'm a Fullstack Developer with a Bachelor's degree in
                Information Systems from Universitas Katolik Soegijapranata
                (GPA: 3.62). Recently graduated from Hacktiv8's intensive
                Fullstack JavaScript Program with a score of 98.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Skilled in building responsive web and mobile applications using
                modern technologies like React, Node.js, and various databases.
                I have experience in both frontend and backend development, with
                a strong foundation in UI/UX principles.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                Achievements
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Award className="text-white flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-white text-lg">
                      Grand Finalist
                    </p>
                    <p className="text-gray-400 text-base mt-1">
                      AI Innovation Challenge National 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="text-white flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-white text-lg">
                      Penghargaan Panitia
                    </p>
                    <p className="text-gray-400 text-base mt-1">
                      KKL Siega 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <GraduationCap
                    className="text-white flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <p className="font-semibold text-white text-lg">
                      Hacktiv8 Graduate
                    </p>
                    <p className="text-gray-400 text-base mt-1">
                      Final Score: 98/100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
            <div className="flex items-center gap-3 mb-5">
              <MapPin className="text-gray-300" size={24} />
              <span className="text-gray-300 text-base md:text-lg">
                Surakarta, Jawa Tengah
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-gray-300" size={24} />
              <span className="text-gray-300 text-base md:text-lg">
                081227446440
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white">
                <Code size={28} /> Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.frontend.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-2.5 bg-white/10 border border-white/20 rounded-lg text-base font-medium text-gray-200 hover:bg-white/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white">
                <Code size={28} /> Backend
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.backend.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-2.5 bg-white/10 border border-white/20 rounded-lg text-base font-medium text-gray-200 hover:bg-white/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white">
                <Code size={28} /> Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-2.5 bg-white/10 border border-white/20 rounded-lg text-base font-medium text-gray-200 hover:bg-white/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white">
                <Briefcase size={28} /> Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.soft.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-2.5 bg-white/10 border border-white/20 rounded-lg text-base font-medium text-gray-200 hover:bg-white/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-gray-300 font-medium text-lg">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-400 text-base mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                  {exp.description}
                </p>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300 text-base"
                    >
                      <ChevronRight
                        size={20}
                        className="flex-shrink-0 mt-1 text-gray-400"
                      />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all group"
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white group-hover:text-gray-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm font-medium text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-gray-200 rounded-lg text-base transition-colors font-medium"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 border border-white/20 hover:bg-white/10 rounded-lg text-base transition-colors text-gray-200"
                  >
                    <Github size={18} /> Code
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-gray-400 text-lg">
            More projects coming soon! Check my{" "}
            <a
              href="https://github.com/Nathanaells"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline font-medium"
            >
              GitHub
            </a>{" "}
            for updates.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Let's Work Together
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="mailto:nathanaelsinaga27@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-white text-black hover:bg-gray-200 rounded-lg transition-colors font-medium text-base md:text-lg"
            >
              <Mail size={22} /> nathanaelsinaga27@gmail.com
            </a>
            <a
              href="tel:+6281227446550"
              className="flex items-center gap-3 px-6 py-4 border border-white/20 hover:bg-white/10 rounded-lg transition-colors text-base md:text-lg text-gray-200"
            >
              <Phone size={22} /> +6281227446550
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Nathanaells"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/20 hover:bg-white/5 rounded-full transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/nathanaelsinaga"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/20 hover:bg-white/5 rounded-full transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>
            &copy; 2025 Nathanael David Hatoguan Sinaga. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
