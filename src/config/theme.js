import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// Create a theme instance.
const theme = createTheme({
  palette: {
    // background: {
    //   default: "#132B4D"
    // // background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    //   // background-image: linear-gradient( 0.3deg,  rgba(6,17,33,1) 1.1%, rgba(42,98,226,1) 97.3% );
    // },
    background: {
      default: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    },
    primary: {
      main: "#d9a60b",
    },
    secondary: {
      // main: "#40330E",
      main:"#0b3ed9",
      // main: "#f50057",
    },
    warning: {
      main: "#d93e0b",
    },
    info: {
      main: "#CCEA8D",
    },
    success: {
      main: "#3ed90b",
    },
    error: {
      main: red.A400,
    },
    dark: {
      main: "#D9B64E",
    },
    warm1: {
      main: "#F2F2F2",
    },
    warm: {
      main: "#f5f5f5",
    },
  },


  typography : {
    h2: {
      fontFamily: 'Playpen Sans',
    },
      h3: {
        fontSize: "2rem",
        "@media (min-width:600px)": {
          fontSize: "2rem",
        },
      
       

      },

      "@media (min-width:900px)": {
        fontSize: "1.5rem",
      },
      // [theme.breakpoints.up("md")]: {
      //   fontSize: "2rem",
      // },
    
      // h2: {
      //   [theme.breakpoints.down("xs")]: {
      //     fontSize: "1.5rem", 
      //   },
      //   [theme.breakpoints.up("sm")]: {
      //     fontSize: "2rem", 
      //   },
      //   lineHeight: 1.5,
      // },
    
     
     
      // subtitle2: {
      //   [theme.breakpoints.down("xs")]: {
      //     fontSize: "1.25rem", 
      //   },
      //   [theme.breakpoints.up("sm")]: {
      //     fontSize: "1.5rem",
      //   },
      //   lineHeight: 1.5,
      // },
      // subtitle3: {
      //   [theme.breakpoints.down("xs")]: {
      //     fontSize: "1.125rem", 
      //   },
      //   [theme.breakpoints.up("sm")]: {
      //     fontSize: "1.25rem", // Adjust the size for sm (small) and larger screens
      //   },
      //   lineHeight: 1.5,
      // },
     
     
    },


  spacing: 16,

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: `rgba(230,238,255,0.50)`,
          backdropFilter: `blur(20px)`,
        },
      },
    },
  },

 

  
});

export default theme;

// theme.typography= {
//   h1: {
//     [theme.breakpoints.down('xs')]: {
//       fontSize: '2rem', // Adjust the size for xs (extra small) screens
//     },
//     [theme.breakpoints.up('sm')]: {
//       fontSize: '2.5rem', // Adjust the size for sm (small) and larger screens
//     },
//     lineHeight: 1.5,
//   },
//   h2: {
//     [theme.breakpoints.down('xs')]: {
//       fontSize: '1.75rem', // Adjust the size for xs (extra small) screens
//     },
//     [theme.breakpoints.up('sm')]: {
//       fontSize: '2rem', // Adjust the size for sm (small) and larger screens
//     },
//     lineHeight: 1.5,
//   },
//   h3: {
//     [theme.breakpoints.down('xs')]: {
//       fontSize: '1.5rem', // Adjust the size for xs (extra small) screens
//     },
//     [theme.breakpoints.up('sm')]: {
//       fontSize: '1.75rem', // Adjust the size for sm (small) and larger screens
//     },
//     lineHeight: 1.5,
//   },
//   h4: {
//     [theme.breakpoints.down('xs')]: {
//       fontSize: '1.25rem', // Adjust the size for xs (extra small) screens
//     },
//     [theme.breakpoints.up('sm')]: {
//       fontSize: '1.5rem', // Adjust the size for sm (small) and larger screens
//     },
//     lineHeight: 1.5,
//   },
//   h5: {
//     [theme.breakpoints.down('xs')]: {
//       fontSize: '1rem', // Adjust the size for xs (extra small) screens
//     },
//     [theme.breakpoints.up('sm')]: {
//       fontSize: '1.25rem', // Adjust the size for sm (small) and larger screens
//     },
//     lineHeight: 1.5,
//   },
//   h6: {
//     [theme.breakpoints.down('xs')]: {
//       fontSize: '0.875rem', // Adjust the size for xs (extra small) screens
//     },
//     [theme.breakpoints.up('sm')]: {
//       fontSize: '1rem', // Adjust the size for sm (small) and larger screens
//     },
//     lineHeight: 1.5,
//   },
//   subtitle1: {
//     [theme.breakpoints.down('xs')]: {
//       fontSize: '1.5rem', // Adjust the size for xs (extra small) screens
//     },
//     [theme.breakpoints.up('sm')]: {
//       fontSize: '1.75rem', // Adjust the size for sm (small) and larger screens
//     },
//     lineHeight: 1.5,
//   },
//   subtitle2: {
//     [theme.breakpoints.down('xs')]: {
//       fontSize: '1.25rem', // Adjust the size for xs (extra small) screens
//     },
//     [theme.breakpoints.up('sm')]: {
//       fontSize: '1.5rem', // Adjust the size for sm (small) and larger screens
//     },
//     lineHeight: 1.5,
//   },
//   subtitle3: {
//     [theme.breakpoints.down('xs')]: {
//       fontSize: '1.125rem', // Adjust the size for xs (extra small) screens
//     },
//     [theme.breakpoints.up('sm')]: {
//       fontSize: '1.25rem', // Adjust the size for sm (small) and larger screens
//     },
//     lineHeight: 1.5,
//   },
//   body1: {
//     [theme.breakpoints.down('xs')]: {
//       fontSize: '1.25rem', // Adjust the size for xs (extra small) screens
//     },
//     [theme.breakpoints.up('sm')]: {
//       fontSize: '1.5rem', // Adjust the size for sm (small) and larger screens
//     },
//     lineHeight: 1.5,
//   },
//   body2: {
//     [theme.breakpoints.down('xs')]: {
//       fontSize: '1rem', // Adjust the size for xs (extra small) screens
//     },
//     [theme.breakpoints.up('sm')]: {
//       fontSize: '1.25rem', // Adjust the size for sm (small) and larger screens
//     },
//     lineHeight: 1.5,
//   },
// },
