import { useState, useEffect } from "react";
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
      tech: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Express",
        "Globe.gl",
        "Supabase",
        "Sequelize",
        "Postgres",
      ],
      link: "https://weatherapp-zeta-bice.vercel.app/",
      github: "https://github.com/Nathanaells/WeatherApp",
    },
    {
      title: "Type Warrior",
      description:
        "Type Warrior – real-time typing battle game with React, Express & Postgres for REST API, Socket.io rooms, and Google Gemini–generated challenges.",
      tech: [
        "React",
        "Postgres",
        "Supabase",
        "Express",
        "SequelizeORM",
        "WebSocket",
        "Gemini Ai",
      ],
      link: "https://gp-1-pink.vercel.app",
      github: "https://github.com/Nathanaells/WeatherApp",
    },
    {
      title: "Mobile Social Media Dashboard",
      description:
        "Social Media App built with React Native, Apollo GraphQL, and MongoDB Compass, featuring user posts, likes, comments.",
      tech: [
        "React Native",
        "GraphQL",
        "Apollo GraphQL",
        "MongoDb Compass",
        "Redis",
      ],
      link: "https://expo.dev/preview/update?message=Pinterest&updateRuntimeVersion=1.0.0&createdAt=2025-11-29T13%3A47%3A06.855Z&slug=exp&projectId=469edd0e-b893-4c94-ae81-48f0d69a0164&group=66f6ab87-0b0f-4150-bf9a-fc7c474fd947",
      github: "https://github.com/Nathanaells/Mobile-Social-Media-App",
    },
    {
      title: "Simple Website Marketplace",
      description:
        "Simple Marketplace – fullstack app built with Next.js and TypeScript, featuring infinite scroll and delayed (debounced) search for fetching product data.",
      tech: ["Next.js", "TypeScript", "MongoDb Compass"],
      link: "https://my-uniqlo.vercel.app/home",
      github: "https://github.com/Nathanaells/simple-marketplace",
    },
  ];

  const skills = {
    frontend: [
      "React.js",
      "React Native",
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
        "Graduated with final score of 96. Intensive training in frontend and backend development, API integration, and database implementation.",
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="text-xl sm:text-2xl font-bold text-white">ND</div>

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
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20"
      >
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full bg-white flex items-center justify-center text-4xl sm:text-5xl font-bold text-black">
              ND
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 text-white px-2">
              Nathanael David
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-4 sm:mb-6 px-2">
              Fullstack Developer
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
              Full-Stack Developer with experience building and deploying web
              applications using Node.js, Express, React, Next.js, and
              TypeScript. Familiar with database management using MongoDB and
              Sequelize ORM, as well as API development and testing with Jest
              and Supertest. Experienced in deploying applications on Vercel and
              AWS, with a practical understanding of both frontend and backend
              workflows. Always keen to learn new technologies and improve
              existing solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
            <a
              href="https://github.com/Nathanaells"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black hover:bg-gray-200 rounded-lg transition-colors font-medium text-sm sm:text-base"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/nathanaelsinaga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-white/20 hover:bg-white/5 rounded-lg transition-colors text-sm sm:text-base"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="mailto:nathanaelsinaga27@gmail.com"
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-white/20 hover:bg-white/5 rounded-lg transition-colors text-sm sm:text-base"
            >
              <Mail size={18} /> Email
            </a>
          </div>

          <button
            onClick={() => scrollToSection("projects")}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black hover:bg-gray-200 rounded-lg font-semibold text-base sm:text-lg transition-all mx-4"
          >
            View My Work <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-12 lg:mb-16 text-center text-white px-2">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-white">
                Background
              </h3>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                I'm a Fullstack Developer with a Bachelor's degree in
                Information Systems from Universitas Katolik Soegijapranata
                (GPA: 3.62). Recently graduated from Hacktiv8's intensive
                Fullstack JavaScript Program with a score of 96.
              </p>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                Skilled in building responsive web and mobile applications using
                modern technologies like React, Node.js, and various databases.
                I have experience in both frontend and backend development, with
                a strong foundation in UI/UX principles.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-white">
                Achievements
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Award className="text-white flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white text-base sm:text-lg">
                      Grand Finalist
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base mt-1">
                      AI Innovation Challenge National 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <Award className="text-white flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white text-base sm:text-lg">
                      Penghargaan Panitia
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base mt-1">
                      KKL Siega 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <GraduationCap
                    className="text-white flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-white text-base sm:text-lg">
                      Hacktiv8 Graduate
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base mt-1">
                      Final Score: 96/100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 bg-white/5 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <MapPin className="text-gray-300 flex-shrink-0" size={20} />
              <span className="text-gray-300 text-sm sm:text-base lg:text-lg">
                Surakarta, Jawa Tengah
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-gray-300 flex-shrink-0" size={20} />
              <span className="text-gray-300 text-sm sm:text-base lg:text-lg break-all">
                081227446550
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white/[0.02]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-12 lg:mb-16 text-center text-white px-2">
            Skills & Technologies
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 text-white">
                <Code size={24} /> Frontend
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.frontend.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm sm:text-base font-medium text-gray-200 hover:bg-white/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 text-white">
                <Code size={24} /> Backend
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.backend.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm sm:text-base font-medium text-gray-200 hover:bg-white/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 text-white">
                <Code size={24} /> Tools
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.tools.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm sm:text-base font-medium text-gray-200 hover:bg-white/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 text-white">
                <Briefcase size={24} /> Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.soft.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm sm:text-base font-medium text-gray-200 hover:bg-white/20 transition-all"
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
      <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-12 lg:mb-16 text-center text-white px-2">
            Experience
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-gray-300 font-medium text-base sm:text-lg">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm sm:text-base mt-2 md:mt-0 md:text-right">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                  {exp.description}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base"
                    >
                      <ChevronRight
                        size={18}
                        className="flex-shrink-0 mt-0.5 sm:mt-1 text-gray-400"
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
      <section
        id="projects"
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white/[0.02]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-12 lg:mb-16 text-center text-white px-2">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all group"
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-gray-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-lg text-xs sm:text-sm font-medium text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-black hover:bg-gray-200 rounded-lg text-sm sm:text-base transition-colors font-medium"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 border border-white/20 hover:bg-white/10 rounded-lg text-sm sm:text-base transition-colors text-gray-200"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 sm:mt-12 text-gray-400 text-base sm:text-lg px-4">
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
      <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-white px-2">
            Let's Work Together
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed px-4">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4">
            <a
              href="mailto:nathanaelsinaga27@gmail.com"
              className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-white text-black hover:bg-gray-200 rounded-lg transition-colors font-medium text-sm sm:text-base lg:text-lg break-all"
            >
              <Mail size={20} className="flex-shrink-0" />
              <span className="text-sm sm:text-base">
                nathanaelsinaga27@gmail.com
              </span>
            </a>
            <a
              href="tel:+6281227446550"
              className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 border border-white/20 hover:bg-white/10 rounded-lg transition-colors text-sm sm:text-base lg:text-lg text-gray-200"
            >
              <Phone size={20} className="flex-shrink-0" /> +6281227446550
            </a>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6">
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
      <footer className="py-6 sm:py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm sm:text-base">
          <p>
            &copy; 2025 Nathanael David Hatoguan Sinaga. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
