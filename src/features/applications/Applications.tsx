import React, { useEffect } from "react";
import { Autocomplete, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Table from "../../app/component/Table";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  applicationsListAsync,
  applicationsAsync,
  applications,
} from "./applicationsSlice";
import { columnDef } from "../../data/tableHeader";
import "./applications.css";
const Applications: React.FC = () => {
  const navigate = useNavigate();
  const applicationList = useAppSelector(applications);
  const [value, setValue] = React.useState<string | null>("");
  const [inputValue, setInputValue] = React.useState("");
  let rowData = applicationList.application;
  const dispatch = useAppDispatch();
  useEffect(() => {
    rowData = [];
    dispatch(applicationsListAsync());
  }, [dispatch]);

  const searchHandler = () => {
    dispatch(applicationsAsync(value));
  };
  const disable = value === "" || value === null ? true : false;

  return (
    <div className="body-container">
      <div className="header-container">
        <Autocomplete
          value={value}
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          disablePortal
          id="combo-box-demo"
          options={applicationList.applications}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Applications List" />
          )}
        />
        <Button
          variant="contained"
          disabled={disable}
          onClick={() => searchHandler()}
        >
          Search
        </Button>
        <Button variant="contained" onClick={() => navigate("/")}>
          Back
        </Button>
      </div>
      <Table
        rowData={rowData}
        columnDefs={columnDef}
        loading={applicationList.status}
      />
    </div>
  );
};

export default Applications;
