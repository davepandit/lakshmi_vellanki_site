import React from 'react';

const StudentCard = ({ name, thesis, position }) => {
    return (
        <div className="flex flex-col items-center text-center p-6 transition-transform hover:-translate-y-1 duration-300">
            <div className="relative w-40 h-40 mb-5 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100 ring-1 ring-gray-100">
                {/* Placeholder SVG since we don't have real images yet */}
                <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-50">
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>

            {thesis && (
                <p className="text-sm text-gray-700 font-medium mb-1.5">{thesis}</p>
            )}

            {position && (
                <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                    <span className="font-semibold text-gray-600 block mb-0.5">Current Position:</span>
                    {position}
                </p>
            )}

            <div className="flex items-center justify-center space-x-3 mt-5">
                {/* Google Scholar Icon Placeholder */}
                <button className="w-9 h-9 rounded-full bg-[#3e5cd1] text-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform" title="Google Scholar">
                    <span className="font-serif font-bold text-lg select-none">g</span>
                </button>

                {/* ResearchGate Icon Placeholder */}
                <button className="w-9 h-9 rounded-full bg-[#00d0bd] text-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform" title="ResearchGate">
                    <span className="font-sans font-bold text-sm tracking-tighter select-none">R<sup className="-top-1">G</sup></span>
                </button>
            </div>
        </div>
    );
};

export default StudentCard;
