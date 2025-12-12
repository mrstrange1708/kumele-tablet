'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import MedalBadge from './MedalBadge';

// Equal proportions - 33.33% each
const data = [
    { name: 'Gold', value: 33.33, color: '#C9A537' },
    { name: 'Silver', value: 33.33, color: '#BEBEBE' },
    { name: 'Bronze', value: 33.34, color: '#C87533' },
];

export default function RewardRings() {
    return (
        <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
                <h3 className="text-base font-semibold text-gray-900">Reward Rings</h3>

                {/* Animated medal/award icon */}
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        rotate: [0, 8, -8, 0],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <svg width="18" height="22" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Medal ribbon */}
                        <path d="M9 12L6 2L12 5L18 2L15 12" fill="#6B7280" stroke="#6B7280" strokeWidth="1.5" strokeLinejoin="round" />
                        {/* Medal circle */}
                        <circle cx="12" cy="18" r="6" fill="#6B7280" />
                        <circle cx="12" cy="18" r="3.5" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
                    </svg>
                </motion.div>
            </div>

            <div className="flex items-start gap-12">
                {/* Pie Chart */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <ResponsiveContainer width={180} height={180}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={0}
                                outerRadius={85}
                                paddingAngle={0}
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
                                        stroke="none"
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Medal Legend */}
                <div className="flex flex-col gap-5 pt-2">
                    <MedalBadge
                        type="gold"
                        count={22}
                        label="Achieved 22 medals"
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
