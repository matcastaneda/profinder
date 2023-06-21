import React from 'react';
import { IoOpenOutline } from 'react-icons/io5';

type RepoOwnProps = {
  metrics: {
    icon: React.ReactNode;
    value: number;
  }[];
  updatedAt: string;
};

const RepoOwn: React.FC<RepoOwnProps> = ({ metrics, updatedAt }) => {
  return (
    <>
      <div>
        <ul className="flex items-center space-x-5">
          {metrics.map(({ icon, value }, index) => (
            <li key={index} className="flex items-center space-x-2">
              {icon}
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center mt-4">
        <div className="flex items-center space-x-2">
          <small className="text-xs opacity-70">Last update:</small>
          <small className="text-xs opacity-70">{updatedAt}</small>
        </div>

        <i className="-mt-0.5 ml-auto">
          <IoOpenOutline className="w-5 h-5 text-sky-500" />
        </i>
      </div>
    </>
  );
};

export default RepoOwn;
