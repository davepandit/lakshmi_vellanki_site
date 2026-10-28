import Header from "@/app/components/Header";
import PublicationCard from "@/app/components/PublicationCard";
import { publications } from "@/app/data/publications";

export default function PublicationsPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="pt-36">
                <div className="max-w-5xl mx-auto px-4 md:px-6 mb-16 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Significant Publications</h1>
                </div>

                <div className="max-w-5xl mx-auto px-4 md:px-6 pb-24 space-y-16">
                    {publications.map((pub) => (
                        <PublicationCard key={pub.id} pub={pub} />
                    ))}
                </div>
            </div>
        </main>
    );
}
