import { memo } from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
    title: {
      marginBottom: theme.spacing(5),
    },
  })
);

function About() {
  const classes = useStyles();

  return (
    <section id="about" className={classes.root}>
      <Container>
        <Typography variant="h3" align="center" className={classes.title}>
          About Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="body1" paragraph>
              I am a Software Engineer with a Master's in Computer Science from UCF, dedicated to advancing web development and enhancing user experiences. With a strong foundation in software engineering, I specialize in crafting dynamic and responsive web solutions that enhance user experiences and boost system efficiency.
            </Typography>
            <Typography variant="body1" paragraph>
              My expertise includes Java, C#, Python, Node.js, React, Angular, and cloud technologies like AWS and Azure. I'm passionate about creating efficient, scalable, and user-friendly applications that solve real-world problems.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default memo(About); 