import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Toolbar,
  Grid,
  Container,
  Hidden,
} from "@material-ui/core";

import { useDarkMode } from "context/themeContext";
import lightHeader from "public/assets/backgrounds/blob-scene-light.svg";
import darkHeader from "public/assets/backgrounds/blob-scene-dark.svg";
import HeaderText from "./HeaderText";

function Header() {
  const darkMode = useDarkMode();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        minHeight: "100vh",
        backgroundImage: `url(${darkMode ? darkHeader : lightHeader})`,
        backgroundPosition: "right",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
      },
      container: {
        flexGrow: 1,
        display: "flex",
      },
      headerImg: {
        maxWidth: "80%",
        objectFit: "contain",
        height: "auto",
        filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))",
      },
      gridItem: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      },
    })
  );
  const classes = useStyles();
  return (
    <header className={classes.root} id="home">
      <Toolbar />
      <Container className={classes.container}>
        <Grid container>
          <Grid item md={6} xs={12} className={classes.gridItem}>
            <HeaderText />
          </Grid>
          <Hidden smDown>
            <Grid item md={6} xs={12} className={classes.gridItem}>
              <img
                className={classes.headerImg}
                src="/assets/womanprog.svg"
                alt="woman programmer illustration"
              />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </header>
  );
}

export default Header;
