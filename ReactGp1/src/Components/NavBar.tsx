import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/Home">Home</Link>
                <Link to="/ItemList">Lista</Link>
            </nav>
        </>
    )
}