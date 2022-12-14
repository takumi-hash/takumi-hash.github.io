import { Link } from "@reach/router"
import * as React from "react"

const Header = () => {
    return (
        <header className="p-5">
            <nav className="flex">
                <h1 className=""><Link to="/">Futako Book Club</Link></h1>
                <div className="grow"></div>
                <div className="pl-5">
                  <Link to="/about">About</Link>
                </div>
                <div className="pl-5">
                  <a href="https://anchor.fm/futakobookcast/" target="_blank" rel="noopener noreferrer">Podcast</a>
                </div>
            </nav>
        </header>
    )
}

export default Header
