import React, { useEffect, useState } from "react";
import { HeaderContainer } from "./styles";
import { useColorTheme } from "../../hooks/useColorTheme";


function Header() {

    const { twaColors } = useColorTheme()

  return (
    <HeaderContainer backgroundColor={twaColors.secondaryBackground}>
      
    </HeaderContainer>
  );
}

export default Header;
