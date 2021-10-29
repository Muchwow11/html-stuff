import Country from "../country/country";
import countries from "../../Data/countries";
function  Main() {
    const countryFlags = countries.map(
        article=> <Country place={article.country} Unicode={article.conCode} />
    )
    console.log(countryFlags)
    return (<main>
        {countryFlags}
    </main>)
}

export default Main