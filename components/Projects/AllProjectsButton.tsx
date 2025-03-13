import { Button, Box } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Link from "next/link";

function AllProjectsButton() {
  return (
    <Box textAlign="center" mb={6}>
      <Link href="/projects" passHref>
        <Button
          component="a"
          color="secondary"
          size="large"
          variant="outlined"
          endIcon={<ArrowForwardIosIcon />}
        >
          View All Projects
        </Button>
      </Link>
    </Box>
  );
}

export default AllProjectsButton;
