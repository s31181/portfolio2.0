"use client"
import React, { JSX } from 'react';
import styles from './Tag.module.scss';

export interface TagProps {
    children: React.ReactNode;
}

export const Tag = ({ children }: TagProps): JSX.Element => {
    return (
        <span className={styles.tag} >
            {children}
        </span>
    );
};
