import styled from "styled-components";

const BottleRockAppStyled = styled.div`
  .appContainer {
    padding: 80px 0px 50px 0px;
  }

  .lunch-app-bar {
    flex-grow: 1;

    .app-bar {
      background-color: #43e895;
      height: 80px;
    }

    .tool-bar {
      padding-top: 20px;
    }

    .title {
      color: #ffffff;
      flex-grow: 1;
      font-family: "Avenir Next Demi Bold";
      font-size: 17px;
      text-align: center;
    }

    .placeholder {
      width: 38px;
    }

    img.back-icon {
      width: 13px;
      height: 25px;
    }

    img.map-icon {
      width: 30px;
      height: 30px;
    }
  }

  .lunch-bottom-navigation {
    background-color: #2a2a2a;
    bottom: 0px;
    height: 50px;
    position: fixed;
    width: 100%;

    .navigation-label {
      font-family: "Avenir Next Demi Bold";
      font-size: 10px;
      color: #979797;
      img.navigation-icon {
        opacity: 0.5;
      }
    }

    .Mui-selected {
      color: #ffffff;

      img.navigation-icon {
        opacity: 1;
      }
    }

    .navigation-icon {
      height: 22px;
      width: 22px;
    }
  }
`;

export default BottleRockAppStyled;
