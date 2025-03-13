import {
  Typography,
  Toolbar,
  Container,
  useTheme,
} from "@material-ui/core";

function Title({ text }: { text: string }) {
  const theme = useTheme();
  return (
    <>
      <Toolbar id="projects" />
      <Container>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          style={{
            fontWeight: theme.typography.fontWeightRegular,
          }}
        >
          {text}
        </Typography>
      </Container>
    </>
  );
}

export default Title;
