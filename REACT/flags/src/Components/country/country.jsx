import getCountryFlag from "country-flag-icons/modules/unicode";
function Country(props){
    return(<article>
            <h2>{props.place}</h2>
            <p>{getCountryFlag(props.Unicode)}</p>
        </article>)
}

export default Country