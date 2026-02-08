"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Globe, Linkedin, FileText, Mail, type LucideIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import portfolioData from "@/data/portfolioData.json"

const iconMap: Record<string, LucideIcon> = {
    Github: Github,
    Linkedin: Linkedin,
    Globe: Globe,
}

export function Hero() {
    const { personalInfo, socialLinks } = portfolioData

    return (
        <section className="min-h-screen flex flex-col justify-center relative px-4 md:px-6 pt-20">
            {/* Background Gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="order-last md:order-first"
                >
                    <h2 className="text-primary font-medium mb-4 text-lg md:text-xl tracking-wide text-center md:text-left">
                        Hello, I&apos;m
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 text-center md:text-left">
                        {personalInfo.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 leading-relaxed text-center md:text-left mx-auto md:mx-0">
                        {personalInfo.tagline}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
                        <Button size="lg" asChild>
                            <Link href="#contact">
                                <Mail className="mr-2 h-4 w-4" />
                                Contact Me
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                                <FileText className="mr-2 h-4 w-4" />
                                Download Resume
                            </a>
                        </Button>
                    </div>

                    <div className="flex gap-6 justify-center md:justify-start">
                        {socialLinks.map((link) => {
                            const Icon = iconMap[link.icon] || Globe
                            return (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
                                    aria-label={link.platform}
                                >
                                    <Icon size={24} />
                                </a>
                            )
                        })}

                    </div>
                </motion.div>

                {personalInfo.image && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative order-first md:order-last flex justify-center"
                    >
                        <div className="relative w-48 h-48 md:w-80 md:h-80">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse" />
                            <img
                                src={personalInfo.image}
                                alt={personalInfo.name}
                                className="rounded-full w-full h-full object-cover border-4 border-background shadow-2xl relative z-10"
                            />
                        </div>
                    </motion.div>
                )}
            </div>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
            >
                <Link href="#about" aria-label="Scroll down">
                    <ArrowDown className="text-muted-foreground" size={32} />
                </Link>
            </motion.div>
        </section>
    )
}
