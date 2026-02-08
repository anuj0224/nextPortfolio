"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
    name: string
    index?: number
}

export function SkillBadge({ name, index = 0 }: SkillBadgeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-secondary/50 backdrop-blur-sm border border-border rounded-full text-sm font-medium text-secondary-foreground hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default"
        >
            {name}
        </motion.div>
    )
}
