"use client"
import React, { useEffect, useRef } from 'react';
import styles from './CircleText.module.scss';
interface CircleTextProps {
    text: string;
    centerText?: string;
    className?: string;
    color?: string; // Add color prop
}

export default function CircleText({ text, centerText, className = "circle-text", color }: CircleTextProps) {
    const textPathRef = useRef<SVGTextPathElement>(null);

    useEffect(() => {
        if (textPathRef.current && text.length > 0) {
            const textLength = textPathRef.current.getComputedTextLength();
            const circleCircumference = 2 * Math.PI * 40;

            if (textLength > circleCircumference) {
                const spacing = ((circleCircumference - textLength) / text.length).toFixed(2);
                textPathRef.current.style.letterSpacing = `${spacing}px`;
            } else {
                // Reset spacing if text fits
                textPathRef.current.style.letterSpacing = '';
            }
        }
    }, [text]);

    const utfSpace = '\u00A0';
    text = text.replace(/ /g, utfSpace);
    // const textLength = text.length + 2; // Adding 2 for the spaces before and after the text
    // const totalSpaces = 100 - textLength; // Adjust 100 to the desired length
    // const words = text.split(utfSpace);
    // const spacesBetweenWords = Math.floor(totalSpaces / (words.length - 1));
    // const extraSpaces = totalSpaces % (words.length - 1);

    // text = utfSpace + words.reduce((acc, word, index) => {
    //     if (index === words.length - 1) {
    //         return acc + word;
    //     }
    //     const additionalSpace = index < extraSpaces ? 1 : 0;
    //     return acc + word + utfSpace.repeat(spacesBetweenWords + additionalSpace);
    // }, '') + utfSpace;

    return (
        <svg className={`${styles.circleText} ${className}`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
                id="outerCirclePath"
                d="
                    M -10, 50
                    a 60,60 0 1,1 120,0
                    60,60 0 1,1 -120,0
                "
                fill={"none"}
                stroke={color || "black"}
                strokeWidth="4"
            />
            <path
                id="circlePath"
                d="
                    M 50, 10
                    a 40,40 0 1,1 0,80
                    a 40,40 0 1,1 0,-80
                "
                fill={color || "black"}
            />
            <text dy="-3" fill={color || "black"}>
                <textPath ref={textPathRef} href="#circlePath" startOffset="0%">
                    {text}
                </textPath>
            </text>
            {centerText && (
                <text className={styles.centerText} x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill={color || "white"}>
                    {centerText}
                </text>
            )}
        </svg>
    );
}