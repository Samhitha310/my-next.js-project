import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'body-primary-light': 'rgba(156, 156, 156, 1)',
      },
      fontFamily: {
        Geist: ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
