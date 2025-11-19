"use client"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { useState } from "react"
import { Nav } from "../components/nav"
import { SideNav } from "../components/Sidenav"
import { FaWhatsapp } from "react-icons/fa"

// import { useState, type FormEvent } from "react"
export default function Contact({theme, setTheme}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)
  //   // Simulate form submission
  //   await new Promise((resolve) => setTimeout(resolve, 1000))
  //   setIsSubmitting(false)
  //   setSubmitted(true)
  //   setTimeout(() => setSubmitted(false), 3000)
  // }
  const handleSubmit = ()=>{}
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@durugermaine.dev" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  ]
  let [togglesidebar, settogglesidebar] = useState(false)

  return (
    <main className={`${theme === `light`?`text-black`:`text-white`} min-h-screen pt-20`}>
      {/* Hero Section */}
      <SideNav toggle={togglesidebar} theme={theme} />
      <Nav setTheme={setTheme} theme={theme} settogglesidebar={settogglesidebar} />
            
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold">
            Get In
            <span className="block text-[#ee0995] bg-gradient-to-r from-primary to-accent bg-clip-text logo ">Touch</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed opacity-[.7]">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                {/* <Input id="name" placeholder="Your name" className="bg-card border-border" required /> */}
                <input required type="email" className="w-full full border-2 border-[#ee0995] rounded-lg text-[#fff] p-1" name="" id="" />

              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input required type="email" className="w-full full border-2 border-[#ee0995] rounded-lg text-[#fff] p-1" name="" id="" />
                {/* <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-card border-border"
                  required
                /> */}
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                {/* <Input id="subject" placeholder="Project inquiry" className="bg-card border-border" required /> */}
                <input required type="input" className="w-full full border-2 border-[#ee0995] rounded-lg text-[#fff] p-1" name="" id="" />
                
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea name="" className="w-full max-h-[50vh] h-[25vh] full border-2 border-[#ee0995] rounded-lg text-[#fff] p-1" id=""></textarea>
                {/* <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  className="bg-card border-border min-h-32"
                  required
                /> */}
              </div>

              <button type="submit" size="lg" className="cursor-pointer border-2 text-[#ee0996d0] p-1 rounded-lg bg-[#ee099620] w-full bg-primary hover:bg-primary/90">
              Submit</button>

              {submitted && (
                <div className="p-4 bg-primary/20 border border-primary/50 rounded-lg text-center">
                  <p className="text-primary font-medium">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, i) => {
                const Icon = info.icon
                return (
                  <div key={i} className="flex gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg h-fit">
                      <Icon size={40} color="#ee0995"  className="p-2 bg-[#ee099653] rounded-sm text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{info.label}</h3>
                      <p className="text-foreground/70">{info.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="pt-8 border-t border-border space-y-6">
              <h3 className="text-xl font-bold">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, i) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={i}
                      href={link.href}
                      className="p-3 bg-card border border-border border-[#ee0996a3] bg-[#ee099623] rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all"
                      aria-label={link.label}
                    >
                      <Icon size={24} color="#ee0995" className="text-foreground/70 hover:text-primary" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
