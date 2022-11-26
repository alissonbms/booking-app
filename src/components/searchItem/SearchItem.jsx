import "./searchItem.styles.js";

import {
  Si,
  SiCheckButton,
  SiDesc,
  SiDetails,
  SiDetailsTexts,
  SiDistance,
  SiFeatures,
  SiPrice,
  SiRating,
  SiSubtitle,
  SiTaxiOp,
  SiTitle,
} from "./searchItem.styles.js";

const SearchItem = () => {
  return (
    <Si>
      <img src="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
      <SiDesc>
        <SiTitle>Tower Street Apartments</SiTitle>
        <SiDistance>500m from center</SiDistance>
        <span>Free airport taxi</span>
        <SiSubtitle>Studio Apartment with Air conditioning</SiSubtitle>
        <SiFeatures>Entire studio • 1 bathroom • 21m² 1 full bed</SiFeatures>
      </SiDesc>
      <SiDetails>
        <SiRating>
          <span>Excellent</span>
          <button>8.9</button>
        </SiRating>
        <SiDetailsTexts>
          <SiPrice>$112</SiPrice>
          <SiTaxiOp>Includes taxes and fees</SiTaxiOp>
          <SiCheckButton>See availability</SiCheckButton>
        </SiDetailsTexts>
      </SiDetails>
    </Si>
  );
};

export default SearchItem;
