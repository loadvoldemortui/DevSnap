import styles from './header.module.css';

interface HeaderProps {
    showHeader: boolean;
}

export default function Header({ showHeader }: HeaderProps) {
    return (
        <>


            <header  className={`${styles.header} ${showHeader ? styles.visible : styles.hidden}`}>
                <div className="container svg-try-fix">
                    <section className="flex navbar items-center justify-between flex-col">
                        <ul className={`${styles['clipped-section']} ${styles['navbar-top']} flex gap-5 pt-3 pb-4`}>
                            <li>Home</li>
                            <li>About</li>
                            <li>Collections</li>
                        </ul>
                    </section>
                </div>
            </header>
        </>
    );
}
