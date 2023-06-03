import Button from "@mui/material/Button";

const LoginComponent = () => {
    return <div>
        <header>
            Support Application
        </header>
        <div style={{margin: 'auto'}}>
            <div  style={loginLable}>
                <label>User Name</label>
                <input />
            </div>
            <div  style={loginLable}>
                <label>Password</label>
                <input />
            </div>
            <Button variant="contained">Login</Button>
        </div>
    </div>
};

const loginLable = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '30%'
}

export default LoginComponent;