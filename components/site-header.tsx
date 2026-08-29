export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-heading text-lg tracking-tight">
          Stolon Line
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <a href="#why" className="hover:text-foreground">
            Why it wins
          </a>
          <a href="#playbook" className="hover:text-foreground">
            Playbook
          </a>
          <a href="#banding" className="hover:text-foreground">
            What banding is
          </a>
          <a href="#season" className="hover:text-foreground">
            Season
          </a>
        </nav>
        <a
          href="#playbook"
          className="text-sm font-medium text-primary hover:underline sm:hidden"
        >
          Skip to methods
        </a>
      </div>
    </header>
  )
}
