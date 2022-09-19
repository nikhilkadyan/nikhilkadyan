import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Layout({ children, title }) {
  return (
    <div className={styles.app}>
      <Head>
        <title>{title || 'Home'} | Nikhil Kadyan - Backend Developer</title>
        <meta name="description" content="Experienced Web Developer with more than 3 years of extensive experience working in software development. Skilled in JavaScript, Node.Js, React.Js, Express.Js, AWS Lambda, AWS MongoDB, jQuery, HTML and CSS. Strong engineering professional with a Bachelor of Technology (B.Tech.) in Computer Science. Expertise in requirement analysis, effort estimation, development, process, and delivery excellence." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navbar}>
        <Link href='/' passHref>
          <div className={styles.navbarBrand} >
            nikhilkadyan.com
          </div>
        </Link>
        {/* <div className={styles.navbarLinks}>
          <Link href="/github" passHref>
            <div className={styles.link}>
              GitTracker
            </div>
          </Link>
        </div> */}
      </nav>
      <div className={styles.content}>
        {children}
      </div>
      <footer className={styles.footer}>
        © 2022, Built with ❤️ by Nikhil Kadyan
      </footer>
    </div>
  )
}
