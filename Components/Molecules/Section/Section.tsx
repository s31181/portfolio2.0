import React from 'react';
import styles from './Section.module.scss';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
    return <section className={`${styles.section} ${className}`} id={id}>
        <div className={styles.container}>
            {children}
        </div>
    </section>;
};

