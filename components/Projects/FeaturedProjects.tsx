import { Container, Grid, Box } from "@material-ui/core";
import ProjectsTitle from "./ProjectsTitle";
import allProjects, { ProjectConfig } from "lib/projects";
import FeaturedProjectCard from "./FeaturedProjectCard";
import AllProjectsButton from "./AllProjectsButton";

const featuredProjects: ProjectConfig[] = [
  allProjects.interviewPrep,
  allProjects.docQuery,
  allProjects.connect4
];

function FeaturedProjects() {
  return (
    <Container id="projects">
      <ProjectsTitle text="Featured Projects" />
      <Box mt={6} mb={4}>
        <Grid container spacing={4}>
          {featuredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FeaturedProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <AllProjectsButton />
    </Container>
  );
}

export default FeaturedProjects; 