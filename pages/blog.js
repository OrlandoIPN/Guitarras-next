import Layout from "../components/Layout";
import ListadoBlog from "../components/ListadoBlog";
const blog = ({ entradas }) => {
  return (
    <Layout pagina="Blog">
      <main className="contenedor">
        <ListadoBlog entradas={entradas}/>
      </main>
    </Layout>
  );
};

/*Este export se exporta justo en este componente  y se usa para llamar apis
Siempre se debe retornar un objeto y debe de tener props
La funcion corre en el servidor por eso no  se va a ver en un console log
por eso existen las props*/

export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  return {
    props: {
      entradas,
    },
  };
}

export default blog;
