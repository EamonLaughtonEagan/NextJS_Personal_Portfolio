"use client"

import { useState } from "react";
import { useTypingAnimation } from "../hooks/useTypingAnimation";

export const AnimatedHeader = ({
    fullText,
    speed = 50,
}: {
    fullText: string,
    speed?: number
}) => {

    const { displayedText, isComplete } = useTypingAnimation({
        text: fullText,
        typingSpeed: speed,
        onComplete: () => {
            setTimeout(() => {
                setShowAdditionalText(true)
            }, 1000)
        }
    });

    const [showAdditionalText, setShowAdditionalText] = useState(false);

    return (
        <h1 className="text-7xl font-extrabold text-white tracking-tight leading-tight">
                {displayedText.split(' ').map((word, index) => (
                    <span
                        key={index}
                        className={word.includes('VS') || word.includes('Code') || word.includes('Themed') ? 'text-blue-500' : ''}
                    >
                        {word}{' '}
                    </span>
                ))}
                <span className={`inline-block w-1 h-[1em] bg-white ${isComplete ? 'animate-blink' : ''}`}></span>
            </h1>
    )
}