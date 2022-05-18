import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css"

const nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
              erat ullamcorper, aliquam ipsum nec, ultricies ligula. Mauris
              venenatis massa non tortor tincidunt egestas. Donec a lectus
              aliquet nisl euismod suscipit. Etiam nec placerat lacus, vitae
              faucibus diam. Curabitur molestie, felis a suscipit ornare, 
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
              erat ullamcorper, aliquam ipsum nec, ultricies ligula. Mauris
              venenatis massa non tortor tincidunt egestas. Donec a lectus
              aliquet nisl euismod suscipit. Etiam nec placerat lacus, vitae
              faucibus diam. Curabitur molestie, felis a suscipit ornare, dui
              nisi lobortis urna, vitae scelerisque ligula diam et ante. Nullam
              nec massa massa. Proin et velit sit amet ante bibendum egestas ut
              elementum eros. Sed rhoncus mi ac elementum pharetra. Curabitur id
              risus eget erat lacinia posuere. Vestibulum ac odio lobortis,
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default nosotros;
