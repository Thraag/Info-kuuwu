module.exports = {
  content: [
    "./index.html",  // Si tu index.html está en la raíz
    "./info-kuuwu/**/*.{js,ts,jsx,tsx,html}", // Si el código está dentro de infokuuwu
    "./src/**/*.{js,ts,jsx,tsx,html}", // Para archivos dentro de src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
