import {
  FeaturedCard,
  FpCity,
  FpName,
  FpPrice,
  FpRating,
} from "./featuredPropertyCard.styles";

const FeaturedPropertyCard = () => {
  return (
    <FeaturedCard>
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1" />
      <FpName>Hilton Garden Inn</FpName>
      <FpCity>Berlin</FpCity>
      <FpPrice>Starting from $105</FpPrice>
      <FpRating>
        <span>8.9</span>
        <span>Excellent</span>
      </FpRating>
    </FeaturedCard>
  );
};

export default FeaturedPropertyCard;
