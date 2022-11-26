import { CountryCard, Layer } from "./popularCountryCard.styles";

const PopularCountryCard = () => {
  return (
    <CountryCard>
      <img
        src="https://images.unsplash.com/photo-1488747279002-c8523379faaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
      <Layer>
        <h3>UK</h3>
        <p>10 properties</p>
      </Layer>
    </CountryCard>
  );
};

export default PopularCountryCard;
