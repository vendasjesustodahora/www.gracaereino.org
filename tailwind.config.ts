import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#032B63",
        secondary: "#F2B705"
      }
    }
  },
  plugins: []
} satisfies Config;
