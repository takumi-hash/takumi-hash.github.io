import * as React from "react"

const Footer = () => {
    return (
        <footer className="flex flex-col">
            <div className={`py-5 px-[10%] text-center`}>
                &copy; Futako Book Club { "2021-"+ (new Date()).getFullYear() }
            </div>
        </footer>
    )
}

export default Footer
