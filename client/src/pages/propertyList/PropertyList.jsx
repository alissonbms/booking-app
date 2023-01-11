import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { SyncLoader } from "react-spinners";

//Styles
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  Container,
  LeftCol,
  LoaderContainer,
  ListContainer,
  ListSearch,
  LsOptionItem,
  LsOptions,
  RightCol,
  LsItem,
  NotFound,
} from "./propertyList.styles.js";

//Components
import FooterComponent from "../../components/footer/FooterComponent";
import NavComponent from "../../components/nav/NavComponent";
import SearchItem from "../../components/searchItem/SearchItem";
import Loading from "../../components/loading/Loading";

//Utilities
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../contexts/SearchContext.jsx";

const Properties = () => {
  const {
    dispatch,
    destinationContext,
    datesContext,
    optionsContext,
    typeContext,
  } = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !destinationContext ||
      !destinationContext === undefined ||
      !datesContext ||
      !optionsContext ||
      !typeContext ||
      !typeContext === undefined
    ) {
      navigate("/");
    }
    setIsLoading(false);
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [destination, setDestination] = useState(destinationContext);
  const [type, setType] = useState(typeContext);
  const [dates, setDates] = useState(datesContext);
  const [options, setOptions] = useState(optionsContext);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(999);
  const [showDates, setShowDates] = useState(false);

  const handleChange = (e) => {
    setOptions((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const guests = parseInt(options.adult) + parseInt(options.children / 2);

  const handleSearch = async () => {
    reFetch();
    dispatch({
      type: "NEW_SEARCH",
      payload: {
        destinationContext: destination,
        typeContext: type,
        datesContext: dates,
        optionsContext: options,
      },
    });
  };

  const { data, isFetching, reFetch } = useFetch(
    `https://abms-booking-app-api.onrender.com/api/property?city=${destination}&type=${type}&min=${min}&max=${max}&guests=${guests}`
  );
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavComponent />
          <Container>
            <ListContainer>
              <RightCol>
                <ListSearch>
                  <h1 className="lsTitle">Search</h1>
                  <LsItem>
                    <label htmlFor="">Destination city</label>
                    <input
                      type="text"
                      placeholder={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </LsItem>
                  <LsItem>
                    <label htmlFor="">Property type</label>
                    <select onChange={(e) => setType(e.target.value)}>
                      <option value={type}>Choose type here</option>
                      <option value="Hotel">Hotel</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Cabin">Cabin</option>
                    </select>
                  </LsItem>

                  <LsItem>
                    <label htmlFor="">Check-in and Check-out</label>
                    <span onClick={() => setShowDates(!showDates)}>
                      {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                        dates[0].endDate,
                        "MM/dd/yyyy"
                      )}`}
                    </span>

                    {showDates && (
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDates([item.selection])}
                        moveRangeOnFirstSelection={false}
                        minDate={new Date()}
                        ranges={dates}
                        className="dates"
                      />
                    )}
                  </LsItem>

                  <LsItem>
                    <label htmlFor="" className="labelOp">
                      Options
                    </label>
                    <LsOptions>
                      <LsOptionItem>
                        <span className="lsOptionText">
                          · Min price <small>per night</small>
                        </span>
                        <input
                          type="number"
                          className="lsOptionInput"
                          onChange={(e) => setMin(e.target.value)}
                        />
                      </LsOptionItem>

                      <LsOptionItem>
                        <span className="lsOptionText">
                          · Max price <small>per night</small>
                        </span>
                        <input
                          type="number"
                          className="lsOptionInput"
                          onChange={(e) => setMax(e.target.value)}
                        />
                      </LsOptionItem>

                      <LsOptionItem>
                        <span className="lsOptionText">· Adult</span>
                        <input
                          type="number"
                          min={1}
                          className="lsOptionInput"
                          placeholder={options.adult}
                          id="adult"
                          onChange={handleChange}
                        />
                      </LsOptionItem>

                      <LsOptionItem>
                        <span className="lsOptionText">· Children</span>
                        <input
                          type="number"
                          min={0}
                          className="lsOptionInput"
                          placeholder={options.children}
                          id="children"
                          onChange={handleChange}
                        />
                      </LsOptionItem>
                    </LsOptions>
                  </LsItem>
                  <button onClick={handleSearch}>Search</button>
                </ListSearch>
              </RightCol>
              <LeftCol>
                <h1>Found properties:</h1>
                {isFetching ? (
                  <LoaderContainer>
                    <SyncLoader />
                  </LoaderContainer>
                ) : (
                  <>
                    {!data.length ? (
                      <>
                        <NotFound>
                          <span>No property found...</span>
                          <span>
                            Be sure to capitalize the first letter of the city
                            name like: <b>M</b>anchester
                          </span>
                          <span>Or change your specifications.</span>
                          Some cities available if you want to know:
                          <ul>
                            <li>Manchester</li>
                            <li>London</li>
                            <li>Sao Paulo</li>
                            <li>Rio de Janeiro</li>
                            <li>Guadalajara</li>
                            <li>Barcelona</li>
                            <li>Paris</li>
                            <li>Rome</li>
                            <li>Milan</li>
                            <li>Chicago</li>
                            <li>Washington</li>
                          </ul>
                        </NotFound>
                      </>
                    ) : (
                      <>
                        {data?.map((property) => (
                          <SearchItem property={property} key={property._id} />
                        ))}
                      </>
                    )}
                  </>
                )}
              </LeftCol>
            </ListContainer>

            <FooterComponent />
          </Container>
        </>
      )}
    </>
  );
};

export default Properties;
