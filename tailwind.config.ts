import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
			spacing: {
				sm: ".25rem",
				md: ".5rem",
				lg: "8rem",
				xl: "16rem",
			},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  		},
  		borderRadius: {
				'none': '0',
				'sm': '.25rem',
				DEFAULT: '.5rem',
				'lg': '8rem',
				'full': '9999px',
			}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
