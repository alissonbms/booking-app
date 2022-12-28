export const userColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "user",
    headerName: "User",
    width: 300,
    renderCell: (params) => (
      <div className="cellWithImg">
        <img
          src={params.row.img}
          alt={`${params.row.username} profile picture`}
        />
        {params.row.username}
      </div>
    ),
  },
  { field: "email", headerName: "Email", width: 300 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => (
      <div className={`cellWithStatus ${params.row.status}`}>
        {params.row.status}
      </div>
    ),
  },
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "product",
    headerName: "Product",
    width: 300,
    renderCell: (params) => (
      <div className="cellWithImg">
        <img src={params.row.img} alt={`${params.row.name} profile picture`} />
        {params.row.name}
      </div>
    ),
  },
  { field: "quantity", headerName: "Quantity", width: 160 },
  { field: "provider", headerName: "Provider", width: 230 },
  {
    field: "stock",
    headerName: "Stock",
    width: 160,
    renderCell: (params) => (
      <div className={`cellWithStatus ${params.row.stock}`}>
        {params.row.stock}
      </div>
    ),
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];

export const productRows = [
  {
    id: 1,
    name: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 250,
    provider: "Games Store",
    stock: "in",
  },
  {
    id: 2,
    name: "Playstation 4",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 400,
    provider: "Games Store",
    stock: "in",
  },
  {
    id: 3,
    name: "Playstation 3",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 1000,
    provider: "Games Store",
    stock: "in",
  },
  {
    id: 4,
    name: "Xbox Series X",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 50,
    provider: "Super Consoles",
    stock: "in",
  },
  {
    id: 5,
    name: "Xbox Series S",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 200,
    provider: "Super Consoles",
    stock: "in",
  },
  {
    id: 6,
    name: "Xbox One",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 500,
    provider: "Super Consoles",
    stock: "in",
  },
  {
    id: 7,
    name: "Xbox 360",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 0,
    provider: "Super Consoles",
    stock: "out",
  },
  {
    id: 8,
    name: "Playstation 2",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 0,
    provider: "Games Store",
    stock: "out",
  },
  {
    id: 9,
    name: "Nintendo Switch",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 100,
    provider: "Mega Play Store",
    stock: "in",
  },
  {
    id: 10,
    name: "Nintendo Wii",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 10,
    provider: "Mega Play Store",
    stock: "in",
  },
];
