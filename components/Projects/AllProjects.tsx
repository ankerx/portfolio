import {
  BackgroundGradientBottom,
  BackgroundGradientTop,
} from "../../styles/globalStyles";
import { Container, Section, StyledH2, StyledHeading } from "./styledProjects";
import Project from "./Project";
import { GetProjectsQuery } from "../../generated/graphql";

function AllProjects({ projects }: GetProjectsQuery) {
  if (!projects) return <p>Failed to fetch the projects.</p>;
  return (
    <Section>
      <StyledHeading>Projects</StyledHeading>
      <StyledH2>
        Some of the projects that I have been working on last time
      </StyledH2>
      <Container>
        {projects &&
          [...projects]
            .reverse()
            .map((post, index) => (
              <Project
                index={index % 2 === 1}
                key={post.id}
                src={post?.image?.url}
                desc={post.description}
                link={post.link}
                liveDemo={post.liveDemo}
              />
            ))}
      </Container>
    </Section>
  );
}

export default AllProjects;
