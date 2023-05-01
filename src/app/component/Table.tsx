import React, { useEffect, useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, GridReadyEvent } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
type Props = {
  rowData: any;
  columnDefs: any;
  loading: string;
};
const Table: React.FC<Props> = (props) => {
  const { rowData, columnDefs, loading } = props;
  const gridRef = useRef<AgGridReact>(null);
  const defaultCol = {
    resizable: true,
    filter: "agTextColumnFilter",
    sortable: true,
    floatingFilter: true,
  };
  useEffect(() => {
    if (loading === "loading") {
      gridRef?.current!.api?.showLoadingOverlay();
    }
  }, [loading]);
  return (
    <div className="ag-theme-alpine" style={{ height: 570, width: "auto" }}>
      <AgGridReact
        ref={gridRef}
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={defaultCol}
        overlayLoadingTemplate={
          '<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>'
        }
      />
    </div>
  );
};

export default Table;
