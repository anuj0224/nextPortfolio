"use client"

import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import portfolioData from "@/data/portfolioData.json"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export function Projects() {
    const { projects } = portfolioData

    return (
        <SectionWrapper id="projects">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                    Featured Projects
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all">
                                <CardHeader>
                                    <CardTitle className="mb-2">{project.title}</CardTitle>
                                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-2">
                                        {project.techStack.map((tech) => (
                                            <span key={tech} className="px-2 py-1 bg-secondary rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className="text-base leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="gap-4">
                                    {project.link && (
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Live Demo
                                            </a>
                                        </Button>
                                    )}
                                    {project.github && (
                                        <Button variant="ghost" size="sm" className="w-full" asChild>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-2 h-4 w-4" />
                                                Code
                                            </a>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}
