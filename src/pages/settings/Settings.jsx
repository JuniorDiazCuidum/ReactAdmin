import "./settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useContext } from "react";
import { DarkModeContext } from "../../context/darkModecontext";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Settings = () => {
    const { darkMode, dispatch } = useContext(DarkModeContext);

    // --- Profile ---
    const [profile, setProfile] = useState({ name: "Admin User", email: "admin@webadmin.com" });
    const [profileDraft, setProfileDraft] = useState({ ...profile });
    const [profileSaved, setProfileSaved] = useState(false);

    const handleProfileChange = (e) => {
        setProfileDraft({ ...profileDraft, [e.target.name]: e.target.value });
        setProfileSaved(false);
    };

    const handleProfileSave = () => {
        setProfile({ ...profileDraft });
        setProfileSaved(true);
        setTimeout(() => setProfileSaved(false), 2500);
    };

    // --- Notifications ---
    const [notifSettings, setNotifSettings] = useState({
        emailNotifications: true,
        pushNotifications: false,
        orderAlerts: true,
        systemAlerts: true,
        weeklyReport: false,
    });

    const toggleNotif = (key) =>
        setNotifSettings((prev) => ({ ...prev, [key]: !prev[key] }));

    // --- Language ---
    const [language, setLanguage] = useState("en");

    // --- Password ---
    const [passwords, setPasswords] = useState({ current: "", next: "", confirm: "" });
    const [pwMsg, setPwMsg] = useState(null);

    const handlePasswordChange = (e) =>
        setPasswords({ ...passwords, [e.target.name]: e.target.value });

    const handlePasswordSave = () => {
        if (!passwords.current) { setPwMsg({ type: "error", text: "Enter your current password." }); return; }
        if (passwords.next.length < 6) { setPwMsg({ type: "error", text: "New password must be at least 6 characters." }); return; }
        if (passwords.next !== passwords.confirm) { setPwMsg({ type: "error", text: "Passwords do not match." }); return; }
        setPasswords({ current: "", next: "", confirm: "" });
        setPwMsg({ type: "success", text: "Password updated successfully." });
        setTimeout(() => setPwMsg(null), 3000);
    };

    return (
        <div className="settings-page">
            <Sidebar />
            <div className="settingsContainer">
                <Navbar />
                <div className="settingsContent">
                    <h2 className="settingsTitle">Settings</h2>

                    {/* ── Profile Section ── */}
                    <div className="settingsCard">
                        <div className="cardHeader">
                            <PersonOutlineIcon className="cardIcon" />
                            <span>Profile</span>
                        </div>
                        <div className="cardBody">
                            <div className="formRow">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={profileDraft.name}
                                    onChange={handleProfileChange}
                                />
                            </div>
                            <div className="formRow">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={profileDraft.email}
                                    onChange={handleProfileChange}
                                />
                            </div>
                            <div className="cardActions">
                                {profileSaved && <span className="savedMsg">Changes saved!</span>}
                                <button className="saveBtn" onClick={handleProfileSave}>
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ── Appearance Section ── */}
                    <div className="settingsCard">
                        <div className="cardHeader">
                            <PaletteOutlinedIcon className="cardIcon" />
                            <span>Appearance</span>
                        </div>
                        <div className="cardBody">
                            <div className="settingsRow">
                                <div className="rowLeft">
                                    <DarkModeOutlinedIcon className="rowIcon" />
                                    <div>
                                        <div className="rowLabel">Dark Mode</div>
                                        <div className="rowDesc">Switch between light and dark theme</div>
                                    </div>
                                </div>
                                <label className="toggle">
                                    <input
                                        type="checkbox"
                                        checked={darkMode}
                                        onChange={() => dispatch({ type: "TOGGLE" })}
                                    />
                                    <span className="slider" />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* ── Language Section ── */}
                    <div className="settingsCard">
                        <div className="cardHeader">
                            <LanguageIcon className="cardIcon" />
                            <span>Language & Region</span>
                        </div>
                        <div className="cardBody">
                            <div className="formRow">
                                <label>Display Language</label>
                                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                                    <option value="en">English</option>
                                    <option value="es">Español</option>
                                    <option value="fr">Français</option>
                                    <option value="de">Deutsch</option>
                                    <option value="pt">Português</option>
                                    <option value="zh">中文</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* ── Notifications Section ── */}
                    <div className="settingsCard">
                        <div className="cardHeader">
                            <NotificationsNoneIcon className="cardIcon" />
                            <span>Notifications</span>
                        </div>
                        <div className="cardBody">
                            {[
                                { key: "emailNotifications", label: "Email Notifications",  desc: "Receive updates via email" },
                                { key: "pushNotifications",  label: "Push Notifications",   desc: "Browser push alerts" },
                                { key: "orderAlerts",        label: "Order Alerts",          desc: "Notify on new or updated orders" },
                                { key: "systemAlerts",       label: "System Alerts",         desc: "Critical system warnings and errors" },
                                { key: "weeklyReport",       label: "Weekly Report",         desc: "Summary email every Monday" },
                            ].map(({ key, label, desc }) => (
                                <div key={key} className="settingsRow">
                                    <div className="rowLeft">
                                        <div>
                                            <div className="rowLabel">{label}</div>
                                            <div className="rowDesc">{desc}</div>
                                        </div>
                                    </div>
                                    <label className="toggle">
                                        <input
                                            type="checkbox"
                                            checked={notifSettings[key]}
                                            onChange={() => toggleNotif(key)}
                                        />
                                        <span className="slider" />
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Password Section ── */}
                    <div className="settingsCard">
                        <div className="cardHeader">
                            <LockOutlinedIcon className="cardIcon" />
                            <span>Change Password</span>
                        </div>
                        <div className="cardBody">
                            <div className="formRow">
                                <label>Current Password</label>
                                <input
                                    type="password"
                                    name="current"
                                    value={passwords.current}
                                    onChange={handlePasswordChange}
                                    placeholder="••••••••"
                                />
                            </div>
                            <div className="formRow">
                                <label>New Password</label>
                                <input
                                    type="password"
                                    name="next"
                                    value={passwords.next}
                                    onChange={handlePasswordChange}
                                    placeholder="••••••••"
                                />
                            </div>
                            <div className="formRow">
                                <label>Confirm New Password</label>
                                <input
                                    type="password"
                                    name="confirm"
                                    value={passwords.confirm}
                                    onChange={handlePasswordChange}
                                    placeholder="••••••••"
                                />
                            </div>
                            <div className="cardActions">
                                {pwMsg && (
                                    <span className={pwMsg.type === "error" ? "errorMsg" : "savedMsg"}>
                                        {pwMsg.text}
                                    </span>
                                )}
                                <button className="saveBtn" onClick={handlePasswordSave}>
                                    Update Password
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Settings;
