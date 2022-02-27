const config = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
      extend: {},
  },
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#f5f5f4",
          
        "secondary": "#a8a29e",
          
        "accent": "#ede9fe",
          
        "neutral": "#9ca3af",
          
        "base-100": "#4b5563",
          
        "info": "#fae8ff",
          
        "success": "#6ee7b7",
          
        "warning": "#fef08a",
          
        "error": "#f87171",
      },
    }],
  },
  // Only add this if you installed the TailwindCSS-plugins:
  plugins: [
    require("@tailwindcss/typography"), 
    require("@tailwindcss/forms"),
    require("daisyui")
  ],
}

module.exports = config