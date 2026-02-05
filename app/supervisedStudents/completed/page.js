import Header from "@/app/components/Header";
import StudentCard from "@/app/components/StudentCard";

export default function CompletedStudentsPage() {
    // Helpers to generate placeholder data
    const createPlaceholders = (count, rolePrefix) => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            name: `${rolePrefix} Name ${i + 1}`,
            thesis: `${rolePrefix} Thesis Title (Year)`,
            position: "Assistant Professor / Researcher at Institute Name, Location",
        }));
    };

    const phdStudents = createPlaceholders(5, "Dr. Student");
    const summerStudents = createPlaceholders(8, "Summer Intern");
    const mastersStudents = createPlaceholders(27, "Masters Student");

    const Section = ({ title, students }) => (
        <section className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center justify-center">
                {title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-y-16">
                {students.map((student, idx) => (
                    <StudentCard
                        key={idx}
                        name={student.name}
                        thesis={student.thesis}
                        position={student.position}
                    />
                ))}
            </div>
        </section>
    );

    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="pt-36">
                <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Completed Supervised Students</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Alumni who have successfully completed their research training and degrees under my supervision.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
                    <Section title="Ph.D. Students" students={phdStudents} />
                    <Section title="Summer Students" students={summerStudents} />
                    <Section title="Masters Students" students={mastersStudents} />
                </div>
            </div>
        </main>
    );
}
