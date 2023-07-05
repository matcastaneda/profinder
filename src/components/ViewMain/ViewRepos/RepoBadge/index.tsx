import React from 'react';
import { type RepoType } from 'types';

type RepoBadgeProps = {
  type: RepoType;
};

const colors = {
  public: 'bg-sky-400 text-sky-800',
  fork: 'bg-violet-400 text-violet-800',
  template: 'bg-amber-400 text-amber-800',
};

const texts = {
  public: 'Public',
  fork: 'Fork',
  template: 'Template',
};

const RepoBagde: React.FC<RepoBadgeProps> = ({ type }) => {
  const color = colors[type];
  const text = texts[type];

  return (
    <small
      className={`text-xs font-semibold px-2 rounded-full whitespace-nowrap ${color}`}>
      {text}
    </small>
  );
};

export default RepoBagde;
