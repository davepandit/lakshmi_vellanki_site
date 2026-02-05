import Header from "@/app/components/Header";
import Link from "next/link";
import Image from "next/image";

export default function PublicationsPage() {
    const publications = [
        {
            id: 1,
            citation: (
                <>
                    Deyona M. J.; Kawya J.; Sabari Girisun C.; Radwan A.; Gandhiraj, V.; <strong>Lakshmi, V.</strong> “Enhanced Third-Order Nonlinear Optical Response in Cross-Conjugated Pyrrole-Based ortho-Halo Arylhydrazono—Diketones.” <em>J. Phy. Chem. A</em>, <strong>2025</strong>- Just accepted.
                </>
            ),
            link: "https://doi.org/10.1021/acs.jpca.5c06500",
            image: "/pub_banner_1.png"
        },
        {
            id: 2,
            citation: (
                <>
                    Ravikumar, M. V.; <strong>Lakshmi, V.</strong> “Croconic acid-based zwitterionic conjugated porous polymer featuring nitrogen-rich triazine cores for enhanced iodine capture.” <em>J. Hazard. Mater.</em> <strong>2025</strong>, 500, 140421.
                </>
            ),
            link: "https://doi.org/10.1016/j.jhazmat.2025.140421",
            image: "/pub_banner_2.png"
        },
        {
            id: 3,
            citation: (
                <>
                    Fernandes, P.P.; Shenoy, A. M.; Grover, V.; Veeranagaiahc, N. S.; <strong>Lakshmi, V.</strong> “ortho-Halogen functionalized N-squaraines: structure–property relationship and dual-mode colorimetric and fluorometric sulfide ion detection.” <em>J. Mat. Chem. C</em>, <strong>2025</strong>, 13, 22788-22798.
                </>
            ),
            link: "https://doi.org/10.1039/D5TC02572A",
            image: "/pub_banner_3.png"
        },
        {
            id: 4,
            citation: (
                <>
                    Ankitha M. S.; Fernandes P. P.; <strong>Lakshmi, V.</strong> “Functionalized 1,3-dipyrrolyl-1,3-diketone difluoroboron complexes.” <em>New J. Chem.</em> <strong>2025</strong>, 49, 3987-3996.
                </>
            ),
            link: "https://doi.org/10.1039/D4NJ04611K",
            image: "/pub_banner_4.png"
        },
        {
            id: 5,
            citation: (
                <>
                    Ravikumar, M. V.; Raj, A. K.; Rajeswara Rao, M.; <strong>Lakshmi, V.</strong> “Structure–Property Evaluation of Knoevenagel–Derived π-Conjugated Organic Systems.” <em>Eur. J. Org. Chem.</em> <strong>2025</strong>, 28, e202401367.
                </>
            ),
            link: "https://doi.org/10.1002/ejoc.202401367",
            image: "/pub_banner_5.png"
        },
        {
            id: 6,
            citation: (
                <>
                    <strong>Lakshmi, V.</strong>; Haketa, Y.; Sato, R.; Shigeta, Y.; Maeda, H. “Oligopyrrole-Based Anion-Responsive π-Electronic Systems That Exhibit Anion-Dependent Chiroptical Properties.” <em>J. Org. Chem.</em> <strong>2025</strong>, 90, 8879-8885.
                </>
            ),
            link: "https://doi.org/10.1021/acs.joc.5c00482",
            image: "/pub_banner_6.png"
        },
        {
            id: 7,
            citation: (
                <>
                    Ravikumar, M. V.; Nipate, A. B.; Deyona, M. J.; Rao, M. R.; <strong>Lakshmi, V.</strong> “Croconic Acid Integrated Zwitterionic Conjugated Porous Polymer for Effective Iodine Adsorption.” <em>Chem. -Asian. J.</em> <strong>2024</strong>, 19, e202400808.
                </>
            ),
            link: "https://doi.org/10.1002/asia.202400808",
            image: "/pub_banner_7.png"
        },
        {
            id: 8,
            citation: (
                <>
                    Enoch, S.; Nipate, A. B.; <strong>Lakshmi, V.</strong>; Malakalapalli, R. R. “A croconic acid-derived narrow band gap conjugated microporous polymer.” <em>Chem. Commun.</em> <strong>2023</strong>, 59, 8846-8849.
                </>
            ),
            link: "https://doi.org/10.1039/D3CC01701J",
            image: "/pub_banner_8.png"
        },
        {
            id: 9,
            citation: (
                <>
                    Monika, M. B.; Vignesh, B. H.; <strong>Lakshmi, V.*</strong>; Rao, M. R.* “Structure-Property-Function relationship of fluorescent conjugated microporous polymers”. <em>Mater. Chem. Front.</em> <strong>2021</strong>, 5, 2506-2551.
                </>
            ),
            link: "https://doi.org/10.1039/D0QM00769B",
            image: "/pub_banner_9.png"
        },
        {
            id: 10,
            citation: (
                <>
                    <strong>Lakshmi, V.</strong>; Liu, C.-H; Rao, M. R.; Yulan, C.; Yuan, F; Dadvand, A; Hamzehpoor, E.; Sakai-Otsuka, Y; Stein, R; Perepichka, D. “A Two-dimensional Poly(azatriangulene) Covalent Organic Framework with a Paramagnetic Semiconductive State” <em>J. Am. Chem. Soc.</em> <strong>2020</strong>, 142, 2155-2160.
                </>
            ),
            link: "https://doi.org/10.1021/jacs.9b11528",
            image: "/pub_banner_10.png"
        },
        {
            id: 11,
            citation: (
                <>
                    <strong>Lakshmi, V.</strong>; Haketa, Y.; Yamakado, R.; Yasuda, N.; Maeda, H. “Dimension-controlled assemblies of anion-responsive π-electronic systems bearing aryl substituents with fan-shaped geometries” <em>Chem. Commun.</em> <strong>2017</strong>, 53, 3834-3837.
                </>
            ),
            link: "https://doi.org/10.1039/C7CC01551H",
            image: "/pub_banner_11.png"
        },
        {
            id: 12,
            citation: (
                <>
                    Sharma, R.; <strong>Lakshmi, V.</strong>; Chatterjee, T.; Ravikanth, M. “Effect of five membered aromatic heterocycles at the meso-position on the electronic properties of 3-pyrrolyl BODIPY” <em>New J. Chem.</em> <strong>2016</strong>, 40, 5855-5860.
                </>
            ),
            link: "https://doi.org/10.1039/C6NJ00118A",
            image: "/pub_banner_12.png"
        },
        {
            id: 13,
            citation: (
                <>
                    Bandi, V.; Gobeze, H. B.; <strong>Lakshmi, V.</strong>; Ravikanth, M.; D’souza, F. “Vectorial charge separation and selective triplet-state formation during charge recombination in a pyrrolyl-bridged BODIPY-fullerene dyad” <em>J. Phy. Chem. C</em> <strong>2015</strong>, 119, 8095-8102.
                </>
            ),
            link: "https://doi.org/10.1021/acs.jpcc.5b02712",
            image: "/pub_banner_13.png"
        },
        {
            id: 14,
            citation: (
                <>
                    <strong>Lakshmi, V.</strong>; Rajeswara Rao, M.; Ravikanth, M. “Halogenated boron-dipyrromethenes: synthesis, properties and applications” <em>Org. Biomol. Chem.</em> <strong>2015</strong>, 13, 2501-2517.
                </>
            ),
            link: "https://doi.org/10.1039/C4OB02293A",
            image: "/pub_banner_14.png"
        }
    ];

    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="pt-36">
                <div className="max-w-5xl mx-auto px-4 md:px-6 mb-16 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Significant Publications</h1>
                </div>

                <div className="max-w-5xl mx-auto px-4 md:px-6 pb-24 space-y-16">
                    {publications.map((pub) => (
                        <div key={pub.id} className="flex flex-col gap-6">
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
                    ))}
                </div>
            </div>
        </main>
    );
}
