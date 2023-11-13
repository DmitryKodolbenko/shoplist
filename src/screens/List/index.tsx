import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { routes } from "../../constants/routes";
import queryString from "query-string";
import { useColorTheme } from "../../hooks/useColorTheme";
import { v4 as uuidv4 } from "uuid";
import { LISTS_KEY } from "../../constants/keys";
import { PlusOutlined } from "@ant-design/icons";
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
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
interface IList {
  listName: string;
  list: string[];
  id: string;
}

function ListScreen() {
  const { twaColors } = useColorTheme();
  const location = useLocation();
  const [inputValue, setInputValue] = useState<string>("");

  const [lists, setLists] = useState<
  Array<{ list: Array<{ content: string; checked: boolean }>; id: string; listName: string }>
>(JSON.parse(String(localStorage.getItem(LISTS_KEY))));
console.log("render", lists)

  useEffect(() => {
    localStorage.setItem(LISTS_KEY, JSON.stringify(lists));
  }, [lists]);


  const search: ISearch = queryString.parse(location.search);

  // const [currentList, setCurrentList] = useState(lists.find((item) => item.id === search.id))
  // useEffect(() => {
  //   setCurrentList(lists.find((item) => item.id === search.id))
  // }, [lists])

  const currentList = useMemo(() => {
    const search: ISearch = queryString.parse(location.search);
    return lists.find((item) => item.id === search.id);
  }, [lists, setLists, location.search ]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      setLists((prevList) =>
      prevList.map((item) =>
      item.id === currentList?.id
        ? { ...item, list: [...item.list, { content: inputValue, checked: false }] }
        : item
    )
      );
      setInputValue("");
    }
  };

  const removeItemFromList = (
    itemToRemove: string
  ) => {
    setLists((prevList) =>
      prevList.map((item) =>
      item.id === currentList?.id
        ? { ...item, list: item.list.filter((item) => item.content !== itemToRemove) }
        : item
    )
    );
  };


  function updateCheckedValue(newChecked: boolean, content: string) {
    setLists((prevList) => prevList.map((item) =>
      item.id === currentList?.id
        ? { ...item, list: item.list.map((listItem) =>
          listItem.content === content ? { ...listItem, checked: newChecked } : listItem
        )}
        : item) 
    );
  }

  return (
    <>
      <ListScreenContainer>
        {currentList?.list.map((item, idx) => (
          <ItemCheckbox
            key={idx}
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
  item: { content: string; checked: boolean };
  checked: boolean;
  content: string;
  idx: number;
  deleteHandler: any;
  checkedHandler: any;
  currenListtId: string
}

const ItemCheckbox: React.FC<ListItemProps> = ({
  checked,
  content,
  idx,
  deleteHandler,
  checkedHandler,
  currenListtId,
}) => {
  const { twaColors } = useColorTheme();
  const { storeMain } = useStores();
  const storeMainRepository = useStoreNanoStores(storeMain.repository);

  const HandleDelete = () => {
    const deleteContent = content;
    deleteHandler(deleteContent);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    checkedHandler(e.target.checked, content)
  };

  return (
    <StyledListitem backgroundColor={twaColors.background}>
      <ItemContainer>
        <Checkbox checked={checked} onChange={onChange}/>
        <ListTitle textColor={checked ? twaColors.hintListTitle : twaColors.listTitle}>{content}</ListTitle>
      </ItemContainer>
      {storeMainRepository.isDelete && <DeleteBtn onClick={HandleDelete}>
        <DeleteOutlined style={{ color: twaColors.listTitle }} />
      </DeleteBtn> }
      

    </StyledListitem>
  );
};
