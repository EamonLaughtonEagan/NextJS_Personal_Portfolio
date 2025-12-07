import { useEffect, useState } from "react"

interface UseTypingAnimationProps {
    text?: string
    typingSpeed?: number
    onComplete?: () => void
}

export const useTypingAnimation = ({
    text = "",
    typingSpeed = 50,
    onComplete,
}: UseTypingAnimationProps = {}) => {
    const [displayedText, setDisplayedText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, typingSpeed)
            return () => clearTimeout(timeout)
        } else if (currentIndex === text.length && !isComplete) {
            setIsComplete(true)
            onComplete?.()
        }
    }, [currentIndex, text, typingSpeed, isComplete, onComplete])

    return { displayedText, isComplete }
}

