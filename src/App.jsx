import { useState } from 'react'
// import './App.css'

import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./store/counterSlice";
import { Button, Box, Typography } from "@mui/material";

import ProgressBox from './components/ProgressBox/ProgressBox.jsx';

import { createTheme } from "@mui/material/styles"; 
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(55, 29, 12)",
    },
    secondary: {
      main: "rgb(155,64,28)",
    },
  },
});

export default function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{}}>
        <ProgressBox />
      </Box>
    </ThemeProvider>
  );
}



//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Counter: {count}
//       </Typography>

//       <Button variant="contained" sx={{ mr: 2 }} onClick={() => dispatch(increment())}>
//         Increment
//       </Button>
//       <Button variant="outlined" onClick={() => dispatch(decrement())}>
//         Decrement
//       </Button>
//     </Box>
//   );
// }
