import React from 'react';


const SectionOne = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col-reverse md:flex-row sm:items-center mb-10 sm:mb-20 w-11/12 sm:w-9/12">
                <div className="md:mt-0">
                    <p className="hidden sm:block mt-1 text-xl text-center sm:text-left leading-tight font-semibold text-black mb-6 tracking-widest text-gray-75">Paragrafy</p>
                    <p className="block font-bold mt-1 text-base sm:text-xl md:text-3xl xl:text-4xl text-center sm:text-left leading-tight text-black mb-6 tracking-widest">Zawiłe Polskie Prawo</p>
                    <p className="mt-2 text-sm sm:text-base xl:text-xl text-gray-25 text-justify" >W często zmieniającym się otoczeniu prawnym i biznesowym, każdego roku coraz większe grono osób i podmiotów gospodarczych boryka się z trudnościami związanymi z potrzebą prawnego uregulowania ich spraw. Niejednokrotnie prawo dostarcza pozornie wielu instrumentów, a tylko rzetelna i pogłębiona analiza pozwala wybrać ten właściwy. Drogą do rozwiązania płynących stąd dylematów jest skorzystanie z usług profesjonalnego pełnomocnika. Takie doradztwo pozwoli Ci uporządkować swoje sprawy, ułatwi prowadzenie działalności gospodarczej i ograniczy konieczne koszty.</p>
                </div>
            </div>
        </div>
    )
}

export default SectionOne;
