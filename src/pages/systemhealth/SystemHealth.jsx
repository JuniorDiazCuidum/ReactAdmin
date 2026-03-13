import "./systemhealth.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import StorageIcon from "@mui/icons-material/Storage";
import SpeedIcon from "@mui/icons-material/Speed";
import CloudIcon from "@mui/icons-material/Cloud";
import DnsIcon from "@mui/icons-material/Dns";
import HttpIcon from "@mui/icons-material/Http";

const services = [
    { name: "API Server",        status: "operational", uptime: "99.98%", latency: "42ms",  icon: <HttpIcon /> },
    { name: "Database",          status: "operational", uptime: "99.95%", latency: "18ms",  icon: <StorageIcon /> },
    { name: "CDN",               status: "operational", uptime: "100%",   latency: "8ms",   icon: <CloudIcon /> },
    { name: "Auth Service",      status: "degraded",    uptime: "98.20%", latency: "310ms", icon: <DnsIcon /> },
    { name: "Payment Gateway",   status: "operational", uptime: "99.90%", latency: "95ms",  icon: <SpeedIcon /> },
    { name: "Email Service",     status: "outage",      uptime: "95.10%", latency: "—",     icon: <CloudIcon /> },
    { name: "Search Engine",     status: "operational", uptime: "99.87%", latency: "55ms",  icon: <DnsIcon /> },
    { name: "File Storage",      status: "operational", uptime: "99.99%", latency: "22ms",  icon: <StorageIcon /> },
];

const metrics = [
    { label: "CPU Usage",     value: 38,  unit: "%",  color: "#8884d8" },
    { label: "Memory Usage",  value: 61,  unit: "%",  color: "#82ca9d" },
    { label: "Disk Usage",    value: 74,  unit: "%",  color: "#ffc658" },
    { label: "Network I/O",   value: 22,  unit: "%",  color: "#0097a7" },
];

const statusIcon = (status) => {
    if (status === "operational") return <CheckCircleIcon className="svc-icon operational" />;
    if (status === "degraded")    return <WarningAmberIcon className="svc-icon degraded" />;
    return <ErrorIcon className="svc-icon outage" />;
};

const SystemHealth = () => {
    const operational = services.filter(s => s.status === "operational").length;
    const degraded    = services.filter(s => s.status === "degraded").length;
    const outage      = services.filter(s => s.status === "outage").length;

    return (
        <div className="health-page">
            <Sidebar />
            <div className="healthContainer">
                <Navbar />
                <div className="healthContent">

                    {/* Header */}
                    <div className="healthHeader">
                        <SettingsSystemDaydreamOutlinedIcon className="healthHeaderIcon" />
                        <h2>System Health</h2>
                        <span className="lastUpdated">Last updated: just now</span>
                    </div>

                    {/* Summary cards */}
                    <div className="healthSummary">
                        <div className="summaryCard operational">
                            <CheckCircleIcon />
                            <div>
                                <span className="summaryCount">{operational}</span>
                                <span className="summaryLabel">Operational</span>
                            </div>
                        </div>
                        <div className="summaryCard degraded">
                            <WarningAmberIcon />
                            <div>
                                <span className="summaryCount">{degraded}</span>
                                <span className="summaryLabel">Degraded</span>
                            </div>
                        </div>
                        <div className="summaryCard outage">
                            <ErrorIcon />
                            <div>
                                <span className="summaryCount">{outage}</span>
                                <span className="summaryLabel">Outage</span>
                            </div>
                        </div>
                    </div>

                    {/* Metrics */}
                    <div className="healthMetrics">
                        <h3>Server Metrics</h3>
                        <div className="metricsList">
                            {metrics.map((m, i) => (
                                <div key={i} className="metricItem">
                                    <div className="metricTop">
                                        <span className="metricLabel">{m.label}</span>
                                        <span className="metricValue" style={{ color: m.color }}>{m.value}{m.unit}</span>
                                    </div>
                                    <div className="metricTrack">
                                        <div
                                            className="metricFill"
                                            style={{ width: `${m.value}%`, backgroundColor: m.color }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Services table */}
                    <div className="healthServices">
                        <h3>Services Status</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Status</th>
                                    <th>Uptime</th>
                                    <th>Latency</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((s, i) => (
                                    <tr key={i}>
                                        <td className="svcName">
                                            <span className="svcIconWrap">{s.icon}</span>
                                            {s.name}
                                        </td>
                                        <td>
                                            <div className={`statusBadge ${s.status}`}>
                                                {statusIcon(s.status)}
                                                {s.status.charAt(0).toUpperCase() + s.status.slice(1)}
                                            </div>
                                        </td>
                                        <td className="svcUptime">{s.uptime}</td>
                                        <td className="svcLatency">{s.latency}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SystemHealth;
