import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { DateRange } from "react-date-range";
import { add, format } from "date-fns";

//Images
import search from "../../assets/search.png";

//Styles
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  Aboutmsg,
  Container,
  CostBenefitSection,
  Exclusives,
  FP,
  Header,
  Heat,
  Hero,
  Properties,
  SearchBar,
  Subtitle,
  SearchButton,
  SearchInput,
  Options,
  OptionItem,
  OptionCounter,
  OptionCounterButton,
  Select,
} from "./home.styles";

//Components
import FooterComponent from "../../components/footer/FooterComponent";
import NavComponent from "../../components/nav/NavComponent";
import FeaturedPropertyCard from "../../components/featuredPropertyCard/featuredPropertyCard";
import PropertyTypesCard from "../../components/propertyTypesCard/propertyTypesCard";
import PopularCountryCard from "../../components/popularCountryCard/popularCountryCard";
import { SearchContext } from "../../context/SearchContext";

const Home = () => {
  const [destination, setDestination] = useState();
  const [type, setType] = useState();
  const [showDates, setShowDates] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const tomorrowFns = add(new Date(), {
    days: 1,
  });

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: tomorrowFns,
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({ adult: 1, children: 0 });
  let navigate = useNavigate();

  const handleOption = (optionName, operation) => {
    setOptions((prev) => {
      if (operation === "i") {
        return { ...prev, [optionName]: options[optionName] + 1 };
      }

      if (
        optionName === "children" &&
        operation === "d" &&
        options[optionName] === 0
      ) {
        return { ...prev };
      } else if (
        optionName !== "children" &&
        operation === "d" &&
        options[optionName] === 1
      ) {
        return { ...prev };
      } else {
        return { ...prev, [optionName]: options[optionName] - 1 };
      }
    });
  };

  const { dispatch } = useContext(SearchContext);

  useEffect(() => {
    dispatch({ type: "RESET_SEARCH" });
  }, []);

  const handleSearch = () => {
    dispatch({
      type: "NEW_SEARCH",
      payload: {
        destinationContext: destination,
        datesContext: dates,
        optionsContext: options,
        typeContext: type,
      },
    });
    navigate("/propertyList");
  };

  return (
    <>
      <Header>
        <NavComponent homeNav={true} />

        <Hero>
          <h1>
            Plan, book, discover new cultures,
            <br /> and have a comfortable stay
          </h1>

          <SearchBar>
            <form>
              <div>
                <label>What city are you going to?</label>
                <SearchInput
                  type="text"
                  placeholder="Write your destination here"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div>
                <label>Property type</label>
                <Select onChange={(e) => setType(e.target.value)}>
                  <option value={type}>Choose type here</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Cabin">Cabin</option>
                </Select>
              </div>

              <div>
                <label>CheckIn and CheckOut</label>
                <SearchInput
                  type="text"
                  placeholder={`${format(
                    dates[0].startDate,
                    "MM/dd/yyyy"
                  )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                  onClick={() => {
                    setShowDates(!showDates);
                    setShowOptions(false);
                  }}
                />
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
              </div>
              <div>
                <label>Guests</label>
                <SearchInput
                  type="text"
                  placeholder={`${options.adult} adult · ${options.children} children`}
                  onClick={() => {
                    setShowOptions(!showOptions);
                    setShowDates(false);
                  }}
                />

                {showOptions && (
                  <Options>
                    <OptionItem>
                      <span className="optionText">Adult</span>
                      <OptionCounter>
                        <OptionCounterButton
                          type="button"
                          disabled={options.adult === 1}
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </OptionCounterButton>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <OptionCounterButton
                          type="button"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>

                    <OptionItem>
                      <span className="optionText">Children</span>
                      <OptionCounter>
                        <OptionCounterButton
                          type="button"
                          disabled={options.children === 0}
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </OptionCounterButton>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <OptionCounterButton
                          type="button"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                  </Options>
                )}
              </div>

              <SearchButton type="button" onClick={handleSearch}>
                <img src={search} alt="submit button" />
                <span>Search</span>
              </SearchButton>
            </form>
          </SearchBar>
        </Hero>
      </Header>
      <Container>
        <Subtitle id="popular-countries">Popular Countries</Subtitle>
        <Exclusives>
          <PopularCountryCard />
        </Exclusives>

        <Subtitle id="property-types">Property Types</Subtitle>
        <Properties>
          <PropertyTypesCard />
        </Properties>
      </Container>

      <CostBenefitSection>
        <h3>Save time, save money!</h3>
        <span>
          Browse by the <Heat>BEST COST BENEFIT</Heat>
        </span>
        <button>Go book now!</button>
      </CostBenefitSection>

      <Container>
        <Subtitle id="featured-properties">Featured Properties</Subtitle>
        <FP>
          <FeaturedPropertyCard />
        </FP>
        <Aboutmsg>
          <h2>About BookinGood</h2>
          <p>
            Unlike other booking sites, BookinGood always emphasizes the
            importance of customer comfort, as well as conscious spending of
            time and money. We guarantee a good stay, due to a great categorical
            review and a thorough evaluation of the quality of our offered
            properties. We are the best choice among many others on the
            internet, if you are still not satisfied, know that the evaluations
            about our company are as positive as you can expect.
          </p>
        </Aboutmsg>
        <FooterComponent />
      </Container>
    </>
  );
};

export default Home;
