"use client"

import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import portfolioData from "@/data/portfolioData.json"

export function About() {
    const { about } = portfolioData

    return (
        <SectionWrapper id="about" className="bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                    About Me
                </h2>
                <div className="grid gap-6 lg:grid-cols-2 items-start">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Professional Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                {about.summary}
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Objective</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                {about.objective}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </SectionWrapper>
    )
}
