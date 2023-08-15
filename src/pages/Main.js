// 🍀data
import data from '../assets/data'

import styled from "styled-components";
import ProductCard from "../component/ProductCard";



function Main() {
  return (
    <ListWrapper>
      {data.map((e) => {
        return (
          <li key={e.id}>
            <ProductCard/>
            {/*   <ProductCard data={e} /> */}
          </li>
        );
      })}
    </ListWrapper>
  );
}
const ListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

export default Main;
