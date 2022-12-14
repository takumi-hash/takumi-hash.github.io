import { Link } from "@reach/router"
import * as React from "react"

const links =   [{
    text: "About",
    url: "/about",
  },
    {
    text: "参加方法",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
  },]

const Header = () => {
    return (
        <header className="p-5">
            <nav className="flex">
                <h1 className=""><Link to="/">Futako Book Club</Link></h1>
                <div className="grow"></div>
                {links.map((link, index) => (
                  <div key={index} className="px-5">
                        <Link to={link.url}>{link.text}</Link>
                  </div>
                ))}
            </nav>
        </header>
    )
}

export default Header
