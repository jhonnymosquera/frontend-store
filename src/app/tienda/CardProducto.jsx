import Link from 'next/link';
import Image from 'next/image';

export const CardProducto = ({ productos }) => {
	return (
		<>
			{productos.map(({ id, nombre, imagen, precio }) => (
				<div className="producto" key={id}>
					<Link href={`/tienda/${id}`}>
						<Image src={imagen} alt={nombre} width={364} height={354} />

						<div className="producto__informacion">
							<p className="producto__nombre">{nombre}</p>
							<p className="producto__precio">{precio}</p>
						</div>
					</Link>
				</div>
			))}
		</>
	);
};
