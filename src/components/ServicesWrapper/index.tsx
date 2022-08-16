import { Link } from "react-router-dom";

function ServicesWrapper(props: any) {
  const {
    id,
    name,
    price,
  } = props;

  return (
    <tr>
      <td>
        <p>{id}</p>
      </td>
      <td>
        <p>{name}</p>
      </td>
      <td>
        <p>{price}</p>
      </td>
      <td>
        <div>
          <button className='delete' id={`${id}`} onClick={props.handleDelete}>
            Delete
          </button>
          <Link to={`/admin/services/edit/${id}`}>
            <button className='edit'>Edit</button>
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default ServicesWrapper;
