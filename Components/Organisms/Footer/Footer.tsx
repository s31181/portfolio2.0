import React, { JSX } from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import { LogoWhite } from '@images';

export const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src={LogoWhite} alt="Rob Caluza Logo" />
                </div>
                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} Rob Caluza. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
