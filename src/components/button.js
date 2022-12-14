import { Link } from "gatsby"
import * as React from "react"

const Button = (props) => {
    return (
            <button className="bg-red hover:bg-red-400 text-white rounded px-4 py-2 transition ease-in-out duration-300">
                <Link to={props.linkto}>
                    {props.text}
                </Link>
            </button>
    )
}

export default Button
