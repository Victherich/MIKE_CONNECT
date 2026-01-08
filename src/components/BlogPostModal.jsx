


// import React, { useState, useContext, useEffect } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { FaTimes, FaPlus, FaTrash } from "react-icons/fa";
// import { Context } from "./Context";

// /* ================= STYLES ================= */
// const Overlay = styled.div`
//   position: fixed;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.65);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 200;
// `;

// const Modal = styled.div`
//   background: #ffffff;
//   width: 92%;
//   max-width: 720px;
//   padding: 35px;
//   border-radius: 18px;
//   position: relative;
//   max-height: 95vh;
//   overflow-y: auto;
//   box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
// `;

// const CloseBtn = styled.button`
//   background: none;
//   border: none;
//   position: absolute;
//   top: 18px;
//   right: 18px;
//   font-size: 1.4rem;
//   cursor: pointer;
//   color: #6b7280;

//   &:hover {
//     color: #ef4444;
//   }
// `;

// const Title = styled.h3`
//   text-align: center;
//   margin-bottom: 25px;
//   font-size: 1.6rem;
//   font-weight: 700;
//   color: #4f46e5;
// `;

// const Label = styled.label`
//   margin-top: 18px;
//   display: block;
//   font-weight: 600;
//   color: #374151;
//   font-size: 0.9rem;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px;
//   margin-top: 6px;
//   border-radius: 10px;
//   border: 1px solid #d1d5db;

//   &:focus {
//     outline: none;
//     border-color: #4f46e5;
//     box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
//   }
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   padding: 12px;
//   margin-top: 6px;
//   min-height: 160px;
//   border-radius: 12px;
//   border: 1px solid #d1d5db;
//   resize: vertical;

//   &:focus {
//     outline: none;
//     border-color: #4f46e5;
//     box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
//   }
// `;

// const Button = styled.button`
//   margin-top: 30px;
//   width: 100%;
//   padding: 14px;
//   background: linear-gradient(90deg, #4f46e5, #6366f1);
//   color: white;
//   border: none;
//   border-radius: 12px;
//   font-weight: 700;
//   cursor: pointer;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 10px 25px rgba(79, 70, 229, 0.4);
//   }
// `;

// const CategoryGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
//   gap: 10px;
//   margin-top: 10px;
// `;

// const CategoryItem = styled.label`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   background: #f3f4f6;
//   padding: 10px;
//   border-radius: 10px;
//   cursor: pointer;
//   font-size: 0.9rem;

//   input {
//     accent-color: #4f46e5;
//   }
// `;

// const LinkRow = styled.div`
//   display: grid;
//   grid-template-columns: 2fr 2fr auto;
//   gap: 10px;
//   margin-top: 10px;
// `;

// const IconBtn = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   color: #ef4444;
// `;

// /* ================= COMPONENT ================= */
// const BlogPostModal = ({ post, onClose, onSaved }) => {
//   const { categories } = useContext(Context);

//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [links, setLinks] = useState([{ url: "", description: "" }]);

//   useEffect(() => {
//     if (post) {
//       setTitle(post.title);
//       setContent(post.content);
//       setSelectedCategories(post.category?.split(",") || []);
//       setLinks(post.links || [{ url: "", description: "" }]);
//     }
//   }, [post]);

//   /* ---------- IMAGE VALIDATION ---------- */
//   const handleImageChange = e => {
//     const file = e.target.files[0];
//     if (!file) return;

//     if (!file.type.startsWith("image/")) {
//       Swal.fire("Invalid file", "Only images allowed", "error");
//       return;
//     }

//     if (file.size > 500 * 1024) {
//       Swal.fire("Too large", "Image must be under 500KB", "error");
//       return;
//     }

//     setImageFile(file);
//   };

//   /* ---------- CATEGORY TOGGLE ---------- */
//   const toggleCategory = id => {
//     setSelectedCategories(prev =>
//       prev.includes(id)
//         ? prev.filter(c => c !== id)
//         : [...prev, id]
//     );
//   };

//   const updateLink = (i, field, value) => {
//     const copy = [...links];
//     copy[i][field] = value;
//     setLinks(copy);
//   };



// /* ---------- SAVE ---------- */
// const savePost = async () => {
//   if (!imageFile || !title || !content || selectedCategories.length === 0) {
//     Swal.fire("Validation", "Title, content, image & categories required", "warning");
//     return;
//   }

//   const formData = new FormData();
//   formData.append("id", post?.id || "");
//   formData.append("title", title);
//   formData.append("content", content);
//   formData.append("category", selectedCategories.join(","));
//   formData.append("links", JSON.stringify(links));

//   if (imageFile) {
//     formData.append("image", imageFile);
//   }

//   const url = post
//     ? "https://www.mikeconnect.com/mc_api/update_post.php"
//     : "https://www.mikeconnect.com/mc_api/create_post.php";

//   let loadingAlert = Swal.fire({
//     title: "Saving...",
//     allowOutsideClick: false,
//     didOpen: () => {
//       Swal.showLoading();
//     }
//   });

//   try {
//     const res = await axios.post(url, formData, {
//       headers: { "Content-Type": "multipart/form-data" }
//     });

//     Swal.close(); // close loading

//     if (res.data.success) {
//       Swal.fire("Success", "Saved successfully", "success");
//       onClose();
//       onSaved();
//     } else {
//       Swal.fire("Error", res.data.error || "Failed to save", "error");
//       console.log(res.data);
//     }
//   } catch (err) {
//     Swal.close();
//     Swal.fire("Error", "Failed to save", "error");
//     console.error(err);
//   }
// };


//   return (
//     <Overlay>
//       <Modal>
//         <CloseBtn onClick={onClose}><FaTimes /></CloseBtn>

//         <Title>{post ? "Edit Blog Post" : "Create Blog Post"}</Title>

//         <Label>Title</Label>
//         <Input value={title} onChange={e => setTitle(e.target.value)} />

//         <Label>Featured Image (max 500KB)</Label>
//         <Input type="file" accept="image/*" onChange={handleImageChange} />

//         <Label>Categories</Label>
//         <CategoryGrid>
//           {categories.map(c => (
//             <CategoryItem key={c.id}>
//               <input
//                 type="checkbox"
//                 checked={selectedCategories.includes(String(c.id))}
//                 onChange={() => toggleCategory(String(c.id))}
//               />
//               {c.title}
//             </CategoryItem>
//           ))}
//         </CategoryGrid>

//         <Label>Content</Label>
//         <TextArea value={content} onChange={e => setContent(e.target.value)} />

//         <Label>Links (video links, image links, reference site links, etc)</Label>
//         {links.map((l, i) => (
//           <LinkRow key={i}>
//             <Input
//               placeholder="URL"
//               value={l.url}
//               onChange={e => updateLink(i, "url", e.target.value)}
//             />
//             <Input
//               placeholder="Description"
//               value={l.description}
//               onChange={e => updateLink(i, "description", e.target.value)}
//             />
//             <IconBtn onClick={() => setLinks(links.filter((_, x) => x !== i))}>
//               <FaTrash />
//             </IconBtn>
//           </LinkRow>
//         ))}

//         <Button onClick={() => setLinks([...links, { url: "", description: "" }])}>
//           <FaPlus /> Add Link
//         </Button>

//         <Button onClick={savePost}>
//           {post ? "Update Post" : "Publish Post"}
//         </Button>
//       </Modal>
//     </Overlay>
//   );
// };

// export default BlogPostModal;





import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import { FaTimes, FaPlus, FaTrash } from "react-icons/fa";
import { Context } from "./Context";

/* ================= STYLES ================= */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

const Modal = styled.div`
  background: #ffffff;
  width: 92%;
  max-width: 720px;
  padding: 35px;
  border-radius: 18px;
  position: relative;
  max-height: 95vh;
  overflow-y: auto;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 18px;
  right: 18px;
  font-size: 1.4rem;
  cursor: pointer;
  color: #6b7280;
  &:hover {
    color: #ef4444;
  }
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.6rem;
  font-weight: 700;
  color: green;
`;

const Label = styled.label`
  margin-top: 18px;
  display: block;
  font-weight: 600;
  color: #374151;
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 6px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-top: 6px;
  min-height: 160px;
  border-radius: 12px;
  border: 1px solid #d1d5db;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
`;

const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 14px;
  background: linear-gradient(90deg, #4f46e5, #6366f1);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(79, 70, 229, 0.4);
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 10px;
  margin-top: 10px;
`;

const CategoryItem = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f3f4f6;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.9rem;

  input {
    accent-color: #4f46e5;
  }
`;

const LinkRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr auto;
  gap: 10px;
  margin-top: 10px;
`;

const IconBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #ef4444;
`;

/* ================= COMPONENT ================= */
const BlogPostModal = ({ post, onClose, onSaved }) => {
  const { categories } = useContext(Context);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [links, setLinks] = useState([{ url: "", description: "" }]);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setSelectedCategories(post.category?.split(",") || []);
      setLinks(post.links || [{ url: "", description: "" }]);
    }
  }, [post]);

  /* ---------- IMAGE VALIDATION ---------- */
  const handleImageChange = e => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      Swal.fire("Invalid file", "Only images allowed", "error");
      return;
    }
    if (file.size > 500 * 1024) {
      Swal.fire("Too large", "Image must be under 500KB", "error");
      return;
    }

    setImageFile(file);
  };

  /* ---------- CATEGORY TOGGLE ---------- */
  const toggleCategory = id => {
    setSelectedCategories(prev =>
      prev.includes(id)
        ? prev.filter(c => c !== id)
        : [...prev, id]
    );
  };

  const updateLink = (i, field, value) => {
    const copy = [...links];
    copy[i][field] = value;
    setLinks(copy);
  };

  /* ---------- SAVE / UPDATE ---------- */
  const savePost = async () => {
    if (!title || !content || selectedCategories.length === 0) {
      Swal.fire("Validation", "Title, content & categories required", "warning");
      return;
    }

    const formData = new FormData();
    formData.append("id", post?.id || "");
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", selectedCategories.join(","));
    formData.append("links", JSON.stringify(links));

    if (imageFile) {
      formData.append("image", imageFile);
    }

    const url = post
      ? "https://www.mikeconnect.com/mc_api/update_post.php"
      : "https://www.mikeconnect.com/mc_api/create_post.php";

    Swal.fire({
      title: "Saving...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    try {
      const res = await axios.post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      Swal.close();

      if (res.data.success) {
        Swal.fire("Success", "Saved successfully", "success");
        onClose();
        onSaved();
      } else {
        Swal.fire("Error", res.data.error || "Failed to save", "error");
        console.log(res.data);
      }
    } catch (err) {
      Swal.close();
      Swal.fire("Error", "Failed to save", "error");
      console.error(err);
    }
  };

  return (
    <Overlay>
      <Modal>
        <CloseBtn onClick={onClose}><FaTimes /></CloseBtn>

        <Title>{post ? "Edit Blog Post" : "Create Blog Post"}</Title>

        <Label>Title</Label>
        <Input value={title} onChange={e => setTitle(e.target.value)} />

        <Label>Featured Image (max 500KB)</Label>
        <Input type="file" accept="image/*" onChange={handleImageChange} />

        <Label>Categories</Label>
        <CategoryGrid>
          {categories.map(c => (
            <CategoryItem key={c.id}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(String(c.id))}
                onChange={() => toggleCategory(String(c.id))}
              />
              {c.title}
            </CategoryItem>
          ))}
        </CategoryGrid>

        <Label>Content</Label>
        <TextArea value={content} onChange={e => setContent(e.target.value)} />

        <Label>Links (URL & description)</Label>
        {links.map((l, i) => (
          <LinkRow key={i}>
            <Input
              placeholder="URL"
              value={l.url}
              onChange={e => updateLink(i, "url", e.target.value)}
            />
            <Input
              placeholder="Description"
              value={l.description}
              onChange={e => updateLink(i, "description", e.target.value)}
            />
            <IconBtn onClick={() => setLinks(links.filter((_, x) => x !== i))}>
              <FaTrash />
            </IconBtn>
          </LinkRow>
        ))}

        <Button onClick={() => setLinks([...links, { url: "", description: "" }])}>
          <FaPlus /> Add Link
        </Button>

        <Button onClick={savePost}>
          {post ? "Update Post" : "Publish Post"}
        </Button>
      </Modal>
    </Overlay>
  );
};

export default BlogPostModal;
