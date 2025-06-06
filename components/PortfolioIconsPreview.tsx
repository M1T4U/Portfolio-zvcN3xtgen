
import React from 'react';
import { ReactIcon, TSIcon, TailwindIcon, ViteIcon } from '../constants';

const PortfolioIconsPreview: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-4 bg-slate-700/50 rounded-md">
      <div className="flex gap-4">
        <ReactIcon className="w-16 h-16 text-sky-400" />
        <TSIcon className="w-16 h-16" />
      </div>
      <div className="flex gap-4">
        <TailwindIcon className="w-16 h-14" />
        <ViteIcon className="w-14 h-14" />
      </div>
    </div>
  );
};

export default PortfolioIconsPreview;