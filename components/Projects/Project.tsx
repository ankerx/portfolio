import { Box, ImageBox, StyledLink, Text } from "./styledProjects";
import Image from "next/image";
interface IProps {
  [key: string]: string | null | undefined;
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
      <div>
        <Text>{props.desc}</Text>
        <StyledLink target="_blank" href={props.link || ""}>
          View more
        </StyledLink>
      </div>
    </Box>
  );
}

export default Project;
