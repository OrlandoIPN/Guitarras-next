// import {useRouter} from 'next/router'
import Image from "next/image";
import Layout from "../../components/Layout";
import { formatearFecha } from "../../helpers";
import styles from '../../styles/Entrada.module.css'
const EntradaBlog = ({ entrada }) => {
  // const router = useRouter()
  // console.log(router.query)

  const { contenido, imagen, published_at, titulo } = entrada;
  return (
    <Layout
      pagina={titulo}
    >
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={styles.entrada}>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={imagen.url}
            alt={`Imagen entrada ${titulo}`}
          />
          <div className={styles.contenido}>
              <p className={styles.fecha}>{formatearFecha(published_at)}</p>
              <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  //este va a cada ruta y construye las paginas y crea el routing
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  const paths = entradas.map((entrada) => ({
    params: { url: entrada.url },
  }));
  return {
    paths,
    fallback: false,
  };

  //   el fallback sirve para que indiques que tipo de enrutamiento se le hará
  //   si pones false, debes indicarle cuales  son las rutas especificas

  //   si es true entonces permite retornar unas serie de rutas que se generan staticamente, generará
  //   las rutas de forma estatica y las demas cuando sean solicitas, es ideal para proyectos con miles de rutas

  //   blocking esta tiene un comportamineto de el serverSideProps
}

export async function getStaticProps({ params: { url } }) {
  //estas se construye cuando se hae el build pero esta trae toda la info
  // url se pasa como filtro ya que el consumo de un API solo soporta numeros
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
  const respuesta = await fetch(urlBlog);
  const entrada = await respuesta.json();
  return {
    props: {
      entrada: entrada[0], 
      // el array es por que te retorna un array 
    },
  };
}

// export async function getServerSideProps({ query: { id } }) {
//   // destruturing de id que automaticamente lo tiene el getServer
//   // puedes acceder a query o de esta manera

//   const url = `${process.env.API_URL}/blogs/${id}`;
//   const respuesta = await fetch(url);
//   const entrada = await respuesta.json();

//   return {
//     props: {
//         entrada
//     },
//   };
// }

export default EntradaBlog;
