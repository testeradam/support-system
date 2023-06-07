import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { BarChart } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, Select } from '@mui/material';
export default function MyApplication() {
    const [show, setShow] = useState(false);
    const [application, setApplication] = useState('dev');
    const navigate = useNavigate();
    const showMenu = () => {
        setShow(!show);
    };

    const navPage = (menuName) => {
        if(menuName === 'byApp') {
            navigate('/my-application')
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e)
    };
    return(<>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton onClick={showMenu} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Photos
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        <Sidebar collapsed={show}>
            <Menu>
                <SubMenu label="Ping Admin" icon={<BarChart />}>
                    <MenuItem onClick={() => navPage('byApp')}> By Application </MenuItem>
                    <MenuItem onClick={() => navPage('allApp')}> All Applications </MenuItem>
                </SubMenu>
                <MenuItem icon={<AcUnitIcon />}> Documentation </MenuItem>
                <MenuItem icon={<AddIcon />}> Calendar </MenuItem>
            </Menu>
        </Sidebar>
        <div>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select 1</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={application}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value="dev">Dev</MenuItem>
                <MenuItem value="test">Test</MenuItem>
                <MenuItem value="qa">QA</MenuItem>
                <MenuItem value="prod">Prod</MenuItem>
            </Select>
        </FormControl>
        </div>
    </>);
};