// src/app/components/Header.tsx
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image src="/logo_unam.png" alt="UNAM" width={90} height={60} className={styles.logo} />
        <h4 className={styles.title}>Documentación de Programación Paralela y Concurrente</h4>
        <Image src="/logo_fes.png" alt="FES Acatlán" width={90} height={60} className={styles.logo} />
      </div>
    </header>
  );
}
