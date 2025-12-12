'use client';

import React from 'react';
import {
    Home,
    Users,
    Building2,
    Gift,
    Palette,
    Settings,
    Plus,
    ShoppingCart
} from 'lucide-react';

const navigationItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Users, label: 'Users' },
    { icon: Building2, label: 'Building' },
    { icon: Gift, label: 'Gifts' },
    { icon: Palette, label: 'Palette' },
    { icon: Settings, label: 'Settings' },
    { icon: Plus, label: 'Add' },
    { icon: ShoppingCart, label: 'Cart' },
];

export default function Sidebar() {
    return (
        <aside className="w-16 bg-[#2a2a2a] flex flex-col items-center py-6 gap-4">
            {navigationItems.map((item, index) => {
                const Icon = item.icon;
                return (
                    <button
                        key={index}
                        className={`nav-icon-btn ${item.active ? 'active' : ''}`}
                        aria-label={item.label}
                    >
                        <Icon
                            size={20}
                            className={`${item.active ? 'text-white' : 'text-gray-400'
                                } transition-colors duration-200`}
                        />
                    </button>
                );
            })}
        </aside>
    );
}
