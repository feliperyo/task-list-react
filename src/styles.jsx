import styled from "styled-components";

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 342px;
  padding: 11px 20px;
  border-radius: 5px;
  border: 1px solid #8052ec;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  outline: none;
  color: #8052ec;
`;

export const AddButton = styled.button`
  width: 130px;
  height: 40px;
  padding: 10px 0px;
  border-radius: 5px;
  background: #8052ec;
  font-size: 17px;
  font-weight: 900;
  line-height: 3px;
  letter-spacing: 0px;
  color: #ffffff;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.7;
  }
`;

export const Li = styled.li`
  width: 492px;
  padding: 21px 17px;
  border-radius: 5px;
  box-shadow: 1px 4px 10px 0px #8052ec50;
  background: #e4e4e4;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;

  button {
    background-color: none;
    border: none;
    cursor: pointer;
  }
`;

export const Rocket = styled.img`
  width: 13px;
  height: 13px;
`;
export const Trash = styled.img`
  width: 12px;
  height: 15px;
`;
