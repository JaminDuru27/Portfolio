import { useState } from "react"
import { Nav } from "../components/nav"
import { SideNav } from "../components/Sidenav"
import { Check } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export default function About({theme, setTheme}) {
  const skills = [
    "React & Next.js",
    "TypeScript",
    "Node.js & Express",
    "PostgreSQL & MongoDB",
    "Tailwind CSS",
  ]

  const experience = [
    {
      role: "Senior Fullstack Developer",
      company: "Tech Innovations",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using modern tech stack.",
    },
    {
      role: "Fullstack Developer",
      company: "Digital Solutions Co",
      period: "2020 - 2022",
      description: "Built and maintained customer-facing applications and internal tools.",
    },
    {
      role: "Junior Developer",
      company: "StartUp Hub",
      period: "2019 - 2020",
      description: "Developed responsive web applications and learned agile methodologies.",
    },
  ]
  let [togglesidebar, settogglesidebar] = useState(false)
  return (
    <motion.main 
        initial = {{x:100}}
        animate={{x: 0}}
        exit={{x:-100}}
        transition={{type: `spring`, damping:10, ease: `easeInOut`, duration:0.2}}
        className={`${theme === `light`?`text-black`:`text-white`} min-h-screen pt-20`}>
          {/* Hero Section */}
          <SideNav toggle={togglesidebar} theme={theme} />
          <Nav setTheme={setTheme} theme={theme} settogglesidebar={settogglesidebar} />
          <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
            <div className="space-y-12">
              <div className="text-center space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold">
                  About
                  <span className="block bg-gradient-to-r text-[#970260] logo from-primary to-accent bg-clip-text ">
                      Jamin
                  </span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                  With 5+ years of experience in fullstack development, I've helped startups and enterprises build
                  world-class digital products.
                </p>
              </div>
              <img src="fullstack-developer-workspace.jpg" alt="" className="" />
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <img src="modeling-portfolio.jpg" alt="" />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">More About Me</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    I'm passionate about creating intuitive, performant web experiences that solve real-world problems. My
                    journey in tech started with curiosity, grew through continuous learning, and evolved into a career
                    helping businesses digitally transform.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    When I'm not coding, I enjoy contributing to open-source projects, mentoring junior developers, and
                    exploring emerging web technologies.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="max-w-6xl mx-auto px-6 py-20 bg-card/50 rounded-lg">
            <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div key={skill} className="flex border-[#ffffff5f] items-center gap-3 p-4 bg-background rounded-lg border border-border">
                  <Check color="#ee0995"/>
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold mb-12">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <div key={i} className="border-[#ee0995] border-l-2 border-primary pl-6 py-2 space-y-2">
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-primary text-[#ee0995] font-semibold">{exp.company}</p>
                  <p className="text-foreground/60 opacity-[.6] text-sm">{exp.period}</p>
                  <p className="text-foreground/80 pt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
      </motion.main>
  )
}
