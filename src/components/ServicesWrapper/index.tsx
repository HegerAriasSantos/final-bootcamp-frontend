import { Link } from "react-router-dom";

function ServicesWrapper(props: { handleDelete?: any; Id?: number; Name?: string; Price?: number; }) {
  const {
    Id,
    Name,
    Price,
  } = props;

  return (
    <tr>
      <td>
        <p>{Id}</p>
      </td>
      <td>
        <p>{Name}</p>
      </td>
      <td>
        <p>{Price}</p>
      </td>
      <td>
        <div>
          <button className='delete' id={`${Id}`} onClick={props.handleDelete}>
            Borrar
          </button>
          <Link to={`/admin/services/edit/${Id}`}>
            <button className='edit'>Editar</button>
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default ServicesWrapper;
