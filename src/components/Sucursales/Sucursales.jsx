
import imagenes from "./Imagenes";
import './Sucursales.css';

const Sucursales = () => {
	return (
		<>
			<h1 className="EncabezadoPpal mBottom1rem">Sucursales</h1>
			<div className="ContenedorPpal">
				<div className="ContenedorSecund">
					<h2 className="mBottom1rem">ABASTO</h2>
					<p className="mBottom1rem"> <span className="bold displayBlock">Direccion:  </span> Av. Corrientes 3247 Nivel Subsuelo, Local 13</p>
					<p className="mBottom1rem bold displayInline mMail">Mail:
					<a className="mBottom1rem mail" href="mailto:abasto@owoko.com.ar">abasto@owoko.com.ar</a> </p>
					<p className="mBottom1rem  "> <span className="bold">Horarios:</span> Lunes a domingo de 10 a 22. </p>
					<div className="BotonesOwoko">
						<button className="BotonOwoko">Ir a Detalle</button>
						<button className="BotonOwoko">Ir a mapa </button>
					</div>
				</div>
				<div className="ContenedorSecund">
					<div className="ContenedorImagen mBottom1rem">
						<img className="ImagenOwoko" src={imagenes.abasto} alt="Local Abasto" />
					</div>
					<div>
						<p className="parra mBottom1rem">Visitanos en nuestro local Owoko Abasto Shopping y <span className="bold">conocé más sobre nuestra propuesta de ropa para chicos de 0 a 8 años</span>, accesorios, juegos y contenidos. Nos inspira la imaginación y diversión, por eso diseñamos ropa colorida, original, alegre, llena de personajes y con una mirada diferente sobre la indumentaria infantil.</p>
					</div>
					<div className="iframe">
						<iframe
							title="Google Maps"
							width="600"
							height="450"
							loading="lazy"
							allowFullScreen
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0330821128573!2d-58.41336888887136!3d-34.60332495736434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8c8dfc3ae7%3A0xfc26abb3fee575a9!2sOwoko!5e0!3m2!1ses!2sar!4v1700517046360!5m2!1ses!2sar"
						></iframe>
					</div>
				</div>
			</div>

			<div className="ContenedorPpal">
				<div className="ContenedorSecund">
					<h2 className="mBottom1rem">DOT</h2>
					<p className="mBottom1rem"> <span className="bold displayBlock">Direccion:  </span> Vedia 3600 - CABA </p>
					<p className="mBottom1rem bold displayInline mMail">Mail: 
					<a className="mBottom1rem mail" href="mailto:#"> sin informacion</a> </p>
					<p className="mBottom1rem  "> <span className="bold">Horarios:</span> Lunes a domingo de 10 a 22. </p>
					<div className="BotonesOwoko">
						<button className="BotonOwoko">Ir a Detalle</button>
						<button className="BotonOwoko">Ir a mapa </button>
					</div>
				</div>
				<div className="ContenedorSecund">
					<div className="ContenedorImagen mBottom1rem">
						<img className="ImagenOwoko" src={imagenes.dot} alt="Local DOT" />
					</div>
					<div>
						<p className="parra mBottom1rem">Visitanos en nuestro local Owoko Dot y <span className="bold">conocé más sobre nuestra propuesta de ropa para chicos de 0 a 8 años</span>, accesorios, juegos y contenidos. Nos inspira la imaginación y diversión, por eso diseñamos ropa colorida, original, alegre, llena de personajes y con una mirada diferente sobre la indumentaria infantil.</p>
					</div>
					<div className="iframe">
						<iframe
							title="Google Maps"
							width="600"
							height="450"
							loading="lazy"
							allowFullScreen
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.27943117709!2d-58.49042315998988!3d-34.546479754589846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6c050e5a86d%3A0xe2d14caaa7213756!2sVedia%203600%2C%20C1430DAH%20CABA!5e0!3m2!1ses-419!2sar!4v1700572655785!5m2!1ses-419!2sar"
						></iframe>
					</div>
				</div>
			</div>

			<div className="ContenedorPpal">
				<div className="ContenedorSecund"> 
					<h2 className="mBottom1rem">GALERIAS PACIFICO</h2>
					<p className="mBottom1rem"> <span className="bold displayBlock">Direccion:  </span> Florida 737 - Nivel Subsuelo, Local 115 </p>
					<p className="mBottom1rem bold displayInline mMail">Mail:
					<a className="mBottom1rem mail" href="mailto:galeriaspacifico@owoko.com.ar"> galeriaspacifico@owoko.com.ar</a></p>
					<p className="mBottom1rem  "> <span className="bold">Horarios:</span> Lunes a domingo de 10 a 21. </p>
					<div className="BotonesOwoko">
						<button className="BotonOwoko">Ir a Detalle</button>
						<button className="BotonOwoko">Ir a mapa </button>
					</div>
				</div>
				<div className="ContenedorSecund">
					<div className="ContenedorImagen mBottom1rem">
						<img className="ImagenOwoko" src={imagenes.galerias} alt="Local GALERIAS PACIFICO" />
					</div>
					<div>
						<p className="parra mBottom1rem">Visitanos en nuestro local Owoko Galerias Pacifico y <span className="bold">conocé más sobre nuestra propuesta de ropa para chicos de 0 a 8 años</span>, accesorios, juegos y contenidos. Nos inspira la imaginación y diversión, por eso diseñamos ropa colorida, original, alegre, llena de personajes y con una mirada diferente sobre la indumentaria infantil.</p>
					</div>
					<div className="iframe">
						<iframe
							title="Google Maps"
							width="600"
							height="450"
							loading="lazy"
							allowFullScreen
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.192234610831!2d-58.3752252!3d-34.5993002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacba3579fd1%3A0x7ac69e6d03d0702f!2sFlorida%20737%2C%20C1005%20San%20Nicolas%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700573754615!5m2!1ses-419!2sar"
						></iframe>
					</div>
				</div>
			</div>

			
			<div className="ContenedorPpal">
				<div className="ContenedorSecund">
					<h2 className="mBottom1rem">BELGRANO OUTLET</h2>
					<p className="mBottom1rem"> <span className="bold displayBlock">Direccion:  </span> Echeverría 2427 - CABA </p>
					<p className="mBottom1rem bold displayInline mMail">Mail:
					<a className="mBottom1rem mail" href="mailto:belgrano@owoko.com.ar"> belgrano@owoko.com.ar</a> </p>
					<p className="mBottom1rem  "> <span className="bold">Horarios:</span> Lunes a sábado de 10 a 20 </p>
					<div className="BotonesOwoko">
						<button className="BotonOwoko">Ir a Detalle</button>
						<button className="BotonOwoko">Ir a mapa </button>
					</div>
				</div>
				<div className="ContenedorSecund">
					<div className="ContenedorImagen mBottom1rem">
						<img className="ImagenOwoko" src={imagenes.belgrano} alt="Local BELTRANO" />
					</div>
					<div>
						<p className="parra mBottom1rem">Visitanos en nuestro local Owoko Belgrano Outlet y <span className="bold">conocé más sobre nuestra propuesta de ropa para chicos de 0 a 8 años</span>, accesorios, juegos y contenidos. Nos inspira la imaginación y diversión, por eso diseñamos ropa colorida, original, alegre, llena de personajes y con una mirada diferente sobre la indumentaria infantil.</p>
					</div>
					<div className="iframe">
						<iframe
							title="Google Maps"
							width="600"
							height="450"
							loading="lazy"
							allowFullScreen
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.624343267626!2d-58.4561564!3d-34.56306560000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d3ebe6490b%3A0x1749f2dc0ed3235a!2sEcheverr%C3%ADa%202427%2C%20C1428DRQ%20CABA!5e0!3m2!1ses-419!2sar!4v1700573927026!5m2!1ses-419!2sar"
						></iframe>
					</div>
				</div>
			</div>

			<div className="ContenedorPpal">
				<div className="ContenedorSecund">
					<h2 className="mBottom1rem">CABALLITO</h2>
					<p className="mBottom1rem"> <span className="bold displayBlock">Direccion:  </span> Angel M. Gimenez 80 - CABA </p>
					<p className="mBottom1rem bold displayInline mMail">Mail:
					<a className="mBottom1rem mail" href="mailto:caballito@owoko.com.ar"> caballito@owoko.com.ar</a> </p>
					<p className="mBottom1rem  "> <span className="bold">Horarios:</span> Lunes a sábado de 10 a 20 </p>
					<div className="BotonesOwoko">
						<button className="BotonOwoko">Ir a Detalle</button>
						<button className="BotonOwoko">Ir a mapa </button>
					</div>
				</div>
				<div className="ContenedorSecund">
					<div className="ContenedorImagen mBottom1rem">
						<img className="ImagenOwoko" src={imagenes.caballito} alt="Local CABALLITO" />
					</div>
					<div>
						<p className="parra mBottom1rem">Visitanos en nuestro local Owoko Caballito y <span className="bold">conocé más sobre nuestra propuesta de ropa para chicos de 0 a 8 años</span>, accesorios, juegos y contenidos. Nos inspira la imaginación y diversión, por eso diseñamos ropa colorida, original, alegre, llena de personajes y con una mirada diferente sobre la indumentaria infantil.</p>
					</div>
					<div className="iframe">
						<iframe
							title="Google Maps"
							width="600"
							height="450"
							loading="lazy"
							allowFullScreen
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3973104656866!2d-58.43742479999999!3d-34.6193987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca47273228e9%3A0x62287d4363719735!2s%C3%81ngel%20M.%20Gimenez%2080%2C%20C1424AGB%20CABA!5e0!3m2!1ses-419!2sar!4v1700574206485!5m2!1ses-419!2sar"
						></iframe>
					</div>
				</div>
			</div>

			


			


		</>
	)
}

export default Sucursales