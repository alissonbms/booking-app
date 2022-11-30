import { PropertyCard } from "./propertyTypesCard.styles";

const PropertyTypesCard = () => {
  return (
    <>
      <PropertyCard>
        <img src="https://images.unsplash.com/photo-1498409505433-aff66f7ba9e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80" />
        <h3>Cabin</h3>
      </PropertyCard>
      <PropertyCard>
        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        <h3>Apartment</h3>
      </PropertyCard>
      <PropertyCard>
        <img src="https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" />
        <h3>Hotel</h3>
      </PropertyCard>
    </>
  );
};

export default PropertyTypesCard;
