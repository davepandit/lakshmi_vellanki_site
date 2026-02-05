import React from 'react';

const ProjectsList = () => {
    const completedProjects = [
        {
            id: 1,
            title: "Synthesis of Polyoxometalate-Nanoparticle Hybrid Based Catalysts for alkane oxidation",
            agency: "DST-SERB",
            year: "2014-2017",
            amount: "23.55"
        },
        {
            id: 2,
            title: "Vanadium based Polyoxotungstates: Synthesis, structural characterization, and study of its eletrochemical properties",
            agency: "CSIR",
            year: "2017-2020",
            amount: "8.0"
        },
        {
            id: 3,
            title: "Synthesis of Levulinate esters using heteropolyacids as potentially green catalyst",
            agency: "VGST",
            year: "2019",
            amount: "5.0"
        },
    ];

    const ongoingProjects = [
        {
            id: 1,
            title: (
                <>
                    Polyoxometalate-Based Materials for Catalysis and Magnetism (POMCATMAG),<br />
                    <span className="text-gray-600 text-sm mt-1 block">Prof. Ulricxh Kortz, Constructor University, Bremen, Germany</span>
                </>
            ),
            agency: "Alexander von Humboldt (AvH), Germany, International Project",
            year: "01.07.2025-30.06.2028",
            amount: "€54,990.00 / ₹53,32,353.98 (as on 23.05.25 convertion rate)"
        }
    ];

    const Table = ({ title, data }) => (
        <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
                {title}
            </h3>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-green-50/50 border-b border-green-100 text-green-800">
                                <th className="p-4 font-semibold w-16 text-center">Sl No.</th>
                                <th className="p-4 font-semibold min-w-[300px]">Project Title</th>
                                <th className="p-4 font-semibold whitespace-nowrap">Agency</th>
                                <th className="p-4 font-semibold whitespace-nowrap">Year</th>
                                <th className="p-4 font-semibold whitespace-nowrap text-right">Amount Granted<br />(Lakhs)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {data.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 text-center font-medium text-gray-500">{item.id}</td>
                                    <td className="p-4 font-medium text-gray-800">{item.title}</td>
                                    <td className="p-4 text-gray-600 whitespace-nowrap">{item.agency}</td>
                                    <td className="p-4 text-gray-600 whitespace-nowrap">{item.year}</td>
                                    <td className="p-4 text-gray-600 text-right font-medium">{item.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <Table title="Project Completed" data={completedProjects} />
                <Table title="Ongoing International Project" data={ongoingProjects} />
            </div>
        </section>
    );
};

export default ProjectsList;
