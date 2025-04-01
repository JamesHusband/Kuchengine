export const ScreenLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900" data-testid="screen-layout">
      {children}
    </div>
  );
};
