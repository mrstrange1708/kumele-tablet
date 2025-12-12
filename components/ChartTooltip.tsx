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
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="fixed z-50 bg-white rounded-xl shadow-lg border border-gray-100 p-4 pointer-events-none"
                    style={{
                        left: (position?.x ?? 0) + 20,
                        top: (position?.y ?? 0) - 20,
                    }}
                >
                    <div className="flex gap-6">
                        {/* Left Column - Group meditation */}
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-semibold text-gray-900">Group meditation</p>
                            <div className="flex items-center gap-1.5">
                                <span className="text-sm font-bold text-gray-900">${data.amount}</span>
                                <span className="text-xs">🧘</span>
                                <span className="text-xs text-gray-500">Spirituality</span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-px bg-gray-200" />

                        {/* Right Column - 90's Hip-Hop */}
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-semibold text-gray-900">90's Hip-Hop</p>
                            <div className="flex items-center gap-1.5">
                                <span className="text-sm font-bold text-gray-900">$100</span>
                                <span className="text-xs">🏠</span>
                                <span className="text-xs text-gray-500">House</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
