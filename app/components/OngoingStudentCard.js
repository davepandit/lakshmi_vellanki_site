import React from 'react';
import Image from 'next/image';

const OngoingStudentCard = ({ name, bsc, msc, researchArea, email, joined, image }) => {
    return (
        <div className="flex flex-col items-center text-center p-6 h-full transition-transform hover:-translate-y-1 duration-300 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md">
            <div className="relative w-40 h-40 mb-5 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100 ring-1 ring-gray-100 shrink-0">
                {image ? (
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                ) : (
                    /* Placeholder SVG */
                    <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-50">
                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                )}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
            {joined && <p className="text-sm font-semibold text-green-600 mb-4">{joined}</p>}

            <div className="w-full text-left space-y-3 text-sm text-gray-700">
                {bsc && (
                    <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">B.Sc.</span>
                        <p className="font-medium text-gray-900">{bsc}</p>
                    </div>
                )}

                {msc && (
                    <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">M.Sc.</span>
                        <p className="font-medium text-gray-900">{msc}</p>
                    </div>
                )}

                {researchArea && (
                    <div className="pt-2">
                        <span className="font-semibold text-gray-900">Research Area: </span>
                        <span className="text-gray-600">{researchArea}</span>
                    </div>
                )}
            </div>

            <div className="mt-auto pt-5 w-full">
                {email && (
                    <a href={`mailto:${email}`} className="text-sm font-medium text-green-600 hover:text-green-800 break-all transition-colors flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {email}
                    </a>
                )}
            </div>
        </div>
    );
};

export default OngoingStudentCard;
