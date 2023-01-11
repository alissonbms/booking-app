import { AiFillStar } from "react-icons/ai";
import { ClockLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

//Styles
import {
  LoaderContainer,
  FeaturedCard,
  FpCity,
  FpName,
  FpPrice,
  FpRating,
} from "./featuredPropertyCard.styles";

//Utilities
import useFetch from "../../hooks/useFetch";

const FeaturedPropertyCard = () => {
  const navigate = useNavigate();

  const { data, isFetching } = useFetch(
    "https://abms-booking-app-api.onrender.com/api/property?featured=true&limit=5"
  );

  return (
    <>
      {isFetching ? (
        <LoaderContainer>
          <ClockLoader color={"hsl(199,100%,33%)"} />
        </LoaderContainer>
      ) : (
        <>
          {data?.map((property) => (
            <FeaturedCard
              key={property._id}
              onClick={() =>
                navigate(`/property/${property._id}`, {
                  state: {
                    propertyName: property.name,
                    propertyPhoto: property.photos[0],
                  },
                })
              }
            >
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
