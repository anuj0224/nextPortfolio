export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description: string[];
}

export interface ProjectItem {
    title: string;
    description: string;
    techStack: string[];
    link?: string;
    github?: string;
}

export interface EducationItem {
    degree: string;
    institution: string;
    period: string;
}

export interface PortfolioData {
    personalInfo: {
        name: string;
        role: string;
        tagline: string;
        location: string;
        email: string;
        phone: string;
        resumeUrl: string;
    };
    socialLinks: SocialLink[];
    about: {
        summary: string;
        objective: string;
    };
    skills: SkillCategory[];
    experience: ExperienceItem[];
    projects: ProjectItem[];
    education: EducationItem[];
}
