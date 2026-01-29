import {Link} from "react-router";

function Area({area}) {
    return (
        <Link to={`/areas/${area.id}`}>
            <article className={"bg-white shadow rounded p-5 duration-250 hover:scale-105"}>
                <h2 className={"text-3xl"}>{area.name}</h2>
            </article>
        </Link>
    );
}

export default Area