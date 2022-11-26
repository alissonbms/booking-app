import FooterComponent from "../../components/footer/FooterComponent";
import NavComponent from "../../components/nav/NavComponent";
import SearchItem from "../../components/searchItem/SearchItem";
import { useNavigate } from "react-router-dom";
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

const Properties = () => {
  const navigate = useNavigate();

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
                  placeholder="Write the desired destination"
                />
              </LsItem>
              <LsItem>
                <label htmlFor="">Check-in and Check-out</label>
                <input type="text" placeholder="01/01/01 to 01/01/01" />
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
                      placeholder="5"
                    />
                  </LsOptionItem>

                  <LsOptionItem>
                    <span className="lsOptionText">· Children</span>
                    <input
                      type="number"
                      min={0}
                      className="lsOptionInput"
                      placeholder="2"
                    />
                  </LsOptionItem>

                  <LsOptionItem>
                    <span className="lsOptionText">· Room</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder="1"
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
