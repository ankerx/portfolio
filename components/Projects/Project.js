import { Box, ImageBox, StyledLink, Text } from "./StyledProjects";
import Image from "next/image";
import bigweirdo from "../../public/images/bigweirdos.png";
import cryptoweb from "../../public/images/crypto.png";
import workoutapp from "../../public/images/workoutapp.png";
function Project(props) {
  return (
    <Box>
      <ImageBox>
        <Image
          src={props.src}
          alt="Picture of the website"
          width={520}
          height={270}
        />
      </ImageBox>
      <div>
        <Text>{props.desc}</Text>
        <StyledLink target="_blank" href={props.link}>
          View more
        </StyledLink>
      </div>
    </Box>
  );
}

export default Project;
