"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Briefcase, 
  Code2, 
  Trophy,
  Languages,
  ExternalLink,
  FolderGit2,
  X
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const profileData = {
  name: "Mohemmad Afthab",
  role: "Full Stack Developer",
  location: "Karnataka, India",
  bio: "Flutter and Python developer with a Computer Science and Engineering background, experienced in building responsive, pixel-perfect mobile applications using Flutter and Python. Proficient in Git, focused on clean code, performance optimization, intuitive user experiences, and foundational AI knowledge.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&h=900&auto=format&fit=crop",
  languages: ["Malayalam", "English"],
  skills: ["Python", "Flutter", "Microservices", "AWS"],
  experience: [
    { 
      role: "Mobile Application Developer", 
      company: "Girmiti Software", 
      period: "1 Year",
      description: "One year experience in the payments industry using Python, Flutter and microservices."
    }
  ],
  projects: [
    {
      title: "Sensei Sigma",
      description: "Sensei Sigma is a mobile application built using Flutter that delivers AI-driven stock market insights and recommendations. The project focuses on real-time data visualization, clean and intuitive UI, and performance-optimized architecture to enhance user decision-making and overall user experience.",
      tech: ["Flutter", "Python", "AWS"],
      link: "#"
    },
    {
      title: "Sales Prediction with ML",
      description: "Developed a machine learning–based sales prediction system using Python to analyze historical data and forecast future sales trends, enabling data-driven decision making.",
      tech: ["Python", "Datasets", "Libraries","Frameworks"],
      link: "#"
    },
    {
      title: "Task Management Tool",
      description: "Collaborative task management application with real-time updates and team workspace features.",
      tech: ["Flutter", "Python", "Microservices","Postgres Sql"],
      link: "#"
    }
  ],
  socials: [
    { name: "GitHub", icon: Github, link: "https://gitea.com/afthab" },
    { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/mohemmad-afthab/" },
    { name: "Email", icon: Mail, link: "mailto:afthab9686246987@gmail.com" }
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 1
    }
  }
};

const noFadeVariants = {
  hidden: { opacity: 1, y: 50 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 1
    }
  }
};

const skillBadgeVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  show: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12
    }
  }
};

const letterAnimation = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  show: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroY = useTransform(smoothProgress, [0, 0.3], [0, -50]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);

  const nameArray = profileData.name.split("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasFlipped, setHasFlipped] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setHasFlipped(true);
  };

  return (
    <div ref={containerRef} className="dark min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Dynamic Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ 
            opacity: useTransform(smoothProgress, [0, 0.5], [0.6, 0.3]),
            scale: useTransform(smoothProgress, [0, 1], [1, 1.1])
          }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ 
            opacity: useTransform(smoothProgress, [0, 0.5], [0.6, 0.3]),
            scale: useTransform(smoothProgress, [0, 1], [1, 1.1])
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-[120px]" 
        />
      </div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-zinc-900/50">
        <motion.div 
          style={{ y: heroY, opacity: contentOpacity }}
          className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-20"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 inline-flex flex-wrap justify-center perspective-[1000px]"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              {nameArray.map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-400 tracking-tight mb-6">
                {profileData.role}
              </p>
              
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-sm mb-8">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-sm font-semibold">{profileData.location}</span>
              </div>

              <div className="flex gap-3 sm:gap-4 justify-center mb-10">
                {profileData.socials.map((social) => (
                  <Button key={social.name} variant="outline" size="icon" asChild className="rounded-xl w-11 h-11 sm:w-12 sm:h-12 border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300">
                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-5 h-5" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  </Button>
                ))}
              </div>

              {/* Work Experience - Flip Card with Expand */}
                <div className="flex flex-col items-center w-full max-w-md">
                  <div 
                    className="perspective-[2000px] cursor-pointer"
                    onClick={handleFlip}
                  >
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ 
                        rotateY: { type: "spring", stiffness: 80, damping: 15 },
                        default: { delay: 1, duration: 0.8 }
                      }}
                      className="relative"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Front Side */}
                      <div 
                        className="inline-flex items-center gap-3 sm:gap-4 bg-indigo-500/10 border border-indigo-500/20 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl backdrop-blur-sm hover:bg-indigo-500/20 transition-all"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
                          <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="text-left">
                          <p className="text-white font-bold text-sm sm:text-base leading-tight">Work Experience</p>
                          <p className="text-indigo-300/70 text-xs font-medium">Tap to view details</p>
                        </div>
                      </div>

                      {/* Back Side (same size badge, flipped) */}
                      <div 
                        className="absolute inset-0 inline-flex items-center gap-3 sm:gap-4 bg-indigo-500/20 border border-indigo-500/30 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl backdrop-blur-sm"
                        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                      >
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
                          <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="text-left">
                          <p className="text-white font-bold text-sm sm:text-base leading-tight">Work Experience</p>
                          <p className="text-indigo-300/70 text-xs font-medium">Tap to collapse</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Expanded Details Below */}
                  <AnimatePresence>
                    {isFlipped && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="w-full overflow-hidden"
                      >
                        <div className="bg-zinc-900/95 border border-indigo-500/30 px-5 sm:px-7 py-5 sm:py-6 rounded-2xl backdrop-blur-xl">
                          <div className="flex flex-col gap-4 sm:gap-5">
                            {profileData.experience.map((exp, idx) => (
                              <div key={idx} className="relative pl-4 border-l-2 border-indigo-500 text-left">
                                <p className="text-sm sm:text-base font-bold text-white leading-tight">{exp.role}</p>
                                <p className="text-xs sm:text-sm font-semibold text-indigo-400">{exp.company}</p>
                                <p className="text-[10px] sm:text-xs text-zinc-500 font-medium uppercase tracking-wider mt-0.5">{exp.period}</p>
                                <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">{exp.description}</p>
                              </div>
                            ))}
                            <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                              <Languages className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                              <div className="flex flex-wrap gap-1.5">
                                {profileData.languages.map((lang) => (
                                  <span key={lang} className="px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-[10px] sm:text-xs font-bold text-indigo-300">
                                    {lang}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2"
        >
          <div className="w-1 h-2 bg-indigo-500 rounded-full" />
        </motion.div>
      </header>

      <main className="container max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 space-y-16 sm:space-y-20 md:space-y-24 relative z-20">
        {/* About Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-6 sm:space-y-8 text-center md:text-left"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">About Me</motion.h2>
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
            <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-zinc-300 font-medium">
              {profileData.bio}
            </motion.p>
            <div className="flex flex-col gap-4 sm:gap-6">
              <motion.h3 variants={itemVariants} className="text-lg sm:text-xl font-black flex items-center gap-3 justify-center md:justify-start">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
                Technical Skills
              </motion.h3>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
                {profileData.skills.map((skill) => (
                  <motion.div key={skill} variants={skillBadgeVariants}>
                    <Badge variant="outline" className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-bold border-zinc-700 bg-zinc-800 text-white hover:bg-white hover:text-zinc-950 transition-all hover:scale-110 shadow-xl">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Detailed Experience Insights */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12"
        >
          <motion.div variants={noFadeVariants} className="group p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/40 transition-all duration-700 backdrop-blur-sm shadow-2xl">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 sm:mb-8 md:mb-10 border border-indigo-500/30 group-hover:scale-110 transition-transform group-hover:rotate-6">
              <Code2 className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-indigo-400" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 md:mb-6">Technical Focus</h3>
            <p className="text-zinc-300 font-medium leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
              Building high-performance, pixel-perfect mobile applications using Flutter. Experienced in version control with Git, collaborative development workflows, and delivering scalable, maintainable UI-driven solutions with strong focus on performance and code quality.
            </p>
          </motion.div>
          
          <motion.div variants={noFadeVariants} className="group p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all duration-700 backdrop-blur-sm shadow-2xl">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 sm:mb-8 md:mb-10 border border-emerald-500/30 group-hover:scale-110 transition-transform group-hover:-rotate-6">
              <Trophy className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-emerald-400" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 md:mb-6">Key Achievements</h3>
            <p className="text-zinc-300 font-medium leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
              Bachelor&apos;s degree in Computer Science and Engineering with hands-on experience through multiple technical certifications and participation in academic and industry events. Possess foundational knowledge in Artificial Intelligence concepts and modern application development. For additional certifications, projects, and activities, please refer to LinkedIn profile.
            </p>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-8 sm:space-y-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-center md:text-left">
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {profileData.projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/40 transition-all duration-500 backdrop-blur-sm p-5 sm:p-6 md:p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 group-hover:scale-110 transition-transform">
                    <FolderGit2 className="w-5 h-5 sm:w-7 sm:h-7 text-indigo-400" />
                  </div>
                  <button
                    onClick={() => setSelectedProject(idx)}
                    className="p-2 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="View project details"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                  </button>
                </div>
                <h3 className="text-lg sm:text-xl font-black mb-2">{project.title}</h3>
                <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline" className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold border-zinc-700 bg-zinc-800/50 text-zinc-300">
                      {t}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Detail Modal */}
          <AnimatePresence>
            {selectedProject !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl bg-zinc-900 border border-white/10 p-6 sm:p-8 overflow-y-auto max-h-[85vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5 text-zinc-400" />
                  </button>
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 mb-4 sm:mb-6">
                    <FolderGit2 className="w-5 h-5 sm:w-7 sm:h-7 text-indigo-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 pr-8">{profileData.projects[selectedProject].title}</h3>
                  <p className="text-zinc-300 text-sm sm:text-base font-medium leading-relaxed mb-4 sm:mb-6">
                    {profileData.projects[selectedProject].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {profileData.projects[selectedProject].tech.map((t) => (
                      <Badge key={t} variant="outline" className="px-3 py-1 text-xs font-bold border-zinc-700 bg-zinc-800/50 text-zinc-300">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  {profileData.projects[selectedProject].link && profileData.projects[selectedProject].link !== "#" && (
                    <a
                      href={profileData.projects[selectedProject].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold text-sm transition-colors"
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </main>

      <footer className="py-10 sm:py-12 md:py-16 border-t border-white/10 bg-zinc-950/50 backdrop-blur-md relative z-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10 md:gap-12">
          <div className="flex flex-col items-center md:items-start gap-4 sm:gap-6">
            <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
              {profileData.name}
            </span>
            <p className="text-zinc-400 font-medium text-sm sm:text-base md:text-lg max-w-xs text-center md:text-left">
              Crafting digital experiences with precision and passion.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
            {profileData.socials.map((social) => (
              <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all text-xs sm:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:scale-110">
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  {social.name}
                </a>
            ))}
          </div>
        </div>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 mt-10 sm:mt-12 md:mt-16 text-center">
          <p className="text-zinc-600 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
