import Link from "next/link"
import { InstallationGuide } from "@/components/installation-guide"
import { ThemeToggle } from "@/components/theme-toggle"
import { Layers, Search, ChevronRight, Terminal, BookOpen, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
              <div className="flex size-7 items-center justify-center rounded-lg bg-foreground text-background">
                <Layers className="size-4" />
              </div>
              <span className="text-sm font-semibold sm:text-base">shadcn/ui</span>
            </Link>

            <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
              <Link
                href="/"
                className="text-foreground transition-colors hover:text-foreground/80 font-semibold"
              >
                Docs
              </Link>
              <Link
                href="#choose-framework"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Components
              </Link>
              <Link
                href="#use-cli"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                CLI
              </Link>
              <Link
                href="#use-create"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Create
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden w-48 sm:block md:w-64">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5 text-muted-foreground">
                <Search className="size-3.5" />
              </div>
              <input
                type="text"
                readOnly
                placeholder="Search documentation..."
                className="w-full rounded-md border border-border bg-muted/40 py-1.5 pr-8 pl-8 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <kbd className="pointer-events-none absolute top-1.5 right-2 hidden rounded border border-border bg-background px-1.5 text-[10px] font-medium text-muted-foreground sm:inline-block">
                ⌘K
              </kbd>
            </div>

            <Link
              href="https://github.com/shadcn-ui/ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted"
              title="GitHub Repository"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex">
          {/* Left Navigation Sidebar (Desktop) */}
          <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-60 shrink-0 overflow-y-auto border-r border-border/40 py-8 pr-6 lg:block">
            <div className="space-y-6 text-sm">
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Getting Started
                </h4>
                <ul className="space-y-1 text-sm font-medium">
                  <li>
                    <Link
                      href="/"
                      className="flex items-center justify-between rounded-md bg-accent px-2.5 py-1.5 text-accent-foreground font-medium"
                    >
                      <span className="flex items-center gap-2">
                        <Terminal className="size-3.5" />
                        Installation
                      </span>
                      <ChevronRight className="size-3 text-muted-foreground" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#use-create"
                      className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    >
                      <Sparkles className="size-3.5" />
                      shadcn/create
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#use-cli"
                      className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    >
                      <BookOpen className="size-3.5" />
                      CLI Scaffolding
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Frameworks
                </h4>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li className="px-2.5 py-1 font-medium text-foreground">Next.js</li>
                  <li className="px-2.5 py-1">Vite</li>
                  <li className="px-2.5 py-1">TanStack Start</li>
                  <li className="px-2.5 py-1">Laravel</li>
                  <li className="px-2.5 py-1">React Router</li>
                  <li className="px-2.5 py-1">Astro</li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Central Main Content */}
          <main className="min-w-0 flex-1 pb-16">
            <InstallationGuide />
          </main>

          {/* Right Table of Contents (XL screens) */}
          <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 overflow-y-auto py-8 pl-6 xl:block">
            <div className="space-y-2 text-xs">
              <p className="font-semibold uppercase tracking-wider text-foreground">
                On this page
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="#use-create"
                    className="hover:text-foreground transition-colors"
                  >
                    Use shadcn/create
                  </Link>
                </li>
                <li>
                  <Link
                    href="#use-cli"
                    className="hover:text-foreground transition-colors"
                  >
                    Use the CLI
                  </Link>
                </li>
                <li>
                  <Link
                    href="#existing-project"
                    className="hover:text-foreground transition-colors"
                  >
                    Existing Project
                  </Link>
                </li>
                <li>
                  <Link
                    href="#existing-project"
                    className="hover:text-foreground transition-colors"
                  >
                    Choose Your Framework
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
