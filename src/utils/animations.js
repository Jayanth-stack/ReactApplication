
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animatedProps) =>{
    timeline.to(rotationRef.current.rotation, {
        y : rotationState,
        duration: 1,
        ease : 'power2.inOut'
    })

    timeline.to(
        firstTarget,
        {
            ...animatedProps,
            ease : 'power2.inOut'
        },
        '<'

    )
    timeline.to(
        secondTarget,
        {
            ...animatedProps,
            ease : 'power2.inOut'
        },
        '<'

    )
}