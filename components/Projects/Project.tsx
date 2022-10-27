import { Box, ImageBox, StyledLink, Text, Div } from "./styledProjects";
import Image from "next/image";
interface IProps {
  desc?: string | null;
  link?: string | null;
  liveDemo?: string | null;
  src?: string | null;
  index: boolean;
}
function Project(props: IProps) {
  return (
    <Box>
      <ImageBox>
        <a target="_blank" rel="noreferrer" href={props.liveDemo || ""}>
          <Image
            src={props.src || ""}
            alt="Picture of the website"
            width={520}
            height={270}
          />
        </a>
      </ImageBox>
      <Div index={props.index}>
        <Text>{props.desc}</Text>
        <StyledLink target="_blank" href={props.link || ""}>
          View more
        </StyledLink>
      </Div>
    </Box>
  );
}

export default Project;
