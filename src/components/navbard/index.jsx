import { enlaces } from './enlaces';
import { Enlace } from './Enlace';

export const Navbard = () => {
	return (
		<nav className="navegacion">
			{enlaces.map((enlace) => (
				<li className="navegacion__enlace" key={enlace.url}>
					<Enlace enlace={enlace} key={enlace.url} />
				</li>
			))}
		</nav>
	);
};
