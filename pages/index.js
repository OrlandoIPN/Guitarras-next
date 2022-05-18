import Curso from "../components/Curso";
import Layout from "../components/Layout";
import Listado from "../components/Listado";
import ListadoBlog from "../components/ListadoBlog";

export default function Home({ guitarras, curso, blog }) {
  return (
    <Layout pagina="inicio" guitarra={guitarras[3]}>
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <Listado guitarras={guitarras} />
      </main>
      <Curso curso={curso} />
      <section className="contenedor">
        <ListadoBlog entradas={blog} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  // const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`;
  // const respuesta = await fetch(url);
  // const guitarras = await respuesta.json();

  // const url2 = `${process.env.API_URL}/cursos`;
  // const respuesta2 = await fetch(url2);
  // const guitarras2 = await respuesta2.json();

  // CONSULTANDO TRES APIS A LA VEZ
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:desc`;
  const urlCursos = `${process.env.API_URL}/cursos`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog),
  ]);

  const [guitarras, curso, blog] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json(),
  ]);

  return {
    props: {
      guitarras,
      curso,
      blog,
    },
  };
}
