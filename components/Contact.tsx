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
  })
);

function Contact() {
  const classes = useStyles();

  return (
    <section id="contact" className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default memo(Contact); 