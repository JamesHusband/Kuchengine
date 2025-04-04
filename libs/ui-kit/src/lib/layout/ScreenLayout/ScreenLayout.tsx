export const ScreenLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full bg-gray-900" data-testid="screen-layout">
      <div className="w-full h-full" data-testid="game-container">
        {children}
      </div>
    </div>
  );
};
