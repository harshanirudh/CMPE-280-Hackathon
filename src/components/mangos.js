import Header from "./header";
import NavBar from "./nav";
import '../App.css';


const Mangos = () => {

    return (
        <div>
            <div className="row">
                <Header />
            </div>
            <div className='row'>
                <div className='col-md-3'><NavBar /></div>
                <div className="col-md-1 vl"></div>

                <div className='col-md-8'>
                    <div className="mangos-container">
                    <h5 align="center">Specialty Crops - Mangos </h5>
                        <img src={require('./mangos.png')}  height="100%" width="90%"/>
                        <div className="row">
                    <div className='col-md-6'>Philippines</div>
                    <div className='col-md-5'>India</div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const PopUpContainer = (props) => {
    return (
        <div className="formPopup">
            <h5>Seleted Values</h5>
            <div className="pop-up-contents">

                <div className="close-btn-container">
                    <button onClick={() => props.close((s) => !s)}>Close</button>
                </div>
            </div>

        </div>
    )
}

export default Mangos;