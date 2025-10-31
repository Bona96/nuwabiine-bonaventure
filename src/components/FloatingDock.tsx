import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBook2,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
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
      href: "#",
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
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/nuwabiinembiine",
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