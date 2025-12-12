'use client';

import React from 'react';

export default function Header() {
    return (
        <header className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
                <span className="text-2xl">🎁</span>
                <h1 className="text-xl font-semibold text-[#0052ff]">Kumele</h1>
            </div>

            <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center overflow-hidden">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=kumele"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
}
