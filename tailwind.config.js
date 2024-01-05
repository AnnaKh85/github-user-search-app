/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", "monospace"],
      },
      colors: {
        "light-mode-blue": "rgb(0, 121, 255)", //#0079FF;
        "light-mode-grey": "rgba(105, 124, 154, 1)", //#697C9A;
        "light-mode-grey-blue": "rgba(75, 106, 155, 1)", // #4B6A9B;
        "light-mode-dark-grey": "rgba(43, 52, 66, 1)", // #2B3442;
        "light-mode-light-grey": "rgba(246, 248, 255, 1)", //#F6F8FF;
        "light-mode-white-1": "rgba(215, 220, 239, 1)", // #FEFEFE;
        "light-mode-white-2": "rgba(254, 254, 254, 1)", //#F6F8FF;
        "dark-mode-blue": "rgba(0, 121, 255, 1)", //#0079FF;
        "dark-mode-white": "rgba(215, 220, 239, 1)", // #FEFEFE;
        "dark-mode-black": "rgba(20, 29, 47, 1)", // #141D2F;
        "dark-mode-grey": "rgba(30, 42, 71, 1)", // #1E2A47;
        "text-error": "rgba(247, 70, 70, 1)", // #F74646;
      },
    },
  },
  plugins: [],
};
