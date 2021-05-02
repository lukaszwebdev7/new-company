import React from 'react';


const Presection = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="hidden sm:block mt-2 sm:mt-0 mb-8 md:mb-16 w-11/12 sm:w-10/12">
                    <div>
                        <img className="object-cover rounded" src="/assets/img/header_justice.jpg" />
                    </div>
                </div>
                <div className="sm:hidden mt-2 sm:mt-0 mb-8 md:mb-16">
                    <div>
                        <img className="object-cover rounded" src="/assets/img/justice_mob.jpg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Presection;