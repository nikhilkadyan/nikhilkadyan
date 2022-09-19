import styles from '../styles/Home.module.css'
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className={styles.content}>
        <div className={styles.title}>`👋 I&apos;m Nikhil Kadyan</div>
        <div className={styles.subtitle}>`A Backend developer`</div>
        <div className={styles.social}>
          <a href='https://github.com/nikhilkadyan' target={'_blank'} rel={'noreferrer'}><FaGithub /></a>
          <a href='https://twitter.com/kadyanikhil' target={'_blank'} rel={'noreferrer'}><FaTwitter /></a>
          <a href='https://linkedin.com/in/nikhilkadyan/' target={'_blank'} rel={'noreferrer'}><FaLinkedinIn /></a>
          <a href='https://instagram.com/nikhilkadyan' target={'_blank'} rel={'noreferrer'}><FaInstagram /></a>
        </div>
        <div className={styles.actions}>
          <a href='/nikhil_kadyan_cv.pdf' className={styles.button} target={'_blank'} rel={'noreferrer'}>Résumé</a>
          <a href='mailto:nikhilkadyan@icloud.com' className={styles.button}>Email me</a>
        </div>
      </div>
    </Layout>
  )
}
