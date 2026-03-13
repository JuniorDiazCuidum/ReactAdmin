export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user", headerName: "User", width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    { field: "email", headerName: "Email", width: 230 },
    { field: "age", headerName: "Age", width: 100 },
    {
        field: "status", headerName: "Status", width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
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
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "passive",
        email: "2jamie@gmail.com",
        age: 42,
    },
    {
        id: 3,
        username: "Lannister",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "pending",
        email: "3lannister@gmail.com",
        age: 45,
    },
    {
        id: 4,
        username: "Stark",
        img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email: "4stark@gmail.com",
        age: 16,
    },
    {
        id: 5,
        username: "Targaryen",
        img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "passive",
        email: "5targaryen@gmail.com",
        age: 22,
    },
    {
        id: 6,
        username: "Melisandre",
        img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "passive",
        email: "6melisandre@gmail.com",
        age: 15,
    },
    {
        id: 7,
        username: "Clifford",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email: "7clifford@gmail.com",
        age: 44,
    },
    {
        id: 8,
        username: "Frances",
        img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email: "8frances@gmail.com",
        age: 36,
    },
    {
        id: 9,
        username: "Roxie",
        img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "passive",
        email: "9roxie@gmail.com",
        age: 65,
    },
    {
        id: 10,
        username: "John Doe",
        img: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email: "10johndoe@gmail.com",
        age: 30,
    },
];

export const productColumns = [
    { field: "id", headerName: "ID", width: 60 },
    {
        field: "name",
        headerName: "Product",
        width: 220,
        renderCell: (params) => (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="product" />
                {params.row.name}
            </div>
        ),
    },
    { field: "category", headerName: "Category", width: 130 },
    { field: "price", headerName: "Price", width: 90,
        renderCell: (params) => <span>${params.row.price}</span>
    },
    { field: "stock", headerName: "Stock", width: 80 },
    {
        field: "status",
        headerName: "Status",
        width: 150,
        renderCell: (params) => (
            <div className={`cellWithStatus ${params.row.status.replace(/\s+/g, "-").toLowerCase()}`}>
                {params.row.status}
            </div>
        ),
    },
];

export const productRows = [
    { id: 1,  name: "Acer Nitro 5",       category: "Laptops",      price: 785,  stock: 34,  status: "top-popular",   img: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { id: 2,  name: "PlayStation 5",      category: "Consoles",     price: 900,  stock: 8,   status: "low-stock",     img: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { id: 3,  name: "Redragon S101",      category: "Accessories",  price: 35,   stock: 200, status: "available",     img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { id: 4,  name: "Razer Blade 15",     category: "Laptops",      price: 920,  stock: 0,   status: "out-of-stock",  img: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { id: 5,  name: "ASUS ROG Strix",     category: "Laptops",      price: 2000, stock: 5,   status: "low-stock",     img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { id: 6,  name: "Samsung QLED TV",    category: "TVs",          price: 1450, stock: 12,  status: "available",     img: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { id: 7,  name: "iPhone 14 Pro",      category: "Phones",       price: 1099, stock: 47,  status: "top-popular",   img: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { id: 8,  name: "Dell XPS 13",        category: "Laptops",      price: 1350, stock: 0,   status: "out-of-stock",  img: "https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { id: 9,  name: "AirPods Pro",        category: "Accessories",  price: 249,  stock: 73,  status: "available",     img: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { id: 10, name: "Nintendo Switch",    category: "Consoles",     price: 299,  stock: 22,  status: "available",     img: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { id: 11, name: "Sony WH-1000XM5",   category: "Accessories",  price: 350,  stock: 0,   status: "discontinued",  img: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { id: 12, name: "LG UltraWide 34\"", category: "Monitors",     price: 680,  stock: 9,   status: "low-stock",     img: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { id: 13, name: "Logitech MX Master",category: "Accessories",  price: 99,   stock: 150, status: "available",     img: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { id: 14, name: "iPad Pro 12.9\"",   category: "Tablets",      price: 1199, stock: 31,  status: "top-popular",   img: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { id: 15, name: "Kindle Paperwhite", category: "Tablets",      price: 139,  stock: 0,   status: "discontinued",  img: "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
];

export const orderColumns = [
    { field: "id", headerName: "Tracking ID", width: 120 },
    {
        field: "product",
        headerName: "Product",
        width: 210,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="product" />
                    {params.row.product}
                </div>
            );
        },
    },
    { field: "customer", headerName: "Customer", width: 150 },
    { field: "date", headerName: "Date", width: 110 },
    { field: "amount", headerName: "Amount ($)", width: 110 },
    { field: "paymentMethod", headerName: "Payment Method", width: 160 },
    {
        field: "status",
        headerName: "Status",
        width: 140,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

export const orderRows = [
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        paymentMethod: "Cash on Delivery",
        status: "delivered",
    },
    {
        id: 2235235,
        product: "PlayStation 5",
        img: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        customer: "Michael Doe",
        date: "1 March",
        amount: 900,
        paymentMethod: "Online Payment",
        status: "processing",
    },
    {
        id: 2342353,
        product: "Redragon S101",
        img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        customer: "John Smith",
        date: "1 March",
        amount: 35,
        paymentMethod: "Cash on Delivery",
        status: "shipped",
    },
    {
        id: 2357741,
        product: "Razer Blade 15",
        img: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        customer: "Jane Smith",
        date: "1 March",
        amount: 920,
        paymentMethod: "Online Payment",
        status: "delivered",
    },
    {
        id: 2342355,
        product: "ASUS ROG Strix",
        img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        customer: "Harold Carol",
        date: "2 March",
        amount: 2000,
        paymentMethod: "Online Payment",
        status: "processing",
    },
    {
        id: 3124567,
        product: "Samsung QLED TV",
        img: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        customer: "Sarah Connor",
        date: "2 March",
        amount: 1450,
        paymentMethod: "Online Payment",
        status: "shipped",
    },
    {
        id: 3987654,
        product: "iPhone 14 Pro",
        img: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        customer: "Tom Blake",
        date: "3 March",
        amount: 1099,
        paymentMethod: "Online Payment",
        status: "cancelled",
    },
    {
        id: 4123890,
        product: "Dell XPS 13",
        img: "https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        customer: "Emily Rose",
        date: "3 March",
        amount: 1350,
        paymentMethod: "Cash on Delivery",
        status: "refunded",
    },
    {
        id: 4567321,
        product: "AirPods Pro",
        img: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        customer: "Carlos Rivera",
        date: "4 March",
        amount: 249,
        paymentMethod: "Online Payment",
        status: "delivered",
    },
    {
        id: 5102938,
        product: "Nintendo Switch",
        img: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        customer: "Linda Park",
        date: "5 March",
        amount: 299,
        paymentMethod: "Cash on Delivery",
        status: "processing",
    },
];

export const deliveryColumns = [
    { field: "id", headerName: "Tracking #", width: 120 },
    { field: "recipient", headerName: "Recipient", width: 150 },
    { field: "destination", headerName: "Destination", width: 190 },
    { field: "carrier", headerName: "Carrier", width: 130 },
    { field: "estimatedDate", headerName: "Est. Delivery", width: 120 },
    {
        field: "status",
        headerName: "Status",
        width: 150,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

export const deliveryRows = [
    { id: "TRK-001", recipient: "John Smith", destination: "123 Elm St, New York", carrier: "FedEx", estimatedDate: "14 March", status: "in-transit" },
    { id: "TRK-002", recipient: "Sarah Connor", destination: "456 Oak Ave, Los Angeles", carrier: "UPS", estimatedDate: "15 March", status: "out-for-delivery" },
    { id: "TRK-003", recipient: "Michael Doe", destination: "789 Pine Rd, Chicago", carrier: "DHL", estimatedDate: "13 March", status: "delivered" },
    { id: "TRK-004", recipient: "Emily Rose", destination: "22 Maple Dr, Houston", carrier: "FedEx", estimatedDate: "16 March", status: "delayed" },
    { id: "TRK-005", recipient: "Carlos Rivera", destination: "9 Birch Ln, Phoenix", carrier: "USPS", estimatedDate: "14 March", status: "in-transit" },
    { id: "TRK-006", recipient: "Linda Park", destination: "88 Cedar Blvd, Dallas", carrier: "DHL", estimatedDate: "17 March", status: "pending" },
    { id: "TRK-007", recipient: "Tom Blake", destination: "5 Spruce Way, San Diego", carrier: "UPS", estimatedDate: "13 March", status: "delivered" },
    { id: "TRK-008", recipient: "Jane Smith", destination: "33 Walnut St, Austin", carrier: "FedEx", estimatedDate: "15 March", status: "returned" },
    { id: "TRK-009", recipient: "Harold Carol", destination: "71 Aspen Ct, Seattle", carrier: "USPS", estimatedDate: "16 March", status: "out-for-delivery" },
    { id: "TRK-010", recipient: "Rachel Kim", destination: "14 Willow Ave, Denver", carrier: "DHL", estimatedDate: "18 March", status: "delayed" },
];