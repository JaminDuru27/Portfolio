import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Palette, Rocket, GitBranch, BarChart, Headphones } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Full-stack web applications built with modern frameworks and best practices for performance and scalability.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Designing beautiful, intuitive interfaces that provide exceptional user experiences and drive engagement.",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description:
        "Optimizing your applications for speed, efficiency, and seamless user interactions across all devices.",
    },
    {
      icon: GitBranch,
      title: "DevOps & Deployment",
      description:
        "Cloud infrastructure setup, CI/CD pipelines, and deployment strategies for reliable production environments.",
    },
    {
      icon: BarChart,
      title: "Analytics & SEO",
      description: "Implementing tracking, analytics, and SEO strategies to maximize visibility and user insights.",
    },
    {
      icon: Headphones,
      title: "Support & Maintenance",
      description: "Ongoing support, debugging, and maintenance to keep your applications running smoothly.",
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Services &
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Card key={i} className="bg-card border border-border p-8 hover:border-primary/50 transition-all group">
                <div className="mb-6 p-3 bg-primary/10 rounded-lg w-fit">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">How I Work</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Discover", desc: "Understanding your vision and requirements" },
            { step: "02", title: "Design", desc: "Creating wireframes and design prototypes" },
            { step: "03", title: "Build", desc: "Developing with cutting-edge technologies" },
            { step: "04", title: "Launch", desc: "Deployment and ongoing optimization" },
          ].map((item) => (
            <div key={item.step} className="text-center space-y-4">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {item.step}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-lg p-12 text-center space-y-6">
          <h2 className="text-4xl font-bold">Let's Build Your Next Project</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Have an idea? Let's discuss how we can bring it to life with the best technology and design practices.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
