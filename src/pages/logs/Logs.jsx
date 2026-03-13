import "./logs.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import { useState } from "react";

const allLogs = [
    { id: 1,  level: "info",    timestamp: "2026-03-13 09:00:01", user: "System",        message: "Server started successfully on port 3000." },
    { id: 2,  level: "info",    timestamp: "2026-03-13 09:01:15", user: "john.smith",    message: "User logged in from 192.168.1.10." },
    { id: 3,  level: "info",    timestamp: "2026-03-13 09:05:42", user: "carlos.rivera", message: "New account registered." },
    { id: 4,  level: "warning", timestamp: "2026-03-13 09:12:33", user: "System",        message: "High memory usage detected: 81%." },
    { id: 5,  level: "info",    timestamp: "2026-03-13 09:15:00", user: "jane.smith",    message: "Order #2357741 placed successfully." },
    { id: 6,  level: "error",   timestamp: "2026-03-13 09:18:55", user: "System",        message: "Email service connection timeout after 3 retries." },
    { id: 7,  level: "info",    timestamp: "2026-03-13 09:22:10", user: "admin",         message: "Product 'Dell XPS 13' updated: stock changed to 0." },
    { id: 8,  level: "warning", timestamp: "2026-03-13 09:30:45", user: "System",        message: "Auth service response time exceeded 300ms threshold." },
    { id: 9,  level: "info",    timestamp: "2026-03-13 09:45:22", user: "michael.doe",   message: "Payment of $900 processed for Order #2235235." },
    { id: 10, level: "error",   timestamp: "2026-03-13 10:00:05", user: "System",        message: "Failed to send notification email to tom.blake@email.com." },
    { id: 11, level: "info",    timestamp: "2026-03-13 10:05:30", user: "admin",         message: "New product 'iPad Pro 12.9\"' added to catalog." },
    { id: 12, level: "warning", timestamp: "2026-03-13 10:20:14", user: "System",        message: "Disk usage at 74% — consider cleanup." },
    { id: 13, level: "info",    timestamp: "2026-03-13 10:35:00", user: "linda.park",    message: "Order #5102938 placed for Nintendo Switch." },
    { id: 14, level: "error",   timestamp: "2026-03-13 10:48:22", user: "System",        message: "Database query timeout on users table (>5s)." },
    { id: 15, level: "info",    timestamp: "2026-03-13 11:00:00", user: "System",        message: "Scheduled backup completed successfully." },
    { id: 16, level: "warning", timestamp: "2026-03-13 11:10:33", user: "System",        message: "Rate limit reached for IP 203.0.113.42." },
    { id: 17, level: "info",    timestamp: "2026-03-13 11:25:15", user: "sarah.connor",  message: "Shipment TRK-002 marked as out-for-delivery." },
    { id: 18, level: "error",   timestamp: "2026-03-13 11:40:08", user: "System",        message: "CDN cache purge failed — retrying in 60s." },
    { id: 19, level: "info",    timestamp: "2026-03-13 11:55:00", user: "admin",         message: "User permissions updated for carlos.rivera." },
    { id: 20, level: "info",    timestamp: "2026-03-13 12:00:00", user: "System",        message: "Daily analytics report generated." },
];

const LEVELS = ["all", "info", "warning", "error"];

const Logs = () => {
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");

    const filtered = allLogs.filter((l) => {
        const matchLevel  = filter === "all" || l.level === filter;
        const matchSearch = l.message.toLowerCase().includes(search.toLowerCase()) ||
                            l.user.toLowerCase().includes(search.toLowerCase());
        return matchLevel && matchSearch;
    });

    return (
        <div className="logs-page">
            <Sidebar />
            <div className="logsContainer">
                <Navbar />
                <div className="logsContent">
                    <div className="logsHeader">
                        <div className="logsHeaderLeft">
                            <PsychologyOutlinedIcon className="logsHeaderIcon" />
                            <h2>System Logs</h2>
                            <span className="logCount">{filtered.length} entries</span>
                        </div>
                        <div className="logsControls">
                            <input
                                type="text"
                                placeholder="Search logs..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="logsSearch"
                            />
                            <div className="levelFilters">
                                {LEVELS.map((lvl) => (
                                    <button
                                        key={lvl}
                                        className={`levelBtn ${lvl} ${filter === lvl ? "active" : ""}`}
                                        onClick={() => setFilter(lvl)}
                                    >
                                        {lvl}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="logsTable">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Timestamp</th>
                                    <th>Level</th>
                                    <th>User</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((log) => (
                                    <tr key={log.id} className={`logRow ${log.level}`}>
                                        <td className="logId">{log.id}</td>
                                        <td className="logTime">{log.timestamp}</td>
                                        <td>
                                            <span className={`logBadge ${log.level}`}>{log.level}</span>
                                        </td>
                                        <td className="logUser">{log.user}</td>
                                        <td className="logMessage">{log.message}</td>
                                    </tr>
                                ))}
                                {filtered.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="noResults">No logs match your search.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logs;
