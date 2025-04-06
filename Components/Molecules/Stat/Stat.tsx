import React from 'react';
import Image from 'next/image';
import styles from './Stat.module.scss';

export interface StatProps {
    imageSrc: string;
    stat?: string;
    subtitle?: string;
}

export const Stat = ({ imageSrc, stat, subtitle }: StatProps) => {
    return (
        <div className={styles.stat}>
            <Image src={imageSrc} alt="Stat Image" width={100} height={100} />
            <div className={styles.statLine}>{stat}</div>
            <div className={styles.subtitle}>{subtitle}</div>
        </div>
    );
};
