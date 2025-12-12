'use client';

import React, { useState, useRef } from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';
import ChartTooltip from './ChartTooltip';
import YearSelector from './YearSelector';

const monthlyData = [
    { month: 'Mar', amount: 65, activity: 'Group meditation' },
    { month: 'Apr', amount: 72, activity: 'Group meditation' },
    { month: 'May', amount: 58, activity: 'Group meditation' },
    { month: 'Jun', amount: 45, activity: 'Group meditation' },
    { month: 'Jul', amount: 35, activity: 'Group meditation' },
    { month: 'Aug', amount: 88, activity: 'Group meditation' },
    { month: 'Sep', amount: 78, activity: 'Group meditation' },
    { month: 'Oct', amount: 82, activity: 'Group meditation' },
    { month: 'Nov', amount: 75, activity: 'Group meditation' },
];

export default function MoneyEarnedChart() {
    const [hoveredBar, setHoveredBar] = useState<number | null>(null);
    const [tooltipData, setTooltipData] = useState<any>(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [selectedYear, setSelectedYear] = useState(2022);
    const chartRef = useRef<HTMLDivElement>(null);

    const handleBarMouseEnter = (data: any, index: number, event: React.MouseEvent) => {
        setHoveredBar(index);
        setTooltipData(data);

        const rect = (event.target as HTMLElement).getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const topY = rect.top;

        setTooltipPosition({
            x: centerX,
            y: topY
        });
    };

    const handleBarMouseLeave = () => {
        setHoveredBar(null);
        setTooltipData(null);
    };

    // Also hide tooltip when mouse leaves chart area
    const handleChartMouseLeave = () => {
        setHoveredBar(null);
        setTooltipData(null);
    };

    return (
        <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                    <h3 className="text-base font-medium text-gray-700">Money Earned</h3>
                    <span className="text-lg font-bold text-gray-900">$905</span>
                </div>
                <YearSelector
                    selectedYear={selectedYear}
                    onYearChange={setSelectedYear}
                />
            </div>

            <motion.div
                ref={chartRef}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onMouseLeave={handleChartMouseLeave}
            >
                <ResponsiveContainer width="100%" height={220}>
                    <BarChart
                        data={monthlyData}
                        margin={{ top: 10, right: 0, left: 0, bottom: 5 }}
                        onMouseLeave={handleChartMouseLeave}
                    >
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }}
                        />
                        <Bar
                            dataKey="amount"
                            radius={[4, 4, 0, 0]}
                            maxBarSize={28}
                            animationBegin={0}
                            animationDuration={1000}
                            animationEasing="ease-out"
                            onMouseLeave={handleBarMouseLeave}
                        >
                            {monthlyData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={hoveredBar === index ? '#FFC107' : '#0066FF'}
                                    className="cursor-pointer transition-all duration-200"
                                    onMouseEnter={(e: any) => handleBarMouseEnter(entry, index, e)}
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
