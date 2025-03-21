"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Building,
  Calendar,
  CheckCircle,
  Clock,
  Compass,
  CreditCard,
  Globe,
  Heart,
  Layers,
  Lock,
  Menu,
  Moon,
  Search,
  Shield,
  Star,
  Sun,
  Users,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export default function SpaceNestLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // For theme toggle to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert(`Thank you for joining our Waitlist with: ${email}`)
    setEmail("")
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div initial={{ rotate: -10 }} animate={{ rotate: 0 }} transition={{ duration: 0.5 }}>
              <Building className="h-6 w-6 text-primary" />
            </motion.div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              SpaceNest
            </span>
          </div>

          <nav className="hidden md:flex gap-6">
            <Link
              href="#benefits"
              className="text-sm font-medium hover:text-primary transition-colors duration-200 relative group"
            >
              Benefits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary transition-colors duration-200 relative group"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors duration-200 relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
            <Button className="relative overflow-hidden group">
              <span className="relative z-10">Join Waitlist</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="container md:hidden py-4 border-t overflow-hidden"
          >
            <nav className="flex flex-col gap-4">
              <Link href="#benefits" className="text-sm font-medium" onClick={toggleMenu}>
                Benefits
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium" onClick={toggleMenu}>
                How It Works
              </Link>
              <Link href="#features" className="text-sm font-medium" onClick={toggleMenu}>
                Features
              </Link>
              <Button className="w-full mt-2 bg-gradient-to-r from-primary to-purple-400 hover:from-primary/90 hover:to-purple-500">
                Join Waitlist
              </Button>
            </nav>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.05] -z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col items-center text-center space-y-4 md:space-y-6"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm"
              >
                <Star className="mr-1 h-4 w-4 text-primary" />
                <span>Coming Soon</span>
              </motion.div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-purple-300">
                Be the First to Book Your Perfect Space!
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Join the SpaceNest Waitlist for early access, exclusive offers, and real-time updates on the most
                innovative workspace booking platform.
              </p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 min-w-[200px] w-full max-w-md"
              >
                <form onSubmit={handleSubmit} className="flex w-full max-w-md items-center space-x-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 border-primary/20 focus:border-primary transition-all duration-300"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-primary to-purple-400 hover:from-primary/90 hover:to-purple-500 transition-all duration-300"
                  >
                    Join Waitlist
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-muted/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1),transparent_40%)] -z-10"></div>
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col items-center text-center space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Join the Waitlist?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Get ahead of the crowd and enjoy these exclusive benefits when you join our waitlist today.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12"
            >
              {[
                {
                  icon: <Clock className="h-10 w-10 text-primary" />,
                  title: "Early Access",
                  description: "Be among the first to experience SpaceNest",
                },
                {
                  icon: <Heart className="h-10 w-10 text-primary" />,
                  title: "Exclusive Offers",
                  description: "Special discounts and promotions for early adopters",
                },
                {
                  icon: <Star className="h-10 w-10 text-primary" />,
                  title: "Priority Bookings",
                  description: "Get first dibs on the most popular spaces",
                },
                {
                  icon: <Globe className="h-10 w-10 text-primary" />,
                  title: "Real-Time Availability",
                  description: "Instant notifications when your favorite spaces open up",
                },
                {
                  icon: <Compass className="h-10 w-10 text-primary" />,
                  title: "Personalized Recommendations",
                  description: "Tailored workspace suggestions based on your preferences",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemFade}
                  className="flex flex-col items-center text-center space-y-2 group"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="rounded-full bg-primary/10 p-3 mb-2 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{
                      scale: 1.05,
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 relative">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col items-center text-center space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How SpaceNest Works</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                A simple, seamless process to find and book your ideal workspace.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            >
              {[
                {
                  icon: <Search className="h-12 w-12 text-primary" />,
                  title: "Search & Discover",
                  description:
                    "Browse through a curated selection of workspaces filtered by your preferences and requirements.",
                },
                {
                  icon: <Calendar className="h-12 w-12 text-primary" />,
                  title: "Book Instantly",
                  description:
                    "Reserve your space with just a few clicks. No phone calls or lengthy email exchanges needed.",
                },
                {
                  icon: <Layers className="h-12 w-12 text-primary" />,
                  title: "Manage & Optimize",
                  description:
                    "Track your bookings, modify reservations, and optimize your workspace experience effortlessly.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemFade}
                  className="flex flex-col items-center text-center space-y-4 relative"
                >
                  <motion.div
                    className="rounded-full bg-primary/10 p-4 mb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.icon}
                  </motion.div>
                  <motion.div
                    className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                  >
                    {index + 1}
                  </motion.div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1),transparent_40%)] -z-10"></div>
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col items-center text-center space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Makes SpaceNest Unique?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our platform stands out with these key differentiators.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            >
              {[
                {
                  icon: <CreditCard className="h-10 w-10 text-primary" />,
                  title: "Instant & Flexible Bookings",
                  description:
                    "Book spaces by the hour, day, week, or month with real-time confirmation and flexible cancellation options.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-primary" />,
                  title: "Verified Listings",
                  description:
                    "Every workspace on our platform is thoroughly vetted and verified to ensure quality and accuracy.",
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-primary" />,
                  title: "Seamless User Experience",
                  description:
                    "Intuitive interface designed to make finding and booking workspaces as effortless as possible.",
                },
                {
                  icon: <Users className="h-10 w-10 text-primary" />,
                  title: "Community & Networking",
                  description:
                    "Connect with like-minded professionals and expand your network while working in shared spaces.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemFade}
                  className="flex flex-col p-6 bg-background rounded-xl shadow-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="rounded-full bg-primary/10 p-3 w-fit mb-4"
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, 10, -10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.05] -z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
              >
                <Lock className="mr-1 h-4 w-4" />
                <span>Limited Early Access!</span>
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                Join the Waitlist Now!
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Don't miss out on the opportunity to revolutionize how you book and use workspaces. Reserve your spot
                today!
              </p>
              <motion.form
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                onSubmit={handleSubmit}
                className="flex w-full max-w-md items-center space-x-2 mt-4"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 border-primary/20 focus:border-primary transition-all duration-300"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-primary to-purple-400 hover:from-primary/90 hover:to-purple-500 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Reserve Your Spot</span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </motion.form>
              <p className="text-xs text-muted-foreground mt-2">
                By joining, you agree to our Terms of Service and Privacy Policy.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <div className="flex items-center gap-2">
            <Building className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              SpaceNest
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
              Contact Us
            </Link>
          </div>

          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SpaceNest. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

