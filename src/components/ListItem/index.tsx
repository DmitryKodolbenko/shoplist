import { To, createSearchParams, useNavigate } from "react-router-dom";
import { useColorTheme } from "../../hooks/useColorTheme";
import {
  ButtonsGroup,
  ListBtn,
  ListTitle,
  ListTitleInput,
  StyledListitem,
} from "./styles";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { routes } from "../../constants/routes";

interface IList {
  listName: string;
  list: Array<{ content: string; checked: boolean }>;
  id: string;
}

interface ListItemProps {
  item: IList;
  setUpdatedItem: React.Dispatch<React.SetStateAction<any>>;
  changeHandler: any;
  deleteHandler: any;
  isCurrentBeingUpdated: boolean;
}

const ListItem: React.FC<ListItemProps> = ({
  item: { listName, list, id },
  setUpdatedItem,
  changeHandler,
  isCurrentBeingUpdated,
  deleteHandler,
}) => {
  const { twaColors } = useColorTheme();
  const navigate = useNavigate();

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    changeHandler(id, value);
  };

  const handleDelete = () => {
    deleteHandler(id);
  };

  const navigateHandler = () => {
    navigate({
      pathname: routes.list,
      search: createSearchParams({
        id: id,
      }).toString(),
    });
  };

  return (
    <StyledListitem
      border={isCurrentBeingUpdated ? twaColors.borderListItem : "none"}
      backgroundColor={twaColors.background}
    >
      {isCurrentBeingUpdated ? (
        <ListTitleInput
          textColor={twaColors.listTitle}
          value={listName}
          onChange={handleInputChange}
          placeholderColor={twaColors.placeholder}
          placeholder="List name"
        />
      ) : listName === "" ? (
        <ListTitle onClick={navigateHandler} textColor={twaColors.listTitle}>
          List name
        </ListTitle>
      ) : (
        <ListTitle onClick={navigateHandler} textColor={twaColors.listTitle}>
          {listName}
        </ListTitle>
      )}
      <ButtonsGroup>
        <ListBtn
          onClick={() => setUpdatedItem(isCurrentBeingUpdated ? null : id)}
        >
          <EditOutlined
            style={{
              color: isCurrentBeingUpdated
                ? twaColors.hintListTitle
                : twaColors.listTitle,
            }}
          />
        </ListBtn>
        <ListBtn onClick={handleDelete}>
          <DeleteOutlined style={{ color: twaColors.listTitle }} />
        </ListBtn>
      </ButtonsGroup>
    </StyledListitem>
  );
};

export default ListItem;
