export const userColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "user",
    headerName: "User",
    width: 210,
    renderCell: (params) => (
      <div className="cellWithImg">
        <img
          src={params.row.photo}
          alt={`${params.row.username} profile picture`}
        />
        {params.row.username}
      </div>
    ),
  },
  { field: "email", headerName: "Email", width: 270 },
  { field: "country", headerName: "Country", width: 150 },
  { field: "city", headerName: "City", width: 150 },
  { field: "phone", headerName: "Phone", width: 200 },
];

export const propertyColumns = [
  { field: "_id", headerName: "ID", width: 320 },
  {
    field: "name",
    headerName: "Property",
    width: 210,
  },
  { field: "type", headerName: "Type", width: 120 },
  { field: "country", headerName: "Country", width: 120 },
  { field: "city", headerName: "City", width: 150 },
  { field: "rating", headerName: "Rating", width: 150 },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 310 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "description",
    headerName: "Description",
    width: 400,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];
