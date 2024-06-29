import { ReactNode } from 'react';

import { ModeToggle } from '@/components/mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function MainPage({ children }: { children: ReactNode }) {
  return (
    <>
      {/* TODO!! Why is it not changing color when changing modes? */}
      <header className="bg-foreground dark:bg-background dark:text-foreground shrink-0 border-b dark:border-b-primary-foreground border-b-primary h-16 px-10 flex items-center justify-between sticky top-0 z-10">
        <div>[LOGO]</div>
        <div className="flex gap-6">
          <ModeToggle />
          <Avatar>
            <AvatarImage src="/avatar.png" />
            <AvatarFallback>TK</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex-1 p-10">{children}</main>
      <footer className="shrink-0 border-t dark:border-t-primary-foreground border-t-primary h-10 flex justify-end items-center px-10">
        <span className="text-xs">&copy; thek4in 2024</span>
      </footer>
    </>
  );
}
