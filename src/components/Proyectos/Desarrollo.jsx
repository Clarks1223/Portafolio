import './Desarrollo.css';
const Proyecto = ({ Tec1, Tec2, Tec3, Img, Despliegue, Git }) => {
  return (
    <section>
      <section>
        <img src={Img} className="img-thumbnail" alt="Imagen del proyecto" />
      </section>
      <section>
        <h3>Titulo</h3>
        <ul className="list enlaces">
          <li>
            <a href={Despliegue} target="blank">
              🌍Despliegue
            </a>
          </li>
          <li>
            <a href={Git} target="blank">
              <i className="bi bi-github"></i>GitHub
            </a>
          </li>
        </ul>
        <ul className="list tecnologias">
          <li>{Tec1}</li>
          <li>{Tec2}</li>
          <li>{Tec3}</li>
        </ul>
      </section>
    </section>
  );
};
export default Proyecto;
