import {Link} from "react-router";
import {useContext, useState} from "react";
import {AppContext} from "../Contexts.js.jsx";
import Ride from "../components/Ride.jsx";
import Area from "../components/Area.jsx";

function Areas() {
    const {areas} = useContext(AppContext);

    return (
        <>
            <section className={"flex flex-col text-center py-10"}>
                <h1 className={"text-5xl font-bold"}>Areas</h1>
                <div className={"flex justify-between"}>
                    <div></div>
                    <Link to={"/areas/create"} className={"text-white bg-(--color-primary) rounded px-3 py-1.5"}>Create
                        Area</Link>
                </div>
                <div className={"grid grid-cols-3 gap-5 mt-5 max-xl:grid-cols-2 max-md:grid-cols-1"}>
                    {
                        areas.map((area) => <Area area={area} key={area.id}/>)
                    }
                </div>
            </section>
        </>
    );
}

export default Areas