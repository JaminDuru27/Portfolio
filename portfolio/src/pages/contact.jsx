import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { useRef, useState } from "react"
import { Nav } from "../components/nav"
import { SideNav } from "../components/Sidenav"
import { FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

export default function Contact({theme, setTheme}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false) 
  const [message, setMessage] = useState(``) 
  const form = useRef()
  const handleSubmit = (e)=>{
    e.preventDefault()
    setSending(true)
    setMessage(`sending...`)
    emailjs
    .sendForm(
      import.meta.env.VITE_EmailJS_SERVICEID,
      import.meta.env.VITE_EmailJS_TemplateID,
      form.current,
      { publicKey: import.meta.env.VITE_EmailJS_PublicKey }
    )
    .then(
      () => {
        setMessage("Sent!");
        setSending(false);
        form.current.reset();
      },
    )
    .catch(e=>{
      setMessage("Failed, try again");setSending(false)
      console.log(e.message)
    })
    ;
  }
  const socialLinks = [
    { icon: Github, href: "https://github.com/JaminDuru27", label: "GitHub", },
    { icon: FaWhatsapp, label: "WhatsApp" },
  ]
  const contactInfo = [
    { icon: Mail, label: "Email", value: "jaminduru5@gmail.com", cb: ()=>{} },
    { icon: Phone, label: "Phone", value: "+2347072773050" },
    { icon: MapPin, label: "Location", value: "Rivers State, Nigeria" },
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
        <div className="w-full capitalize text-[#ee0995]">{message}</div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6 rounded-2xl p-2 overflow-hidden  relative">
              
                <motion.div
                initial={{display:`none`, opacity:0}} 
                animate={sending?{display:`block`, opacity:1}:null} 
                className="w-full h-full absolute z-100 bg-white/10 backdrop-blur-2xl">
                  <motion.div 
                  initial={{translateX: `-50%`,translateY: `-50%`}}
                  animate={{translateX: `0%`,translateY: `0%`}}
                  transition={{duration:2}}
                  className="absolute bg-yellow-400/20 w-full h-full top-[-50%] left-[-50%] rounded-2xl absolute"></motion.div>
                  <motion.div 
                  initial={{translateX: `50%`,translateY: `-100%`}}
                  animate={{translateX: `0%`,translateY: `0%`}} 
                  transition={{duration:2}}
                  className="absolute bg-blue-400/20 w-full h-full top-[0%] right-[-50%] rounded-2xl absolute"></motion.div>
                  <motion.div
                  initial={{translateX: `-50%`,translateY: `50%`}}
                  animate={{translateX: `0%`,translateY: `0%`}}
                  transition={{duration:2}}
                  className="absolute bg-emerald-400/20 w-full h-full top-[50%] left-[-50%] rounded-2xl absolute"></motion.div>
                  <motion.div 
                  animate={{
                    left: [0, `60%`, 0, 0], 
                    top: [0, 0, `60%`, 0], 
                  }}
                  transition={{
                    repeat: Infinity,
                    left: {duration: 1, repeat:Infinity},
                    top: {delay: 1, repeat:Infinity}
                  }}
                  style={{backdropFilter:`brightness(70)`}}
                  className="absolute w-30 h-30 top-4 left-4 rounded-full border-2 border-white/20"></motion.div>
                </motion.div>  
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                {/* <Input id="name" placeholder="Your name" className="bg-card border-border" required /> */}
                <input required type="text" className="w-full full border-2 border-[#ee0995] rounded-lg  p-1" name="" id="" />

              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input required type="email" className="w-full full border-2 border-[#ee0995] rounded-lg  p-1" name="" id="" />
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
                <input required type="input" className="w-full full border-2 border-[#ee0995] rounded-lg  p-1" name="" id="" />
                
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea name="" className="w-full max-h-[50vh] h-[25vh] full border-2 border-[#ee0995] rounded-lg  p-1" id=""></textarea>
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
                      href={link?.href}
                      target="_blank"
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
