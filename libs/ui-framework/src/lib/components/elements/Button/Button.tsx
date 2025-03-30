export const Button = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => {
  return (
    <button onClick={onClick} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow">
      {children}
    </button>
  );
};
