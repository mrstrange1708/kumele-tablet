'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChartTooltipProps {
    visible: boolean;
    data?: {
        month: string;
        amount: number;
        activity: string;
    };
    position?: { x: number; y: number };
}

export default function ChartTooltip({ visible, data, position }: ChartTooltipProps) {
    if (!visible || !data) return null;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="fixed z-50 bg-white rounded-xl shadow-xl p-3 border border-gray-100 pointer-events-none min-w-[180px]"
                    style={{
                        left: position?.x ?? 0,
                        top: position?.y ?? 0,
                        transform: 'translate(-50%, calc(-100% - 12px))',
                    }}
                >
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-semibold text-gray-900">{data.activity}</p>
                        <div className="flex items-center justify-between gap-6">
                            <span className="text-xs text-gray-500">90's Hip-Hop</span>
                            <span className="text-sm font-semibold text-gray-900">
                                ${data.amount} • 70hours
                            </span>
                        </div>
                    </div>
                    {/* Tooltip arrow */}
                    <div
                        className="absolute left-1/2 bottom-0 w-3 h-3 bg-white border-r border-b border-gray-100"
                        style={{
                            transform: 'translateX(-50%) translateY(50%) rotate(45deg)',
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
