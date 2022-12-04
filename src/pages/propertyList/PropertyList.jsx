import { useLocation } from "react-router-dom";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

//Styles
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  Container,
  LeftCol,
  ListContainer,
  ListSearch,
  LsOptionItem,
  LsOptions,
  RightCol,
  LsItem,
} from "./propertyList.styles.js";

//Components
import FooterComponent from "../../components/footer/FooterComponent";
import NavComponent from "../../components/nav/NavComponent";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const Properties = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(999);
  const [showDate, setShowDate] = useState(false);

  const { data, isLoading, reFetch } = useFetch(
    `http://localhost:3003/api/property?city=${destination}&min=${min}&max=${max}`
  );
  return (
    <>
      <NavComponent />
      <Container>
        <ListContainer>
          <RightCol>
            <ListSearch>
              <h1 className="lsTitle">Search</h1>
              <LsItem>
                <label htmlFor="">Destination</label>
                <input
                  type="text"
                  placeholder={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </LsItem>
              <LsItem>
                <label htmlFor="">Check-in and Check-out</label>
                <span onClick={() => setShowDate(!showDate)}>
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>

                {showDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    minDate={new Date()}
                    ranges={date}
                    className="date"
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
                    />
                  </LsOptionItem>

                  <LsOptionItem>
                    <span className="lsOptionText">· Children</span>
                    <input
                      type="number"
                      min={0}
                      className="lsOptionInput"
                      placeholder={options.children}
                    />
                  </LsOptionItem>

                  <LsOptionItem>
                    <span className="lsOptionText">· Room</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.room}
                    />
                  </LsOptionItem>
                </LsOptions>
              </LsItem>
              <button onClick={() => reFetch()}>Search</button>
            </ListSearch>
          </RightCol>
          <LeftCol>
            <h1>Found properties:</h1>
            {isLoading ? (
              <h1>Loading please wait</h1>
            ) : (
              <>
                {data?.map((property) => (
                  <SearchItem property={property} key={property._id} />
                ))}
              </>
            )}
          </LeftCol>
        </ListContainer>

        <FooterComponent />
      </Container>
    </>
  );
};

export default Properties;
