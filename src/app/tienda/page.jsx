import { CardProducto } from './CardProducto';

async function obtenerProductos() {
	const url = process.env.API_URL;
	const res = await fetch(url);

	return await res.json();
}

const TiendaPage = async () => {
	const productos = await obtenerProductos();

	return (
		<>
			<h1>Nuestros Productos</h1>

			<div className="grid">
				<CardProducto productos={productos} />

				<div className="grafico grafico--camisas"></div>
				<div className="grafico grafico--node"></div>
			</div>
		</>
	);
};

export default TiendaPage;
