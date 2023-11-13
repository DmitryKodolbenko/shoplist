export const useColorTheme = () => {
  const twaColors = {
    //background
    background: "var(--tg-theme-bg-color)",
    secondaryBackground: "var(--tg-theme-secondary-bg-color)",

    //text
    headerTitle: "var(--tg-theme-text-color)",
    emptrytext: "var(--tg-theme-text-color)",
    listTitle: "var(--tg-theme-text-color)",
    buttonTextColor: "var(--tg-theme-button-text-color)",
    placeholder: "var(--tg-theme-hint-color)",
    hintListTitle: "var(--tg-theme-hint-color)",


    borderListItem: "1px solid var(--tg-theme-text-color)",
    //button
    buttonColor: "var(--tg-theme-button-color)",

  };

  return {
    twaColors,
  };
};
