import React, { useEffect, useState } from "react";

// ---------------------------------------------------------------------------------------------
// Home - Parent Component
const Home = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddUserClick = () => {
    setIsAdding(true);
    setSelectedUser(null);
    setIsEditing(false);
  };

  const handleFormSubmit = () => {
    setIsAdding(false);
    setIsEditing(false);
  };

  const handleViewUserClick = (user) => {
    setSelectedUser(user);
    setIsAdding(false);
    setIsEditing(false);
  };

  const handleEditUserClick = (user) => {
    setSelectedUser(user);
    setIsAdding(false);
    setIsEditing(true);
  };

  const handleBackClick = () => {
    setSelectedUser(null);
    setIsAdding(false);
    setIsEditing(false);
  };

  return (
    <div className="container py-3 border my-5 shadow rounded">
      <div className="row shadow w-100 mx-auto">
        <h2 className="text-center">Single Component CRUD</h2>
      </div>
      <div className="row gap-3 py-4 w-100 mx-auto">
        <div className="col-6 mx-auto">
          <div className="">
            {isAdding ? (
              <>
                <div className="mb-2" onClick={handleBackClick}>
                  <span className="btn btn-outline-dark">&larr; Back</span>
                </div>
                <Adduser onFormSubmit={handleFormSubmit} />
              </>
            ) : isEditing ? (
              <>
                <div className="mb-2" onClick={handleBackClick}>
                  <span className="btn btn-outline-dark">&larr; Back</span>
                </div>
                <Edituser user={selectedUser} onFormSubmit={handleFormSubmit} />
              </>
            ) : selectedUser ? (
              <>
                <div className="mb-2" onClick={handleBackClick}>
                  <span className="btn btn-outline-dark">&larr; Back</span>
                </div>
                <Viewuser user={selectedUser} />
              </>
            ) : (
              <AddBtn onAddUserClick={handleAddUserClick} />
            )}
          </div>
        </div>
        <div className="col-10 mx-auto">
          <Userlist
            onViewUserClick={handleViewUserClick}
            onEditUserClick={handleEditUserClick}
          />
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------------------------
// Add User Button
export const AddBtn = ({ onAddUserClick }) => {
  return (
    <div className="text-end">
      <button className="btn btn-primary px-3 py-1" onClick={onAddUserClick}>
        Add <i className="fa fa-user" aria-hidden="true"></i>
      </button>
    </div>
  );
};

// ---------------------------------------------------------------------------------------------
// Add User Component
export const Adduser = ({ onFormSubmit }) => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userphone, setUserphone] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userphone.length !== 10) {
      setError("Phone number must be exactly 10 digits long.");
      return;
    }

    if (username.length < 2) {
      setError("Name must be at least 2 characters long.");
      return;
    }

    // Fetch existing users to check for duplicates
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((existingUsers) => {
        const emailExists = existingUsers.some(
          (user) => user.useremail === useremail
        );
        const phoneExists = existingUsers.some(
          (user) => user.userphone === userphone
        );

        if (emailExists || phoneExists) {
          setError(
            `User with this ${emailExists ? "email" : "phone"} already exists!`
          );
        } else {
          // If no duplicates, add the new user
          const newuser = { username, useremail, userphone, userpassword };

          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newuser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("User added:", data);
              onFormSubmit();
              setUsername("");
              setUseremail("");
              setUserphone("");
              setUserpassword("");
              setError("");
            })
            .catch((error) => console.error("Error:", error));
          window.location.reload();
        }
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  return (
    <div className="container-fluid rounded">
      <div className="">
        <h4 className="text-center text-secondary">Add-User Details</h4>
      </div>
      <div className="row border rounded">
        <div className="w-100">
          <form onSubmit={handleSubmit} className="p-2 rounded">
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <div className="  ">
              <label htmlFor="uname" className="form-label m-0 p-0">
                Name<sup>*</sup>
              </label>
              <input
                type="text"
                className="form-control"
                id="uname"
                placeholder="Enter your name..."
                value={username}
                onChange={(e) => {
                  const input = e.target.value;
                  // Allow only alphabetic characters and spaces, and ensure minimum length of 2
                  if (/^[A-Za-z\s]{0,50}$/.test(input)) {
                    setUsername(input);
                  }
                }}
              />
            </div>

            <div className="  ">
              <label htmlFor="uemail" className="form-label m-0 p-0">
                Email address<sup>*</sup>
              </label>
              <input
                type="email"
                className="form-control"
                id="uemail"
                placeholder="Enter your email..."
                value={useremail}
                onChange={(e) => setUseremail(e.target.value)}
              />
            </div>
            <div className="  ">
              <label htmlFor="uphone" className="form-label m-0 p-0">
                Phone (+91)<sup>*</sup>
              </label>
              <input
                type="text"
                className="form-control"
                id="uphone"
                placeholder="Enter your Contact number..."
                value={userphone}
                onChange={(e) => {
                  const input = e.target.value;
                  // Allow only digits and restrict length to 10
                  if (/^\d{0,10}$/.test(input)) {
                    setUserphone(input);
                  }
                }}
              />
            </div>
            <div className="  ">
              <label htmlFor="upassword" className="form-label m-0 p-0">
                Password<sup>*</sup>
              </label>
              <input
                type="password"
                className="form-control"
                id="upassword"
                placeholder="Enter your email password..."
                value={userpassword}
                onChange={(e) => setUserpassword(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={
                  username === "" ||
                  useremail === "" ||
                  userphone === "" ||
                  userpassword === ""
                }
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------------------------
// Users Display - Userlist
export const Userlist = ({ onViewUserClick, onEditUserClick }) => {
  const [userlist, setUserlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search
  const [sortOrder, setSortOrder] = useState(""); // State for sorting

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUserlist(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch("http://localhost:5000/users/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          setUserlist(userlist.filter((user) => user.id !== id));
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  // Function to filter users based on the search input
  const filteredUsers = userlist.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.useremail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.userphone.includes(searchTerm)
  );

  // Function to sort users based on the selected order
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortOrder === "asc" || sortOrder === "a-z") {
      return a.username.toLowerCase().localeCompare(b.username.toLowerCase());
    } else if (sortOrder === "desc" || sortOrder === "z-a") {
      return b.username.toLowerCase().localeCompare(a.username.toLowerCase());
    } else {
      return 0; // No sorting if no sort order is selected
    }
  });

  return (
    <>
      <div className="">
        <h4 className="text-center text-secondary">User Database</h4>
      </div>

      {/* Add Search Bar */}
      <div className="text-center mb-4 d-flex gap-2 flex-column flex-lg-row">
        <input
          type="text"
          placeholder="Search by name, email, or phone"
          className="form-control w-75 mx-auto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        />

        {/* Sorting Options */}
        <select
          className="form-select w-50 w-lg-25 mx-auto"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
          <option value="a-z">Sort A-Z (Alternative)</option>
          <option value="z-a">Sort Z-A (Alternative)</option>
          <option value="">Clear Sort</option>
        </select>
      </div>

      <div className="">
        <table className="w-100 mx-auto text-center border rounded">
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Email Address</th>
              <th>Phone (+91)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.length > 0 ? (
              sortedUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.useremail}</td>
                  <td>{user.userphone}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => {
                        onViewUserClick(user);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <i
                        className="fa fa-eye text-light"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <button
                      className="btn btn-warning mx-2"
                      onClick={() => {
                        onEditUserClick(user);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <i
                        className="fa fa-pencil-square-o text-light"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

// ---------------------------------------------------------------------------------------------
// View User Component
export const Viewuser = ({ user }) => {
  return (
    <div className="col-12">
      <h4 className="text-center text-secondary">User Details</h4>
      <table className="w-100 mx-auto border rounded">
        <tbody>
          <tr>
            <th>User Id</th>
            <td>{user.id}</td>
          </tr>
          <tr>
            <th>User Name</th>
            <td>{user.username}</td>
          </tr>
          <tr>
            <th>User Email</th>
            <td>{user.useremail}</td>
          </tr>
          <tr>
            <th>User Phone</th>
            <td>{user.userphone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ---------------------------------------------------------------------------------------------
// Edit User Component
export const Edituser = ({ user, onFormSubmit }) => {
  const [username, setUsername] = useState(user.username);
  const [useremail, setUseremail] = useState(user.useremail);
  const [userphone, setUserphone] = useState(user.userphone);

  useEffect(() => {
    setUsername(user.username);
    setUseremail(user.useremail);
    setUserphone(user.userphone);
  }, [user]);

  const handleSubmit = (e) => {
    // e.preventDefault();

    const updatedUser = { ...user, username, useremail, userphone };

    fetch(`http://localhost:5000/users/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User updated:", data);
        onFormSubmit();
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="container-fluid">
      <div className="">
        <h4 className="text-center text-secondary">Edit User Details</h4>
      </div>
      <div className="row border">
        <div className="w-100">
          <form onSubmit={handleSubmit} className="p-2 rounded">
            <div className="">
              <label htmlFor="uname" className="form-label m-0 p-0 m-0 p-0">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="uname"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="uemail" className="form-label m-0 p-0">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="uemail"
                value={useremail}
                onChange={(e) => setUseremail(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="uphone" className="form-label m-0 p-0">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="uphone"
                value={userphone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // Remove any non-numeric characters
                  // Set the phone number only if it has exactly 10 digits
                  if (value.length <= 10) {
                    setUserphone(value);
                  }
                }}
                placeholder="Enter 10-digit phone number"
                maxLength={10} // Limit the input length to 10
              />
              {userphone.length < 10 && userphone.length > 0 && (
                <small className="text-danger">
                  Phone number must be exactly 10 digits.
                </small>
              )}
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={
                  username === "" || useremail === "" || userphone === ""
                }
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
