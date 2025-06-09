export default function BoxShadow() {
    return (
        <section className="py-20 min-h-dvh flex items-center">
            <div className="container">
                {/* <p className="mb-12">Box Shadow Generator</p> */}
                <div className="grid grid-cols-2 items-center">
                    <div className="box-shadow-panel flex items-center justify-center">
                        <div className="h-96 w-96 bg-green-300"></div>
                    </div>
                    <div className="form-wrap w-full">
                        <div className="">
                            <label htmlFor="">Horizontal Length</label>
                            <input type="range" className="w-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}