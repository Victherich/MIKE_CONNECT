// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import Swal from "sweetalert2";

// export default function ManageAdmins() {
//   const [admins, setAdmins] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [editAdminId, setEditAdminId] = useState(null);
//   const [editForm, setEditForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     role: "Admin",
//     suspension: "",
//   });

//   const API_URL = "https://www.mikeconnect.com/mc_api/manage_admins.php"; // adjust your API path

//   // Fetch admins
//   const fetchAdmins = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(`${API_URL}?search=${encodeURIComponent(search)}`);
//       if (res.data.success) {
//         setAdmins(res.data.admins);
//       } else {
//         Swal.fire("Error", res.data.error || "Failed to fetch admins", "error");
//       }
//     } catch (err) {
//       Swal.fire("Error", "Network error", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAdmins();
//   }, [search]);

//   // Handle delete
//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "This will permanently delete the admin.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           const res = await axios.delete(API_URL, { data: { id } });
//           if (res.data.success) {
//             Swal.fire("Deleted!", res.data.error || "Admin deleted", "success");
//             fetchAdmins();
//           } else {
//             Swal.fire("Error", res.data.error || "Failed to delete", "error");
//           }
//         } catch (err) {
//           Swal.fire("Error", "Network error", "error");
//         }
//       }
//     });
//   };

//   // Handle edit click
//   const startEdit = (admin) => {
//     setEditAdminId(admin.id);
//     setEditForm({
//       name: admin.name,
//       email: admin.email,
//       phone: admin.phone,
//       role: admin.role,
//       suspension: admin.suspension || "",
//     });
//   };

//   // Handle edit change
//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Submit edit
//   const submitEdit = async (id) => {
//     try {
//       const res = await axios.put(API_URL, { id, ...editForm });
//       if (res.data.success) {
//         Swal.fire("Success", "Admin updated", "success");
//         setEditAdminId(null);
//         fetchAdmins();
//       } else {
//         Swal.fire("Error", res.data.error || "Failed to update", "error");
//       }
//     } catch (err) {
//       Swal.fire("Error", "Network error", "error");
//     }
//   };

//   return (
//     <Wrapper>
//       <Header>
//         <h1>Admin Management</h1>
//         <SearchInput
//           placeholder="Search by name, email, or phone..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </Header>

//       {loading ? (
//         <p>Loading admins...</p>
//       ) : (
//         <Table>
//           <thead>
//             <tr>
              
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Suspension</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {admins.length === 0 && (
//               <tr>
//                 <td colSpan="8">No admins found.</td>
//               </tr>
//             )}
//             {admins.map((admin) => (
//               <tr key={admin.id}>
            
//                 <td>
//                   {editAdminId === admin.id ? (
//                     <input
//                       type="text"
//                       name="name"
//                       value={editForm.name}
//                       onChange={handleEditChange}
//                     />
//                   ) : (
//                     admin.name
//                   )}
//                 </td>
//                 <td>
//                   {editAdminId === admin.id ? (
//                     <input
//                       type="email"
//                       name="email"
//                       value={editForm.email}
//                       onChange={handleEditChange}
//                     />
//                   ) : (
//                     admin.email
//                   )}
//                 </td>
//                 <td>
//                   {editAdminId === admin.id ? (
//                     <input
//                       type="text"
//                       name="phone"
//                       value={editForm.phone}
//                       onChange={handleEditChange}
//                     />
//                   ) : (
//                     admin.phone
//                   )}
//                 </td>
                
//                 <td>
//                   {editAdminId === admin.id ? (
//   <select
//     name="suspension"
//     value={editForm.suspension || ""}
//     onChange={handleEditChange}
//   >
//     <option value="suspended">Suspended</option>
//     <option value="active">Active</option>
//   </select>
// ) : (
//   admin.suspension || "-"
// )}

//                 </td>
              
//                 <td>
//                   {editAdminId === admin.id ? (
//                     <>
//                       <ActionButton
//                         onClick={() => submitEdit(admin.id)}
//                         success
//                       >
//                         Save
//                       </ActionButton>
//                       <ActionButton onClick={() => setEditAdminId(null)}>
//                         Cancel
//                       </ActionButton>
//                     </>
//                   ) : (
//                     <>
//                       <ActionButton onClick={() => startEdit(admin)}>Edit</ActionButton>
//                       <ActionButton danger onClick={() => handleDelete(admin.id)}>
//                         Delete
//                       </ActionButton>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </Wrapper>
//   );
// }

// /* ================= STYLES ================= */

// const Wrapper = styled.div`
//   max-width: 1200px;
//   margin: 50px auto;
//   font-family: "Poppins", sans-serif;
//   padding: 0 20px;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 20px;

//   @media(max-width:768px){
//   flex-direction:column;
//   }

//   h1 {
//     color: #410b77ff;
//   }
// `;

// const SearchInput = styled.input`
//   padding: 10px 14px;
//   border-radius: 6px;
//   border: 1px solid #ccc;
//   width: 300px;
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   text-align: left;

//   th, td {
//     padding: 10px 12px;
//     border: 1px solid #ddd;
//   }

//   th {
//     background: #410b77ff;
//     color: white;
//   }

//   td input, td select {
//     padding: 6px;
//     width: 100%;
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

//   &:hover {
//     opacity: 0.8;
//   }
// `;





import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ManageAdmins() {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [editAdminId, setEditAdminId] = useState(null);
  const tableRef = useRef(null);

  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Admin",
    suspension: "",
  });

  const API_URL = "https://www.mikeconnect.com/mc_api/manage_admins.php";

  const fetchAdmins = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}?search=${encodeURIComponent(search)}`);
      if (res.data.success) setAdmins(res.data.admins);
    } catch {
      Swal.fire("Error", "Network error", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, [search]);

  const scrollTable = (dir) => {
    if (!tableRef.current) return;
    tableRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  const startEdit = (admin) => {
    setEditAdminId(admin.id);
    setEditForm({
      name: admin.name,
      email: admin.email,
      phone: admin.phone,
      role: admin.role,
      suspension: admin.suspension || "",
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((p) => ({ ...p, [name]: value }));
  };

  const submitEdit = async (id) => {
    const res = await axios.put(API_URL, { id, ...editForm });
    if (res.data.success) {
      Swal.fire("Updated", "Admin updated", "success");
      setEditAdminId(null);
      fetchAdmins();
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete admin?",
      icon: "warning",
      showCancelButton: true,
    }).then(async (r) => {
      if (r.isConfirmed) {
        await axios.delete(API_URL, { data: { id } });
        fetchAdmins();
      }
    });
  };

  return (
    <Wrapper>
      <Header>
        <h1>Admin Management</h1>
        <SearchInput
          placeholder="Search admins..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>

      {loading ? (
        <p>Loading...</p>
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
                  <th>Suspension</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin) => (
                  <tr key={admin.id}>
                    <td>
                      {editAdminId === admin.id ? (
                        <input name="name" value={editForm.name} onChange={handleEditChange} />
                      ) : (
                        admin.name
                      )}
                    </td>
                    <td>
                      {editAdminId === admin.id ? (
                        <input name="email" value={editForm.email} onChange={handleEditChange} />
                      ) : (
                        admin.email
                      )}
                    </td>
                    <td>
                      {editAdminId === admin.id ? (
                        <input name="phone" value={editForm.phone} onChange={handleEditChange} />
                      ) : (
                        admin.phone
                      )}
                    </td>
                    <td>
                      {editAdminId === admin.id ? (
                        <select
                          name="suspension"
                          value={editForm.suspension}
                          onChange={handleEditChange}
                        >
                          <option value="active">Active</option>
                          <option value="suspended">Suspended</option>
                        </select>
                      ) : (
                        admin.suspension || "-"
                      )}
                    </td>
                    <td>
                      {editAdminId === admin.id ? (
                        <>
                          <ActionButton success onClick={() => submitEdit(admin.id)}>
                            Save
                          </ActionButton>
                          <ActionButton onClick={() => setEditAdminId(null)}>
                            Cancel
                          </ActionButton>
                        </>
                      ) : (
                        <>
                          <ActionButton onClick={() => startEdit(admin)}>Edit</ActionButton>
                          <ActionButton danger onClick={() => handleDelete(admin.id)}>
                            Delete
                          </ActionButton>
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }

  h1 {
    color: #410b77ff;
    font-size:1.5rem;
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
  scrollbar-width: thin;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #410b77ff;
    border-radius: 10px;
  }
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
  z-index: 10;
  opacity: 0.85;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const Table = styled.table`
  min-width: 900px;
  border-collapse: collapse;

  th,
  td {
    padding: 12px;
    border: 1px solid #ddd;
  }

  th {
    background: #410b77ff;
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
