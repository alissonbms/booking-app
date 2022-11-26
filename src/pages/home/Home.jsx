import search from "../../assets/search.png";

import FooterComponent from "../../components/footer/FooterComponent";
import NavComponent from "../../components/nav/NavComponent";
import FeaturedPropertyCard from "../../components/featuredPropertyCard/featuredPropertyCard";
import PropertyTypesCard from "../../components/propertyTypesCard/propertyTypesCard";
import PopularCountryCard from "../../components/popularCountryCard/popularCountryCard";
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
} from "./home.styles";

const Home = () => {
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
                <label>Location</label>
                <input type="text" placeholder="Where are you going?" />
              </div>
              <div>
                <label>CheckIn and CheckOut</label>
                <input type="text" placeholder="01/01/01 to 01/01/01" />
              </div>
              <div>
                <label>Guests</label>
                <input
                  type="text"
                  placeholder="1 adult * 1 children * 1 room"
                />
              </div>
              <button type="submit">
                <img src={search} alt="submit button" />
                <span>Search</span>
              </button>
            </form>
          </SearchBar>
        </Hero>
      </Header>
      <Container>
        <Subtitle id="popular-countries">Popular Countries</Subtitle>
        <Exclusives>
          <PopularCountryCard />
          <PopularCountryCard />
          <PopularCountryCard />
          <PopularCountryCard />
        </Exclusives>

        <Subtitle id="property-types">Property Types</Subtitle>
        <Properties>
          <PropertyTypesCard />
          <PropertyTypesCard />
          <PropertyTypesCard />
        </Properties>
      </Container>

      <CostBenefitSection>
        <h3>Save time, save money!</h3>
        <span>
          Browse by the <Heat>BEST COST BENEFIT</Heat>
        </span>
        <button>Yeah, show me!</button>
      </CostBenefitSection>

      <Container>
        <Subtitle id="featured-properties">Featured Properties</Subtitle>
        <FP>
          <FeaturedPropertyCard />
          <FeaturedPropertyCard />
          <FeaturedPropertyCard />
          <FeaturedPropertyCard />
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
