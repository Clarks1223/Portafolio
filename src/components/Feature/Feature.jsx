import './Feature.css';
const Feature = ({ icon, titulo, tecnologias }) => {
  return (
    <div className="card">
      <span>
        <i className={`ri-${icon}`}></i>
      </span>
      <h4>{titulo}</h4>
      <ul>
        {tecnologias.map((tecnologia, index) => (
          <li key={index}>
            {tecnologia}
            {index === tecnologias.length - 1 ? null : ','}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Feature;
