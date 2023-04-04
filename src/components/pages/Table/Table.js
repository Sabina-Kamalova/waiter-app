import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTableById, editTable, getAllTables } from "../../../redux/tablesRedux";
import TableForm from "../../features/TableForm/TableForm";
import Loader from "../../features/Loader/Loader";

const Table = () => {
  const { id } = useParams();
  const table = useSelector((state) => getTableById(state, id));
  const allTables = useSelector(getAllTables);

  const dispatch = useDispatch();

  const handleSubmit = (table) => {
    dispatch(editTable({ ...table, id }));
  };

  if (!table && allTables.length) return <Navigate to='/' />;
  if (!table) return <Loader />;
  else
  	return (
    	<div>
      	<h1>Table {table.id}</h1>
        <TableForm action={handleSubmit} id={table.id} status={table.status}
				 peopleAmount={table.peopleAmount} maxPeopleAmount={table.maxPeopleAmount}
				 bill={table.bill}
        />
    	</div>
  	)
}

export default Table;