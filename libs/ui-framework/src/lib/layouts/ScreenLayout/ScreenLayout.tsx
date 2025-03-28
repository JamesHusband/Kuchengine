export const ScreenLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen" data-testid="screen-layout">
      <div className="w-[800px] h-[600px]" data-testid="game-container">
        {children}
      </div>
    </div>
  );
};
