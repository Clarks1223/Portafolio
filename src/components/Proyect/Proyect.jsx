import './Proyect.css';
const Proyect = ({ titulo, tecnologias, gitURL, despliegueURL, imagen }) => {
  return (
    <div className="proyect-card">
      <div className="proyect-content">
        <h4 className="proyect-titulo">{titulo}</h4>
        <div className="proyect-img">
          <img src={imagen} />
        </div>
        <div className="proyect-tecnologias">
          <i className="ri-checkbox-circle-line" />
          <ul>
            {tecnologias.map((item, index) => (
              <li key={index}>
                {item}
                {index === tecnologias.length - 1 ? null : ', '}
              </li>
            ))}
          </ul>
        </div>
        {gitURL ? (
          <p>
            <i className="ri-checkbox-circle-line" />
            <a href={gitURL} target="_blank">
              GitHub
            </a>
          </p>
        ) : null}
      </div>
      <a className="redireccion" href={despliegueURL} target="_blank">
        Take a Look
      </a>
    </div>
  );
};

export default Proyect;
