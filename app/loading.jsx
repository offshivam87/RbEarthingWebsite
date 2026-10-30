import React from 'react';
import Image from 'next/image';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-xs">
            <div className="flex flex-col items-center">
                {/* Brand Logo */}

                {/* Clean Professional Dual-Ring Spinner */}
                <div className="relative w-8 h-8">
                    <div className="w-full h-full rounded-full border-2 border-slate-200" />
                    <div className="absolute inset-0 rounded-full border-2 border-[#00a2e8] border-t-transparent animate-spin" />
                </div>

                {/* Subtle Status Text */}
                <span className="mt-3 text-xs font-medium text-slate-400 tracking-wider">
                    Loading...
                </span>
            </div>
        </div>
    );
}
