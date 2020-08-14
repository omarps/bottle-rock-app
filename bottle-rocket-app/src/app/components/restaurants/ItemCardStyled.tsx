import styled from "styled-components";

const ItemCardStyled = styled.div`
  .background-card {
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    height: 180px;
    font-family: "Avenir Next Demi Bold";
    color: #ffffff;
    position: relative;
  }

  .title-card {
    position: absolute;
    text-align: left;
    bottom: 12px;
    left: 6px;

    .restaurant-name {
      font-size: 16px;
      padding-bottom: 6px;
    }
    .category-name {
      font-size: 12px;
    }
  }
`;

export default ItemCardStyled;
