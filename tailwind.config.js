/** @type {import('tailwindcss').Config} */
export default {
   content: ["./.html", "./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            Rubik: ["Rubik", "sans-serif"],
         },
      },
   },
   plugins: [],
};
