import React from "react";
import style from "./historyBlock.module.sass";
import styled from "styled-components";
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination
} from "react-table";
// import 'react-table/react-table.css'

const Styles = styled.div`
  padding: 1rem;

  table {
    margin: 0 auto;
    border-spacing: 0;
    border: 1px solid green;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

export default props => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Transaction history",
        columns: [
          {
            Header: "ID",
            accessor: "id"
          },
          {
            Header: "Name",
            accessor: "username"
          },
          {
            Header: "Date",
            accessor: "date"
          },
          {
            Header: "Amount",
            accessor: "amount"
          },
          {
            Header: "Balance",
            accessor: "balance"
          }
          
        ]
      }
    ],
    []
  );

  const defaultPropGetter = () => ({})
  function Table({ 
    columns,
    data, 
    getRowProps = defaultPropGetter 
  }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      
      headerGroups,
      rows,
      prepareRow,

      page, // Instead of using 'rows', we'll use page,
      // which has only the rows for the active page

      // The rest of these things are super handy, too ;)
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize }
    } = useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 0 }
      },
      useSortBy,
      usePagination
    );

    return (
      <>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  // Add the sorting props to control sorting. For this example
                  // we can add them into the header props
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {/* Add a sort direction indicator */}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps(getRowProps(row))}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <div className={style.pagination}>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  }

  return (
    <div style={{ border: "1px solid red" }}>
      <h2 className={style.header}>Transaction History</h2>
      <div className={style.tableWrapper}>
        <Styles>
          <Table 
            columns={columns} 
            data={props.arrayOfTransactions}
            getRowProps={row => ({
              onDoubleClick: props.repeatTransaction.bind(null, row)
            })}
          
          >

          </Table>
        </Styles>
      </div>
      {/* <div>{props.arrayOfTransactions[0].username}</div>
      <div>{props.arrayOfTransactions[0].id}</div>
      <div>{props.arrayOfTransactions[0].date}</div>
      <div>{props.arrayOfTransactions[0].amount}</div>
      <div>{props.arrayOfTransactions[0].balance}</div> */}
    </div>
  );
};
