import productos from './productos.json';

export async function GET(request) {
	return new Response(JSON.stringify(productos));
}
