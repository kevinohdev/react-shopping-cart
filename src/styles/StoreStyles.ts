import styled from "styled-components";

const StoreStyles = styled.div`
  margin: 0 auto;
  max-width: 1200px;

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  justify-content: center;
  gap: .25rem
}

`;

export default StoreStyles;