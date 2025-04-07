import React, { JSX } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import { Logo } from '@images';

export const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src={Logo} alt="Rob Caluza Logo" />
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about-me">About Me</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
