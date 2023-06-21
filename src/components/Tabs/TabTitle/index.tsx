import React from 'react';
import { MAX_COUNT_TO_SHOW } from 'setup';

type TabTitleProps = {
  normalText: string;
  strongText: string;
  total: number;
};

const TabTitle: React.FC<TabTitleProps> = ({
  normalText,
  strongText,
  total = 0,
}) => {
  const current = Math.min(MAX_COUNT_TO_SHOW, total || 0);
  const text = `${current} of ${total}`;

  return (
    <div className="mt-5 flex items-center space-x-3">
      <h2 className="text-xl">
        {normalText} <strong>{strongText}</strong>
      </h2>

      <span className="opacity-50 space-x-1">
        <small>&#126;</small>
        <small>{text}</small>
        <small>Shown</small>
      </span>
    </div>
  );
};

export default TabTitle;
