function UserRow(props) {
  return (
    <>
      <td>
        <h6>{props.id}</h6>
      </td>
      <td>
        <h6>
          <span>{props.name}</span>
        </h6>
      </td>
      <td>
        <h6>{props.email}</h6>
      </td>
    </>
  );
}

export default UserRow;
