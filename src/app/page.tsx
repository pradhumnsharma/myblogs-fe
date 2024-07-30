'use client';

import { getLocalStorage } from '@/utils/commonHelper';
import { redirect } from 'next/navigation';
import styles from './page.module.scss';

export default function Home() {
    return (
        <main className={styles.main}>
            {!getLocalStorage('user') ? redirect('/login') : redirect('/blogs')}
        </main>
    );
}
