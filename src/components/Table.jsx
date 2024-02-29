import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useQueryClient } from "@tanstack/react-query";
import { AllUsers } from "../services/query";
import MailAvtar from "./MailAvtar";
import EditModal from "./EditModal";
import { UserStore } from "../store";
import { useEffect } from "react";

function Table() {
  //  useEffect(()=>{

  //  },[])

  const { addToUsers, Users, InitUser, removeFromUser } = UserStore();
  const UserList = AllUsers(InitUser);

  let data = Users;
  console.log(data)
  let columns = [
    {
      accessorKey: "id",
      header: "name",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "",
      header: "Image & Name",
      cell: (props) => (
        <MailAvtar
          image={props.row.original.avatar}
          fname={props.row.original.first_name}
          lname={props.row.original.last_name}
        />
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "",
      header: "ACTION",
      cell: (props) => (
        <EditModal remove={removeFromUser} id={props.row.original.id} />
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className=" h-full overflow-x-auto">
      {UserList.isLoading ? (
        <span className="text-4xl">loading...</span>
      ) : (
        <table className="table">
          <thead className="text-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th>{header.column.columnDef.header}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
