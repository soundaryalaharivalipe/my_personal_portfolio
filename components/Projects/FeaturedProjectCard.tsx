import { Card, CardContent, CardMedia, Typography, Box, Grid, Button, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { ProjectConfig } from "lib/projects";

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease-in-out',
    borderRadius: theme.spacing(2),
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: theme.shadows[8],
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    fontWeight: 600,
    marginBottom: theme.spacing(2),
  },
  description: {
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1.5),
    marginTop: 'auto',
    padding: theme.spacing(2, 0),
  },
  techIcon: {
    width: 28,
    height: 28,
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  buttons: {
    display: 'flex',
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  button: {
    textTransform: 'none',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.75, 2),
  },
}));

interface FeaturedProjectCardProps {
  project: ProjectConfig;
}

export default function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={3}>
      <CardMedia
        className={classes.media}
        image={project.images.main?.link || project.images.poster}
        title={project.title}
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
          {project.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
          {Array.isArray(project.description) 
            ? project.description[0] 
            : project.description}
        </Typography>
        
        <Box className={classes.techStack}>
          {project.stack?.map((tech, index) => (
            <Tooltip key={index} title={tech.label} arrow placement="top">
              <img
                src={tech.logo}
                alt={tech.label}
                className={classes.techIcon}
                style={tech.invert ? { filter: 'invert(1)' } : undefined}
              />
            </Tooltip>
          ))}
        </Box>

        <Box className={classes.buttons}>
          {project.links.github && (
            <Button
              variant="outlined"
              color="primary"
              startIcon={<GitHubIcon />}
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.button}
              size="small"
            >
              Code
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            endIcon={<OpenInNewIcon />}
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.button}
            size="small"
          >
            Live Demo
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
} 