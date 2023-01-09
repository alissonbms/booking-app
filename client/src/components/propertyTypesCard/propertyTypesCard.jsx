import { ClockLoader } from "react-spinners";

//Styles
import { PropertyCard, LoaderContainer } from "./propertyTypesCard.styles";

//Utilities
import useFetch from "../../hooks/useFetch";

const PropertyTypesCard = () => {
  const { isFetching, data } = useFetch(
    "https://booking-app-api-sigma.vercel.app/api/property/countByType"
  );
  return (
    <>
      {isFetching ? (
        <LoaderContainer>
          <ClockLoader color={"hsl(199,100%,33%)"} />
        </LoaderContainer>
      ) : (
        <>
          <PropertyCard>
            <img src="https://images.unsplash.com/photo-1498409505433-aff66f7ba9e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80" />
            <h3>{data[0]?.type}</h3>
            <p>{data[0]?.count} properties</p>
          </PropertyCard>
          <PropertyCard>
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
            <h3>{data[1]?.type}</h3>
            <p>{data[1]?.count} properties</p>
          </PropertyCard>
          <PropertyCard>
            <img src="https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" />
            <h3>{data[2]?.type}</h3>
            <p>{data[2]?.count} properties</p>
          </PropertyCard>
        </>
      )}
    </>
  );
};

export default PropertyTypesCard;
