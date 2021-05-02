import Link from 'next/link'
import Head from 'next/head'

const ITagreements = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Radca Prawny Łukasz Szczepaniak Piaseczno umowy it dostawa sprzętu oprogramowania" />
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
                    <div className="sm:w-1/3 mb-2">
                        <div style={{ fontFamily: "Roboto Condensed" }} className="sm:block text-xl sm:text-5xl sm:ml-2 lg:ml-16 font bold text-coffee">Umowy w IT.</div>
                    </div>
                    <div style={{ fontFamily: "Roboto Condensed" }} className="sm:w-2/3 sm:ml-8 text-justify sm:text-left">
                        <div className="mb-2">
                            <img className="sm:rounded shadow-xl" src="/assets/img/binary.jpg" alt="" />
                        </div>
                        <div className="text-lg sm:text-xxl xl:text-2xl font-bold uppercase bg-blue-bg text-white px-2 rounded tracking-wider">W tym zakresie zajmuję się</div>
                        <div className="h-1 w-16 bg-yellow-box my-4"></div>
                        <ul className="text-lg xl:text-xl mb-10 tracking-wide">
                            <li className="my-2 p-2"><span className="text-blue-text">+ </span>analizą i opracowaniem umów z zakresu dostawy sprzętu komputerowego i oprogramowania w ramach zamówień publicznych</li>
                            <li className="my-2 p-2"><span className="text-blue-text">+ </span>analizą i opracowaniem umów z zakresu wytworzenia aplikacji internetowych i na telefon</li>
                        </ul>
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

export default ITagreements;