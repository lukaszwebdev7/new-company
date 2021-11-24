import Head from 'next/head';
import Link from 'next/link';

export function Specjalizacja() {

    return (
        <>
            <Head>
                <meta name="description" content="Specjalizacja Radca Prawny Łukasz Szczepaniak Piaseczno" />
                <title>Kancelaria Radcy Prawnego</title>
            </Head>
            <div className="border-t-2 border-gray-300">
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
                <div className="h-16 sm:h-32 xl:h-40 w-full sm:mb-4 xl:mb-16">
                    <div style={{ fontFamily: "Lobster", letterSpacing: "2px" }} className="hidden sm:block text-lg lg:text-xl xl:text-2xl ml-2 lg:ml-32 xl:ml-40 mt-4 sm:mt-10 text-coffee">Prawo dotyczy każdego z Nas.</div>
                    <div style={{ fontFamily: "Lobster", letterSpacing: "2px" }} className="hidden sm:block text-xl lg:text-3xl xl:text-5xl ml-2 lg:ml-32 xl:ml-40 underline text-coffee">Oto obszary, w których świadczę usługi.</div>
                    <div className="sm:hidden text-white text-center uppercase text-xl font-bold mt-4 text-coffee tracking-tight">Obszary świadczenia usług</div>
                </div>
                <div style={{ fontFamily: "Roboto Condensed" }} className="flex flex-col items-center">
                    <div className="uppercase text-sm sm:text-2xl xl:text-4xl mb-6 font-bold text-gray-75 tracking-wide">Specjalizacja</div>
                    <div className="h-1 w-16 bg-gold"></div>
                </div>
                <div className="flex justify-center w-full antialiased pt-4 xl:pt-10 mb-20 sm:mb-32">
                    <div className="w-full lg:w-11/12 xl:w-10/12">
                        <div style={{ fontFamily: "Roboto Condensed" }} className="flex justify-center flex-row flex-wrap text-gray-25">
                            <div className="rounded overflow-hidden bg-white w-full sm:w-1/2 lg:w-1/4 xxl:w-2/7 mx-8 mb-16">
                                <Link href="/specjalizacja/majatkowe" className="flex justify-center">
                                    <a className="">
                                        <div className="flex flex-col items-center bg-footer h-56 rounded transition duration-300 hover:bg-indigo">
                                            <div className="pb-6 rounded-lg">
                                                <svg className="h-20 w-20 fill-current text-gold mt-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 110-20 10 10 0 010 20zm1-5h1a3 3 0 000-6H7.99a1 1 0 010-2H14V5h-3V3H9v2H8a3 3 0 100 6h4a1 1 0 110 2H6v2h3v2h2v-2z" /></svg>
                                            </div>
                                            <div className="bg-footer w-9/12 text-center font-bold text-xl shadow-2xl rounded">
                                                <p className="bg-white px-1 rounded text-2xl text-gold">Sprawy majątkowe</p>
                                            </div>
                                        </div>
                                        <div style={{ fontFamily: "Lobster", letterSpacing: "2px" }} className="text-xl text-gray-75 hover:underline">
                                            więcej ...
                                    </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="rounded overflow-hidden bg-white w-full sm:w-1/2 lg:w-1/4 xxl:w-2/7 mx-8 mb-16">
                                <Link href="/specjalizacja/spolki" className="flex justify-center">
                                    <a>
                                        <div className="flex flex-col items-center bg-footer h-56 rounded transition duration-300 hover:bg-indigo">
                                            <div className="pb-6 rounded-lg">
                                                <svg className="h-20 w-20 fill-current text-gold mt-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 10h3v10H1V10zM6 0h3v20H6V0zm5 8h3v12h-3V8zm5-4h3v16h-3V4z" /></svg>
                                            </div>
                                            <div className="bg-footer w-9/12 text-center font-bold text-xl shadow-2xl rounded">
                                                <p className="bg-white px-1 rounded text-2xl text-gold">Spółki handlowe</p>
                                            </div>
                                        </div>
                                        <div style={{ fontFamily: "Lobster", letterSpacing: "2px" }} className="text-xl text-gray-75 hover:underline">
                                            więcej ...
                                    </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="rounded overflow-hidden bg-white w-full sm:w-1/2 lg:w-1/4 xxl:w-2/7 mx-8 mb-16">
                                <Link href="/specjalizacja/przedsiebiorcy" className="flex justify-center">
                                    <a>
                                        <div className="flex flex-col items-center bg-footer h-56 rounded transition duration-300 hover:bg-indigo">
                                            <div className="pb-6 rounded-lg">
                                                <svg className="h-20 w-20 fill-current text-gold mt-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm3 1v2h10V3H5zm0 4v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2zm-8 4v2h2v-2H5zm4 0v2h2v-2H9zm4 0v6h2v-6h-2zm-8 4v2h2v-2H5zm4 0v2h2v-2H9z" /></svg>
                                            </div>
                                            <div className="bg-footer w-9/12 text-center font-bold text-xl shadow-2xl rounded">
                                                <p className="hidden xl:block bg-white px-1 rounded text-2xl text-gold">Obsługa przedsiębiorców</p>
                                                <p className="bg-white px-1 rounded text-2xl text-gold xl:hidden">Przedsiębiorcy</p>
                                            </div>
                                        </div>
                                        <div style={{ fontFamily: "Lobster", letterSpacing: "2px" }} className="text-xl text-gray-75 hover:underline">
                                            więcej ...
                                    </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="rounded overflow-hidden bg-white w-full sm:w-1/2 lg:w-1/4 xxl:w-2/7 mx-8 mb-16">
                                <Link href="/specjalizacja/rodzinne" className="flex justify-center">
                                    <a>
                                        <div className="flex flex-col items-center bg-footer h-56 rounded transition duration-300 hover:bg-indigo">
                                            <div className="pb-6 rounded-lg">
                                                <svg className="h-20 w-20 fill-current text-gold mt-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12 16H9l2-4.5V9c0-1.1.9-2 2-2h2a2 2 0 012 2v2.5l2 4.5h-3v4h-4v-4zm-5-3h2V9a2 2 0 00-2-2H3a2 2 0 00-2 2v4h2v7h4v-7zM5 6a3 3 0 110-6 3 3 0 010 6zm9 0a3 3 0 110-6 3 3 0 010 6z" /></svg>

                                            </div>
                                            <div className="bg-footer w-9/12 text-center font-bold text-xl shadow-2xl rounded">
                                                <p className="bg-white px-1 rounded text-2xl text-gold">Sprawy rodzinne</p>
                                            </div>
                                        </div>
                                        <div style={{ fontFamily: "Lobster", letterSpacing: "2px" }} className="text-xl text-gray-75 hover:underline">
                                            więcej ...
                                    </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="rounded overflow-hidden bg-white w-full sm:w-1/2 lg:w-1/4 xxl:w-2/7 mx-8">
                                <Link href="/specjalizacja/umowyit" className="flex justify-center">
                                    <a>
                                        <div className="flex flex-col items-center bg-footer h-56 rounded transition duration-300 hover:bg-indigo">
                                            <div className="pb-6 rounded-lg">
                                                <svg className="h-20 w-20 fill-current text-gold mt-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 16h2v1a1 1 0 01-1 1H1a1 1 0 01-1-1v-1h2V4c0-1.1.9-2 2-2h12a2 2 0 012 2v12zM4 4v9h12V4H4zm4 11v1h4v-1H8z" /></svg>
                                            </div>
                                            <div className="bg-footer w-9/12 text-center font-bold text-xl shadow-2xl rounded">
                                                <p className="bg-white px-1 rounded text-2xl text-gold">Analiza umów w IT</p>
                                            </div>
                                        </div>
                                        <div style={{ fontFamily: "Lobster", letterSpacing: "2px" }} className="text-xl text-gray-75 hover:underline">
                                            więcej ...
                                    </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Specjalizacja;