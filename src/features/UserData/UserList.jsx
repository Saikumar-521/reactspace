// import axios from "axios";
// import { useEffect,useMemo,useState} from "react";

// const UserList=()=>{
//     const [user,setuser]=useState([])
//     const [username,setName]=useState('')
//     const [uemail,setemail]=useState('')
//     const [ugender,setgender]=useState('')

//     useEffect(()=>{
//         async function getAPi(){
//             let {data}= await axios.get('https://dummyjson.com/users')
//             console.log(data.users);
//             setuser(data.users)
//         }
//         getAPi()
//     },[])
    
//     let handledelete= async (id)=>{
//         //  let data=await axios.get(`https://dummyjson.com/users/${id}`)
//          setuser((prevUsers) => prevUsers.filter((person) => person.id !== id));
//     }
//     function handleEdit(person){
//     //    setuser()
//     setName(person.firstName)
//     setemail(person.email)
//     setgender(person.gender)

//     }

//     useMemo(()=>{
          
//     },[])
//     return(
//         <>
//         <div className="container">
//             <div className="row">
//                 <table className="table table-striped table-bordered table-hover text-center align-middle">
//                   <thead className="table-dark">
//                     <tr>
//                       <th>S.NO</th>
//                       <th>NAME</th>
//                       <th>EMAIL</th>
//                       <th>GENDER</th>
//                       <th>EDIT</th>
//                       <th>DELETE</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {
//                       user.map((person) => (
//                         <tr key={person.id} >
//                           <td>{person.id}</td>
//                           <td>{person.firstName}</td>
//                           <td>{person.email}</td>
//                            <td>{person.gender}</td>
//                            <td>
//                             <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" onClick={()=>handleEdit(person)}>Edit</button>
//                                 <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
//                                   <div className="offcanvas-header">
//                                     <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Edit the data</h5>
//                                     <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                                   </div>
//                                   <div className="offcanvas-body">
//                                     <input className="form-control m-2" type="text" placeholder="Enter updated name"  onChange={(e)=>setName(e.target.value)}/>
//                                     <input className="form-control m-2" type="text" placeholder="Enter updated email" onChange={(e)=>setemail(e.target.value)}/>
//                                     <input className="form-control m-2" type="text" placeholder="Enter updated gender"onChange={(e)=>setgender(e.target.value)} />
//                                     <button className="btn bg-success fw-bold text-white px-3 mt-2 py-2">Update</button>
//                                   </div>
                                  
//                                 </div>
//                                 </td>
//                           <td><button className="btn btn-danger btn-sm" onClick={()=>handledelete(person.id)}>Delete</button></td>
//                         </tr>
//                       ))
//                     }
//                   </tbody>
//                 </table>

//             </div>
//         </div>

//         </>
//     )
// }
// export default UserList;












import axios from "axios";
import { useEffect, useState, useMemo, useCallback } from "react";

const UserList = () => {
  const [user, setuser] = useState([]);
  const [username, setName] = useState("");
  const [uemail, setemail] = useState("");
  const [ugender, setgender] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getAPi() {
      let { data } = await axios.get("https://dummyjson.com/users");
      setuser(data.users);
    }
    getAPi();
  }, []);

  // DELETE USER (useCallback)
  const handledelete = useCallback((id) => {
    setuser((prev) => prev.filter((person) => person.id !== id));
  }, []);

  // EDIT USER - OPEN OFFCANVAS (useCallback)
  const handleEdit = useCallback((person) => {
    setEditingId(person.id);
    setName(person.firstName);
    setemail(person.email);
    setgender(person.gender);
  }, []);

  // UPDATE DATA (useCallback)
  const handleUpdate = useCallback(() => {
    setuser((prev) =>
      prev.map((person) =>
        person.id === editingId
          ? { ...person, firstName: username, email: uemail, gender: ugender }
          : person
      )
    );
  }, [editingId, username, uemail, ugender]);

  // SEARCH CHANGE (useCallback)
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  // FILTERED USERS (useMemo)
  const filteredUsers = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return user.filter((person) => {
      return (
        person.firstName.toLowerCase().includes(term) ||
        person.email.toLowerCase().includes(term) ||
        person.gender.toLowerCase().includes(term)
      );
    });
  }, [user, searchTerm]);

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center mb-3">User List</h2>

        {/* SEARCH INPUT */}
        <div className="row mb-3">
          <div className="col-md-4 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name, email, or gender..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="row">
          <table className="table table-striped table-bordered table-hover text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th>S.NO</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>GENDER</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((person) => (
                  <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.firstName}</td>
                    <td>{person.email}</td>
                    <td>{person.gender}</td>

                    <td>
                      <button
                        className="btn btn-primary"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasScrolling"
                        onClick={() => handleEdit(person)}
                      >
                        Edit
                      </button>
                    </td>

                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handledelete(person.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* SINGLE OFFCANVAS OUTSIDE MAP */}
          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                Edit User Data
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>

            <div className="offcanvas-body">
              <input
                className="form-control m-2"
                type="text"
                placeholder="Enter updated name"
                value={username}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="form-control m-2"
                type="text"
                placeholder="Enter updated email"
                value={uemail}
                onChange={(e) => setemail(e.target.value)}
              />

              <input
                className="form-control m-2"
                type="text"
                placeholder="Enter updated gender"
                value={ugender}
                onChange={(e) => setgender(e.target.value)}
              />

              <button
                className="btn bg-success fw-bold text-white px-3 mt-2 py-2"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
