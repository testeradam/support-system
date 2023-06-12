import { Grid } from "@mui/material";
import CustomCard from "./CustomCard";
import { useEffect, useState } from "react";

const dataSet = [
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
    {
        title: 'loginStatus',
        appStatus: 'pass',
        color: '#396b95'
    },
    {
        title: 'pingStatus',
        appStatus: 'pass',
        color: '#1ccfa8'
    },
    {
        title: 'postStatus',
        appStatus: 'pass',
        color: '#d8e38c'
    },
]

export default function AllApplication() {
    const[applicationData, setApplicationData] = useState([]);
    useEffect(() => {
        setApplicationData(dataSet);
        // axios.get(`/get-process?environment=${application}&appName=visual)
        //   .then(function (response) {
        //     setProcess(responce.data);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }, [])
    return (
        <Grid container spacing={4}>
            {applicationData.map(({appStatus, title, color}, idx) =><Grid item xs={3}>
                <CustomCard
                    title={appStatus}
                    subtitle={title}
                    color={color}
                    key={`custom-card${idx}`}
                />
            </Grid>)}
        </Grid>
    )
}