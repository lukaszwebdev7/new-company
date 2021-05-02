import Head from 'next/head'
import Link from 'next/link'

const Radca = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Radca Prawny Łukasz Szczepaniak Piaseczno O mnie" />
                <title>Kancelaria Radcy Prawnego</title>
            </Head>


            <link href="https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap" rel="stylesheet"></link>
            <div className="h-10 sm:h-20 w-full border-t-2 border-gray-300">
                <p style={{ fontFamily: "Lobster Two", letterSpacing: "3px" }} className="text-xl lg:text-3xl xl:text-4xl font-bold ml-2 mt-4 sm:mt-10 lg:ml-24 xl:ml-40 underline text-coffee px-2">W kilku zdaniach o sobie.</p>
            </div>

            <div className="flex justify-center mt-10">
                <div className="flex flex-col sm:flex-row lg:w-10/12 xl:w-9/12">
                    <div className="sm:w-1/3">
                        <img src="/assets/img/lukasz.jpg" alt="zdjęcie-lukasz" className="rounded" />
                    </div>
                    <div className="sm:w-2/3 sm:ml-20 mt-6 sm:mt-0">
                        <div className="flex justify-center w-full">
                            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
                            <div style={{ fontFamily: "Roboto Condensed" }} className="flex flex-col w-11/12 lg:w-full text-justify lg:text-base xl:text-xl tracking-wide">
                                <div className="mb-2">
                                    Ukończyłem studia magisterskie na kierunku prawo na Wydziale Prawa i Administracji Uniwersytetu Marii Curie-Skłodowskiej w Lublinie. Aplikację radcowską odbyłem w Okręgowej Izbie Radców Prawnych w Lublinie. W Akademii Leona Koźmińskiego w Warszawie ukończyłem studia podyplomowe z zakresu Prawa zamówień publicznych, a w Szkole Głównej Gospodarstwa Wiejskiego w Warszawie studia podyplomowe z zakresu Pośrednictwa w obrocie nieruchomościami.
                                </div>
                                <div className="my-2">
                                    Przez ponad <strong>10 lat</strong> wykonywałem pracę i świadczyłem usługi na rzecz innych kancelarii prawnych. <strong>W 2020 roku, przyszedł czas na własną praktykę.</strong>
                                </div>
                                <div className="my-2">
                                    Świadczę profesjonalną pomoc prawną dla klientów indywidualnych i przedsiębiorców, która może mieć charakter zarówno stały, jak i jednostkowy.
                                </div>
                                <div className="my-2">
                                    Wierzę, że ciężka praca i poświęcenie przynoszą sukcesy, a indywidualne podejście do potrzeb klienta wymarzony efekt.
                                </div>
                                <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet"></link>
                                <div style={{ fontFamily: "Caveat" }} className="sm: text-2xl xl:text-3xl my-2 text-right">
                                    Łukasz Szczepaniak
                                </div>

                <div style={{ fontFamily: "Roboto Condensed" }} className="flex w-full justify-center mt-4 mb-6">
                    <div className="flex flex-col w-11/12 sm:w-10/12 lg:w-full">
                        <div className="flex flex-row items-center mb-4">
                            <div className="h-10 w-10 sm:h-12 sm:w-12 mr-4">
                                <img src="/assets/img/f_logo.png" alt="Facebook" className="object-cover" />
                            </div>
                            <div>
                                <Link href="//facebook.com/pages/category/Legal/Kancelaria-Radcy-Prawnego-Łukasza-Szczepaniaka-102564995007262/">
                                    <a style={{ fontFamily: "Roboto Condensed" }} className="hover:underline">
                                    Na <strong>Facebooku</strong> znajdziesz mnie po nazwie "radcapiaseczno". Kliknij <strong>tu</strong>, aby teraz przejść do strony.
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between mt-6 sm:mt-10">
                <div className="h-20 sm:h-32 xl:h-40 w-2/5 lg:ml-24 xl:ml-40">
                </div>
                <div className="h-16 w-16 sm:h-32 lg:w-32 bg-lightblue mr-12 lg:mr-24 xl:mr-64 rounded">
                </div>
            </div>


            <div className="flex justify-center mb-20 sm:mb-32 lg:mt-8 lg:mt-0">
                <div className="flex flex-col sm:flex-row lg:w-10/12 xl:w-9/12">
                    <div className="sm:w-1/3">
                    </div>
                    <div className="sm:w-2/3 sm:ml-20">
                        <div className="h-10 w-full">
                            <p style={{ fontFamily: "Lobster Two", letterSpacing: "2px" }} className="text-lg lg:text-3xl xl:text-3xl ml-2 lg:ml-0 lg:mt-10 underline text-coffee">W kilku zdaniach o zawodzie radcy prawnego.</p>
                        </div>
                        <div className="flex justify-center w-full mt-4 sm:mt-8">
                            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
                            <div style={{ fontFamily: "Roboto Condensed" }} className="flex flex-col w-11/12 lg:w-full text-justify lg:text-base xl:text-xl">
                                <div className="my-2">
                                    Prawo wykonywania zawodu radcy prawnego powstaje z chwilą dokonania wpisu na listę radców prawnych i złożenia ślubowania.
                                </div>
                                <div className="my-2">
                                    Świadczenie pomocy prawnej przez radcę prawnego polega w szczególności na udzielaniu porad i konsultacji prawnych, sporządzaniu opinii prawnych, opracowywaniu projektów aktów prawnych oraz <strong>występowaniu przed urzędami i sądami w charakterze pełnomocnika lub obrońcy</strong>.
                                </div>
                                <div className="my-2">
                                    Strojem urzędowym radców prawnych biorących udział w rozprawach sądowych jest toga.
                                </div>
                                <div className="my-2">
                                    Przy kołnierzu togi wszyty jest żabot z <strong className="text-lightblue">ciemnoniebieskiego</strong> jedwabiu długości 21 cm, szerokości u dołu 28 cm, ułożony w 13 kontrafałd, z których środkowa, szerokości 2 cm, ma fałdy po obu stronach, a pozostałe biegną w kierunku rękawów.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Radca