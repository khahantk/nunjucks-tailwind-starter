module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      opacity: {
        65: ".65",
      },
      colors: {
        red: "#FF0000",
        "red-light": "#f33471",
        blue: "#00aeef",
        "eastern-blue": "#1799B5",
        "yellow-orange": "#FFB743",
        victoria: "#503E8A",
        jacarta: "#422C6B",
        cerulean: "#00AEEF",
        apple: "#32CD32",
        primary: "#333",
        "gray-black": "#2e4053",
        "gray-light": "#2E4053",
        "gray-elight": "#2e4053",
        gray: {
          1: "#ecf0f1",
          7: "#d0d3d4",
        },
        green: {
          5: "#4dc635",
          7: "#4dc65f",
        },
      },
      fontSize: {
        xtiny: "0.625rem", // 10px
        tiny: "0.6875rem", // 11px
        xs1: "0.8125rem", // 13px
        semilg: "1.0625rem", // 17px
        xl1: "1.375rem",
        "3xl2": "2rem",
        "4xl2": "2.5rem",
      },
       boxShadow: {
        'pink-btn': '0 3px #c2185b',
        'bonus-box': 'rgba(0, 0, 0, 0.3) 1.4px 1.3px 4px 0px',
        'green-btn':'0 3px #167316',
        'gray-box':'1.4px 1.3px 4px 0 rgba(0,0,0,.3)',
        'pink-btn1':'0 2px 1px #af006a!important',
        'menu':'0 0 2px 0 rgba(0,0,0,.3)'
       },
       borderColor: theme => ({
        ...theme('colors'),
        'gray1': '#a8c5c6',
        'green':'#32cd32',
        'gray2':'#d5d8dc',
        'gray3':'#999',
        'gray4':'#ddd'
       }),
       inset: {
        '76': '76px',
        '115': '115px',
        '8':'-8px',
        '11':'-11px'
      }
    },
    divideWidth: {
      3: "3px",
    },
    fontFamily: {
      sans: ["Poppins", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
     maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '65':'65px'
     },
     backgroundColor: theme => ({
      ...theme('colors'),
      'pink-btn': '#ec028d',
      'green-btn':'#27c724',
      'yellow-btn': '#ffdb58',
      'green-bg': '#10b48a',
      'gray-table':'rgba(46,64,83,.3)',
      'gray-bg':'#f8f8f8',
      'gray-bg2':'#f5f5f5',
      'gray-bg3':'#f0f3f4',
      'gray-bg4':'#f4f6f7',
      'gray-bg5':'#eaeded',
      'blue1':'#2e4053',
      'pink-btn2':'#ec5da2',
      'gray-bg6':'#ddd'
     }),
     textColor:  theme => ({
      ...theme('colors'),
       'pink':'#ec028d',
       'gray1':'#636b6f',
       'gold':'gold',
       'cerulean':'#00aeef',
       'green':'#32cd32',
       'gray2':'#666',
       'gray3':'rgba(46,64,83,.55)',
       'gray4':'#a9a9a9',
       'gray5':'#888',
       'gray6':'rgba(46,64,83,.9)',
       'gray7':'#808b96',
       'red':'#dc3545'
     }),
     screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '769px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
/*
red: #FF0000
Eastern Blue: #1799B5
Yellow Orange: #FFB743
Victoria: #503E8A
Jacarta: #422C6B

Cerulean: #00AEEF
Apple: #32CD32

*/
