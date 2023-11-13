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
  idx: number;
  updatedItem: string | null;
  setUpdatedItem: React.Dispatch<React.SetStateAction<any>>;
  changeHandler: any;
  deleteHandler: any;
  isCurrentBeingUpdated: boolean;
}

const ListItem: React.FC<ListItemProps> = ({
  item: { listName, list, id },
  idx,
  updatedItem,
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
        pathname: routes.home + routes.list,
        search: createSearchParams({
          id: id,
        }).toString(),
      })
  }


  return (
    <StyledListitem backgroundColor={twaColors.background}>
      {isCurrentBeingUpdated ? (
        <ListTitleInput
          textColor={twaColors.listTitle}
          value={listName}
          onChange={handleInputChange}
          placeholderColor={twaColors.placeholder}
          placeholder="List name"
        />
      ) : (
        <ListTitle onClick={navigateHandler} textColor={twaColors.listTitle}>{listName}</ListTitle>
      )}
      <ButtonsGroup>
        <ListBtn
          onClick={() => setUpdatedItem(isCurrentBeingUpdated ? null : id)}
        >
          <EditOutlined style={{ color: twaColors.listTitle }} />
        </ListBtn>
        <ListBtn onClick={handleDelete}>
          <DeleteOutlined style={{ color: twaColors.listTitle }} />
        </ListBtn>
      </ButtonsGroup>
    </StyledListitem>
  );
};

export default ListItem;
