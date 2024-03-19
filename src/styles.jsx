import styled from "styled-components";

export const Div = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #434547;
  background-size: cover;
`;

export const Header = styled.header`
  display: flex;
  gap: 20px;
  margin-top: 65px;
  margin-bottom: 30px;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 342px;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #fda03e;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  outline: none;
  color: #fda03e;
`;

export const AddButton = styled.button`
  width: 130px;
  height: 40px;
  padding: 10px 0px;
  border-radius: 5px;
  background: #fda03e;
  font-size: 17px;
  font-weight: 900;
  line-height: 3px;
  letter-spacing: 0px;
  color: #ffffff;
  border: none;
  cursor: pointer;

  &:hover {
    background: #ff8400;
  }
  &:active {
    opacity: 0.7;
  }

  @media (max-width: 500px) {
    width: 342px;
    margin-top: -10px;
  }
`;

export const Li = styled.li`
  width: 492px;
  padding: 21px 17px;
  border-radius: 5px;
  box-shadow: 1px 4px 10px 0px #fda03e50;
  background: ${(props) => (props.isFinished ? "#edff95" : "#e4e4e4")};
  font-size: 15px;
  font-weight: 900;
  line-height: 18px;
  letter-spacing: 0px;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;

  button {
    background-color: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    width: 342px;
    min-height: 40px;
    height: 100%;
  }
`;

export const Rocket = styled.img`
  width: 15px;
  height: 15px;
`;
export const Trash = styled.img`
  width: 12px;
  height: 15px;
`;

export const H3 = styled.h3`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  color: #fda03e;
`;
