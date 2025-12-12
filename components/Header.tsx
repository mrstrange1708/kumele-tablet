'use client';

import React from 'react';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
            {/* Kumele Logo - using actual logo image + blue text */}
            <div className="flex items-center gap-2">
                <Image
                    src="/assests/logo.png"
                    alt="Kumele Logo"
                    width={40}
                    height={32}
                    className="object-contain"
                />
                <h1 className="text-xl font-semibold text-[#0052FF]">Kumele</h1>
            </div>

            {/* Profile Photo - using actual person image */}
            <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                        src="/assests/person.png"
                        alt="Profile"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
}
