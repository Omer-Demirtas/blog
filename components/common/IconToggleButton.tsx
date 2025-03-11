"use client";

import React from 'react';

interface IconToggleButtonProps {
  isOn: boolean;
  onToggle: () => void;
  onIcon: React.ReactNode;
  offIcon: React.ReactNode;
  ariaLabel: string;
  className?: string;
}

const IconToggleButton: React.FC<IconToggleButtonProps> = ({
  isOn,
  onToggle,
  onIcon,
  offIcon,
  ariaLabel,
  className = "",
}) => {
  return (
    <button
      onClick={onToggle}
      aria-label={ariaLabel}
      className={`focus:outline-none transition-transform duration-150 active:scale-95 hover:text-blue-500 ${className}`}
          >
      {isOn ? onIcon : offIcon}
    </button>
  );
};

export default IconToggleButton;