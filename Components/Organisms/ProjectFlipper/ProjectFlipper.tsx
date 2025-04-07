'use client'
import Image, { StaticImageData } from "next/image";
import styles from "./ProjectFlipper.module.scss";
import { JSX, useEffect, useRef } from "react";
import { useState } from "react";
import { Arrow } from "@images";
import { Tag } from "../../Atoms";
import Link from "next/link";
interface Project {
    image: string | StaticImageData;
    title: string;
    description: string;
    link?: string;
    tags?: string[];
}

interface ProjectFlipperProps {
    projects: Project[];
}

export const ProjectFlipper = ({ projects }: ProjectFlipperProps): JSX.Element => {
    const flipContainerRef = useRef<HTMLDivElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);

    const previousIndexRef = useRef<number>(0);

    const previousIndex = previousIndexRef.current;

    useEffect(() => {
        setIsFlipping(true);
        flipContainerRef.current?.classList.add(styles.flipping);
        setTimeout(() => {
            previousIndexRef.current = activeIndex;
            flipContainerRef.current?.classList.remove(styles.flipping);
            setIsFlipping(false);
        }, 2000)
    }, [activeIndex]);
    const handlePreviousClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    }

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    }

    return (
        <div className={styles.projectFlipper}>
            <div className={styles.project__container} ref={flipContainerRef}>
                {projects.map((project, index) => (
                    <article className={styles.project} key={index} data-active={index === activeIndex} data-previous={index === previousIndex} title={project.title}>
                        <div className={styles.project__image}>
                            <Image src={project.image} alt={project.title} fill objectFit="contain" />
                        </div>
                        <div className={styles.project__info}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            {project.link && <Link href={project.link} target="_blank" rel="noopener noreferrer" prefetch={true}>View Project</Link>}
                            {project.tags && <div className={styles.project__tags}>
                                {project.tags.map((tag) => (
                                    <Tag key={tag}>{tag}</Tag>
                                ))}
                            </div>}
                        </div>
                    </article>
                ))}
            </div>
            <div className={styles.pagination}>
                <button
                    className={styles.pagination__button}
                    onClick={handlePreviousClick}
                    disabled={isFlipping}
                    aria-label="Previous"
                >
                    <Image src={Arrow} alt="Previous" />
                </button>
                <button
                    className={styles.pagination__button}
                    onClick={handleNextClick}
                    disabled={isFlipping}
                    aria-label="Next"
                >
                    <Image src={Arrow} alt="Next" />
                </button>
            </div>

        </div>
    )
}