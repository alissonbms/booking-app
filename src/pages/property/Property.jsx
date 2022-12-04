import { MdLocationOn } from "react-icons/md";
import { useLocation } from "react-router-dom";
//Styles
import {
  PropertyAddress,
  PropertyContainer,
  PropertyDetails,
  PropertyDetailsPrice,
  PropertyDetailsText,
  PropertyImages,
  PropertyTitle,
  PropertyWrapper,
} from "./property.styles";

//Components
import NavComponent from "../../components/nav/NavComponent";
import useFetch from "../../hooks/useFetch";

const Property = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, isLoading } = useFetch(
    `http://localhost:3003/api/property/find/${id}`
  );
  console.log(data);

  return (
    <>
      <NavComponent />
      <PropertyContainer>
        <PropertyWrapper>
          {isLoading ? (
            <h1>Loading please wait</h1>
          ) : (
            <>
              <PropertyTitle>{data?.name}</PropertyTitle>
              <PropertyAddress>
                <MdLocationOn />
                <span>{data?.address}</span>
              </PropertyAddress>
              <PropertyImages>
                {data.photos?.map((photo, i) => (
                  <div key={i}>
                    <img src={photo} alt={i} />
                  </div>
                ))}
              </PropertyImages>
              <PropertyDetails>
                <PropertyDetailsText>
                  <PropertyTitle>{data.headline}</PropertyTitle>
                  <p>{data.description}</p>
                </PropertyDetailsText>

                <PropertyDetailsPrice>
                  <h1>Perfect for a 9-night stay!</h1>
                  <span>
                    Located in the real heart of Krakow, this property has an
                    excellent location score of 9.8!
                  </span>
                  <h2>
                    <b>$945</b> (9 nights)
                  </h2>
                  <button>Reserve or Book Now!</button>
                </PropertyDetailsPrice>
              </PropertyDetails>
            </>
          )}
        </PropertyWrapper>

        {/* <HotelWrapper>
          <BookNow>Reserve or Book Now!</BookNow>
          <HotelTitle>Grand Hotel</HotelTitle>
          <HotelAddress>
            <MdLocationOn />
            <span>Elton St 125 New york</span>
          </HotelAddress>
          <HotelDistance>Excellent location - 500m from center</HotelDistance>
          <HotelPriceHighlight>
            Book a stay over $114 at this property and get a free airport taxi
          </HotelPriceHighlight>
          <HotelImages>
            {photos.map((photo, i) => (
              <HotelImgWrapper>
                <img
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                  // onClick={() => handleOpen(i)}
                />
              </HotelImgWrapper>
            ))}
          </HotelImages>
          <HotelDetails>
            <HotelDetailsText>
              <HotelTitle>Stay in the heart of City</HotelTitle>
              <p>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </HotelDetailsText>

            <HotelDetailsPrice>
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </HotelDetailsPrice>
          </HotelDetails>
        </HotelWrapper> */}
        {/* <FooterComponent /> */}
      </PropertyContainer>
    </>
  );
};

export default Property;
