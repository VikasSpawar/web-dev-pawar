/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#e8e8e8',
          secondary: '#f0f4f8',
          text: '#1a202c',
          accent1: '#48bb78',
          accent2: '#f56565',
          link: '#4299e1',
          selection: '#cbd5e0',
          border: '#e2e8f0',
          codeComment: '#718096',
          codeString: '#38a169',
          codeKeyword: '#d53f8c',
          codeVariable: '#a3bffa',
        },
        dark: {
          primary: '#1a202c',
          secondary: '#2d3748',
          // secondary: '#1e293b',
          text: '#cbd5e0',
          accent1: '#48bb78',
          accent2: '#f56565',
          link: '#4299e1',
          selection: '#4a5568',
          border: '#2d3748',
          codeComment: '#718096',
          codeString: '#38a169',
          codeKeyword: '#d53f8c',
          codeVariable: '#a3bffa',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};