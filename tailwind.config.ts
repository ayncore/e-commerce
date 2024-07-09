import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark-color)",
        light: "var(--light-color)",
        darkBackground: "var(--dark-background)",
        lightBackground: "var(--light-background)",
        primary: "var(--primary)",
        lightPrimary: "var(--light-primary)",
        secondary: "var(--secondary)",
        lightSecondary: "var(--light-secondary)",
        accent: "var(--accent)",
        darkAccent: "var(--dark-accent)",
      },
      screens: {
        'xs': '340px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
