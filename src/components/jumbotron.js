import * as React from "react"

const Jumbotron = () => {
    return (
        <div className="p-5 flex items-center h-96 bg-[url('../images/cat_dark.webp')] bg-cover bg-no-repeat bg-center">
            <div className="flex flex-col space-y-4">
                <h1 className="text-4xl text-white">Futako Book Club</h1>
                <div>
                    <p className="text-white">当ブッククラブは読書愛好家のカジュアルな集まりです。村上春樹さんの著作を中心に課題図書を設定し、隔週で二子玉川近辺に集まり語りあっています。</p>
                    <p className="text-white">ご興味のある方はお気軽に扉を叩いてください。</p>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
