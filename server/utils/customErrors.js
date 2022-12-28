export const createError = (status, message) => {
  const error = new Error();
  error.status = status;
  error.message = message;
  return error;
};

export const missingEntityRegistersError = (entity) => {
  const error = new Error();
  error.status = 400;
  error.message = `No ${entity} found, make sure to register some`;
  return error;
};

export const allFieldsAreRequiredError = () => {
  const error = new Error();
  error.status = 400;
  error.message = "All fields are required";
  return error;
};

export const couldNotCreateError = (entity) => {
  const error = new Error();
  error.status = 400;
  error.message = `Could not create ${entity}`;
  return error;
};

export const notFoundOrInvalidDataError = (entity) => {
  const error = new Error();
  error.status = 400;
  error.message = `${entity} not found or invalid data`;
  return error;
};

export const idIsRequiredError = (entity) => {
  const error = new Error();
  error.status = 400;
  error.message = `${entity} ID is required`;
  return error;
};
