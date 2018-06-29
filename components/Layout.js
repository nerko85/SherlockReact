import Link from 'next/link';
import Head from 'next/head';
import css from '../styles/main.css';

const Layout = (props) => ( 
    <div>
        <Head>
            <title>Sherlock website</title>
            <link rel="stylesheet" href="/_next/static/style.css" />
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css'/>
        </Head>
        <div className={css.caseGrid}>
            {props.children}
        </div>
    </div>
)

export default Layout;