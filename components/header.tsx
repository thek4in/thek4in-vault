import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

import { ModeToggle } from './mode-toggle';

export default function Header() {
  return (
    <header className="bg-background shrink-0 border-b h-16 px-10 flex items-center justify-between sticky top-0 z-10">
      <div>[LOGO]</div>
      <div className="flex gap-6">
        <ModeToggle />
        <Avatar>
          <AvatarImage src="/avatar.png" />
          <AvatarFallback>TK</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
