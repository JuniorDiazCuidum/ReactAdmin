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