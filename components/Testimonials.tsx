import { memo } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Toolbar,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(10),
    },
    title: {
      marginBottom: theme.spacing(5),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "linear-gradient(120deg, #2c3e50 0%, #3498db 100%)",
      color: "#ffffff",
      transition: "all 0.3s ease-in-out",
      minHeight: "300px",
      '&:hover': {
        background: "linear-gradient(120deg, #243342 0%, #2980b9 100%)",
        transform: "translateY(-4px)",
      },
    },
    cardContent: {
      height: "100%",
      padding: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    quoteIcon: {
      fontSize: 40,
      marginBottom: theme.spacing(2),
      opacity: 0.8,
    },
    quote: {
      fontStyle: "italic",
      marginBottom: theme.spacing(3),
      flexGrow: 1,
    },
    author: {
      fontWeight: "bold",
      marginTop: theme.spacing(2),
    },
  })
);

function Testimonials() {
  const classes = useStyles();

  const testimonials = [
    {
      quote: "Thank you for being an active part of our team. Your efforts are being noticed and we are sure that you will be the wind of change. Keep pushing the boundaries of excellence.",
      author: "Harsha PVJ",
    },
    {
      quote: "Soundarya is a hard-working engineer. She joined our team as a fresher but with her continuous hard work was able to perform at par with other experienced team members.",
      author: "Shashwat Raizada",
    },
    {
      quote: "Your growth has been commendable, and it has been an extreme joy to work with you on multiple challenging tasks. Your problem solving skills and go-getter attitude has a positive impact on the team which yields great results. Thank you for being a team player and for always focusing on the greater good.",
      author: "Shrinidhi Rao Aroor",
    },
    {
      quote: "Your efforts have brought us good results. Thank you!",
      author: "Ramakumar R",
    },
  ];

  return (
    <section id="testimonials" className={classes.root}>
      <Toolbar id="testimonials" />
      <Container maxWidth="lg" disableGutters>
        <Typography variant="h3" align="center" className={classes.title}>
          Testimonials
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card className={classes.card} elevation={4}>
                <CardContent className={classes.cardContent}>
                  <FormatQuoteIcon className={classes.quoteIcon} />
                  <Typography variant="body1" className={classes.quote}>
                    "{testimonial.quote}"
                  </Typography>
                  <Typography variant="h6" className={classes.author}>
                    {testimonial.author}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default memo(Testimonials); 