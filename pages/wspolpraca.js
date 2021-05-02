import Head from 'next/head'

export default function Cooperation() {

    return (
        <>
            <Head>
                <meta name="description" content="Współpraca Radca Prawny Łukasz Szczepaniak Piaseczno" />
                <title>Kancelaria Radcy Prawnego</title>
            </Head>

            <div className="border-t-2 border-gray-300">
                <div className="flex justify-center w-full mt-2 sm:mt-10 mb-20 sm:mb-32">
                    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap" rel="stylesheet"></link>
                    <div className="flex flex-col w-11/12 sm:w-9/12">
                        <div className="flex flex-col sm:flex-row">
                            <div className="sm:w-5/12 xl:w-4/12">
                                <div style={{ fontFamily: "Lobster Two", letterSpacing: "4px" }} className="text-xl sm:text-3xl xl:text-4xl font-bold sm:-ml-10 xl:-ml-20 text-blue-text">Wspólne idee.</div>
                                <div style={{ fontFamily: "Lobster Two", letterSpacing: "4px" }} className="text-xl sm:text-3xl xl:text-4xl font-bold sm:-ml-10 xl:-ml-20 text-coffee">Wspólne wartości.</div>
                                <div className="sm:hidden my-6">
                                    <img src="/assets/img/hands.jpg" alt="zdjęcie-hands" className="rounded" />
                                </div>
                                <div style={{ fontFamily: "Roboto Condensed" }} className="sm:mt-6 xl:mt-16 mb-4 xl:mb-10 text-base xl:text-xl text-justify">
                                    Dla zapewienia jak najwyższego poziomu świadczonych usług współpracuję z zespołem znakomitych prawników, specjalistów z zakresu prawa cywilnego, handlowego, gospodarczego i rodzinnego, a także specjalistami z zakresu szacowania wartości nieruchomości, budownictwa i geodezji, branży IT i bankowości. W szybko zmieniającym się otoczeniu prawnym znaczenie ma bowiem nie tylko możliwość sięgnięcia do instytucji prawa, ale także możliwość połączenia wiedzy prawniczej z niezbędnym zakresem informacji branżowych.
                                </div>
                            </div>
                            <div className="hidden sm:block sm:w-7/12 xl:w-8/12 mb-10 ml-20 mt-10">
                                <img src="/assets/img/hands.jpg" alt="zdjęcie-hands" className="rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
