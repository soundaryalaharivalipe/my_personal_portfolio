import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Buttons from "./Buttons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(6),
      },
    },
    title: {
      paddingRight: "20%",
    },
    hi: {
      color: "red",
    },
    paragraph: {
      paddingRight: "20%",
    },
  })
);

function HeaderText() {
  const classes = useStyles();
  return (
    <Box
      component="main"
      role="main"
      itemScope
      itemType="https://schema.org/Person"
      className={classes.root}
    >
      <meta itemProp="familyName" content="Valipe" />
      <meta itemProp="gender" content="https://schema.org/Male" />
      <meta itemProp="name" content="Soundarya Lahari" />
      <Typography
        className={classes.title}
        variant="h2"
        component="h1"
        gutterBottom
      >
        <span className={classes.hi}>Hi, </span>I'm{" "}
        <span itemProp="givenName">Soundarya Lahari Valipe</span>
      </Typography>
      <Typography
        variant="h4"
        itemProp="disambiguatingDescription"
        component="h2"
        gutterBottom
      >
        A Full-Stack Developer
      </Typography>
      <Typography itemProp="knowsAbout" className={classes.paragraph}>
        I enjoy solving complex problems and specialize in full-stack development.{" "}
        With experience in cloud technologies and modern web frameworks, I build scalable solutions that drive business growth.{" "}
        Frequently praised as detail-oriented by my peers, I can be relied upon
        to help your company achieve its goals by providing sustainable and
        scalable solutions.
      </Typography>
      <Buttons />
    </Box>
  );
}

export default HeaderText;
