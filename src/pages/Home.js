import "../styles/Home.css"
import data from "../data"
import { Link } from "react-router-dom"
import kontaktPozadi from "../img/kontakt-pozadi.jpg"

const Home = () => {

    return (
        <div>
            <div className="mainContainer">
                <div className="mainOne">
                    <Link className="mainBig" to={`/pizza`} >
                        <h3 className="foodComment">Pizza</h3>
                        <img className="imgBig" src={data[0].image} alt="jídlo" />
                    </Link>
                </div>
                <div className="mainTwo">
                    <div className="mainSmall">
                        <Link to={`/burger`} >
                            <h3 className="foodCommentSmall">Burger</h3>
                            <img className="imgSmall" src={data[11].image} alt="jídlo" />
                        </Link>
                    </div>
                    <div className="mainSmall">
                        <Link to={`/minutky`} >
                            <h3 className="foodCommentSmall">Minutky</h3>
                            <img className="imgSmall" src={data[24].image} alt="jídlo" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="sauceContainer">
                <h2 className="h2">Ochutnejte naše omáčky</h2>
                <div className="sauce">
                    <div className="xoneSauce">
                        <Link className="oneSauce" to={`/jidlo/39`} >
                            <h3 className="sauceComment">BBQ</h3>
                            <img className="imgSauce" src={data[38].image} alt="jídlo" />
                        </Link>
                    </div>
                    <div className="xoneSauce">
                        <Link className="oneSauce" to={`/jidlo/40`} >
                            <h3 className="sauceComment">Kečup</h3>
                            <img className="imgSauce" src={data[39].image} alt="jídlo" />
                        </Link>
                    </div>
                    <div className="xoneSauce">
                        <Link className="oneSauce" to={`/jidlo/41`} >
                            <h3 className="sauceComment">Tatarka</h3>
                            <img className="imgSauce" src={data[40].image} alt="jídlo" />
                        </Link>
                    </div>
                    <div className="xoneSauce">
                        <Link className="oneSauce" to={`/jidlo/42`} >
                            <h3 className="sauceComment">Jalapeno</h3>
                            <img className="imgSauce" src={data[41].image} alt="jídlo" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="adressContainer">
                <div className="adress">
                    <div className="adressInfo">
                        <h4 className="h4">Objednejte nebo přijeďte k nám!</h4>
                        <p>Pod Komínem 332/9</p>
                        <p>763 43 Valašská Třebová</p>
                    </div>
                    <div className="adressPhotoContainer">
                        <img className="adressPhoto" src={kontaktPozadi} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home