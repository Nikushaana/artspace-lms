import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'tiny': "470px",
        'sm': "600px",
        'md': "769px", // სმარტფონისთვის
        'lg': "992px", // პლანშეტისთვის
        'xl': "1200px",
        '2xl': "1600px"
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'spin-slowest': 'spin 200s linear infinite',
        'animation': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};
export default config;
