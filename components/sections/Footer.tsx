"use client"

import portfolioData from "@/data/portfolioData.json"
import { Github, Linkedin, Globe, type LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
    Github: Github,
    Linkedin: Linkedin,
    Globe: Globe,
}

export function Footer() {
    const { personalInfo, socialLinks } = portfolioData

    return (
        <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-8">
            <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground text-center md:text-left">
                    © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>

                <div className="flex gap-4">
                    {socialLinks.map((link) => {
                        const Icon = iconMap[link.icon] || Globe
                        return (
                            <a
                                key={link.platform}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label={link.platform}
                            >
                                <Icon size={18} />
                            </a>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}
