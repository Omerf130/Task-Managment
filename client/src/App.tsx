import { Outlet } from "react-router";
import classes from "./index.module.scss";
import { Nav } from "./components/nav/Nav";
import {
  ThemeProvider,
  createTheme,
  useColorScheme,
} from "@mui/material/styles";

function App() {
  const theme = createTheme({
    colorSchemes: {
      dark: true,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Nav />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;