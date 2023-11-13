import { useEffect, useState } from "react";
export const useColorTheme = () => {



    const twaColors = {
        background: "var(--tg-theme-bg-color)",
        secondaryBackground: "var(--tg-theme-secondary-bg-color)",
        headerTitle: "var(--tg-theme-text-color)",
        emptrytext: "var(--tg-theme-text-color)",
        listTitle: "var(--tg-theme-text-color)",
        buttonColor: "var(--tg-theme-button-color)",
        buttonTextColor: "var(--tg-theme-button-text-color)",
        placeholder: "var(--tg-theme-hint-color)",
        hintListTitle: "var(--tg-theme-hint-color)",
      };
      

    return {
        twaColors
    };
  };