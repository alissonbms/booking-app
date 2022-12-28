import styled from "styled-components";

export const ReserveContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.418);
  display: flex;
  align-items: center;
  justify-content: center;

  .headline {
    font-size: 1.5rem;
  }

  .errorSpan {
    margin-top: 15px;
    padding: 5px 10px;
    box-shadow: 1px 1px 5px #555;
    color: red;
    font-size: 17px;
    text-align: center;
  }
`;

export const ReserveWrapper = styled.div`
  background-color: white;
  padding: 20px;
  position: relative;
  overflow-y: scroll;
  max-width: 80vw;
  max-height: 80vh;
  border-radius: 10px;

  .closeIcon {
    position: absolute;
    top: 19px;
    right: 10px;
    cursor: pointer;
    color: hsl(199, 100%, 33%);
    font-size: 30px;
  }

  @media only screen and (max-width: 819px) {
    margin-top: 60px;
  }
`;
export const RoomItem = styled.div`
  gap: 50px;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  padding-bottom: 20px;
  margin: 15px 0px;
  border-bottom: 1px solid hsl(199, 100%, 33%);
`;
export const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const RoomTitle = styled.div`
  font-size: 1.2rem;

  font-weight: 500;
`;

export const RoomDesc = styled.div`
  font-size: 1rem;
  font-weight: 300;
`;

export const RoomMax = styled.div`
  font-size: 1rem;
`;

export const RoomPrice = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

export const SelectRooms = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 0.9rem;
  color: gray;

  .room {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const ReserveButton = styled.div`
  background-color: hsl(199, 100%, 33%);
  border: none;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
`;

export const PleaseWait = styled.div`
  font-size: 1.2rem;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
