module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "background": "#F2F2F2",
        "primary": "#2F1893",
        "dark-violet": "#1E0E62",
        "light-violet": "#482BE7",
        "pink": "#E93A7D",
        "green": "#25DAC5"
      },
      fontFamily: {
        "sans": "DM Sans"
      },
      backgroundImage: {
        nav22: 'url("../img/navigation-22.png")',
        nav23a: 'url("../img/navigation-23-01.png")',
        nav23b: 'url("../img/navigation-23-02.png")',
        nav23c: 'url("../img/navigation-23-03.png")',
        nav23d: 'url("../img/navigation-23-04.png")',
        nav23e: 'url("../img/navigation-23-05.png")',
        nav26: 'url("../img/navigation-26-09.png")',
      },
      gridTemplateColumns: {
        'fill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
        'fill-215': 'repeat(auto-fill, minmax(215px, 1fr))',
        'fill-175': 'repeat(auto-fit, minmax(160px, 1fr))',
      }
    },
  },
  plugins: [],
}
