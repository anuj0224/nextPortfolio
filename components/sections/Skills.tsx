"use client"

import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SkillBadge } from "@/components/ui/SkillBadge"
import portfolioData from "@/data/portfolioData.json"
import { motion } from "framer-motion"

export function Skills() {
    const { skills } = portfolioData

    return (
        <SectionWrapper id="skills">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                    Technical Skills
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skills.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-primary">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill, i) => (
                                    <SkillBadge key={skill} name={skill} index={i} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}
