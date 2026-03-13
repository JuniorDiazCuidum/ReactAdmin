import "./products.scss";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns, productRows } from "../../datatablesource";

const QuantityCell = ({ stock }) => {
    const [qty, setQty] = useState(0);
    return (
        <div className="qtyControl">
            <button
                className="qtyBtn minus"
                onClick={() => setQty((q) => Math.max(0, q - 1))}
                disabled={qty === 0}
            >
                −
            </button>
            <span className="qtyValue">{qty}</span>
            <button
                className="qtyBtn plus"
                onClick={() => setQty((q) => q + 1)}
                disabled={stock === 0 || qty >= stock}
            >
                +
            </button>
        </div>
    );
};

const Products = () => {
    const actionColumn = [
        {
            field: "action",
            headerName: "Quantity",
            width: 140,
            sortable: false,
            renderCell: (params) => <QuantityCell stock={params.row.stock} />,
        },
    ];

    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <div className="datatable">
                    <div className="datatableTitle">
                        Products
                    </div>
                    <DataGrid
                        className="datagrid"
                        rows={productRows}
                        columns={productColumns.concat(actionColumn)}
                        pageSize={8}
                        rowsPerPageOptions={[8]}
                        checkboxSelection
                        rowHeight={48}
                    />
                </div>
            </div>
        </div>
    );
};

export default Products;
