
export default function AboutMe() {


    return (

        <div className="container pt-4">
            <section className="mt-4" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Education</h2>

                            <div className="card shadow mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Collège la cité</h5>
                                    <p className="card-text">2021 - Present</p>
                                    <p className="card-text">Degree: DEC</p>
                                </div>
                            </div>

                            <div className="card shadow mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Coursera</h5>
                                    <p className="card-text">2021 - 2022</p>
                                    <p className="card-text">Online Courses</p>
                                </div>
                            </div>

                            <div className="card shadow mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">USTO ORAN</h5>
                                    <p className="card-text">2017 - 2019</p>
                                    <p className="card-text">Degree: Database Technician</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h2>Languages</h2>
                            <div className="card shadow mb-4">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">HTML</li>
                                    <li className="list-group-item">CSS</li>
                                    <li className="list-group-item">JavaScript</li>
                                    <li className="list-group-item">jQuery</li>
                                    <li className="list-group-item">React</li>
                                </ul>
                            </div>

                            <h2>Soft Skills</h2>
                            <div className="card shadow mb-4">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Creativity</li>
                                    <li className="list-group-item">Communication</li>
                                    <li className="list-group-item">Problem Solving</li>
                                    <li className="list-group-item">Teamwork</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
