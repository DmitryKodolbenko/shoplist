import { useColorTheme } from "../../hooks/useColorTheme";

function AppScreen({ children, style = {} }: any) {
  const { twaColors } = useColorTheme();
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        boxSizing: "border-box",
        backgroundColor: twaColors.secondaryBackground,
        height: "100vh",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default AppScreen;
