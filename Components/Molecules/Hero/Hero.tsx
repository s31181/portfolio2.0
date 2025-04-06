import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import { Portrait, Star, Star2, Shimmer } from '../../../public/images';
import CircleText from '../../Atoms/CircleText/CircleText';
import classNames from 'classnames';

export const Hero = () => {
    const yearsOfExperience = new Date().getFullYear() - 2016;
    return (
        <section className={styles.hero}>
            <div className={styles.level1}>
                <h1 className={styles.heroTitle}>I&apos;m Rob Caluza</h1>
            </div>
            <div className={styles.level2}>
                <div className={styles["box-1"]}>
                    <p className={styles.info}><Image src={Star} alt="Star" width={33} height={33} /><span>A Frontend Developer &</span>UI/UX Engineer Based in the Greater<br />Chicagoland Area.</p>
                    <Image className={styles.star2} src={Star2} alt="Star" width={79} height={76} />
                </div>
                <div className={classNames([styles.imageWrapper, styles["box-2"]])}>
                    <Image src={Portrait} alt="Portrait" fill priority objectFit="cover" />
                </div>
                <div className={styles["box-3"]}>
                    <Image className={styles.shimmer} src={Shimmer} alt="Shimmer" width={78} height={78} />
                    <CircleText text="YEARS   &#8226;   OF  &#8226;   EXPERIENCE" centerText={yearsOfExperience.toString()} />
                </div>
            </div>
            <div className="socials"></div>
        </section>
    );
};
