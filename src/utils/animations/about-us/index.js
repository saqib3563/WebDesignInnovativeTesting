import gsap from "gsap";


export const AnimationAboutUs =
    () => {

       const splitText = (selector) => {
    const element = document.querySelector(selector)
    if (!element) return null

    const html = element.innerHTML

    const temp = html.replace(/<br\s*\/?>/gi, " %%BR%% ")

    const words = temp.split(" ")

    element.innerHTML = words
        .map(word => {
            if (word === "%%BR%%") return "<br/>"
            return `<span class="word">${word}</span>`
        })
        .join(" ")

    return element.querySelectorAll(".word")
}


        const splitChars = (selector) => {
            const element = document.querySelector(selector)
            if (!element) return null

            const text = element.textContent
            element.innerHTML = text.split('').map(char =>
                char === ' ' ? ' ' : `<span class="char">${char}</span>`
            ).join('')
            return element.querySelectorAll('.char')
        }

        const headingChars = splitChars('.abt-heading')
        const paraWords = splitText('.abt-para')
        const secondParaWords = splitText('.second-para')

        if (headingChars) {
            gsap.set(headingChars, { opacity: 0, y: 100, rotationX: -90 })
            gsap.to(headingChars, {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 1.2,
                stagger: {
                    amount: 0.8,
                    from: "random"
                },
                ease: "expo.out",
                scrollTrigger: {
                    trigger: ".about-sec",
                    start: "top 80%",
                }
            })
        }

        if (paraWords) {
            gsap.set(paraWords, { opacity: 0, scale: 0.8, filter: "blur(10px)" })
            gsap.to(paraWords, {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                duration: 0.8,
                stagger: {
                    amount: 1.2,
                    ease: "power2.inOut"
                },
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".about-sec",
                    start: "top 70%",
                }
            })
        }

        gsap.set(".innovation_box", { opacity: 0, rotationY: 180, scale: 0.5 })
        gsap.to(".innovation_box", {
            opacity: 1,
            rotationY: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".slide-strip-wrapper",
                start: "top 70%",
            }
        })

        if (secondParaWords) {
            gsap.set(secondParaWords, { opacity: 0, y: 10, skewX: 15 })
            gsap.to(secondParaWords, {
                opacity: 1,
                y: 0,
                skewX: 0,
                duration: 0.6,
                stagger: {
                    amount: 1,
                    ease: "sine.inOut"
                },
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".second-para",
                    start: "top 85%",
                }
            })
        }


    }