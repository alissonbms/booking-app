import { useLocation, useNavigate } from "react-router-dom";
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

const Properties = () => {
  let location = useLocation();
  const navigate = useNavigate();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [showDate, setShowDate] = useState(false);

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
                <input type="text" placeholder={destination} />
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
                    <input type="number" className="lsOptionInput" />
                  </LsOptionItem>

                  <LsOptionItem>
                    <span className="lsOptionText">
                      · Max price <small>per night</small>
                    </span>
                    <input type="number" className="lsOptionInput" />
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
              <button type="submit" onClick={() => navigate("/property")}>
                Search
              </button>
            </ListSearch>
          </RightCol>
          <LeftCol>
            <h1>Found properties:</h1>

            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </LeftCol>
        </ListContainer>

        <FooterComponent />
      </Container>
    </>
  );
};

export default Properties;
