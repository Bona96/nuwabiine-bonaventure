import { FloatingDock } from "./ui/floating-dock.tsx";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconBook,
  IconUser,
  IconUserCheck,
  IconPhoneCall,
} from "@tabler/icons-react";
 
export function FloatingDockComponent() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Academics",
      icon: (
        <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/academics",
    },
 
    {
      title: "Portfolio",
      icon: (
        <IconUserCheck className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/portfolio",
    },
    {
      title: "Contact",
      icon: (
        <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },
 
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://linkedin.com/in/nuwabiine-bonaventure",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Bona96",
    },
  ];
  return (
    <div className="flex items-center justify-center h-10 w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}