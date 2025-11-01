import { AnimationVariants } from '@/types'

export const fadeInUp: AnimationVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
}

export const fadeInDown: AnimationVariants = {
    hidden: {
        opacity: 0,
        y: -20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
}

export const slideInLeft: AnimationVariants = {
    hidden: {
        opacity: 0,
        x: -30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
}

export const slideInRight: AnimationVariants = {
    hidden: {
        opacity: 0,
        x: 30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
}

export const scaleIn: AnimationVariants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
        },
    },
}

export const staggerContainer = (delay = 0) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
        },
    },
})

export const hoverScale = {
    scale: 1.02,
    transition: {
        duration: 0.3,
        ease: 'easeOut',
    },
}

export const tapScale = {
    scale: 0.98,
}
