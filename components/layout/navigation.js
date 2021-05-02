import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
	const router = useRouter();

	return (
		<nav className="flex flex-col md:flex-row sm:justify-between">
			<div className="flex items-center justify-between pr-5 sm:ml-12 xl:ml-10">
				<div className="-ml-4">
					<img className="h-24 xl:h-32" src="/assets/img/logo.png" alt="logo" />
				</div>
				<div className="sm:hidden">
					<button
						className="lg:hidden"
						onClick={() => {
							const burger = document.querySelector('.burger');
							const menu = document.querySelector('.menu');
							return menu.classList.toggle('-mt-6'), burger.classList.toggle('hidden');
						}}
						type="button"
						className="block text-gray-500 hover:text-black focus:text-black focus:outline-none"
					>
						<div className="h-6 w-6 overflow-hidden">
							<svg className="h-6 w-6 fill-current menu" viewBox="0 0 24 24">
								<path
									fillRule="evenodd"
									d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								/>
							</svg>
							<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
								<path
									className=""
									fillRule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								/>
							</svg>
						</div>
					</button>
				</div>
			</div>
			<div className="flex items-center">
				<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet" />
				<div
					style={{ fontFamily: 'Roboto Condensed' }}
					className="burger flex flex-col md:flex-row text-sm lg:flex-grow bg-white p-6 sm:flex sm:mr-8"
				>
					<div className={router.pathname == '/' ? 'text-blue-text' : ''}>
						<Link exact href="/">
							<a className="block py-1 pl-2 rounded lg:inline-block lg:mt-0 uppercase font-bold transition duration-300 mr-4 text-base sm:text-lg md:text-xl lg:text-2xl hover:text-blue-text">
								<svg
									className="w-6 h-6 sm:w-8 sm:h-8"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
									/>
								</svg>
							</a>
						</Link>
					</div>
					<div
						className={
							router.pathname === '/specjalizacja' ? (
								'text-blue-text'
							) : '' || router.pathname === '/specjalizacja/majatkowe' ? (
								'text-blue-text'
							) : '' || router.pathname === '/specjalizacja/spolki' ? (
								'text-blue-text'
							) : '' || router.pathname === '/specjalizacja/przedsiebiorcy' ? (
								'text-blue-text'
							) : '' || router.pathname === '/specjalizacja/rodzinne' ? (
								'text-blue-text'
							) : '' || router.pathname === '/specjalizacja/karne' ? (
								'text-blue-text'
							) : '' || router.pathname === '/specjalizacja/umowyit' ? (
								'text-blue-text'
							) : (
								''
							)
						}
					>
						<Link href="/specjalizacja">
							<a className="block py-1 pl-2 rounded lg:inline-block lg:mt-0 uppercase font-bold transition duration-300 mr-4 text-base sm:text-lg md:text-xl lg:text-2xl hover:text-blue-text">
								Specjalizacja
							</a>
						</Link>
					</div>
					<div className={router.pathname == '/wnikliwy.pl' ? 'text-blue-text' : ''}>
						<Link href="//wnikliwy.pl/">
							<a
								style={{ fontFamily: 'Lobster Two', letterSpacing: '3px' }}
								className="block py-1 pl-2 rounded lg:inline-block lg:mt-0 font-bold transition duration-300 mr-4 text-base sm:text-lg md:text-xl lg:text-2xl hover:text-blue-text text-teal-400 italic"
							>
								wnikliwy.pl
							</a>
						</Link>
					</div>
					<div className={router.pathname == '/radca' ? 'text-blue-text' : ''}>
						<Link href="/radca">
							<a className="block py-1 pl-2 rounded lg:inline-block lg:mt-0 uppercase font-bold transition duration-300 mr-4 text-base sm:text-lg md:text-xl lg:text-2xl hover:text-blue-text ">
								Radca
							</a>
						</Link>
					</div>
					<div className={router.pathname == '/wspolpraca' ? 'text-blue-text' : ''}>
						<Link href="/wspolpraca">
							<a className="block py-1 pl-2 rounded lg:inline-block lg:mt-0 uppercase font-bold transition duration-300 mr-4 text-base sm:text-lg md:text-xl lg:text-2xl hover:text-blue-text">
								Zespół
							</a>
						</Link>
					</div>
					<div className={router.pathname == '/kontakt' ? 'text-blue-text' : ''}>
						<Link href="/kontakt">
							<a className="block py-1 pl-2 rounded lg:inline-block lg:mt-0 uppercase font-bold transition duration-300 mr-4 text-base sm:text-lg md:text-xl lg:text-2xl hover:text-blue-text">
								Kontakt
							</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
