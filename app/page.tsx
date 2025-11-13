import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Briefcase, Users, Layout, Gamepad2, Check } from "lucide-react"

export default function Home() {
  const portfolioServices = [
    {
      title: "Teaching",
      desc: "Professional educator portfolios",
      icon: "🎓",
      image: "/education-teaching-portfolio.jpg",
    },
    {
      title: "Writing",
      desc: "Author & blogger portfolios",
      icon: "✍️",
      image: "/writing-blog-portfolio.jpg",
    },
    {
      title: "Beauty",
      desc: "Beauty & cosmetics portfolios",
      icon: "💄",
      image: "/beauty-cosmetics-portfolio.jpg",
    },
    {
      title: "Modeling",
      desc: "Model & talent portfolios",
      icon: "🎬",
      image: "/modeling-portfolio.jpg",
    },
    {
      title: "Nursing",
      desc: "Healthcare professional profiles",
      icon: "⚕️",
      image: "/healthcare-nursing-portfolio.jpg",
    },
    {
      title: "Photography",
      desc: "Photographer portfolio showcase",
      icon: "📸",
      image: "/photography-portfolio.jpg",
    },
    {
      title: "Music",
      desc: "Musicians & artists portfolios",
      icon: "🎵",
      image: "/music-artist-portfolio.jpg",
    },
    {
      title: "Design",
      desc: "Graphic & UX designer portfolios",
      icon: "🎨",
      image: "/design-portfolio.jpg",
    },
    {
      title: "Fitness",
      desc: "Personal trainer portfolios",
      icon: "💪",
      image: "/fitness-trainer-portfolio.jpg",
    },
    {
      title: "Consulting",
      desc: "Business consultant portfolios",
      icon: "📊",
      image: "/consulting-business-portfolio.jpg",
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Crafting Digital
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Fullstack developer passionate about building scalable, user-centric web applications with modern
                technologies.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get In Touch <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="flex gap-6 pt-8">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Glassmorphic Profile Card */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image src="/professional-developer-portrait.png" alt="Duru Germaine" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 rounded-2xl backdrop-blur-md bg-gradient-to-t from-background/90 via-background/40 to-transparent flex flex-col justify-end p-8">
              <h2 className="text-3xl font-bold text-white mb-2">Duru Germaine</h2>
              <p className="text-white/80">Fullstack Developer & Creative Builder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-4xl font-bold mb-12 text-foreground">Industries I Serve</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
            <Briefcase className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Enterprise Scale</h3>
            <p className="text-foreground/70 leading-relaxed">
              Building robust, scalable solutions for large organizations with complex requirements, high traffic loads,
              and mission-critical systems.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
            <Briefcase className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-4">Small Business</h3>
            <p className="text-foreground/70 leading-relaxed">
              Helping SMEs establish their digital presence with cost-effective, efficient solutions tailored to their
              specific business needs and growth goals.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Individual Entrepreneurs</h3>
            <p className="text-foreground/70 leading-relaxed">
              Supporting freelancers and solo founders with personalized web solutions to launch and scale their
              projects with professional quality.
            </p>
          </div>
        </div>
      </section>

      {/* Experience & Customers Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">Experience & Track Record</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                With years of professional development experience, I've successfully partnered with dozens of satisfied
                clients across diverse industries and project scales.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "50+ Successful Projects Delivered",
                "40+ Professional Client Partnerships",
                "99% Client Satisfaction Rate",
                "5+ Years Industry Experience",
                "Full-Stack Expertise",
                "Continuous Learning & Innovation",
              ].map((achievement, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-12 space-y-8">
            <div className="space-y-2">
              <div className="text-5xl font-bold text-primary">50+</div>
              <p className="text-foreground/70">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-accent">40+</div>
              <p className="text-foreground/70">Happy Customers</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-primary">5+</div>
              <p className="text-foreground/70">Years in Web Development</p>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 mt-8" asChild>
              <Link href="/about">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Building Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-foreground flex items-center gap-3">
              <Layout className="w-10 h-10 text-primary" />
              Dashboard Development
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Expert in creating intuitive, data-rich dashboards that provide real-time insights and powerful analytics
              capabilities for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Admin Dashboards", desc: "User management, permissions, analytics, and system monitoring" },
              {
                title: "Business Analytics",
                desc: "Real-time data visualization, KPI tracking, and performance metrics",
              },
              { title: "SaaS Platforms", desc: "Multi-tenant dashboards with role-based access and custom workflows" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 space-y-3 hover:border-primary/50 transition-all"
              >
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
                <div className="flex gap-2 pt-4">
                  {["React", "Charts", "Real-time"].map((tech, j) => (
                    <span key={j} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Game Dev Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-foreground flex items-center gap-3">
              <Gamepad2 className="w-10 h-10 text-accent" />
              Web Game Development
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Creating engaging interactive experiences with cutting-edge web technologies. From 2D Canvas games to
              immersive 3D environments using Three.js.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all group">
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  src="/canvas-2d-game-development.jpg"
                  alt="2D Canvas Games"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Canvas 2D Games</h3>
                <p className="text-foreground/70 mb-4">
                  High-performance 2D games with smooth animations, pixel-perfect collision detection, and engaging
                  gameplay mechanics.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {["Canvas API", "Game Loop", "Physics", "Animation"].map((tech) => (
                    <span key={tech} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all group">
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  src="/three-js-3d-webgl-rendering.jpg"
                  alt="3D Web Experiences"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold">3D Web Experiences</h3>
                <p className="text-foreground/70 mb-4">
                  Immersive 3D environments with realistic rendering, interactive models, and advanced lighting effects
                  powered by Three.js.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {["Three.js", "WebGL", "3D Models", "Lighting"].map((tech) => (
                    <span key={tech} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Get Your Personal Portfolio</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              I create stunning, professional portfolios tailored for every profession. Whether you're a educator,
              artist, or entrepreneur, I'll build your digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {portfolioServices.map((service, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden h-64 cursor-pointer">
                {/* Background Image */}
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Glass Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent backdrop-blur-sm group-hover:backdrop-blur-md transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-white/80 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Your Portfolio <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-4xl font-bold mb-12">Featured Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={`/web-project-concept.png`}
                  alt={`Project ${i}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">Project {i}</h3>
                <p className="text-foreground/70">
                  Building innovative solutions with React, Node.js, and cloud technologies.
                </p>
                <Link href="/services">
                  <Button variant="ghost" className="text-primary hover:text-primary">
                    View Case Study <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-lg p-12 text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Build Something Great?</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Let's collaborate on your next project and create something extraordinary.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
