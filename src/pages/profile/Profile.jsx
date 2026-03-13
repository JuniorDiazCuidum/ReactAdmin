import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from "react-router-dom";

const recentActivity = [
    { id: 1, action: "Added product 'iPad Pro 12.9\"' to catalog",   time: "12 min ago",  type: "product" },
    { id: 2, action: "Updated permissions for carlos.rivera",         time: "38 min ago",  type: "user" },
    { id: 3, action: "Changed stock of 'Dell XPS 13' to 0",           time: "1 hr ago",    type: "product" },
    { id: 4, action: "Reviewed delivery TRK-002 status",              time: "2 hrs ago",   type: "delivery" },
    { id: 5, action: "Generated daily analytics report",              time: "3 hrs ago",   type: "system" },
    { id: 6, action: "Processed payment of $900 — Order #2235235",    time: "5 hrs ago",   type: "order" },
];

const typeColor = {
    product:  { bg: "#f0eeff", color: "#6439ff" },
    user:     { bg: "#e8f5e9", color: "#43a047" },
    delivery: { bg: "#fff8e1", color: "#f9a825" },
    system:   { bg: "#f3f3f3", color: "#888" },
    order:    { bg: "#e3f2fd", color: "#1976d2" },
};

const Profile = () => {
    return (
        <div className="profile-page">
            <Sidebar />
            <div className="profileContainer">
                <Navbar />
                <div className="profileContent">

                    {/* ── Top card ── */}
                    <div className="profileCard">
                        <div className="profileAvatar">
                            <AccountCircleOutlinedIcon className="avatarIcon" />
                        </div>
                        <div className="profileInfo">
                            <h2 className="profileName">Admin User</h2>
                            <span className="profileRole">Super Administrator</span>
                            <div className="profileDetails">
                                <div className="detailItem">
                                    <EmailOutlinedIcon className="detailIcon" />
                                    <span>admin@webadmin.com</span>
                                </div>
                                <div className="detailItem">
                                    <PhoneOutlinedIcon className="detailIcon" />
                                    <span>+1 (555) 000-1234</span>
                                </div>
                                <div className="detailItem">
                                    <LocationOnOutlinedIcon className="detailIcon" />
                                    <span>San Francisco, CA</span>
                                </div>
                            </div>
                        </div>
                        <Link to="/settings" style={{ textDecoration: "none" }}>
                            <button className="editProfileBtn">Edit Profile</button>
                        </Link>
                    </div>

                    <div className="profileBottom">
                        {/* ── Stats ── */}
                        <div className="profileStats">
                            <h3 className="sectionTitle">Overview</h3>
                            <div className="statsGrid">
                                <div className="statCard">
                                    <CreditCardIcon className="statIcon orders" />
                                    <div className="statInfo">
                                        <span className="statValue">128</span>
                                        <span className="statLabel">Orders Managed</span>
                                    </div>
                                </div>
                                <div className="statCard">
                                    <LocalShippingIcon className="statIcon delivery" />
                                    <div className="statInfo">
                                        <span className="statValue">54</span>
                                        <span className="statLabel">Deliveries Tracked</span>
                                    </div>
                                </div>
                                <div className="statCard">
                                    <StoreIcon className="statIcon products" />
                                    <div className="statInfo">
                                        <span className="statValue">15</span>
                                        <span className="statLabel">Products Listed</span>
                                    </div>
                                </div>
                                <div className="statCard">
                                    <NotificationsNoneIcon className="statIcon notifs" />
                                    <div className="statInfo">
                                        <span className="statValue">3</span>
                                        <span className="statLabel">Unread Alerts</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── Recent Activity ── */}
                        <div className="profileActivity">
                            <h3 className="sectionTitle">Recent Activity</h3>
                            <div className="activityList">
                                {recentActivity.map((item) => (
                                    <div key={item.id} className="activityItem">
                                        <div
                                            className="activityDot"
                                            style={{
                                                backgroundColor: typeColor[item.type].bg,
                                                color: typeColor[item.type].color,
                                            }}
                                        >
                                            <span className="dotType">{item.type[0].toUpperCase()}</span>
                                        </div>
                                        <div className="activityText">
                                            <span className="activityAction">{item.action}</span>
                                            <span className="activityTime">{item.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
