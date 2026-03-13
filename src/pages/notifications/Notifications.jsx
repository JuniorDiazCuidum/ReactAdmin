import "./notifications.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { notificationsData } from "../../notificationsData";

const typeIcons = {
    order:    <ShoppingCartOutlinedIcon />,
    user:     <PersonOutlinedIcon />,
    delivery: <LocalShippingIcon />,
    warning:  <WarningAmberIcon />,
    success:  <CheckCircleOutlineIcon />,
    info:     <InfoOutlinedIcon />,
};

const Notifications = () => {
    const unread = notificationsData.filter((n) => !n.read).length;

    return (
        <div className="notif-page">
            <Sidebar />
            <div className="notifContainer">
                <Navbar />
                <div className="notifContent">
                    <div className="notifHeader">
                        <div className="notifHeaderLeft">
                            <NotificationsNoneIcon className="notifHeaderIcon" />
                            <h2>Notifications</h2>
                            {unread > 0 && <span className="unreadBadge">{unread} new</span>}
                        </div>
                    </div>

                    <div className="notifList">
                        {notificationsData.map((n) => (
                            <div key={n.id} className={`notifItem ${n.type} ${n.read ? "read" : "unread"}`}>
                                <div className={`notifIcon ${n.type}`}>{typeIcons[n.type]}</div>
                                <div className="notifBody">
                                    <div className="notifTitle">{n.title}</div>
                                    <div className="notifDesc">{n.description}</div>
                                </div>
                                <div className="notifTime">{n.time}</div>
                                {!n.read && <span className="dot" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
