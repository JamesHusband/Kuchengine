import { ButtonProps } from '../types';

export const Button = ({ label, children, className = '', ...props }: ButtonProps) => {
  return (
    <button {...props} className={`${className} px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow`}>
      {children ?? label}
    </button>
  );
};
