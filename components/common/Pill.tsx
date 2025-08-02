// components/common/Pill.tsx (if it doesn't exist yet)
import React from 'react';

interface PillProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

export const Pill: React.FC<PillProps> = ({ label, onClick, active = false }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
        whitespace-nowrap border
        ${active 
          ? 'bg-[#34967C] text-white border-[#34967C] shadow-md' 
          : 'bg-white text-gray-700 border-gray-300 hover:border-[#34967C] hover:text-[#34967C] hover:shadow-sm'
        }
      `}
    >
      {label}
    </button>
  );
};

export default Pill;