import {
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from "@tanstack/react-table";
  import { useQueryClient } from "@tanstack/react-query";


function Table() {

    let data=[]
    let isLoading=false

    let columns = [
        {
          accessorKey: "",
          header: "name",
          cell: (props) => <p>{props.getValue()}</p>,
        }
    ]
    
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

  return (
    <div className=" h-full overflow-x-auto">
    {isLoading ? (
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
  )
}

export default Table