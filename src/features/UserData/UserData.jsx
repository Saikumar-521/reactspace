export const UserData =()=>{
    return(
        <>
        <h1 className="text-center ">Dashboard</h1>
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <input type="text" className="form-control bg-blue-400" placeholder="search"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped table-bordered table-hover text-center align-middle">
                        <thead className="text-white bg-dark">
                            <th>S.NO</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Mobile</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        </>
    )
}