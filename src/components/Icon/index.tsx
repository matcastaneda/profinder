import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  icon: IconType;
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  children?: React.ReactNode;
  anchorLink?: boolean;
  anchorLinkHref?: string;
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 24,
  color = 'currentColor',
  className = '',
  style = {},
  onClick,
  children,
  anchorLink = false,
  anchorLinkHref = '',
}) => {
  const containerProps = {
    className: `inline-flex items-center justify-center select-none ${className}`,
    style: { ...style },
    onClick: onClick,
  };

  const iconElement = <IconComponent size={size} color={color} />;
  const childrenElement = children && <span className="ml-2">{children}</span>;

  if (anchorLink) {
    return (
      <a
        href={anchorLinkHref}
        target="_blank"
        rel="noopener noreferrer"
        {...containerProps}>
        {iconElement}
        {childrenElement}
      </a>
    );
  }

  return (
    <span {...containerProps}>
      {iconElement}
      {childrenElement}
    </span>
  );
};

export default Icon;
