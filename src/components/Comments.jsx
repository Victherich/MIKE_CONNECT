



import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Swal from "sweetalert2";

/* ================= COMPONENT ================= */

export default function Comments({ postId, isAdmin }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [replyTo, setReplyTo] = useState(null);
  const [commentAsAdmin, setCommentAsAdmin] = useState(false);
const [adminAuthOpen, setAdminAuthOpen] = useState(false);
const [menuOpenId, setMenuOpenId] = useState(null);
const [deleteTarget, setDeleteTarget] = useState(null);


const [adminAuth, setAdminAuth] = useState({
  email: "",
  password: "",
});


  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const fetchComments = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://www.mikeconnect.com/mc_api/get_comments.php?post_id=${postId}&t=${Date.now()}`
      );
      if (res.data.success) setComments(res.data.comments);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const openModal = (parent = null) => {
    setReplyTo(parent);
    setModalOpen(true);
  };

  const closeModal = () => {
    setReplyTo(null);
    setForm({ name: "", email: "", comment: "" });
    setModalOpen(false);
      setReplyTo(null);
  setForm({ name: "", email: "", comment: "" });
  setCommentAsAdmin(false);
  setAdminAuth({ email: "", password: "" });
  setAdminAuthOpen(false);
  setModalOpen(false);
  };




const submitComment = async (asAdmin = false, adminCreds = null) => {
  if (!form.name || !form.email || !form.comment) {
    Swal.fire("Missing fields", "All fields are required", "warning");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    Swal.fire("Invalid email", "Enter a valid email", "error");
    return;
  }

  Swal.fire({
    title: "Submitting...",
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading(),
  });

  try {
    const fd = new FormData();
    fd.append("post_id", postId);
    fd.append("parent_id", replyTo ? replyTo.id : "");
    fd.append("name", form.name);
    fd.append("email", form.email);
    fd.append("comment", form.comment);
    fd.append("is_admin", asAdmin ? 1 : 0);

    if (asAdmin && adminCreds) {
      fd.append("admin_email", adminCreds.email);
      fd.append("admin_password", adminCreds.password);
    }

    const res = await axios.post(
      "https://www.mikeconnect.com/mc_api/add_comment.php",
      fd
    );

    if (res.data.success) {
      Swal.fire("Success", "Comment posted", "success");
      closeModal();
 

      setAdminAuthOpen(false);
      fetchComments();

      setCommentAsAdmin(false);
    } else {
      Swal.fire("Error", res.data.error || "Failed", "error");
    }
  } catch (err) {
    Swal.fire("Error", "Network error", "error");
  }
};



  const deleteComment = async (id) => {
    if (!window.confirm("Delete this comment and all replies?")) return;
    try {
      const fd = new FormData();
      fd.append("id", id);
      const res = await axios.post(
        `https://www.mikeconnect.com/mc_api/delete_comment.php`,
        fd
      );
      if (res.data.success) fetchComments();
    } catch (e) {
      console.error(e);
    }
  };




const authenticateAndDelete = async () => {
  if (!adminAuth.email || !adminAuth.password) {
    Swal.fire("Missing credentials", "Enter admin password", "warning");
    return;
  }

  Swal.fire({
    title: "Authenticating...",
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading(),
  });

  try {
    const fd = new FormData();
    fd.append("comment_id", deleteTarget.id);
    fd.append("admin_email", adminAuth.email);
    fd.append("admin_password", adminAuth.password);
    fd.append("page_url", window.location.href);

    const res = await axios.post(
      "https://www.mikeconnect.com/mc_api/delete_comment_admin.php",
      fd
    );

    if (res.data.success) {
      Swal.fire("Deleted", "Comment removed successfully", "success");
      setAdminAuthOpen(false);
      setDeleteTarget(null);
      fetchComments();
    } else {
      Swal.fire("Error", res.data.error || "Unauthorized", "error");
    }
  } catch (e) {
    Swal.fire("Error", "Network error", "error");
  }
};




  const renderComments = (list) =>
    list.map((c) => (
      <CommentCard key={c.id}>
        {/* <CommentAuthor>
          {c.name}
          {c.is_admin ? <AdminBadge>Admin</AdminBadge> : null}
        </CommentAuthor> */}

        <CommentHeader>
  <div>
    <CommentAuthor>
      <CommentAuthor>
          {c.name}
          {c.is_admin ? <AdminBadge>Admin</AdminBadge> : null}
        </CommentAuthor>
    </CommentAuthor>
    <CommentDate>
      {new Date(c.created_at).toLocaleString()}
    </CommentDate>
  </div>

  {/* 3-dot menu */}
  {/* <MenuWrapper>...</MenuWrapper> */}
       <MenuWrapper>
  <MenuButton onClick={() =>
    setMenuOpenId(menuOpenId === c.id ? null : c.id)
  }>
    ⋮
  </MenuButton>

  {menuOpenId === c.id && (
    <MenuDropdown>
      <MenuItem
        onClick={() => {
          setDeleteTarget(c);
          setAdminAuth({
            email: '',
            password: "",
          });
          setAdminAuthOpen(true);
          setMenuOpenId(null);
        }}
      >
        Delete
      </MenuItem>
    </MenuDropdown>
  )}
</MenuWrapper>
</CommentHeader>


        {/* <CommentDate>
          {new Date(c.created_at).toLocaleString()}
        </CommentDate> */}

        <CommentText>{c.comment}</CommentText>

        <CommentActions>
          <ActionButton onClick={() => openModal(c)}>Reply</ActionButton>
          {isAdmin && (
            <ActionButton onClick={() => deleteComment(c.id)}>
              Delete
            </ActionButton>
          )}
        </CommentActions>

        {c.replies?.length > 0 && (
          <RepliesWrapper>{renderComments(c.replies)}</RepliesWrapper>
        )}
        {/* <MenuWrapper>
  <MenuButton onClick={() =>
    setMenuOpenId(menuOpenId === c.id ? null : c.id)
  }>
    ⋮
  </MenuButton>

  {menuOpenId === c.id && (
    <MenuDropdown>
      <MenuItem
        onClick={() => {
          setDeleteTarget(c);
          setAdminAuth({
            email: c.email || adminAuth.email,
            password: "",
          });
          setAdminAuthOpen(true);
          setMenuOpenId(null);
        }}
      >
        Delete
      </MenuItem>
    </MenuDropdown>
  )}
</MenuWrapper> */}

      </CommentCard>
    ));

  return (
    <CommentsWrapper>
      <CommentsHeader>Comments</CommentsHeader>

      <AddCommentButton onClick={() => openModal()}>
        💬 Add Comment
      </AddCommentButton>

      {loading ? <p>Loading comments...</p> : renderComments(comments)}

      {modalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <ModalTitle>
              {replyTo ? `Reply to ${replyTo.name}` : "Add Comment"}
            </ModalTitle>

            <ModalForm>
              <input
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
              <input
                placeholder="Your email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
             
              />
              <textarea
                placeholder="Write your comment..."
                value={form.comment}
                onChange={(e) =>
                  setForm({ ...form, comment: e.target.value })
                }
              />

              <ModalActions>
         

<SubmitButton
  onClick={() => {
    if (commentAsAdmin) {
      if (!form.email) {
        Swal.fire("Missing email", "Enter your email first", "warning");
        return;
      }

      // 👇 Pass comment email to admin auth
      setAdminAuth({
        email: form.email,
        password: "",
      });

      setAdminAuthOpen(true);
    } else {
      submitComment(false);
    }
  }}
>
  Submit
</SubmitButton>


                <CancelButton onClick={closeModal}>
                  Cancel
                </CancelButton>
              </ModalActions>
            </ModalForm>
            <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
  <input
    type="checkbox"
    checked={commentAsAdmin}
    onChange={(e) => setCommentAsAdmin(e.target.checked)}
  />
  Comment as Admin
</label>

          </ModalBox>
        </ModalOverlay>
      )}

      {adminAuthOpen && (
  <ModalOverlay>
    <ModalBox>
     <ModalTitle>
  {deleteTarget ? "Admin Authentication (Delete Comment)" : "Admin Authentication"}
</ModalTitle>


      <ModalForm>
       {/* <input
  type="email"
  value={adminAuth.email}
  readOnly
  style={{ background: "#f3f4f6", cursor: "not-allowed" }}
/> */}

<input
  type="email"
  value={adminAuth.email}
  readOnly={deleteTarget ? false : true}
  onChange={(e) =>
    setAdminAuth({ ...adminAuth, email: e.target.value })
  }
/>


        <input
          type="password"
          placeholder="Admin password"
          value={adminAuth.password}
          onChange={(e) =>
            setAdminAuth({ ...adminAuth, password: e.target.value })
          }
        />

        <ModalActions>
   <SubmitButton
  onClick={() => {
    deleteTarget
      ? authenticateAndDelete()
      : submitComment(true, adminAuth);
  }}
>
  Authenticate & {deleteTarget ? "Delete" : "Submit"}
</SubmitButton>

          <CancelButton
            onClick={() => {setAdminAuthOpen(false);setDeleteTarget(null)}}
          >
            Cancel
          </CancelButton>
        </ModalActions>
      </ModalForm>
    </ModalBox>
  </ModalOverlay>
)}

    </CommentsWrapper>
  );
}

/* ================= STYLES ================= */

const CommentsWrapper = styled.div`
  margin-top: 60px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const CommentsHeader = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 20px;
`;

const AddCommentButton = styled.button`
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  color: white;
  border: none;
  padding: 12px 26px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 30px;
`;

const CommentCard = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 18px 20px;
  margin-bottom: 16px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.2);
`;

const CommentAuthor = styled.div`
  font-weight: 600;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const AdminBadge = styled.span`
  background: #4f46e5;
  color: white;
  font-size: 0.65rem;
  padding: 3px 8px;
  border-radius: 999px;
`;

const CommentDate = styled.div`
  font-size: 0.75rem;
  color: #777;
  margin-top: 2px;
`;

const CommentText = styled.p`
  margin-top: 12px;
  line-height: 1.6;
`;

const CommentActions = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 14px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #4f46e5;
  cursor: pointer;
  padding: 0;
  font-size: 0.85rem;
`;

const RepliesWrapper = styled.div`
  margin-top: 16px;
  margin-left: 24px;
  border-left: 2px solid #e5e7eb;
  padding-left: 16px;
`;

/* ================= MODAL ================= */

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalBox = styled.div`
  background: white;
  border-radius: 18px;
  width: 100%;
  max-width: 480px;
  padding: 28px;
`;

const ModalTitle = styled.h4`
  margin-bottom: 18px;
`;

const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  input, textarea {
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #d1d5db;
  }

  textarea {
    min-height: 120px;
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  color: white;
  border: none;
  padding: 10px 26px;
  border-radius: 999px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
`;



const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const MenuWrapper = styled.div`
  position: relative;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #555;
`;

const MenuDropdown = styled.div`
  position: absolute;
  right: 0;
  top: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  overflow: hidden;
  z-index: 10;
`;

const MenuItem = styled.div`
  padding: 10px 16px;
  font-size: 0.85rem;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #f3f4f6;
  }
`;
