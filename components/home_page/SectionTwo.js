import React from 'react';

const SectionTwo = () => {
	return (
		<div className="flex justify-center mb-20">
			<div className="flex flex-col-reverse md:flex-row w-10/12 sm:w-9/12 sm:items-center">
				<div className="flex flex-col sm:w-1/2 text-center lg:mr-4">
					<div className="uppercase text-xl font-semibold text-coffee lg:text-4xl xl:text-5xl">
						radca prawny
					</div>
					<div className="text-2xl font-bold mb-4 lg:text-4xl xl:text-5xl">Łukasz Piotr Szczepaniak</div>
					<div className="flex justify-center">
						<div className="h-1 w-1/4 divide-y border-b-2 mb-16 xl:mb-10 xxl:mb-20 border-coffee" />
					</div>
					<p className="mb-12 xl:mb-16 xxl:mb-24 lg:text-xl xl:text-2xl xxl:text-3xl">
						Profesjonalna pomoc prawna dla klientów indywidualnych i przedsiębiorców.
					</p>
					<div className="flex justify-center">
						<div className="flex flex-col bg-yellow-box py-4 px-3 rounded w-11/12 sm:w-3/4 lg:w-full xl:w-11/12 lg:mb-8">
							<p className="flex justify-center text-white">
								<svg
									className="h-6 w-6 lg:h-8 lg:w-8 xl:h-12 xl:w-12 fill-current text-white mb-2"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M19 11a7.5 7.5 0 01-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 011 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
								</svg>
							</p>
							<p className="uppercase text-xl xl:text-3xl xxl:text-4xl font-semibold text-white tracking-widest">
								Kontakt telefoniczny
							</p>
							<p className="text-3xl xl:text-5xl font-bold text-white tracking-wide">505 305 893</p>
						</div>
					</div>
				</div>

				<div className="sm:w-1/2 mb-10">
					<img
						className="object-cover sm:object-fill w-full rounded"
						src="/assets/img/lukasz.jpg"
						alt="Lukasz"
					/>
				</div>
			</div>
		</div>
	);
};

export default SectionTwo;
