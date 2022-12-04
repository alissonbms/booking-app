import useFetch from "../../hooks/useFetch";
import {
  FeaturedCard,
  FpCity,
  FpName,
  FpPrice,
  FpRating,
} from "./featuredPropertyCard.styles";
import { AiFillStar } from "react-icons/ai";

const FeaturedPropertyCard = () => {
  const { data, isLoading } = useFetch(
    "http://localhost:3003/api/property?featured=true&limit=5"
  );
  return (
    <>
      {isLoading ? (
        <h1>Loading please wait</h1>
      ) : (
        <>
          {data?.map((property) => (
            <FeaturedCard key={property._id}>
              <img src={property.photos[0]} />
              <FpName>{property.name}</FpName>
              <FpCity>{property.city}</FpCity>
              <FpPrice>Starting from ${property.cheapestPrice}</FpPrice>
              {property.rating && (
                <FpRating>
                  <span>{property.rating}.0</span>
                  <span>{property.rating <= 7 ? "Regular" : "Excellent"}</span>
                  <AiFillStar color="#FFD700" />
                </FpRating>
              )}
            </FeaturedCard>
          ))}
        </>
      )}
    </>
  );
};

export default FeaturedPropertyCard;
