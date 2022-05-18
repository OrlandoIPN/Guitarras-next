import Layout from "../components/Layout";
import Listado from "../components/Listado";

const tienda = ({guitarras}) => {

  return (
    <Layout pagina="Tienda Virtual">
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <Listado guitarras={guitarras}/>
      </main>
    </Layout>
  );
};

// NO SE PUEDEN HACER CONSULTAS CON ESTAS FUNCIONES ESPECIALES FUERA DE PAGES
export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`;
  // ese filter de url sirve para poner el contenido de forma descendente de ?_sort=created_at:desc o 
  // puedes ponerle precio para ordenarlos por el precio
  const respuesta = await fetch(url);
  const guitarras = await respuesta.json();

  
  return {
    props: {
      guitarras,
    },
  };
}

export default tienda;
