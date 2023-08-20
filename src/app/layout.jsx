import { Navbard } from '../components';
import Link from 'next/link';
import { Staatliches } from 'next/font/google';
import './normalize.css';
import './styles.css';

export const metadata = {
	title: 'Frontend Store',
	description: 'Tienda de camisetas para desarrolladores ',
};

const staatliches = Staatliches({
	weight: ['400'],
	style: ['normal'],
	subsets: ['latin'],
});

export const RootLayout = ({ children }) => {
	return (
		<html>
			<body className={staatliches.className}>
				<header className="header">
					<Link href="/">
						<img className="header__logo" src="/logo.png" alt="logotipo" />
					</Link>
				</header>

				<Navbard />

				{children}

				<footer className="footer">
					<p className="footer__texto">Front End Store - Todos los derechos Reservados 2022.</p>
				</footer>
			</body>
		</html>
	);
};

export default RootLayout;
