'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';
import ChartTooltip from './ChartTooltip';
import YearSelector from './YearSelector';

const monthlyData = [
    { month: 'Mar', amount: 560, activity: 'Group meditation' },
    { month: 'Apr', amount: 590, activity: 'Group meditation' },
    { month: 'May', amount: 620, activity: 'Group meditation' },
    { month: 'Jun', amount: 650, activity: 'Group meditation' },
    { month: 'Jul', amount: 680, activity: 'Group meditation' },
    { month: 'Aug', amount: 700, activity: 'Group meditation' },
    { month: 'Sep', amount: 730, activity: 'Group meditation' },
    { month: 'Oct', amount: 760, activity: 'Group meditation' },
    { month: 'Nov', amount: 790, activity: 'Group meditation' },
];

export default function MoneyEarnedChart() {
    const [hoveredBar, setHoveredBar] = useState<number | null>(null);
    const [tooltipData, setTooltipData] = useState<any>(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [selectedYear, setSelectedYear] = useState(2022);

    const totalEarnings = monthlyData.reduce((sum, item) => sum + item.amount, 0);

    const handleBarMouseEnter = (data: any, index: number, event: any) => {
        setHoveredBar(index);
        setTooltipData(data);

        // Get the exact bar position
        if (event && event.target) {
            const rect = event.target.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const topY = rect.top;

            setTooltipPosition({
                x: centerX,
                y: topY
            });
        }
    };

    const handleBarMouseLeave = () => {
        setHoveredBar(null);
        setTooltipData(null);
    };

    return (
        <div className="flex-1 relative">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-medium text-gray-700">Money Earned</h3>
                        <span className="text-lg font-bold text-gray-900">${totalEarnings}</span>
                    </div>
                </div>
                <YearSelector
                    selectedYear={selectedYear}
                    onYearChange={setSelectedYear}
                />
            </div>

            <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <ResponsiveContainer width="100%" height={240}>
                    <BarChart
                        data={monthlyData}
                        margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
                    >
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6b7280', fontSize: 11, fontWeight: 500 }}
                        />
                        <Bar
                            dataKey="amount"
                            radius={[6, 6, 0, 0]}
                            maxBarSize={32}
                            animationBegin={0}
                            animationDuration={1000}
                            animationEasing="ease-out"
                        >
                            {monthlyData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={hoveredBar === index ? '#FFC107' : '#0066FF'}
                                    className="cursor-pointer transition-all duration-200"
                                    onMouseEnter={(e) => handleBarMouseEnter(entry, index, e)}
                                    onMouseLeave={handleBarMouseLeave}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>

                <ChartTooltip
                    visible={hoveredBar !== null}
                    data={tooltipData}
                    position={tooltipPosition}
                />
            </motion.div>
        </div>
    );
}
