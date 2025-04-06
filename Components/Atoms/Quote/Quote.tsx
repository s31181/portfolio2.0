import React from 'react';
import styles from './Quote.module.scss';

export interface QuoteProps {
    children: React.ReactNode;
}

export const Quote = ({ children }: QuoteProps) => {
    return (
        <blockquote className={styles.quote}>
            {children}
        </blockquote>
    );
};

