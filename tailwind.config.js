// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22C55E",
        secondary: "#06B6D4",

        darkBg: "#020617",
        darkCard: "#020617",

        textPrimary: "#0F172A",
        textMuted: "#64748B",

        textDark: "#E5E7EB",
        textDarkMuted: "#94A3B8",
      },
    },
  },
  plugins: [],
};
