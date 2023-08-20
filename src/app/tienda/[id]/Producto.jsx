import Image from 'next/image';

export const Producto = ({ producto }) => {
	return (
		<>
			<h1>{producto.nombre}</h1>

			<div className="camiseta">
				<div className="camisa">
					<Image src={producto.imagen} alt={producto.nombre} width={454} height={454} />

					<div className="camisa__contenido">
						<p>
							Maecenas consectetur ultricies mi vel venenatis. Curabitur risus tellus, congue non tellus at, semper dapibus
							turpis. Duis pellentesque, risus sit amet placerat porttitor, tortor augue volutpat ante, non dignissim odio ligula
							at.
						</p>

						<p className="camisa_precio">{`$${producto.precio}`}</p>

						<form className="formulario">
							<select className="formulario__campo" defaultValue="0">
								<option defaultValue="0" disabled>
									-- Seleccionar Talla --
								</option>
								<option defaultValue="chica">Chica</option>
								<option defaultValue="mediana">Mediana</option>
								<option defaultValue="grande">Grande</option>
							</select>

							<input className="formulario__campo" type="number" placeholder="Cantidad" min="1" />

							<input className="formulario__submit" type="submit" value="Agregar al Carrito" />
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
