
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import { FaTimes } from "react-icons/fa";
import { Context } from "./Context";

/* ================= STYLES ================= */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

const Modal = styled.div`
  background: #fff;
  width: 92%;
  max-width: 600px;
  padding: 35px;
  border-radius: 18px;
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 25px;
  color: #4f46e5;
`;

const Label = styled.label`
  margin-top: 15px;
  display: block;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 6px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-top: 6px;
  min-height: 120px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
`;

const Button = styled.button`
  margin-top: 25px;
  width: 100%;
  padding: 14px;
  background: linear-gradient(90deg, #4f46e5, #6366f1);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: bold;
`;

/* ================= COMPONENT ================= */

const MikeConnectTVModal = ({ item, onClose, onSaved }) => {
  const { domain } = useContext(Context);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setDescription(item.description);
      setUrl(item.url);
    }
  }, [item]);

  const saveItem = async () => {
    if (!title || !description || !url) {
      Swal.fire("Validation", "All fields required", "warning");
      return;
    }

    const formData = new FormData();
    formData.append("id", item?.id || "");
    formData.append("title", title);
    formData.append("description", description);
    formData.append("url", url);
    if (image) formData.append("image", image);

    const endpoint = item
      ? `https://www.mikeconnect.com/mc_api/update_mike_connect_tv_post.php`
      : `https://www.mikeconnect.com/mc_api/create_mike_connect_tv_post.php`;

    Swal.fire({ title: "Saving...", allowOutsideClick: false });
    Swal.showLoading();

    const res = await axios.post(endpoint, formData);

    Swal.close();

    if (res.data.success) {
      Swal.fire("Success", "Saved successfully", "success");
      onClose();
      onSaved();
    } else {
      Swal.fire("Error", "Failed to save", "error");
    }
  };

  return (
    <Overlay>
      <Modal>
        <CloseBtn onClick={onClose}><FaTimes /></CloseBtn>
        <Title>{item ? "Edit TV Item" : "Add TV Item"}</Title>

        <Label>Title</Label>
        <Input value={title} onChange={e => setTitle(e.target.value)} />

        <Label>Description</Label>
        <TextArea value={description} onChange={e => setDescription(e.target.value)} />

        <Label>URL</Label>
        <Input value={url} onChange={e => setUrl(e.target.value)} />

        <Label>Image</Label>
        <Input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />

        <Button onClick={saveItem}>
          {item ? "Update" : "Create"}
        </Button>
      </Modal>
    </Overlay>
  );
};

export default MikeConnectTVModal;
