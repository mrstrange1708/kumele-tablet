'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import MedalBadge from './MedalBadge';
import { Award } from 'lucide-react';

const data = [
    { name: 'Gold', value: 92, color: '#D4AF37' },  // Exact gold color
    { name: 'Silver', value: 1, color: '#BEBEBE' },  // Exact silver/gray color
    { name: 'Bronze', value: 1, color: '#CD7F32' },  // Exact bronze/copper color
];

export default function RewardRings() {
    return (
        <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
                <h3 className="text-sm font-medium text-gray-900">Reward Rings</h3>
                <Award size={16} className="text-gray-600" />
            </div>

            <div className="flex items-center gap-10">
                {/* Pie Chart */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <ResponsiveContainer width={160} height={160}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={45}
                                outerRadius={75}
                                paddingAngle={3}
                                dataKey="value"
                                animationBegin={0}
                                animationDuration={1000}
                                animationEasing="ease-out"
                                startAngle={90}
                                endAngle={450}
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                                        stroke="#fff"
                                        strokeWidth={2}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Medal Legend */}
                <div className="flex flex-col gap-4">
                    <MedalBadge
                        type="gold"
                        count={92}
                        label="Achieved 92 medals"
                    />
                    <MedalBadge
                        type="silver"
                        count={1}
                        label="Achieved 1 medal"
                    />
                    <MedalBadge
                        type="bronze"
                        count={1}
                        label="Achieved 1 medal"
                    />
                </div>
            </div>
        </div>
    );
}
