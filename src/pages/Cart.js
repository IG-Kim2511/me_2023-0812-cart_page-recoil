import { useRecoilValue } from "recoil";
import {
  CartAtom,
  QuantitySelector,
  TotalPriceSelector,
} from "../recoil/CartAtom";

import styled from "styled-components";
import CartItem from "../component/CartItem";


const Cart = () => {

  const cartItem = useRecoilValue(CartAtom);
  const TotalQuantity = useRecoilValue(QuantitySelector);
  const TotalPrice = useRecoilValue(TotalPriceSelector);


  return (
    <div>
      <Heading>Cart page</Heading>

      <ItemWrapper>
        {cartItem.length ? 
          (
          cartItem.map((e) => <CartItem data={e} key={e.id} />)
        ) 
        : (
          <NoItems>No items</NoItems>
        )}
      </ItemWrapper>

      <TotalPriceWrapper>
        <ColumnWrapper>
          <span>Total QTY</span>
          <Heading>{`${TotalQuantity} `}</Heading>
        </ColumnWrapper>
        <ColumnWrapper>
          <span>Total price</span>
          <Heading>{`${TotalPrice} $`}</Heading>
        </ColumnWrapper>
      </TotalPriceWrapper>
    
    </div>
  )
}


const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Heading = styled.span`
  font-size: 20px;
  font-weight: var(--bold);
`;
const ItemWrapper = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 300px);
  gap: 8px;
  flex-direction: column;
`;
const TotalPriceWrapper = styled.div`
  margin: auto;
  padding: 16px;
  height: 150px;
  width: 100%;
  max-width: 1024px;
  border: 1px solid var(--line-gray);
  & span {
    text-align: right;
  }
`;
const NoItems = styled.div`
  padding: 8px;
  width: fit-content;
  margin: 0 auto;
  border-radius: 4px;
  text-align: center;
  border: 1px solid var(--line-gray);
`;


export default Cart