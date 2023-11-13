import React, { useMemo } from "react";
import { BackBtn, DeleteChangeBtn, HeaderContainer, HeaderTwa } from "./styles";
import { useColorTheme } from "../../hooks/useColorTheme";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import { useStores } from "../../stores";
import { RollbackOutlined } from "@ant-design/icons";
import { useStore as useStoreNanoStores } from "@nanostores/react";

function Header() {
  const { twaColors } = useColorTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { storeMain } = useStores();
  const storeMainRepository = useStoreNanoStores(storeMain.repository);

  const isOneListScreen = useMemo(() => {
    return location.pathname === routes.home + routes.list;
  }, [location.pathname]);

  const isDeleteHandler = () => {
    storeMain.setIsDelete(!storeMain.repository.value?.isDelete);
  };

  const navigateHandler = () => {
    navigate({
      pathname: routes.home + routes.lists,
    });
  };

  return (
    <HeaderContainer backgroundColor={twaColors.background}>
      {isOneListScreen ? (
        <BackBtn onClick={navigateHandler}>
          <RollbackOutlined
            style={{ color: twaColors.listTitle, fontSize: 16 }}
          />
        </BackBtn>
      ) : (
        <div></div>
      )}
      <HeaderTwa textColor={twaColors.headerTitle}>My ShopList</HeaderTwa>
      {isOneListScreen ? (
        <DeleteChangeBtn
          backgroundColor={twaColors.buttonColor}
          textColor={twaColors.buttonTextColor}
          onClick={isDeleteHandler}
        >
          {storeMainRepository.isDelete ? "Cancel" : "Edit"}
        </DeleteChangeBtn>
      ) : (
        <div></div>
      )}
    </HeaderContainer>
  );
}

export default Header;
