'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        const handleM = (event: KeyboardEvent) => {
          if (event.key.toLowerCase() === 'm') {
            event.preventDefault();
            if (pathname !== '/manual-tecnico') {
              router.push('/manual-tecnico');
            }
          }
        };
        document.addEventListener('keydown', handleM, { once: true });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [router, pathname]);

  return <>{children}</>;
}
