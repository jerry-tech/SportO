import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        nav: "hsl(var(--nav-bg))",
        "section-alt": "hsl(var(--section-alt))",
        footer: "hsl(var(--footer-bg))",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },

        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0" },
        },

        // ==========================
        // HERO ANIMATIONS
        // ==========================

        "hero-pan": {
          "0%": {
            transform: "scale(1) translate(0%,0%)",
          },
          "100%": {
            transform: "scale(1.12) translate(-2%,-2%)",
          },
        },

        "hero-gradient": {
          "0%": {
            transform: "translateX(-15%)",
          },
          "50%": {
            transform: "translateX(15%)",
          },
          "100%": {
            transform: "translateX(-15%)",
          },
        },

        "hero-float": {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-24px)",
          },
        },

        "hero-sweep": {
          "0%": {
            transform: "translateX(-120%) skewX(-20deg)",
          },
          "100%": {
            transform: "translateX(350%) skewX(-20deg)",
          },
        },

        "hero-pulse-ring": {
          "0%": {
            transform: "scale(.6)",
            opacity: "0.8",
          },
          "70%": {
            opacity: "0.2",
          },
          "100%": {
            transform: "scale(2.6)",
            opacity: "0",
          },
        },

        "hero-title-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(35px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        // ==========================
        // HERO ANIMATIONS
        // ==========================

        "hero-pan":
          "hero-pan 18s ease-in-out infinite alternate",

        "hero-gradient":
          "hero-gradient 10s ease-in-out infinite",

        "hero-float":
          "hero-float 7s ease-in-out infinite",

        "hero-sweep":
          "hero-sweep 6s linear infinite",

        "hero-pulse-ring":
          "hero-pulse-ring 3s ease-out infinite",

        "hero-title-in":
          "hero-title-in 1s ease forwards",
      },
    },
  },

  plugins: [tailwindcssAnimate],
} satisfies Config;