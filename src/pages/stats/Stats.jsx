import "./stats.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InventoryIcon from "@mui/icons-material/Inventory";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const monthlyData = [
    { month: "Jan", Revenue: 1200, Expenses: 900 },
    { month: "Feb", Revenue: 2100, Expenses: 1400 },
    { month: "Mar", Revenue: 800, Expenses: 600 },
    { month: "Apr", Revenue: 1600, Expenses: 1100 },
    { month: "May", Revenue: 900, Expenses: 700 },
    { month: "Jun", Revenue: 1700, Expenses: 1300 },
];

const totalRevenue = monthlyData.reduce((s, d) => s + d.Revenue, 0);
const totalExpenses = monthlyData.reduce((s, d) => s + d.Expenses, 0);
const netProfit = totalRevenue - totalExpenses;

const productSales = [
    { name: "Acer Nitro 5", units: 142, revenue: 111170, img: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { name: "PlayStation 5", units: 98, revenue: 88200, img: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { name: "AirPods Pro", units: 87, revenue: 21663, img: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { name: "Nintendo Switch", units: 74, revenue: 22126, img: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { name: "iPhone 14 Pro", units: 61, revenue: 67039, img: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { name: "Razer Blade 15", units: 45, revenue: 41400, img: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { name: "Samsung QLED TV", units: 38, revenue: 55100, img: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { name: "Redragon S101", units: 30, revenue: 1050, img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { name: "Dell XPS 13", units: 22, revenue: 29700, img: "https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { name: "ASUS ROG Strix", units: 15, revenue: 30000, img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
];

const PIE_COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f", "#a4de6c"];

const Stats = () => {
    return (
        <div className="stats-page">
            <Sidebar />
            <div className="statsContainer">
                <Navbar />

                {/* Summary Cards */}
                <div className="statsCards">
                    <div className="statsCard revenue">
                        <div className="cardIcon"><TrendingUpIcon /></div>
                        <div className="cardInfo">
                            <span className="cardLabel">Total Revenue</span>
                            <span className="cardValue">${totalRevenue.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="statsCard expenses">
                        <div className="cardIcon"><TrendingDownIcon /></div>
                        <div className="cardInfo">
                            <span className="cardLabel">Total Expenses</span>
                            <span className="cardValue">${totalExpenses.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className={`statsCard profit ${netProfit >= 0 ? "positive" : "negative"}`}>
                        <div className="cardIcon">
                            {netProfit >= 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}
                        </div>
                        <div className="cardInfo">
                            <span className="cardLabel">Net Profit</span>
                            <span className="cardValue">{netProfit >= 0 ? "+" : "-"}${Math.abs(netProfit).toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="statsCard popular">
                        <div className="cardIcon"><EmojiEventsIcon /></div>
                        <div className="cardInfo">
                            <span className="cardLabel">Most Popular</span>
                            <span className="cardValue">{productSales[0].name}</span>
                            <span className="cardSub">{productSales[0].units} units sold</span>
                        </div>
                    </div>
                </div>

                {/* Charts Row */}
                <div className="statsCharts">
                    <div className="statsChartBox">
                        <h3>Revenue vs Expenses (Last 6 Months)</h3>
                        <ResponsiveContainer width="100%" height={260}>
                            <BarChart data={monthlyData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                                <XAxis dataKey="month" stroke="gray" />
                                <YAxis stroke="gray" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Revenue" fill="#8884d8" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="Expenses" fill="#82ca9d" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="statsChartBox pie">
                        <h3>Top 5 Products by Units Sold</h3>
                        <ResponsiveContainer width="100%" height={260}>
                            <PieChart>
                                <Pie
                                    data={productSales.slice(0, 5)}
                                    dataKey="units"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={90}
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                >
                                    {productSales.slice(0, 5).map((_, index) => (
                                        <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Product Ranking Table */}
                <div className="statsTable">
                    <div className="statsTableHeader">
                        <InventoryIcon className="statsTableIcon" />
                        <h3>Products Ranked by Sales</h3>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Units Sold</th>
                                <th>Revenue</th>
                                <th>Sales Bar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productSales.map((p, i) => (
                                <tr key={i}>
                                    <td className="rank">{i + 1}</td>
                                    <td className="productCell">
                                        <img src={p.img} alt={p.name} />
                                        {p.name}
                                    </td>
                                    <td>{p.units}</td>
                                    <td>${p.revenue.toLocaleString()}</td>
                                    <td className="barCell">
                                        <div className="barTrack">
                                            <div
                                                className="barFill"
                                                style={{ width: `${(p.units / productSales[0].units) * 100}%` }}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Stats;
