'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export const Enlace = ({ enlace }) => {
	const pathName = usePathname();

	const activo = pathName.endsWith(enlace.url) ? 'navegacion__enlace--activo' : '';

	return (
		<Link className={`navegacion__enlace--a ${activo}`} href={enlace.url}>
			{enlace.nombre}
		</Link>
	);
};
