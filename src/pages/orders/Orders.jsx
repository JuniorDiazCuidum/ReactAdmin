import "./orders.scss";
import "../../components/datatable/datatable.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import { orderColumns, orderRows } from "../../datatablesource";
import { Link } from "react-router-dom";

const Orders = () => {
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to="/orders/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton">Delete</div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <div className="datatable">
                    <div className="datatableTitle">
                        Orders
                        <Link
                            to="/orders/new"
                            style={{ textDecoration: "none" }}
                            className="link"
                        >
                            Add New
                        </Link>
                    </div>
                    <DataGrid
                        className="datagrid"
                        rows={orderRows}
                        columns={orderColumns.concat(actionColumn)}
                        pageSize={7}
                        rowsPerPageOptions={[7]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
};

export default Orders;
