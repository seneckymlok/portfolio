import { Variants } from 'framer-motion'

export type AnimationVariants = Variants

export interface ProjectItem {
    id: string
    title: string
    description: string
    image: string
    tools: string[]
    link?: string
    outcome?: string
}

export interface ExperienceItem {
    id: string
    company: string
    role: string
    period: string
    description?: string
    highlight?: boolean
}
