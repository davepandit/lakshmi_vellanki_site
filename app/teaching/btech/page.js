import Header from "@/app/components/Header";

export default function BTechTeachingPage() {
    const courses = [
        { code: "CY111", name: "Chemistry Theory" },
        { code: "CY110", name: "Chemistry Lab" },
        { code: "CY305", name: "Inorganic and Physical Chemistry (Theory)" },
    ];

    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="pt-36">
                <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">B.Tech Courses</h1>
                    <p className="text-lg text-gray-600">
                        Courses taught to Bachelor of Technology students.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((course, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow hover:border-green-200 group">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="bg-green-50 text-green-700 text-sm font-bold px-3 py-1 rounded-full">
                                        {course.code}
                                    </span>
                                    <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                                    {course.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
