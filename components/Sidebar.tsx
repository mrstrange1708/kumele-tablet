'use client';

import React from 'react';
import Image from 'next/image';

const navigationItems = [
    { src: '/assests/Home.png', label: 'Home', active: false },
    { src: '/assests/lab.png', label: 'Lab' },
    { src: '/assests/basket.png', label: 'Basket' },
    { src: '/assests/msg.png', label: 'Messages' },
    { src: '/assests/torch.png', label: 'Torch' },
    { src: '/assests/stats.png', label: 'Stats', active: true },  // Stats is active based on Figma
    { src: '/assests/settings.png', label: 'Settings' },
    { src: '/assests/Cart.png', label: 'Cart' },
];

export default function Sidebar() {
    return (
        <aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-8 gap-8">
            {navigationItems.map((item, index) => (
                <div
                    key={index}
                    className="relative w-full flex items-center justify-center"
                >
                    {/* Blue active indicator on left */}
                    {item.active && (
                        <div className="absolute left-0 w-1 h-8 bg-[#0052FF] rounded-r-full" />
                    )}

                    <button
                        className="w-10 h-10 flex items-center justify-center transition-all duration-200 hover:opacity-80"
                        aria-label={item.label}
                    >
                        <Image
                            src={item.src}
                            alt={item.label}
                            width={28}
                            height={28}
                            className="object-contain"
                        />
                    </button>
                </div>
            ))}
        </aside>
    );
}
