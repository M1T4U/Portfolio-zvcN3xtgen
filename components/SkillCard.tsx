import React from 'react';
import { SkillItem } from '../types';
import AnimatedVisibility from './AnimatedVisibility';

interface SkillCardProps {
  skill: SkillItem;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const delayClass = `delay-${index * 100}`; // Stagger animation

  return (
    <AnimatedVisibility 
      className="w-full" 
      delay={delayClass}
      initialClasses="opacity-0 translate-y-6"
      finalClasses="opacity-100 translate-y-0"
    >
      <div className="bg-slate-800/70 p-6 rounded-xl shadow-xl hover:shadow-sky-500/30 transition-all duration-300 h-full flex flex-col items-center text-center border border-slate-700 hover:border-sky-500/50">
        <div className="mb-4 text-sky-400">
          {React.isValidElement(skill.icon) ? React.cloneElement(skill.icon as React.ReactElement<{ className?: string }>, { className: "w-16 h-16" }) : null}
        </div>
        <h3 className="text-xl font-semibold text-slate-100 mb-2">{skill.name}</h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-grow">{skill.description}</p>
        {skill.level && (
          <span className="mt-4 text-xs font-medium bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full">{skill.level}</span>
        )}
      </div>
    </AnimatedVisibility>
  );
};

export default SkillCard;
