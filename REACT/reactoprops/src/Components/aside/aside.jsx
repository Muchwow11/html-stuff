import SideSearch from "../sideSearch/sideSearch";
import SideCat from "../sideCat/sideCat";
import SideWidget from "../sideWidget/sideWidget";

function  Aside(){
    return  (<aside className="col-lg-4">
        <SideSearch />
        <SideCat />
        <SideWidget />
    </aside>)
}

export default Aside