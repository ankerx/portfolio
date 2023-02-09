import Image from "next/image";
import { skills } from "../data";
import { SkillBox, SkillsBox, SkillText } from "../styledAbout";

function Skills() {
  return (
    <SkillsBox>
      {skills.map((skill) => {
        return (
          <SkillBox key={skill.name}>
            <Image src={skill.src} alt={skill.alt} width={45} height={45} />
            <SkillText>{skill.name}</SkillText>
          </SkillBox>
        );
      })}
    </SkillsBox>
  );
}

export default Skills;
