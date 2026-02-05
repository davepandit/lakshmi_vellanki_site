import Header from "@/app/components/Header";
import ProjectsList from "@/app/components/ProjectsList";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="pt-36">
                <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">Projects</h1>
                    <p className="mt-4 text-lg text-gray-600">Overview of completed and ongoing research projects.</p>
                </div>
                <ProjectsList />
            </div>
        </main>
    );
}
