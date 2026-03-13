import "./navbar.scss";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { notificationsData } from "../../notificationsData";
import { Link } from "react-router-dom";

const unreadCount = notificationsData.filter((n) => !n.read).length;


const Navbar = () => {
    const [chatOpen, setChatOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon" />
                    </div>
                    <Link to="/notifications" style={{ textDecoration: "none", color: "inherit" }}>
                        <div className="item">
                            <NotificationsNoneOutlinedIcon className="icon" />
                            <div className="counter">{unreadCount}</div>
                        </div>
                    </Link>
                    <div className="item chatItem">
                        <ChatBubbleOutlineOutlinedIcon
                            className="icon"
                            onClick={() => setChatOpen((prev) => !prev)}
                            style={{ cursor: "pointer" }}
                        />
                        <div className="counter">0</div>
                        {chatOpen && (
                            <div className="chatPopup">
                                <div className="chatPopupHeader">
                                    <span>Mensajes</span>
                                    <SettingsOutlinedIcon className="chatSettingsIcon" />
                                </div>
                                <div className="chatPopupBody">
                                    <p>No has recibido ningún mensaje</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon" />
                    </div>
                    <Link to="/profile" style={{ textDecoration: "none" }}>
                        <div className="item">
                            <img src="https://img.somake.ai/cdn-cgi/image/width=800,quality=80,format=auto,fit=scale-down/tools/examples/face-generator_gallery_1763099237_4902.jpg" alt=""
                                className="avatar" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;