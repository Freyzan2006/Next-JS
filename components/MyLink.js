import Link from 'next/link';

import css from '../css/link.module.css';

export default function MyLink({ text, href }) {
    return (
        <Link href={ href }>
            <span className = {css.navbar__link}>{ text }</span>
        </Link>
    )
}