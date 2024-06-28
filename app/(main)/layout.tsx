import { ReactNode } from 'react';

import { ModeToggle } from '@/components/mode-toggle';

export default function MainPage({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="border-b dark:border-b-primary-foreground border-b-primary h-16 px-10 flex items-center justify-end">
        <ModeToggle />
      </header>
      <main className="flex-grow p-10">{children}</main>
      <footer className="border-t dark:border-t-primary-foreground border-t-primary h-10 flex justify-end items-center px-10">
        <span className="text-xs">&copy; thek4in 2024</span>
      </footer>
    </>
  );
}
