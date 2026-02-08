"use client"

import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import portfolioData from "@/data/portfolioData.json"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
    const { personalInfo } = portfolioData

    return (
        <SectionWrapper id="contact" className="bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Im currently looking for new opportunities. Whether you have a question or just want to say hi, Ill try my best to get back to you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                            <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Email</p>
                                    <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Phone</p>
                                    <a href={`tel:${personalInfo.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {personalInfo.phone}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Location</p>
                                    <p className="text-muted-foreground">
                                        {personalInfo.location}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col justify-center items-center text-center p-8 bg-primary/5 border-primary/20">
                        <CardTitle className="mb-4">Ready to Collaborate?</CardTitle>
                        <CardDescription className="mb-8">
                            I am available for freelance projects and full-time roles.
                        </CardDescription>
                        <Button size="lg" className="w-full sm:w-auto" asChild>
                            <a href={`mailto:${personalInfo.email}`}>
                                Say Hello
                            </a>
                        </Button>
                    </Card>
                </div>
            </div>
        </SectionWrapper>
    )
}
