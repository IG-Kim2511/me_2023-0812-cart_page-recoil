import styled from "styled-components";
// import ProductCard from "./../component/ProductCard/ProductCard";
import data from '../assets/data'

function Main() {
  return (
    <ListWrapper>
      {data.map((e) => {
        return (
          <li key={e.id}>
            <div>hi</div>

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
