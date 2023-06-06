import "../styles/Footer.css"

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="emailContainer">
                <h5 className="footerFormComment">Přihlaste se k odběru novinek!</h5>
                <form className="footerForm">
                    <input className="FooterFormMail" type="email" placeholder="Jméno@email.cz" />
                    <input className="FooterFormSubmit" type="submit" value="Odeslat" />
                </form>
            </div>
            <div className="footerInfo">
                <div className="footerLinks">
                    <a href="">O nás</a>
                    <a href="">Sídlo</a>
                    <a href="">FAQs</a>
                    <a href="">Novinky</a>
                    <a href="">Kariéra</a>
                    <a href="">Kontakt</a>
                </div>
                <div className="designInfo">
                    <a className="amazingDesigner" href="https://github.com/jirivrana2000" target="_blank">Design by Me</a>
                </div>
            </div>

        </div>
    )
}

export default Footer