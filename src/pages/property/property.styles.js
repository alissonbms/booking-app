import styled from "styled-components";

export const PropertyContainer = styled.div`
  padding: 0 12%;
  margin-top: 50px;
  /* 
   */
  /* display: flex;
  flex-direction: column;
  align-items: center; */

  @media only screen and (max-width: 819px) {
    margin-top: 100px;
  }
`;

export const PropertyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  /* margin-bottom: 70px; */
`;

export const PropertyTitle = styled.h1`
  font-weight: 600;
`;

export const PropertyAddress = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const PropertyImages = styled.div`
  display: grid;
  margin: 15px 0px;
  grid-gap: 10px;
  //   display: flex;
  //   flex-wrap: wrap;
  //   /* justify-content: space-between; */
  grid-template-areas: "first ." "second second" ". .";

  div:nth-child(1) {
    grid-area: first;
  }
  div:nth-child(2) {
    grid-area: second;
  }

  /* 
  div:nth-child(2) {
    grid-area: second;
  }
  div:nth-child(3) {
    grid-area: three;
  }

  div:nth-child(4) {
    grid-area: forth;
  }

  div:nth-child(5) {
    grid-area: five;
  } */

  /* div:nth-child(4) {
    grid-area: forth;
  } */

  div img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: block;
    object-fit: cover;
  }

  /* @media only screen and (max-width: 1095px) {
    grid-template-areas: "first first" ". .";
  } */

  @media only screen and (max-width: 1629px) {
  }

  @media only screen and (max-width: 926px) {
    grid-template-areas: "first" "second";
  }
`;

export const PropertyDetails = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 1355px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const PropertyDetailsText = styled.div`
  flex-basis: 65%;
  /* flex: 3;*/

  p {
    margin-top: 20px;
  }
`;

export const PropertyDetailsPrice = styled.div`
  flex-basis: 30%;

  /* flex: 1; */
  /*max-height: max-content; */

  /*  */
  /* background-color: hsl(199, 100%, 33%); */
  /* background-color: #ebf3ff; */

  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;

  h1 {
    font-size: 27px;
    color: #555;
  }

  span {
    font-size: 15px;
  }

  h2 {
    font-weight: 300;
  }

  button {
    border: none;
    background-color: hsl(199, 100%, 33%);
    padding: 10px 20px;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    font-size: 17px;
  }

  @media only screen and (max-width: 1107px) {
    max-width: 620px;
  }
`;

/*

export const PropertyDetailsQuality = styled.ul`
  list-style: none;
  margin-top: 30px;
  color: #555;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;

  div {
    display: flex;
    align-items: center;
    font-size: 18px;
    gap: 20px;
  }
  

 
  li {
    /* font-size: 20px; */
/* font-weight: 500;
    text-align: center; 
  }
  span {
    font-size: 15px;
    /* display: block;
    
   
    /* 
      font-weight: 400;
      
  }

  .icon {
    font-size: 20px;
    color: #e14358;
    /* 
    
     */
/* position: absolute; */
/* top: 0px;
    left: -10px; */
/* align-self: center;
      
      
      
       
  }
  
    
    
    
    
    color: #333;
    margin-left: 40px;

    span {
      display: block;
      font-size: 15px;
      font-weight: 400;
      color: #555;
    }

    .icon {
      color: hsl(199, 100%, 33%);
      align-self: center;
      font-size: 17px;
      position: absolute;
      top: 0px;
      left: -40px;
    }
  
`;

// export const HotelWrapper = styled.div`;
//   position: relative;
// `;

// export const BookNow = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 0px;
//   color: white;
//   background-color: hsl(199, 100%, 33%);
//   padding: 10px 20px;
//   font-weight: bold;
//   border-radius: 5px;
//   cursor: pointer;
//   border: none;
// `;

// export const HotelTitle = styled.h1`
//   font-size: 27px;
// `;

// export const HotelDistance = styled.span`
//   color: hsl(199, 100%, 33%);
//   font-weight: 600;
// `;

// export const HotelPriceHighlight = styled.span`
//   font-weight: 500;
// `;

// export const HotelImages = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   /* justify-content: space-between; */
//   /*

//    */
// `;

// export const HotelImgWrapper = styled.div`
//   width: 33%;
//   /* */
//   background-color: red;

//   img {
//     width: 100%;
//     object-fit: cover;
//   }
// `;
