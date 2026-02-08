"use client"

import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import portfolioData from "@/data/portfolioData.json"
import { motion } from "framer-motion"

export function Experience() {
    const { experience } = portfolioData

    return (
        <SectionWrapper id="experience" className="bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                    Work Experience
                </h2>
                <div className="relative border-l border-primary/30 ml-4 md:ml-8 space-y-12">
                    {experience.map((job, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <span className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />

                            <Card className="hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm border-border/50">
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                        <CardTitle className="text-xl">{job.role}</CardTitle>
                                        <span className="text-sm font-light px-3 py-1 bg-primary/10 rounded-full text-primary w-fit">
                                            {job.period}
                                        </span>
                                    </div>
                                    <CardDescription className="text-base font-medium">
                                        {job.company}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                        {job.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}
