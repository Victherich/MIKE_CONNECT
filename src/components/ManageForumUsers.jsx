

// import React, { useEffect, useState, useRef } from "react";
// import styled from "styled-components";
// import Swal from "sweetalert2";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// export default function UsersManagePage() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   const [editUserId, setEditUserId] = useState(null);
//   const [editForm, setEditForm] = useState({
//     name: "",
//     phone: "",
//     role: "",
//     suspension: "",
//   });

//   const tableRef = useRef(null);
//   const API_URL = "https://www.mikeconnect.com/mc_api/users1_manage.php";

//   /* ================= FETCH USERS ================= */
//   const fetchUsers = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_URL}?search=${encodeURIComponent(search)}`);
//       const data = await res.json();
//       if (data.success) setUsers(data.users);
//       else Swal.fire("Error", data.error, "error");
//     } catch {
//       Swal.fire("Error", "Network error", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, [search]);

//   /* ================= SCROLL ================= */
//   const scrollTable = (dir) => {
//     tableRef.current?.scrollBy({
//       left: dir === "left" ? -300 : 300,
//       behavior: "smooth",
//     });
//   };

//   /* ================= EDIT ================= */
//   const startEdit = (user) => {
//     setEditUserId(user.id);
//     setEditForm({
//       name: user.name,
//       phone: user.phone,
//       role: user.role,
//       suspension: user.suspension || "",
//     });
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditForm((p) => ({ ...p, [name]: value }));
//   };

//   const submitEdit = async (id) => {
//     try {
//       const res = await fetch(API_URL, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ id, ...editForm }),
//       });
//       const data = await res.json();
//       if (data.success) {
//         Swal.fire("Updated", "User updated successfully", "success");
//         setEditUserId(null);
//         fetchUsers();
//       } else Swal.fire("Error", data.error, "error");
//     } catch {
//       Swal.fire("Error", "Network error", "error");
//     }
//   };

//   /* ================= DELETE ================= */
//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Delete user?",
//       icon: "warning",
//       showCancelButton: true,
//     }).then(async (r) => {
//       if (!r.isConfirmed) return;

//       try {
//         const res = await fetch(API_URL, {
//           method: "DELETE",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ id }),
//         });
//         const data = await res.json();
//         if (data.success) {
//           Swal.fire("Deleted", "User removed", "success");
//           fetchUsers();
//         }
//       } catch {
//         Swal.fire("Error", "Network error", "error");
//       }
//     });
//   };

//   return (
//     <Wrapper>
//       <Header>
//         <h1>User Management</h1>
//         <SearchInput
//           placeholder="Search users..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </Header>

//       {loading ? (
//         <p>Loading users...</p>
//       ) : (
//         <TableWrapper>
//           <ScrollButton left onClick={() => scrollTable("left")}>
//             <FaChevronLeft />
//           </ScrollButton>

//           <ScrollableTable ref={tableRef}>
//             <Table>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Phone</th>
//                   <th>Role</th>
//                   <th>Suspension</th>
//                   <th>Created At</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((u) => (
//                   <tr key={u.id}>
//                     <td>
//                       {editUserId === u.id ? (
//                         <input
//                           name="name"
//                           value={editForm.name}
//                           onChange={handleEditChange}
//                         />
//                       ) : (
//                         u.name
//                       )}
//                     </td>

//                     <td>
//                       {editUserId === u.id ? (
//                         <input
//                           name="phone"
//                           value={editForm.phone}
//                           onChange={handleEditChange}
//                         />
//                       ) : (
//                         u.phone
//                       )}
//                     </td>

//                     <td>
//                       {editUserId === u.id ? (
//                         <select
//                           name="role"
//                           value={editForm.role}
//                           onChange={handleEditChange}
//                         >
//                           <option value="Admin">Admin</option>
//                           <option value="user1">user1</option>
//                           <option value="user2">user2</option>
//                         </select>
//                       ) : (
//                         u.role
//                       )}
//                     </td>

//                     <td>
//                       {editUserId === u.id ? (
//                         <select
//                           name="suspension"
//                           value={editForm.suspension}
//                           onChange={handleEditChange}
//                         >
//                           <option value="">Active</option>
//                           <option value="Suspended">Suspended</option>
//                         </select>
//                       ) : (
//                         u.suspension || "-"
//                       )}
//                     </td>

//                     <td>{u.created_at}</td>

//                     <td>
//                       {editUserId === u.id ? (
//                         <>
//                           <ActionButton success onClick={() => submitEdit(u.id)}>
//                             Save
//                           </ActionButton>
//                           <ActionButton onClick={() => setEditUserId(null)}>
//                             Cancel
//                           </ActionButton>
//                         </>
//                       ) : (
//                         <>
//                           <ActionButton onClick={() => startEdit(u)}>
//                             Edit
//                           </ActionButton>
//                           <ActionButton danger onClick={() => handleDelete(u.id)}>
//                             Delete
//                           </ActionButton>
//                         </>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </ScrollableTable>

//           <ScrollButton onClick={() => scrollTable("right")}>
//             <FaChevronRight />
//           </ScrollButton>
//         </TableWrapper>
//       )}
//     </Wrapper>
//   );
// }

// /* ================= STYLES ================= */

// const Wrapper = styled.div`
//   max-width: 1200px;
//   margin: 50px auto;
//   padding: 0 20px;
//   font-family: "Poppins", sans-serif;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 20px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 12px;
//   }

//   h1 {
//     color: #410b77ff;
//     font-size:1.5rem;
//   }
// `;

// const SearchInput = styled.input`
//   padding: 10px;
//   border-radius: 6px;
//   border: 1px solid #ccc;
// `;

// const TableWrapper = styled.div`
//   position: relative;
// `;

// const ScrollableTable = styled.div`
//   overflow-x: auto;
//   scroll-behavior: smooth;

//   &::-webkit-scrollbar {
//     height: 10px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background: #410b77ff;
//     border-radius: 10px;
//   }
// `;

// const ScrollButton = styled.button`
//   position: absolute;
//   top: 50%;
//   ${({ left }) => (left ? "left: -10px" : "right: -10px")};
//   transform: translateY(-50%);
//   background: #410b77ff;
//   color: white;
//   border: none;
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   cursor: pointer;
//   z-index: 10;
// `;

// const Table = styled.table`
//   min-width: 900px;
//   border-collapse: collapse;

//   th,
//   td {
//     padding: 12px;
//     border: 1px solid #ddd;
//   }

//   th {
//     background: #410b77ff;
//     color: white;
//   }

//   input,
//   select {
//     width: 100%;
//     padding: 6px;
//   }
// `;

// const ActionButton = styled.button`
//   padding: 6px 12px;
//   margin-right: 6px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   color: white;
//   background: ${({ danger, success }) =>
//     danger ? "#ff4d4d" : success ? "#4caf50" : "#410b77ff"};
// `;


import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function UsersManagePage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [editUserId, setEditUserId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    suspension: "",
  });

  const tableRef = useRef(null);
  const API_URL = "https://www.mikeconnect.com/mc_api/users1_manage.php";

  /* ================= FETCH USERS ================= */
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}?search=${encodeURIComponent(search)}`);
      const data = await res.json();
      if (data.success) setUsers(data.users);
      else Swal.fire("Error", data.error, "error");
    } catch {
      Swal.fire("Error", "Network error", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [search]);

  /* ================= SCROLL ================= */
  const scrollTable = (dir) => {
    tableRef.current?.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  /* ================= EDIT ================= */
  const startEdit = (u) => {
    setEditUserId(u.id);
    setEditForm({
      name: u.name || "",
      email: u.email || "",
      phone: u.phone || "",
      role: u.role || "",
      suspension: u.suspension || "",
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((p) => ({ ...p, [name]: value }));
  };

  const submitEdit = async (id) => {
    if (!editForm.name || !editForm.email || !editForm.role) {
      Swal.fire("Error", "Name, Email and Role are required", "error");
      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          ...editForm,
          suspension: editForm.suspension || null,
        }),
      });

      const data = await res.json();
      if (data.success) {
        Swal.fire("Updated", "User updated successfully", "success");
        setEditUserId(null);
        fetchUsers();
      } else Swal.fire("Error", data.error, "error");
    } catch {
      Swal.fire("Error", "Network error", "error");
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete user?",
      text: "This cannot be undone",
      icon: "warning",
      showCancelButton: true,
    }).then(async (r) => {
      if (!r.isConfirmed) return;

      try {
        const res = await fetch(API_URL, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        const data = await res.json();
        if (data.success) {
          Swal.fire("Deleted", "User removed", "success");
          fetchUsers();
        } else Swal.fire("Error", data.error, "error");
      } catch {
        Swal.fire("Error", "Network error", "error");
      }
    });
  };

  return (
    <Wrapper>
      <Header>
        <h1>User Management</h1>
        <SearchInput
          placeholder="Search name, email, phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <TableWrapper>
          <ScrollButton left onClick={() => scrollTable("left")}>
            <FaChevronLeft />
          </ScrollButton>

          <ScrollableTable ref={tableRef}>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Suspension</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td>
                      {editUserId === u.id ? (
                        <input name="name" value={editForm.name} onChange={handleEditChange} />
                      ) : (
                        u.name
                      )}
                    </td>

                    <td>
                      {editUserId === u.id ? (
                        <input name="email" value={editForm.email} onChange={handleEditChange} />
                      ) : (
                        u.email
                      )}
                    </td>

                    <td>
                      {editUserId === u.id ? (
                        <input name="phone" value={editForm.phone} onChange={handleEditChange} />
                      ) : (
                        u.phone || "-"
                      )}
                    </td>

                    <td>
                      {editUserId === u.id ? (
                        <select name="role" value={editForm.role} onChange={handleEditChange}>
                          <option value="Admin">Admin</option>
                          <option value="user1">user1</option>
                          <option value="user2">user2</option>
                        </select>
                      ) : (
                        u.role
                      )}
                    </td>

                    <td>
                      {editUserId === u.id ? (
                        <select
                          name="suspension"
                          value={editForm.suspension}
                          onChange={handleEditChange}
                        >
                          <option value="">Active</option>
                          <option value="Suspended">Suspended</option>
                        </select>
                      ) : (
                        u.suspension || "Active"
                      )}
                    </td>

                    <td>{u.created_at}</td>

                    <td>
                      {editUserId === u.id ? (
                        <>
                          <ActionButton success onClick={() => submitEdit(u.id)}>Save</ActionButton>
                          <ActionButton onClick={() => setEditUserId(null)}>Cancel</ActionButton>
                        </>
                      ) : (
                        <>
                          <ActionButton onClick={() => startEdit(u)}>Edit</ActionButton>
                          <ActionButton danger onClick={() => handleDelete(u.id)}>Delete</ActionButton>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ScrollableTable>

          <ScrollButton onClick={() => scrollTable("right")}>
            <FaChevronRight />
          </ScrollButton>
        </TableWrapper>
      )}
    </Wrapper>
  );
}

/* ================= STYLES ================= */

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 20px;
  font-family: "Poppins", sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  h1 {
    color: green;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const TableWrapper = styled.div`
  position: relative;
`;

const ScrollableTable = styled.div`
  overflow-x: auto;
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? "left: -10px" : "right: -10px")};
  transform: translateY(-50%);
  background: #410b77ff;
  color: white;
  border: none;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
`;

const Table = styled.table`
  min-width: 1100px;
  border-collapse: collapse;

  th,
  td {
    padding: 12px;
    border: 1px solid #ddd;
  }

  th {
    background: green;
    color: white;
  }

  input,
  select {
    width: 100%;
    padding: 6px;
  }
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  margin-right: 6px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background: ${({ danger, success }) =>
    danger ? "#ff4d4d" : success ? "#4caf50" : "#410b77ff"};
`;
