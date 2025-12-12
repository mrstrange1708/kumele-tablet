'use client';

import React from 'react';

interface MedalBadgeProps {
    type: 'gold' | 'silver' | 'bronze';
    count: number;
    label: string;
}

const medalConfig = {
    gold: {
        color: '#C9A537',  // Exact mustard gold
        label: 'Gold',
    },
    silver: {
        color: '#BEBEBE',  // Exact gray
        label: 'Silver',
    },
    bronze: {
        color: '#C87533',  // Exact orange/copper
        label: 'Bronze',
    },
};

export default function MedalBadge({ type, count, label }: MedalBadgeProps) {
    const config = medalConfig[type];

    return (
        <div className="flex items-start gap-3">
            {/* Colored circle dot */}
            <div
                className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5"
                style={{ backgroundColor: config.color }}
            />

            {/* Medal Info */}
            <div>
                <div className="flex items-center gap-2">
                    <span className="text-base font-medium text-gray-900">{config.label}</span>
                    <span className="text-xs text-gray-400 font-medium">i</span>
                </div>
                <p className="text-sm text-gray-500">{label}</p>
            </div>
        </div>
    );
}
