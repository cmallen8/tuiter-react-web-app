import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Labs</Link> |&nbsp;
            <Link to="/hello">Hello</Link> |&nbsp;
            <Link to="/tuiter">Tuiter</Link> |&nbsp;
        </div>
    )
}
export default Nav;