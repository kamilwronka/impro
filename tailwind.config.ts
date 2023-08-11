import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "button-shadow": "box-shadow: 0px 10px 35px -5px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        "olive-50": "#FCF5EF",
        "olive-500": "#7E9680",
        "button-blue": "#478BA2",
      },
    },
  },
  plugins: [],
};
export default config;
