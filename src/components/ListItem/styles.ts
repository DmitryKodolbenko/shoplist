import styled from "styled-components";

interface IListitem {
  backgroundColor: string;
}

export const StyledListitem = styled.div<IListitem>`
  width: 90%;
  border: none;
  border-radius: 12px;
  padding: 16px 5% 16px;
  background-color: ${(props) => props.backgroundColor};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;
interface IListTitle {
  textColor: string;
  placeholderColor?: string;
}

export const ListTitle = styled.h2<IListTitle>`
  font-size: 14px;
  color: ${(props) => props.textColor};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ListTitleInput = styled.input<IListTitle>`
  font-size: 14px;
  color: ${(props) => props.textColor};
  border: none;
  background-color: transparent;
  text-decoration: none;

  &::placeholder {
    color: ${(props) => props.placeholderColor};
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const ListBtn = styled.button`
  border: none;
  background-color: transparent;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;
