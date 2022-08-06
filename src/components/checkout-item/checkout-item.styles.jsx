import styled from "styled-components";

export const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
export const CheckOutItemImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    min-height: 100%;
  }
`;
export const CheckOutNp = styled.span`
  width: 23%;
`;
export const CheckOutQuantity = styled.span`
display: flex;
width: 23%;

  
.arrow {
  cursor: pointer;
}

.value {
  margin: 0 10px;
}
}
`;

export const CheckOutRemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
