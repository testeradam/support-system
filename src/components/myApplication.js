import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import CustomCard from "./CustomCard";

const applicationListData = [
    {
        lable: 'Dev',
        value: 'dev'
    },
    {
        lable: 'Test',
        value: 'test'
    },
    {
        lable: 'QA',
        value: 'qa'
    },
    {
        lable: 'Prod',
        value: 'prod'
    },
];
const applicationDataSet = [
    {
        title: 'status',
        appStatus: 'pass',
        color: '#95396a'
    },
    {
        title: 'jmsStatus',
        appStatus: 'pass',
        color: '#394395'
    },
    {
        title: 'dbStatus',
        appStatus: 'pass',
        color: '#954b39'
    },
    {
        title: 'storageStatus',
        appStatus: 'pass',
        color: '#519539'
    },
]

export default function MyApplication() {
  const [show, setShow] = useState(false);
  const [application, setApplication] = useState("dev");
  const [process, setProcess] = useState("dev");

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e);
    // axios.get(`/get-process?environment=${application}&appName=visual)
    //   .then(function (response) {
    //     setProcess(responce.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  const processChange = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Application</InputLabel>
        <Select
          sx={{ m: 1, minWidth: 240 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={application}
          label="Application"
          onChange={handleChange}
        >
            {applicationListData.map(({lable, value}, idx) => <MenuItem value={value} key={`application${idx}`}>{lable}</MenuItem>)}
          {/* <MenuItem value={"dev"}>Dev</MenuItem>
          <MenuItem value={"test"}>Test</MenuItem>
          <MenuItem value={"qa"}>QA</MenuItem>
          <MenuItem value={"prod"}>Prod</MenuItem> */}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Application</InputLabel>
        <Select
          sx={{ m: 1, minWidth: 240 }}
          labelId="demo-simple-select-label"
          id="set-simple-select"
          value={process}
          label="Process"
          onChange={processChange}
        >
            {applicationListData.map(({lable, value}, idx) => <MenuItem value={value} key={`process${idx}`}>{lable}</MenuItem>)}
          {/* <MenuItem value={"dev"}>Dev</MenuItem>
          <MenuItem value={"test"}>Test</MenuItem>
          <MenuItem value={"qa"}>QA</MenuItem>
          <MenuItem value={"prod"}>Prod</MenuItem> */}
        </Select>
      </FormControl>
      <Grid container spacing={4}>
        {applicationDataSet.map(({appStatus, title, color}, idx) =><Grid item xs={3}>
          <CustomCard
            title={appStatus}
            subtitle={title}
            color={color}
            key={`custom-card${idx}`}
          />
        </Grid>)}
        
      </Grid>
    </>
  );
}
