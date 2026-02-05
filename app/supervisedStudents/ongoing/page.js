import Header from "@/app/components/Header";
import OngoingStudentCard from "@/app/components/OngoingStudentCard";

export default function OngoingStudentsPage() {

    // Data for Ongoing PhD Students
    const phdStudents = [
        {
            name: "M Ankitha Shenoy",
            joined: "Joined as PhD in July 2020 (Full-time)",
            bsc: "Alvas College, Moodbidri (2015-2018)",
            msc: "Alvas College, Moodbidri (2018-2020)",
            researchArea: "NIR fluorescent dyes, dioxa and diaza-based boron difluoride complexes, aggregation induced emission",
            email: "mankithashenoy.207cy005@nitk.edu.in",
            image: "/ankitha_shenoy.jpg"
        },
        {
            name: "Deyona M Jose",
            joined: "Joined as PhD in July 2022 (Full-time)",
            bsc: "Kuriakose Elias College, Manananam, Kottayam (2014-2017)",
            msc: "Govt. College for Women (Autonomous) Mandya (2017-2019)",
            researchArea: "Photoswitches, Electrochromism, Non-linear Optics, Arylhydrazono-β-diketones",
            email: "deyonamjose.227cy001@nitk.edu.in",
            image: "/deyona_jose.jpg"
        },
        {
            name: "Ravikumar Maruti Vibhuti",
            joined: "Joined as PhD in July 2022 (Full-time)",
            bsc: "BLDEA’s Commerce, BHS Arts & TGP Science College, Jamkhandi (2016-2019)",
            msc: "JSS College, Dharwad (2019-2021)",
            researchArea: "Design and synthesis of Conjugated Porous Polymers and covalent organic polymers for the adsorption and sensing of environmental pollutants.",
            email: "ravimv.227cy007@nitk.edu.in",
            image: "/ravikumar_vibhuti.jpg"
        },
        {
            name: "Premie Fernandes",
            joined: "Joined as PhD in December 2022 (Full-time)",
            bsc: "St. Xavier's College (Autonomous), Mumbai (2016-2019)",
            msc: "St. Aloysius College (Autonomous), Mangaluru (2019-2021)",
            researchArea: "Donor-acceptor π-conjugated systems, Squaraine dyes, BODIPYs, Aggregation-induced emission (AIE), Sensing",
            email: "premiefernandes.227cy009@nitk.edu.in",
            image: "/premie_fernandes.jpg"
        },
        {
            name: "Gayathri B",
            joined: "Joined as PhD in August 2025 (Full-time)",
            bsc: "Christ (Deemed to be University), Bengaluru (2019-2022)",
            msc: "Christ (Deemed to be University), Bengaluru (2022-2024)",
            researchArea: "Polymers, Supercapacitors",
            email: "gayathrib.257cy004@nitk.edu.in",
            image: "/gayathri_b.jpg"
        }
    ];

    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="pt-36">
                <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Post Graduate Scholars (PhD)</h1>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
                    <section className="mb-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-12">
                            {phdStudents.map((student, idx) => (
                                <OngoingStudentCard
                                    key={idx}
                                    name={student.name}
                                    joined={student.joined}
                                    bsc={student.bsc}
                                    msc={student.msc}
                                    researchArea={student.researchArea}
                                    email={student.email}
                                    image={student.image}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
