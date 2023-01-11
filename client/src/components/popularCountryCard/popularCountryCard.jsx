import { ClockLoader } from "react-spinners";

//Styles
import {
  CountryCard,
  Layer,
  LoaderContainer,
} from "./popularCountryCard.styles";

//Utilities
import useFetch from "../../hooks/useFetch";

const PopularCountryCard = () => {
  const { data, isFetching } = useFetch(
    "https://abms-booking-app-api.onrender.com/api/property/countByCountry?countries=UK,Mexico,Brazil,Iceland"
  );
  return (
    <>
      {isFetching ? (
        <LoaderContainer>
          <ClockLoader color={"hsl(199,100%,33%)"} />
        </LoaderContainer>
      ) : (
        <>
          <CountryCard>
            <img
              src="https://images.unsplash.com/photo-1488747279002-c8523379faaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <Layer>
              <h3>UK</h3>
              <p>{data[0]} properties</p>
            </Layer>
          </CountryCard>
          <CountryCard>
            <img
              src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <Layer>
              <h3>Mexico</h3>
              <p>{data[1]} properties</p>
            </Layer>
          </CountryCard>
          <CountryCard>
            <img
              src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <Layer>
              <h3>Brazil</h3>
              <p>{data[2]} properties</p>
            </Layer>
          </CountryCard>
          <CountryCard>
            <img
              src="https://images.unsplash.com/photo-1523457875850-82e7a32ab637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />
            <Layer>
              <h3>Iceland</h3>
              <p>{data[3]} properties</p>
            </Layer>
          </CountryCard>
        </>
      )}
    </>
  );
};

export default PopularCountryCard;
