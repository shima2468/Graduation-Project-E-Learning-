
/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      clipPath: {
        blob: "path('M50 0 C80 20, 100 80, 70 100 C40 120, 0 90, 0 50 C10 10, 20 -10, 50 0')", // تعديل الشكل حسب الحاجة
      },
      animation: {
        "letters-loading": "fade-in 2s infinite",
        "close-bg": "close-bg 10s cubic-bezier(0.1, 0.1, 0.1, 1)",
        fadeOut: 'fadeOut 8s forwards', 
        
      },
      keyframes: {
        "fade-in": {
          "0%, 100%": { transform: "rotateY(-90deg)", opacity: "0"  },
          "50%": { transform: "rotateY(0)", opacity: "1" },
        },
        "close-bg": {
             "0%": { width: "100%" },
            "100%": { width: "0"},
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
       
      
      }, 
      
      

      
    },
  },
  plugins: [
    flowbitePlugin,
    
   
  ],
};




