import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

export default function BasicTable() {
  const [Da, setDa] = React.useState([]);
  const getData = async () => {
    const res = fetch("http://localhost:3001/user/");
    const data = await (await res).json();
    setDa(data.all);
  };
  // console.log(Da);
  // Da.map((i: any) => createData(i.name, i.id, i.email, 24, 4.0));
  const rows = [
    ...Da.map((i: any) => createData(i.name, i.id, i.email, 24, 4.0)),
  ];
  React.useEffect(() => {
    getData();
  }, []);
  const fun_delete = () => {
    console.log("deleted");
  };
  const fun_edit = () => {
    console.log("edit");
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "red", fontWeight: "bold" }}>
              Name
            </TableCell>
            <TableCell align="left" sx={{ color: "red", fontWeight: "bold" }}>
              Id
            </TableCell>
            <TableCell align="left" sx={{ color: "red", fontWeight: "bold" }}>
              Email
            </TableCell>
            <TableCell align="center" sx={{ color: "red", fontWeight: "bold" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell>
                <div className=" flex justify-center">
                  <div className="text-red-500 mr-5">
                    <AiOutlineDelete onClick={fun_delete} />
                  </div>
                  <AiOutlineEdit onClick={fun_edit} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
