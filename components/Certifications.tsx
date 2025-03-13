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
import SchoolIcon from '@material-ui/icons/School';
import CloudIcon from '@material-ui/icons/Cloud';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(1),
      paddingBottom: 0,
    },
    title: {
      marginBottom: theme.spacing(2),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "linear-gradient(120deg, #2c3e50 0%, #3498db 100%)",
      color: "#ffffff",
      transition: "all 0.3s ease-in-out",
      cursor: "pointer",
      minHeight: "300px",
      '&:hover': {
        background: "linear-gradient(120deg, #243342 0%, #2980b9 100%)",
        transform: "translateY(-4px)",
      },
    },
    cardContent: {
      flexGrow: 1,
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
    },
    icon: {
      fontSize: 40,
      marginBottom: theme.spacing(1),
    },
    link: {
      color: "#ffffff",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(1),
    },
    verifyText: {
      marginTop: "auto",
      paddingTop: theme.spacing(2),
      borderTop: "1px solid rgba(255, 255, 255, 0.2)",
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(1),
    },
  })
);

function Certifications() {
  const classes = useStyles();

  const certifications = [
    {
      title: "AWS Certified Developer - Associate",
      description: "AWS Certified Developer - Associate Certification demonstrating expertise in developing and maintaining applications on AWS.",
      icon: <CloudIcon className={classes.icon} />,
      link: "https://www.credly.com/badges/e3f419f7-e7c6-4be9-8b3d-f31b7ef35057/public_url",
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      description: "Microsoft Certified: Azure Developer Associate - Certification showing expertise in developing cloud solutions using Azure services.",
      icon: <SchoolIcon className={classes.icon} />,
      link: "https://learn.microsoft.com/en-gb/users/soundaryalaharivalipe-1640/credentials/399b555f9a67911d",
    },
  ];

  return (
    <section id="certifications" className={classes.root}>
      <Toolbar id="certifications" />
      <Container maxWidth="md" disableGutters>
        <Typography variant="h3" align="center" className={classes.title}>
          Certifications
        </Typography>
        <Grid container spacing={2}>
          {certifications.map((cert, index) => (
            <Grid item key={index} xs={12} sm={6}>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className={classes.link}>
                <Card className={classes.card} elevation={4}>
                  <CardContent className={classes.cardContent}>
                    {cert.icon}
                    <Typography variant="h5" gutterBottom>
                      {cert.title}
                    </Typography>
                    <Typography variant="body1" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      {cert.description}
                    </Typography>
                    <Typography variant="body2" className={classes.verifyText}>
                      Verify Certification <OpenInNewIcon fontSize="small" />
                    </Typography>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default memo(Certifications); 