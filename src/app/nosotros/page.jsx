const NosotrosPage = () => {
	return (
		<div>
			<main className="contenedor">
				<h1>Nosotros</h1>
				<div className="nosotros">
					<p className="nosotros__parrafo">
						Nam nec metus a risus auctor congue nec non felis. Donec eu diam facilisis, semper nisl sed, ultricies ligula. Duis
						convallis tortor eu mi interdum feugiat. Pellentesque diam dolor, dignissim sit amet metus vitae, viverra dapibus
						odio. Mauris lobortis odio nisi, ut pulvinar nisl accumsan non. Aliquam vitae diam elementum ipsum gravida mattis.
						Nulla facilisi. Etiam eu urna at arcu dignissim tempor.
						<br />
						<br />
						Vestibulum ultrices ex ante, quis gravida metus vehicula nec. Donec interdum ultricies diam, congue dictum libero
						auctor quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin porta
						pretium felis, ac semper nulla pellentesque sed. Morbi condimentum mauris orci. In blandit et dolor vel consequat.
						Cras urna odio, euismod sit amet mauris a, variu dignissim neque.
					</p>
					<img className="nosotros_imagen" src="/nosotros.jpg" alt="nosotros" />
				</div>
				<h2 className="nosotros__h2">¿Porqué Comprar con Nosotros?</h2>
			</main>

			<section className="contenedor">
				<div className="iconos">
					<div className="icono">
						<img className="icono__imagen" src="icons/icono_1.png" alt="El Mejor Precio" />
						<h3 className="icono__titulo">El Mejor Precio</h3>
						<p className="icono__texto">
							Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin porta pretium felis
						</p>
					</div>
					<div className="icono">
						<img className="icono__imagen" src="icons/icono_2.png" alt="Para Devs" />
						<h3 className="icono__titulo">Para Devs</h3>
						<p className="icono__texto">
							Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin porta pretium felis
						</p>
					</div>
					<div className="icono">
						<img className="icono__imagen" src="icons/icono_3.png" alt="Envío Gratis" />
						<h3 className="icono__titulo">Envío Gratis</h3>
						<p className="icono__texto">
							Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin porta pretium felis
						</p>
					</div>
					<div className="icono">
						<img className="icono__imagen" src="icons/icono_4.png" alt="La Mejor Calidad" />
						<h3 className="icono__titulo">La Mejor Calidad</h3>
						<p className="icono__texto">
							Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin porta pretium felis
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default NosotrosPage;
