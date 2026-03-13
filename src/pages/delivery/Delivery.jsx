import "./delivery.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import { deliveryColumns, deliveryRows } from "../../datatablesource";

const Delivery = () => {
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: () => {
                return (
                    <div className="deliveryCellAction">
                        <div className="deliveryViewButton">View</div>
                        <div className="deliveryDeleteButton">Delete</div>
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
                        Deliveries
                    </div>
                    <DataGrid
                        className="datagrid"
                        rows={deliveryRows}
                        columns={deliveryColumns.concat(actionColumn)}
                        getRowId={(row) => row.id}
                        pageSize={7}
                        rowsPerPageOptions={[7]}
                        checkboxSelection
                        rowHeight={42}
                    />
                </div>
            </div>
        </div>
    );
};

export default Delivery;
