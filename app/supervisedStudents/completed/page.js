import Header from "@/app/components/Header";

export default function CompletedStudentsPage() {

    const alumniList = [
        { name: "Jyoti", year: "2021", status: "Post Graduated" },
        { name: "Shweta Singh", year: "2021", status: "Post Graduated" },
        { name: "Madan Singh", year: "2022", status: "Post Graduated" },
        { name: "Tavitinaidu Bonthu", year: "2022", status: "Post Graduated" },
        { name: "Akash Ashok Mishra", year: "2022", status: "Post Graduated" },
        { name: "Pottella Ramanaiah", year: "2023", status: "Post Graduated" },
        { name: "Janagama Adithya", year: "2023", status: "Post Graduated" },
        { name: "Shubham Saini", year: "2023", status: "Post Graduated" },
        { name: "Saee Dharmadhikari", year: "2024", status: "Post Graduated" },
        { name: "Venkatesh Rathod", year: "2024", status: "Post Graduated" },
        { name: "Pawan Jambhulakar", year: "2025", status: "Post Graduated" },
        { name: "Aritra Banerjee", year: "2025", status: "Post Graduated" },
        { name: "Abhishek Pujari", year: "2025", status: "Post Graduated" }
    ];

    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="pt-36">
                <div className="max-w-4xl mx-auto px-4 md:px-6 mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Alumni Members</h1>
                    <p className="text-lg text-gray-600">
                        Alumni who have successfully completed their degree under my supervision.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto px-4 md:px-6 pb-24">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">


                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100 text-sm uppercase tracking-wider text-gray-500 font-semibold">
                                        <th className="px-6 py-4 md:px-8 bg-gray-50/50">Name</th>
                                        <th className="px-6 py-4 md:px-8 bg-gray-50/50 text-right">Graduation</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {alumniList.map((student, idx) => (
                                        <tr
                                            key={idx}
                                            className="hover:bg-green-50/30 transition-colors duration-150 group"
                                        >
                                            <td className="px-6 py-4 md:px-8 py-5">
                                                <div className="font-semibold text-gray-900 text-lg group-hover:text-green-700 transition-colors">
                                                    {student.name}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 md:px-8 py-5 text-right">
                                                <div className="inline-flex items-center gap-2 justify-end">
                                                    <span className="text-gray-600 font-medium">{student.status}</span>
                                                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                    <span className="font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-md text-sm border border-green-100">
                                                        {student.year}
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
