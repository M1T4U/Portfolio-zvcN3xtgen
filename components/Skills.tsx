
import React from 'react';
import SectionWrapper from './SectionWrapper';
import SkillCard from './SkillCard';
import { SKILLS_DATA } from '../constants';

interface SkillsProps {
  id: string;
}

const Skills: React.FC<SkillsProps> = ({ id }) => {
  return (
    <SectionWrapper id={id} title="My Expertise" className="bg-slate-950">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {SKILLS_DATA.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
