import React, { useEffect } from "react";
import { Autocomplete, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Table from "../../app/component/Table";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  resourcesListAsync,
  resourcesAsync,
  resources,
} from "./resourcesSlice";
import { columnDef } from "../../data/tableHeader";
import "./resources.css";
const Resources: React.FC = () => {
  const navigate = useNavigate();
  const resourceList = useAppSelector(resources);
  const [value, setValue] = React.useState<string | null>("");
  const [inputValue, setInputValue] = React.useState("");
  let rowData = resourceList.resource;
  const dispatch = useAppDispatch();
  useEffect(() => {
    rowData = [];
    dispatch(resourcesListAsync());
  }, [dispatch]);

  const searchHandler = () => {
    dispatch(resourcesAsync(value));
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
          options={resourceList.resources}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Resources List" />
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
        loading={resourceList.status}
      />
    </div>
  );
};

export default Resources;
