'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MedalBadgeProps {
    type: 'gold' | 'silver' | 'bronze';
    count: number;
    label: string;
}

const medalConfig = {
    gold: {
        emoji: '🥇',
        label: 'Gold',
    },
    silver: {
        emoji: '🥈',
        label: 'Silver',
    },
    bronze: {
        emoji: '🥉',
        label: 'Bronze',
    },
};

export default function MedalBadge({ type, count, label }: MedalBadgeProps) {
    const config = medalConfig[type];

    return (
        <div className="flex items-center gap-3">
            {/* Medal Emoji with animation */}
            <motion.span
                className="text-2xl"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    display: 'inline-block',
                    filter: 'drop-shadow(0 2px 8px rgba(255, 215, 0, 0.5))',
                }}
            >
                {config.emoji}
            </motion.span>

            {/* Medal Info */}
            <div>
                <div className="flex items-center gap-1.5">
                    <span className="text-sm font-medium text-gray-900">{config.label}</span>
                    <span className="text-sm font-normal text-gray-900">{count}</span>
                </div>
                <p className="text-xs text-gray-500">{label}</p>
            </div>
        </div>
    );
}
