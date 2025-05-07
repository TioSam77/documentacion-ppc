'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavbarReusable() {
  const pathname = usePathname();

  return (
    <nav className="navbar bg-dark rounded mb-4" data-bs-theme="dark">
      <div className="container">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className={`nav-link text-white ${pathname === '/' ? 'active' : ''}`} href="/">
              Manual General
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link text-white ${pathname === '/enlaces' ? 'active' : ''}`} href="/enlaces">
              Enlaces
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}
