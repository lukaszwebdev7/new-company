import Link from 'next/link'
import Head from 'next/head'

const CivilLaw = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Radca Prawny Łukasz Szczepaniak Piaseczno zapłata odszkodowanie spadek zachowek rękojmia dzieło roboty budowlane współwłasność nieruchomości" />
                <title>Kancelaria Radcy Prawnego</title>
            </Head>
            <div className="flex justify-center w-full mt-4 sm:mt-16">
                <div className="flex flex-col sm:flex-row w-11/12 xl:w-9/12">
                    <div className="sm:w-1/3 lg:ml-16 mb-2">
                        <span className="block h-1 w-20 bg-yellow-box"></span>
                    </div>
                    <div className="sm:w-2/3"></div>
                </div>
            </div>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap" rel="stylesheet"></link>
            <div className="flex justify-center w-full mb-12 sm:mt-4">
                <div className="flex flex-col sm:flex-row w-11/12 xl:w-9/12">
                    <div style={{ fontFamily: "Roboto Condensed" }} className="sm:w-1/3 mb-2">
                        <div className="sm:block text-xl sm:text-5xl sm:ml-2 lg:ml-16 font bold text-coffee">Sprawy majątkowe.</div>
                    </div>
                    <div style={{ fontFamily: "Roboto Condensed" }} className="sm:w-2/3 sm:ml-8 text-justify sm:text-left">
                        <div className="mb-2">
                            <img className="sm:rounded shadow-xl" src="/assets/img/dokument.jpg" alt="" />
                        </div>
                        <div className="text-lg sm:text-xl xl:text-2xl font-bold uppercase bg-blue-bg text-white px-2 rounded tracking-wider">W tym zakresie zajmuję się</div>
                        <div className="h-1 w-16 bg-yellow-box my-4"></div>
                        <ul className="text-lg xl:text-xl mb-10 tracking-wide ">
                            <li className="my-3 p-2 "><span className="text-blue-text">+ </span>prowadzeniem spraw związanych z zawieraniem i wykonaniem umów, w szczególności umów sprzedaży, umów o dzieło, umów o roboty budowlane, umów świadczenia usług, umów najmu, pożyczki</li>
                            <li className="my-2 p-2"><span className="text-blue-text">+ </span>kredytami frankowymi - więcej informacji na moim blogu <span className=""> 
                                <Link href="//kredytyindeksowane.pl">
                                    <a className="text-blue-text font-bold hover:underline">kredytyindeksowane.pl</a>
                                </Link>
                                </span>
                            </li>
                            <li className="my-2 p-2"><span className="text-blue-text">+ </span>dochodzeniem należności przed sądem i egzekucją tych należności</li>
                            <li className="my-2 p-2"><span className="text-blue-text">+ </span>zniesieniem współwłasności</li>
                            <li className="my-2 p-2"><span className="text-blue-text">+ </span>ochroną własności i posiadania</li>
                            <li className="my-2 p-2"><span className="text-blue-text">+ </span>ochroną wierzycieli - prowadzeniem spraw ze skargi pauliańskiej</li>
                            <li className="my-2 p-2"><span className="text-blue-text">+ </span>prowadzeniem spraw o odszkodowanie i zadośćuczynienie za szkody na osobie</li>
                            <li className="my-2 p-2"><span className="text-blue-text">+ </span>prowadzeniem spraw z ubezpieczeń majątkowych</li>
                            <li className="my-2 p-2"><span className="text-blue-text">+ </span>prowadzeniem spraw o stwierdzenie nabycia spadku (z ustawy, z testamentu, ustalenie zdolności testowania)</li>
                            <li className="my-2 p-2"><span className="text-blue-text">+ </span>prowadzeniem spraw dział spadku</li>
                            <li className="my-2 p-2"><span className="text-blue-text">+ </span>prowadzeniem spraw o zachowek</li>
                        </ul>
                        <div style={{ fontFamily: "Roboto Condensed" }} className="text-lg xl:text-xl p-2 text-justify">Prowadzenie spraw obejmuje doradztwo, sporządzanie opinii prawnych, niezbędnych pism, w tym środków zaskarżenia i skarg kasacyjnych, zastępstwo przed sądem i organami władzy publicznej, pomoc przy pozyskiwaniu niezbędnych dokumentów i informacji.</div>
                    </div>
                </div>
            </div>
            <h2 className="flex justify-end text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8 mr-2 lg:mr-16 xl:mr-40">
                <Link href="/specjalizacja">
                    <a style={{ fontFamily: "Lobster Two", letterSpacing: "2px" }} className="text-gray-75 hover:underline">Specjalizacja</a>
                </Link>
                <span className="block text-gray-25">.</span>
            </h2>
        </>
    )
}

export default CivilLaw;

