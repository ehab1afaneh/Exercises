import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import CustomCard from "../../components/custom-card";
import { callAPI } from "../../api";
import { filteredData } from "./sortData";
import LazyLoad from "react-lazyload";

function Exercises() {
  const [allData, setAllData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getData = async () => {
    const response = await callAPI(
      "get",
      "https://dev.takeonestep.com/app/api/interview/exercises/"
    );
    if (response?.result?.length) {
      const sorted = filteredData(response.result, "");
      setAllData(sorted);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="exercises-list">
      <h1 className="text-center">Exercises List</h1>
      <div className="search-container ms-3">
        <TextField
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search"
        />
      </div>
      <div className="exercises-container">
        {filteredData(allData, searchText).map((exercise) => (
          <LazyLoad
            height={300}
            placeholder={<div>loading</div>}
            debounce={500}
            scrollContainer=".exercises-container"
            scroll
          >
            <CustomCard key={exercise.uuid} exercise={exercise} />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
}

export default Exercises;
