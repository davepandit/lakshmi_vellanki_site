"use client";
import { useState } from 'react';
import Header from "@/app/components/Header";
import Image from "next/image";

export default function GalleryPage() {
    const images = [
        "/gallery_1.jpg",
        "/gallery_2.jpg",
        "/gallery_3.jpg",
        "/gallery_4.jpg",
        "/gallery_5.jpg",
        "/gallery_6.jpg",
        "/gallery_7.jpg",
        "/gallery_8.jpg",
        "/gallery_9.jpg",
        "/gallery_10.jpg",
        "/gallery_11.jpg",
        "/gallery_12.jpg",
        "/gallery_13.jpg",
        "/gallery_14.jpg",
        "/gallery_15.jpg",
        "/gallery_16.jpg",
        "/gallery_17.jpg",
        "/gallery_18.jpg",
        "/gallery_19.jpg",
        "/gallery_20.jpg",
        "/gallery_21.jpg",
        "/gallery_22.jpg",
        "/gallery_23.jpg",
        "/gallery_24.jpg",
        "/gallery_25.jpg",
        "/gallery_26.jpg",
        "/gallery_27.jpg",
        "/gallery_28.jpg",
        "/gallery_29.jpg",
        "/gallery_30.jpg",
        "/gallery_31.jpg",
        "/gallery_32.jpg",
        "/gallery_33.jpg",
        "/gallery_34.jpg",
        "/gallery_35.jpg",
        "/gallery_36.jpg",
        "/gallery_37.jpg",
        "/gallery_38.jpg",
        "/gallery_39.jpg",
        "/gallery_40.jpg",
        "/gallery_41.jpg",
        "/gallery_42.jpg",
        "/gallery_43.jpg",
        "/gallery_44.jpg",
        "/gallery_45.jpg",
        "/gallery_46.jpg",
        "/gallery_47.jpg",
        "/gallery_48.jpg",
        "/gallery_49.jpg",
        "/gallery_50.jpg"
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="pt-36">
                <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Gallery</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Moments and memories from our research group and events.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="relative aspect-[4/3] group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                                onClick={() => setSelectedImage(src)}
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all z-50"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div
                        className="relative w-full max-w-5xl max-h-[90vh] h-full flex items-center justify-center p-1"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Full screen view"
                            width={1920}
                            height={1080}
                            className="object-contain w-full h-full max-h-[85vh] rounded-lg shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            )}
        </main>
    );
}
