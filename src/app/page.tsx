'use client';

import { getLocalStorage } from '@/utils/commonHelper';
import { redirect } from 'next/navigation';
import styles from './page.module.scss';

export default function Home() {
    const showLoginPage = !getLocalStorage('user');

    return (
        <main className={styles.main}>
            {showLoginPage ? redirect('/login') : redirect('/blogs')}
        </main>
    );
}
