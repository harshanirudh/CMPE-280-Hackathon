
import { Link , useNavigate} from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    const onLogin = (e) => {

        e.preventDefault();
        navigate("/home");
    }

    return(
        <div className='login-bg'>
            <form>
                <div className='header-login'>
                    <h1>CMPE 280 HACKATHON</h1>    
                </div>
                <div className='login'>
                    <header><h2>LOGIN</h2></header>

                    <div className="form-elements">
                        <label for="username"><h4>Email_ID</h4></label> &nbsp;
                        <input type="email" name="email"></input>
                    </div>

                    <div className="form-elements">
                        <label for="password"><h4>Password</h4></label> &nbsp;
                        <input type="password" name="password"></input>
                    </div>

                    <div className="form-elements" >
                        <input onClick={(e)=>onLogin(e)} className="button-login" id="form-btn" type="submit" value="Login"></input>
                    </div>
                </div>
            </form>
        </div>
    );   
}

export default Login;