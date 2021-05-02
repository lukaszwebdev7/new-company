import { Fragment } from 'react';
import Navigation from './layout/navigation';
import Footer from './layout/footer';

function Layout(props) {
	return (
		<Fragment>
			<Navigation />
			<main>{props.children}</main>
			<Footer />
		</Fragment>
	);
}

export default Layout;
