'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function KeyListener() {
  const router = useRouter();

  useEffect(() => {
    const keysPressed = new Set<string>();

    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.add(e.key.toLowerCase());

      if (keysPressed.has('control') && keysPressed.has('s') && keysPressed.has('m')) {
        e.preventDefault();
        router.push('/manual-tecnico');
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.delete(e.key.toLowerCase());
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [router]);

  return null;
}
