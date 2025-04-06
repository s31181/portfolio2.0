import React from 'react';
import { Stat, StatProps } from '@components';
import styles from './StatBox.module.scss';
export interface StatBoxProps {
    stats: StatProps[];
}

export const StatBox = ({ stats }: StatBoxProps) => {
    return (
        <div className={styles.statBox}>
            {stats.map((statItem, index) => (
                <Stat
                    key={index}
                    imageSrc={statItem.imageSrc}
                    stat={statItem.stat}
                    subtitle={statItem.subtitle}
                />
            ))}
        </div>
    );
};
