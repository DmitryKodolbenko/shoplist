import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useColorTheme } from "../../hooks/useColorTheme";
import { v4 as uuidv4 } from "uuid";
import { LISTS_KEY } from "../../constants/keys";
import { PlusOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { DeleteOutlined } from "@ant-design/icons";
import {
  DeleteBtn,
  EditContainer,
  ItemContainer,
  ListScreenContainer,
  ListTitle,
  NewItemInput,
  StyledListitem,
  SubmitBtn,
} from "./styles";
import { useStores } from "../../stores";
import { useStore as useStoreNanoStores } from "@nanostores/react";

interface ISearch {
  id?: string;
}

function ListScreen() {
  const { twaColors } = useColorTheme();
  const location = useLocation();
  const [inputValue, setInputValue] = useState<string>("");

  const [lists, setLists] = useState<
    Array<{
      list: Array<{ content: string; checked: boolean; id: string }>;
      id: string;
      listName: string;
    }>
  >(JSON.parse(String(localStorage.getItem(LISTS_KEY))));

  useEffect(() => {
    localStorage.setItem(LISTS_KEY, JSON.stringify(lists));
  }, [lists]);

  const currentList = useMemo(() => {
    const search: ISearch = queryString.parse(location.search);
    return lists?.find((item) => item.id === search.id);
  }, [lists, setLists, location.search]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      setLists((prevList) =>
        prevList?.map((item) =>
          item.id === currentList?.id
            ? {
                ...item,
                list: [...item.list, { content: inputValue, checked: false, id: uuidv4()}],
              }
            : item
        )
      );
      setInputValue("");
    }
  };

  const removeItemFromList = (id: string) => {
    setLists((prevList) =>
      prevList?.map((item) =>
        item.id === currentList?.id
          ? {
              ...item,
              list: item.list.filter((item) => item.id !== id),
            }
          : item
      )
    );
  };

  function updateCheckedValue(newChecked: boolean, id: string) {
    setLists((prevList) =>
      prevList?.map((item) =>
        item.id === currentList?.id
          ? {
              ...item,
              list: item.list.map((listItem) =>
                listItem.id === id
                  ? { ...listItem, checked: newChecked }
                  : listItem
              ),
            }
          : item
      )
    );
  }

  return (
    <>
      <ListScreenContainer>
        {currentList?.list?.map((item, idx) => (
          <ItemCheckbox
            key={item.id}
            item={item}
            checked={item.checked}
            content={item.content}
            idx={idx}
            deleteHandler={removeItemFromList}
            checkedHandler={updateCheckedValue}
            currenListtId={currentList.id}
          />
        ))}
      </ListScreenContainer>
      <EditContainer backgroundColor={twaColors.background}>
        <NewItemInput
          backgroundColor={twaColors.secondaryBackground}
          colorText={twaColors.listTitle}
          placeholderColor={twaColors.placeholder}
          placeholder="Add a new item"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <SubmitBtn
          onClick={handleSubmit}
          backgroundColor={twaColors.buttonColor}
        >
          <PlusOutlined style={{ color: twaColors.buttonTextColor }} />
        </SubmitBtn>
      </EditContainer>
    </>
  );
}

export default ListScreen;

interface ListItemProps {
  item: { content: string; checked: boolean, id: string };
  checked: boolean;
  content: string;
  idx: number;
  deleteHandler: any;
  checkedHandler: any;
  currenListtId: string;
}

const ItemCheckbox: React.FC<ListItemProps> = ({
  checked,
  content,
  deleteHandler,
  checkedHandler,
  item,
}) => {
  const { twaColors } = useColorTheme();
  const { storeMain } = useStores();
  const storeMainRepository = useStoreNanoStores(storeMain.repository);

  const HandleDelete = () => {
    deleteHandler(item.id);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    checkedHandler(e.target.checked, item.id);
  };

  return (
    <StyledListitem backgroundColor={twaColors.background}>
      <ItemContainer>
        <Checkbox checked={checked} onChange={onChange} />
        <ListTitle
          textColor={checked ? twaColors.hintListTitle : twaColors.listTitle}
        >
          {content}
        </ListTitle>
      </ItemContainer>
      {storeMainRepository.isDelete && (
        <DeleteBtn onClick={HandleDelete}>
          <DeleteOutlined style={{ color: twaColors.listTitle }} />
        </DeleteBtn>
      )}
    </StyledListitem>
  );
};
