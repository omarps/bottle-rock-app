import styled from "styled-components";

const DetailViewStyled = styled.div`
  flex-grow: 1;

  .map-container {
    height: 180px;

    .marker-paper {
      display: inline;

      .info-window {
        width: 120px;
        height: 80px;
        border: "1px solid #000000";
        border-radius: 5px;
        background-color: #ffffff;
        padding: 5px;
        position: relative;
        font-size: 10px;
      }
    }
  }

  .names-container {
    background-color: #34b379;

    .title-container {
      height: 60px;
      color: #ffffff;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      text-align: left;
      padding-left: 12px;

      .restaurant-names {
        .restaurant-name {
          display: inline-block;
          width: 100%;
          font-size: 16px;
        }
        .category-name {
          font-size: 12px;
        }
      }
    }
  }

  .address-container {
    color: #000000;
    font-size: 16px;
    left: 12px;
    position: absolute;
    text-align: left;

    .format-address {
      line-height: 4pt;
      padding-top: 16px;
    }
    .format-phone {
      padding-top: 26px;
    }
    .format-twitter {
      padding-top: 26px;
    }
  }
`;

export default DetailViewStyled;
