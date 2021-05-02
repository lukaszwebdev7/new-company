const AfterSlider = () => {
    return (
        <>
            <div className="flex md:flex-row justify-center w-full">
                <div className="flex border-solid border-black border-2 w-11/12 sm:w-9/12 rounded">
                    <link href="https://fonts.googleapis.com/css2?family=Londrina+Outline&family=Rozha+One&display=swap" rel="stylesheet"></link>
                    <div className="flex flex-col md:flex-row sm:items-center">
                        <div className="sm:w-1/2 sm:block">
                            <img className="object-cover sm:object-fill w-full"
                                src="/assets/img/light.jpg"
                                width="448" height="299" alt="Żąglowanie paragrafami" />
                        </div>
                        <div className="flex items-center flex-col mt-6 md:mt-0 md:ml-4 xl:ml-6 sm:w-1/2 text-center">
                            <p className="sm:block mt-1 text-xl md:text-2xl lg:text-3xl xxl:text-5xl sm:text-left leading-tight font-semibold text-black mb-6 tracking-widest text-gray-75">"nulla regula sine exceptione"</p>
                            <p className="block font-bold mt-1 md:text-2xl lg:text-3xl xxl:text-5xl sm:text-left leading-tight text-black tracking-widest capitalize underline mb-8 sm:mb-0" style={{ fontFamily: "Rozha One" }}>Nie ma reguły bez wyjątku.</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AfterSlider;