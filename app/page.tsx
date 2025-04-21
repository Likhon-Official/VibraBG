'use client';
import { ArrowRight, Github, Twitter } from 'lucide-react';
import { BACKGROUND_OPTIONS } from './components/background';
import { Button } from '@/components/ui/button';
import Playground from './components/playground';
import SearchFilter from './components/search-filter';
import { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import { ThemeToggle } from '@/components/theme-toggle';
import { useTheme } from 'next-themes';

export default function Home() {
  const [preview, setPreview] = useState<null | React.ReactNode>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  const resetBg = () => {
    setPreview(null);
  };

  const filteredBackgrounds = BACKGROUND_OPTIONS.filter(background => {
    const matchesSearch = background.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      activeFilter === 'all' ||
      (activeFilter === 'grid' && background.name.toLowerCase().includes('grid')) ||
      (activeFilter === 'gradient' &&
        background.name.toLowerCase().includes('gradient'));

    return matchesSearch && matchesFilter;
  });

  if (!mounted) return null;

  return (
    <>
      <Toaster />
      <div>
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          {preview ? preview : null}
        </div>
        <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
          <header className="flex flex-col items-center justify-between gap-6 py-12 md:flex-row md:py-16">
            <div className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
              Vibra<span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">BG</span>
            </div>
            <nav className="flex items-center gap-4">
              <ThemeToggle />
              <Button
                variant="outline"
                className="group flex items-center gap-2 transition-all hover:bg-purple-50 dark:hover:bg-purple-900/20"
                asChild
              >
                <a href="https://twitter.com/likhonn" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5 text-purple-600 transition-colors group-hover:text-purple-700" strokeWidth={1.5} />
                  <span className="text-purple-600 group-hover:text-purple-700">Twitter</span>
                </a>
              </Button>
              <Button
                variant="outline"
                className="group flex items-center gap-2 transition-all hover:bg-purple-50 dark:hover:bg-purple-900/20"
                asChild
              >
                <a href="https://github.com/likhonn" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 text-purple-600 transition-colors group-hover:text-purple-700" strokeWidth={1.5} />
                  <span className="text-purple-600 group-hover:text-purple-700">GitHub</span>
                </a>
              </Button>
            </nav>
          </header>
          <div className="pt-8">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <div className="mb-8 flex">
                <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6366f1_0%,#a855f7_50%,#6366f1_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-4 py-1.5 text-sm font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                    100+ Beautiful Backgrounds
                  </div>
                </span>
              </div>
              <h2 className="text-4xl font-bold leading-tight text-gray-900 dark:text-gray-50 sm:text-6xl sm:leading-tight">
                Elevate your designs with{' '}
                <span className="animate-text-gradient inline-flex bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-400 bg-[200%_auto] bg-clip-text leading-tight text-transparent">
                  vibrant backgrounds
                </span>
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-gray-600 dark:text-gray-200">
                A curated collection of modern, ready-to-use background patterns and
                gradients. Crafted with Tailwind CSS for seamless integration into
                your projects.
              </p>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                <Button 
                  variant="default" 
                  onClick={resetBg}
                  className="bg-purple-600 text-base hover:bg-purple-700"
                >
                  Reset background
                </Button>
                <Button 
                  variant="outline"
                  className="group text-base"
                  asChild
                >
                  <a 
                    href="https://likho.dev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Visit Portfolio
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden px-4 pb-20 pt-52 md:px-10">
            <SearchFilter
              search={search}
              setSearch={setSearch}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
            <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
              {filteredBackgrounds.map((background, index) => {
                return (
                  <Playground
                    key={index}
                    setPreview={setPreview}
                    theme={background.theme}
                    setTheme={setTheme}
                  >
                    {background.component}
                  </Playground>
                );
              })}
            </div>
            <div className="inline-flex max-w-2xl rounded-md border border-neutral-200 bg-white p-2 text-sm text-neutral-900 dark:border-neutral-900 dark:bg-black dark:text-neutral-200">
              Click on preview to test the background in full screen. Feel free to
              customize the colors and patterns to match your design.
            </div>
          </div>
          <footer>
            <div className="flex items-center justify-center py-8">
              <span className="text-sm text-neutral-800 dark:text-neutral-200">
                Crafted with ❤️ by{' '}
                <a
                  href="https://twitter.com/likhonn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-purple-600 hover:text-purple-500"
                >
                  Lik Ho N
                </a>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}