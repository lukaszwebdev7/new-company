import React from 'react';
import Link from 'next/link'

const SectionThree = () => {
    return (
        <div className="flex justify-end w-11/12 mt-10 sm:mt-32 sm:mb-12">
            <link href="https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap" rel="stylesheet"></link>

            <h2 className="flex justify-end text-xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8 mr-2">
                <Link href="/specjalizacja">
                    <a style={{ fontFamily: "Lobster Two", letterSpacing: "2px" }} className="text-gray-75 hover:underline">Przejdź do specjalizacji</a>
                </Link>
                <span className="block text-gray-25">.</span>
            </h2>
        </div>

    )
}

export default SectionThree;