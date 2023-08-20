import productos from '../productos.json';

export async function GET(request, context) {
	const data = productos.find(({ id }) => id == context.params.id);

	if (data) {
		return new Response(JSON.stringify(data));
	} else {
		return new Response('Objeto no encontrado', { status: 404 });
	}
}
