import { Fragment } from 'react';
import Head from 'next/head';

import HomePage from '../components/HomePage';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Radca Prawny Łukasz Szczepaniak Piaseczno Praktyka: sprawy majątkowe, spółki handlowe, obsługa przedsiębiorców, sprawy rodzinne, umowy w IT."
				/>
				<title>Kancelaria Radcy Prawnego</title>
			</Head>
			<HomePage />
		</Fragment>
	);
}
