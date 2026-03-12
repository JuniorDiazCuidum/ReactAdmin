import "./chart.scss";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, ResponsiveContainer
} from "recharts";

const data = [
    { name: "January", Revenue: 1200, Expenses: 900 },
    { name: "February", Revenue: 2100, Expenses: 1400 },
    { name: "March", Revenue: 800, Expenses: 600 },
    { name: "April", Revenue: 1600, Expenses: 1100 },
    { name: "May", Revenue: 900, Expenses: 700 },
    { name: "June", Revenue: 1700, Expenses: 1300 },
];

const Chart = ({aspect, title}) => {
    return (
        <div className="chart">
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                    <XAxis dataKey="name" stroke="gray" />
                    <YAxis stroke="gray" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Revenue" fill="#8884d8" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Expenses" fill="#82ca9d" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
};

export default Chart;