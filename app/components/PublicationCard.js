import Link from "next/link";
import Image from "next/image";

const PublicationCard = ({ pub }) => (
    <div className="flex flex-col gap-6">
        {/* Publication Text */}
        <div className="text-lg text-gray-800 leading-relaxed font-serif">
            {pub.citation}
            <br />
            <Link
                href={pub.link}
                target="_blank"
                className="text-blue-600 hover:text-blue-800 hover:underline break-all text-base font-sans mt-1 inline-block"
            >
                {pub.link}
            </Link>
        </div>

        {/* Banner Image or Placeholder */}
        <div className="w-full">
            {pub.image ? (
                <Image
                    src={pub.image}
                    alt="Publication Graphical Abstract"
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-xl shadow-md border border-gray-100"
                    priority={pub.id <= 2}
                />
            ) : (
                <div className="w-full h-48 md:h-64 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center relative overflow-hidden group">
                    <div className="flex flex-col items-center justify-center text-gray-400 group-hover:text-gray-500 transition-colors">
                        <svg className="w-12 h-12 mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium text-sm text-gray-400 uppercase tracking-wide">Banner Coming Soon</span>
                    </div>
                </div>
            )}
        </div>
    </div>
);

export default PublicationCard;
