import React, { useEffect, useState } from "react";
import {
  AddBtnContainer,
  AddButton,
  EmptryList,
  EmptryListText,
  ListsScreenContainer,
} from "./styles";
import { useColorTheme } from "../../hooks/useColorTheme";
import { v4 as uuidv4 } from "uuid";
import ListItem from "../../components/ListItem";
import { LISTS_KEY } from "../../constants/keys";
function ListsScreen() {
  const { twaColors } = useColorTheme();

  const [lists, setLists] = useState<
    Array<{
      list: Array<{ content: string; checked: boolean, id: string }>;
      id: string;
      listName: string;
    }>
  >(JSON.parse(String(localStorage.getItem(LISTS_KEY))) || []);

  useEffect(() => {
    localStorage.setItem(LISTS_KEY, JSON.stringify(lists));
  }, [lists]);

  const [updatedItem, setUpdatedItem] = useState(null);

  const handleInputChange = (id: string, newListName: string) => {
    setLists((prevList) =>
      prevList?.map((list) =>
        list.id === id ? { ...list, listName: newListName} : list
      )
    );

  };

  const handleDelete = (id: string) => {
    setLists((prevList) => prevList?.filter((item) => item.id !== id));
  };

  const handleAddNewList = () => {
    const defaultItem = {
      list: [],
      id: uuidv4(),
      listName: "Shopping list",
    };
    setLists((prevList) => [...prevList, defaultItem]);
  };

  return (
    <>
      <ListsScreenContainer>
        {lists?.length === 0 ? (
          <EmptryList>
            <EmptryListText textColor={twaColors.emptrytext}>
              You don't have any lists created yet
            </EmptryListText>
          </EmptryList>
        ) : (
          lists?.map((item, idx) => (
            <ListItem
              key={item.id}
              item={item}
              setUpdatedItem={setUpdatedItem}
              changeHandler={handleInputChange}
              deleteHandler={handleDelete}
              isCurrentBeingUpdated={updatedItem === item.id}
            />
          ))
        )}
      </ListsScreenContainer>
      <AddBtnContainer backgroundColor={twaColors.background}>
        <AddButton
          backgroundColor={twaColors.buttonColor}
          textColor={twaColors.buttonTextColor}
          onClick={handleAddNewList}
        >
          Add new list
        </AddButton>
      </AddBtnContainer>
    </>
  );
}

export default ListsScreen;
