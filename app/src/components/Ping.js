import React from "react";
import { useSelector } from "react-redux";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

function Ping() {
    //  Fetch all request results
    const results = useSelector(state => state.results);

    return (
        <section className="ping">
            <div className="ping-container">
                <ResponsiveContainer minHeight={350}>
                    <LineChart
                        data={results}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="ping"
                            stroke="#8884d8"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}

export default Ping;
