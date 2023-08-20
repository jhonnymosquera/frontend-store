import { Producto } from './producto';

async function obtenerCamiseta(id) {
	try {
		const url = process.env.API_URL;
		const data = await fetch(`${url}/${id}`);

		return data.json();
	} catch (error) {
		console.log(error.message);
	}
}

const ProductoPage = async ({ params }) => {
	const producto = await obtenerCamiseta(params.id);

	return <>{producto && <Producto producto={producto} />}</>;
};

export default ProductoPage;
