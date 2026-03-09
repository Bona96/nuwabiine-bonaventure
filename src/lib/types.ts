declare global {
  interface ImportMeta {
    env: {
      VITE_APP_EMAILJS_SERVICE_ID: string;
      VITE_APP_EMAILJS_TEMPLATE_ID: string;
      VITE_APP_EMAILJS_PUBLIC_KEY: string;
    };
  }
}

// Types
import type { LucideProps } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import type React from "react";

export type Theme = 'blue'| 'light' | 'dark';
export type Vector3 = [number, number, number];
// Contexts
// theme
export type ThemeContextType = {
  theme: ThemeType;
  themeName: string;
  switchTheme: (name: string) => void;
};
export type ThemeType = {
    id: number;
    name: string;
    styles: {
        primary: string;
        secondary: string;
        accent: string;
        border: string;
        card: string;
        button: string;
        link: string;
        tableHead: string;
        tableRow: string;
        excerpt: string;
    };
}
//dark mode
export type DarkModeContextType = {
  isDark: boolean;
  setIsDark: (v: boolean) => void;
  toggleDark: () => void;
};

// Components
// alert
export type AlertType = {
    show: boolean;
    text: string;
    type: string;
};
// home page stage content
interface StageLink {
  to: string;
  label: string;
  // Lucide icons use this specific type
  icon: ComponentType<LucideProps>; 
}

export interface StageContentType {
  title?: ReactNode; // Optional because stages 2-4 don't have it
  paragraph: string;
  link?: StageLink;   // Optional because stage 1 doesn't have it
}
//home
export type HomeType = {
  isHome: boolean;
  setIsHome: (t: boolean) => void;
};
// home page scene lighting
export type LightingType = {
    ambientIntensity: number;
    directionalPosition: number[];
    directionalIntensity: number;
    directionalColor: string;
    pointPosition: number[];
    pointIntensity: number;
    hemisphereSky: string;
    hemisphereGround: string;
    hemisphereIntensity: number;
}
// home info
export type ActionLinkType = {
  to: string;
  label: string;
  icon: ComponentType<LucideProps>;
}
export type HomeInfoType = {
  currentStage: number;
}
// Bio
export interface Bio {
    name: {
        first: string;
        last: string;
    };
    title: string;
    subtitle: string;
    description: string;
    email: string;
    phone: string;
    address: {
        city: string;
        country: string;
    };
}
// Modals
export type ModalType = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};