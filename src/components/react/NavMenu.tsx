import * as React from 'react';
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const projects: { title: string; href: string; description: string }[] = [
  {
    title: 'FastGPT',
    href: 'https://github.com/AVGVSTVS96/FastGPT',
    description:
      'A high performance OpenAI GPT-4 chat app built with FastAPI. Featuring asynchronous requests, streaming responses, syntax highlighting, and more!',
  },
  {
    title: 'FlaskGPT',
    href: 'https://github.com/AVGVSTVS96/flaskGPT',
    description:
      'A customizable GPT-3.5/4 chat application built with Flask and plain HTML, CSS, and JavaScript',
  },
  {
    title: 'astroSite',
    href: 'https://github.com/AVGVSTVS96/astroSite',
    description:
      'Built with Astro and TailwindCSS, this MPA portfolio & blog site is version 3 of my personal website, my first MPA.',
  },
  {
    title: 'flaskWebsite',
    href: 'https://github.com/AVGVSTVS96/flaskWebsite',
    description:
      'This is version 2 of personal website built with TailwindCSS and Flask.',
  },
  {
    title: 'reactGPT',
    href: 'https://github.com/AVGVSTVS96/reactGPT',
    description:
      "reactGPT is a simple, high performance GPT chat application built with FastAPI, React, and OpenAI's API.",
  },
  {
    title: 'astro-shadcn',
    href: 'https://github.com/AVGVSTVS96/astro-shadcn',
    description:
      'This websites GitHub repo, built with Astro, TailwindCSS, and shadcn/ui components.',
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <a
                    className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                    href='/'>
                    <div className='mb-2 mt-4 text-lg font-medium'>
                      shadcn/ui
                    </div>
                    <p className='text-sm leading-tight text-muted-foreground'>
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href='/docs' title='Introduction'>
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href='/docs/installation' title='Installation'>
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href='/docs/primitives/typography' title='Typography'>
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {projects.map((project) => (
                <ListItem
                  key={project.title}
                  title={project.title}
                  href={project.href}
                  project>
                  {project.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href='/' className={navigationMenuTriggerStyle()}>
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

type ListItemProps = React.ComponentPropsWithoutRef<'a'> & {
  project?: boolean;
  className?: string;
  title: string;
  children?: React.ReactNode;
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & ListItemProps
>(({ className, title, children, project, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}>
          <div className='flex justify-between text-sm font-medium leading-none'>
            {title}
            {project && <GitHubLogoIcon className='size-4' />}
          </div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
