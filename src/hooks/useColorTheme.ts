import { useEffect, useState } from "react";
import backgroundImage from "assets/img/backgroundImage.png";
import backgroundImageLightTheme from "assets/img/lightThemeBackgroundImage.png"
export const useColorTheme = () => {



    const twaColors = {
        background: "var(--tg-theme-bg-color)",
        secondaryBackground: "var(--tg-theme-secondary-bg-color)",

      };
      

    return {
        twaColors
    };
  };