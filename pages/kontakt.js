import Head from 'next/head'


export default function Contact() {

    return (
        <>
            <Head>
                <meta name="description" content="kontakt Radca Prawny Łukasz Szczepaniak Piaseczno" />
                <title>Kancelaria Radcy Prawnego</title>
            </Head>

            <div className="border-t-2 border-gray-300">
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap" rel="stylesheet"></link>
                <div style={{ fontFamily: "Roboto Condensed" }} className="flex w-full justify-center sm:mt-16 sm:mt-12 xl:my-16">
                    <div className="flex sm:justify-between flex-col sm:flex-row w-11/12 sm:w-10/12 xl:w-3/4">
                        <div className="sm:w-1/4 xl:w-1/4 mx-8 mb-10">
                            <p className="text-center text-lg xl:text-xl font-bold mt-4 sm:mt-0 mb-2 text-white bg-lightblue py-1 rounded">Dane teleadresowe</p>
                            <div className="flex justify-center mb-8"><span className="block h-1 w-20 bg-yellow-box"></span></div>
                            <ul className="text-center sm:text-base xl:text-lg">
                                <li className="mt-4 font-bold">Radca Prawny Łukasz Szczepaniak</li>
                                {/* <li className="mb-4 font-bold">Kancelaria Radcy Prawnego</li> */}
                                <li className="mb-4"></li>
                                <li className="mb-4"></li>
                                <li className="mb-4">tel. 505 305 893</li>
                                <li className=""></li>
                            </ul>
                        </div>
                        <div className="sm:w-1/4 xl:w-1/4 mx-8 mb-10">
                            <p className="text-center text-lg xl:text-xl font-bold mb-2 text-white bg-lightblue py-1 rounded">Godziny otwarcia</p>
                            <div className="flex justify-center mb-8"><span className="block h-1 w-20 bg-yellow-box"></span></div>
                            <div className="text-center sm:text-base xl:text-lg">
                                <div className="flex flex-col sm:flex-row justify-between my-4">
                                    <p className="font-bold">Poniedziałek - Piątek</p>
                                    <p>--- - ---</p>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between mb-4">
                                    <p className="font-bold">Sobota</p>
                                    <p><p>--- - ---</p></p>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between">
                                    <p className="font-bold">Niedziele i święta</p>
                                    <p>--- - ---</p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/4 xl:w-1/4 mx-8 mb-10">
                            <p className="text-center text-base xl:text-xl font-bold mb-2 text-white bg-lightblue py-1 rounded">Numer rachunku bankowego</p>
                            <div className="flex justify-center mb-8"><span className="block h-1 w-20 bg-yellow-box"></span></div>
                            <ul className="text-center sm:text-base xl:text-lg mt-4">
                                <li className="font-bold">Praesent aliquam.</li>
                                <li>Praesent aliquam tincidunt ornare.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className="w-full flex flex-col justify-center mb-20 sm:mb-24">

                    <div className="flex justify-center mb-4">
                        <svg className="h-8 w-8 fill-current text-blue-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20S3 10.87 3 7a7 7 0 1114 0c0 3.87-7 13-7 13zm0-11a2 2 0 100-4 2 2 0 000 4z" /></svg>
                    </div>
                    <div className="flex justify-center text-center mb-6 sm:mb-8">
                        <p style={{ fontFamily: "Roboto Condensed" }} className="w-11/12 sm:w-2/3 xl:w-3/4 text-base sm:text-lg">Lokalizację kancelarii i wskazówki, jak dojechać, znajdziesz w <strong>mapach google</strong> poniżej.</p>
                    </div>
                    
                    <div className="flex justify-center">
                        <iframe className="w-11/12 h-96 sm:w-2/3 xl:w-3/4 rounded" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9810.170077927241!2d21.0258568!3d52.0698532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa67a08caf618d01a!2sRadca%20Prawny%20%C5%81ukasz%20Szczepaniak%20Kancelaria%20Radcy%20Prawnego!5e0!3m2!1spl!2spl!4v1603645233912!5m2!1spl!2spl" width="1200" height="600" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </div> */}

                <div className="flex w-full justify-center mb-8">
                    <div className="flex flex-row w-10/12 xl:w-3/4">
                        <div className="flex items-start mr-3">
                            <svg className="h-8 w-8 fill-current text-blue-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>
                        </div>
                        <div style={{ fontFamily: "Roboto Condensed" }} className="text-base text-justify">W związku z występowaniem pandemii koronawirusa, możliwe jest przeprowadzenie konsultacji online poprzez aplikacje <strong>Skype</strong>, bądź <strong>MS Teams</strong>. Przeprowadzenie konsultacji w takiej formie wymaga uprzedniego kontaktu telefonicznego, umówienia terminu oraz jej opłacenia.
                    </div>
                    </div>
                </div>
                <div style={{ fontFamily: "Roboto Condensed" }} className="flex w-full justify-center mb-16 sm:mb-20 xl:mb-24">
                    <div className="flex flex-col w-10/12 xl:w-2/3 text-base">
                        <div className="flex flex-row items-center mb-4 lg:ml-10 xl:ml-0">
                            <div className="h-20 w-20 sm:h-12 sm:w-12 mr-4">
                                <img src="/assets/img/Skype.jpg" alt="Skype" className="object-cover" />
                            </div>
                            <div>Skype - na Twój adres email zostanie wysłana wiadomość z linkiem do transmisji. Klikasz i rozmawiasz. Mogę też zadzwonić, jeśli masz zainstalowaną aplikację.</div>
                        </div>
                        <div className="flex flex-row items-center lg:ml-10 xl:ml-0">
                            <div className="h-20 w-20 sm:h-12 sm:w-12 mr-4">
                                <img src="/assets/img/Teams.jpg" alt="Teams" className="object-cover" />
                            </div>
                            <div>MS Teams - na Twój adres email zostanie wysłana wiadomość z linkiem do transmisji. Klikasz i rozmawiasz. Mogę też zadzwonić, jeśli masz zainstalowaną aplikację.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

