import {useContext, useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router";
import {AppContext} from "../Contexts.js.jsx";

function AreaDetail() {
    const {getAreas} = useContext(AppContext);
    const params = useParams();
    const navigate = useNavigate();

    const [area, setArea] = useState({});

    const getArea = async () => {
        try {
            const response = await fetch(`http://145.24.237.153:8000/areas/${params.id}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            });

            if (!response.ok) {
                navigate("/404", {replace: true});
                return;
            }

            const data = await response.json();
            console.log(data);
            setArea(data);
        } catch (e) {
            console.log(e.message);
        }
    }

    const deleteArea = async () => {
        if (!confirm(`Are you sure you want to delete the area ${area.name}?`)) return;
        try {
            await fetch(`http://145.24.237.153:8000/areas/${params.id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json"
                }
            });

            await getAreas();

            navigate('/areas');
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getArea();
    }, [params.id]);

    return (
        <>
            <section className={"flex flex-col text-center py-10"}>
                <h1 className={"text-5xl font-bold"}>{area.name}</h1>
            </section>
            <section className={"flex flex-col text-center pb-10"}>
                <div className={"flex justify-end gap-3 pt-5"}>
                    <Link to={`/areas/${area.id}/edit`}
                          className={"text-white bg-(--color-primary) rounded px-3 py-1.5"}>Edit</Link>
                    <button onClick={deleteArea} className={"text-white bg-red-600 rounded cursor-pointer px-3 py-1.5"}>
                        Delete
                    </button>
                </div>
            </section>
        </>
    );
}

export default AreaDetail