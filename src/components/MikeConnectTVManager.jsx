
// import React, { useEffect, useState, useContext } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { FaPlus } from "react-icons/fa";
// import { Context } from "./Context";
// import MikeConnectTVModal from "./MikeConnectTVModal";
// import { Zoom, Slide } from "react-awesome-reveal";

// /* ================= STYLES ================= */

// const Container = styled.div`
//   max-width: 1200px;
//   margin: auto;
//   padding: 40px 20px;
// `;

// const PageTitle = styled.h2`
//   text-align: center;
//   color: #4f46e5;
//   margin-bottom: 30px;
//   font-size: 2.2rem;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 28px;
// `;

// const Card = styled.div`
//   position: relative;
//   height: 220px;
//   border-radius: 18px;
//   overflow: hidden;
//   background-image: url(${p => p.bg});
//   background-size: cover;
//   background-position: center;
//   box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
// `;

// const Overlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background: linear-gradient(
//     to top,
//     rgba(0,0,0,0.9),
//     rgba(0,0,0,0.2)
//   );
// `;

// const Content = styled.div`
//   position: absolute;
//   bottom: 0;
//   padding: 14px;
//   color: white;
//   z-index: 2;

//   h3 {
//     font-size: 1rem;
//     margin-bottom: 6px;
//   }

//   p {
//     font-size: 0.75rem;
//     opacity: 0.9;
//   }
// `;

// const Actions = styled.div`
//   margin-top: 8px;
//   display: flex;
//   gap: 12px;
// `;

// const Action = styled.span`
//   font-size: 0.75rem;
//   cursor: pointer;
//   font-weight: bold;
//   text-decoration: underline;
//   color: ${({ color }) => color};
// `;

// const FloatingButton = styled.button`
//   position: fixed;
//   bottom: 60px;
//   right: 20px;
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   border: none;
//   background: linear-gradient(90deg, #4f46e5, #6366f1);
//   color: white;
//   font-size: 1.6rem;
//   cursor: pointer;
//   box-shadow: 0 12px 25px rgba(0,0,0,0.3);
// `;



// const Section = styled.section`
//   max-width: 1000px;
//   margin: 60px auto;
//   display: flex;
//   flex-direction: column;
//   flex-wrap:wrap;
//   gap: 50px;
// `;

// const VideoCard = styled.div`
//   display: flex;
// //   flex-wrap: wrap;
//   background: white;
//   border-radius: 12px;
//   overflow: hidden;
//   box-shadow: 0 4px 15px rgba(0,0,0,0.1);
// //   width:300px;

// @media(max-width:768px){
// flex-direction:column;
// }
// `;

// const VideoThumbnail = styled.div`
//   flex: 1 1 300px;
//   min-height: 220px;
//   background-image: url(${p => p.bg});

//   @media(max-width:768px){
// height:100px;
// }

// `;

// const VideoContent = styled.div`
//   flex: 2 1 500px;
//   padding: 30px;

//   h2 { font-size: 1.7rem; margin-bottom: 12px; color: #410b77ff; }
//   p { margin-bottom: 20px; font-size: 1rem; line-height: 1.5; }

//     @media(max-width:428px){
//   h2{
//   font-size:1.2rem;
//   }
//   p{
//   font-size:0.8rem;
//   }
//   }
// `;

// const VideoButtons = styled.div`
//   display: flex;
//   gap: 15px;

//   a { padding: 10px 20px; background: #ff9f1c; color: white; font-weight: 600; text-decoration: none; border-radius: 6px; }
//   button { padding: 10px 20px; background: #410b77ff; color: white; font-weight: 600; border: none; border-radius: 6px; cursor: pointer; }
// `;

// const CTASection = styled.section`
//   text-align: center;
//   padding: 60px 20px;
//   background: #f7f7f7;

//   h2 { font-size: 2rem; margin-bottom: 15px; }
//   p { margin-bottom: 30px; font-size: 1.1rem; }
// `;


// /* ================= COMPONENT ================= */

// const MikeConnectTVManager = () => {
//   const { domain } = useContext(Context);
//   const [items, setItems] = useState([]);
//   const [openModal, setOpenModal] = useState(false);
//   const [editingItem, setEditingItem] = useState(null);

//   const fetchItems = () => {
//     axios
//       .get(`https://www.mikeconnect.com/mc_api/get_mike_connect_tv_posts.php`)
//       .then(res => {
//         if (res.data?.success) setItems(res.data.items);
//       });
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const deleteItem = async (id) => {
//     const confirm = await Swal.fire({
//       title: "Delete item?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//     });

//     if (!confirm.isConfirmed) return;

//     const formData = new FormData();
//     formData.append("id", id);

//     const res = await axios.post(`https://www.mikeconnect.com/mc_api/delete_mike_connect_tv_post.php`, formData);

//     if (res.data.success) {
//       Swal.fire("Deleted", "Item removed", "success");
//       fetchItems();
//     } else {
//       Swal.fire("Error", "Failed to delete", "error");
//     }
//   };

//   return (
//     <Container>
//       <PageTitle>Manage Mike Connect TV</PageTitle>



//             <Section>
//               {items.map((item, i) => (
//                 <VideoCard key={i}>
//                   <VideoThumbnail bg={item.image} />
//                   <VideoContent>
//                     <Zoom duration={3000} triggerOnce={false}>
//                       <h2>{item.title}</h2>
//                     </Zoom>
      
//                     <Slide direction="up" duration={3000} triggerOnce={false}>
//                       <p>{item.description}</p>
//                     </Slide>
      
//                     <Slide direction="up" duration={3000} triggerOnce={false}>
                    
//       // In your component
//       <VideoButtons>
//         <a
//           href="#"
//           onClick={() => {
//             window.open(`${item.url}`,"_blank")
        
//           }}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Watch on YouTube
//         </a>
      
//       </VideoButtons>
//                     </Slide>
//                      <Actions>
//                 <Action
//                   color="#34d399"
//                   onClick={() => {
//                     setEditingItem(item);
//                     setOpenModal(true);
//                   }}
//                 >
//                   Edit
//                 </Action>

//                 <Action
//                   color="#f87171"
//                   onClick={() => deleteItem(item.id)}
//                 >
//                   Delete
//                 </Action>
//               </Actions>
//                   </VideoContent>
//                 </VideoCard>
//               ))}
//             </Section>










//       <FloatingButton onClick={() => {
//         setEditingItem(null);
//         setOpenModal(true);
//       }}>
//         <FaPlus />
//       </FloatingButton>

//       {openModal && (
//         <MikeConnectTVModal
//           item={editingItem}
//           onClose={() => setOpenModal(false)}
//           onSaved={fetchItems}
//         />
//       )}
//     </Container>
//   );
// };

// export default MikeConnectTVManager;





import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa";
import { Context } from "./Context";
import MikeConnectTVModal from "./MikeConnectTVModal";
import { Zoom, Slide } from "react-awesome-reveal";

/* ================= STYLES ================= */

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 25px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 12px;
  }
`;

const PageTitle = styled.h2`
  text-align: center;
  color: green;
  margin-bottom: 30px;
  font-size: 2.2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

// const Section = styled.section`
//   max-width: 1000px;
//   margin: 60px auto;
//   display: flex;
//   flex-direction: column;
//   gap: 50px;

//   @media (max-width: 768px) {
//     gap: 30px;
//     margin: 40px auto;
//   }

//   @media (max-width: 480px) {
//     gap: 25px;
//     margin: 30px auto;
//   }
// `;

// const VideoCard = styled.div`
//   display: flex;
//   background: white;
//   border-radius: 12px;
// //   overflow: hidden;
//   box-shadow: 0 4px 15px rgba(0,0,0,0.1);

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

const Section = styled.section`
  max-width: 1000px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding:20px;
`;

const VideoCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;


const VideoThumbnail = styled.div`
  flex: 1 1 300px;
  min-height: 220px;
  background-image: url(${p => p.bg});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    min-height: 180px;
  }

  @media (max-width: 480px) {
    min-height: 140px;
  }
`;

const VideoContent = styled.div`
  flex: 2 1 500px;
  padding: 30px;

  h2 {
    font-size: 1.7rem;
    margin-bottom: 12px;
    color: green;
  }

  p {
    margin-bottom: 20px;
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    padding: 20px;

    h2 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    padding: 15px;

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

const VideoButtons = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  a {
    padding: 10px 20px;
    background: #ff9f1c;
    color: white;
    font-weight: 600;
    text-decoration: none;
    border-radius: 6px;
    font-size: 0.9rem;
  }

  button {
    padding: 10px 20px;
    background: #410b77ff;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    a,
    button {
      width: 100%;
      text-align: center;
    }
  }
`;

const Actions = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    justify-content: space-between;
  }
`;

const Action = styled.span`
  font-size: 0.75rem;
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
  color: ${({ color }) => color};
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 60px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(90deg, #4f46e5, #6366f1);
  color: white;
  font-size: 1.6rem;
  cursor: pointer;
  box-shadow: 0 12px 25px rgba(0,0,0,0.3);
  z-index: 999;

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    font-size: 1.4rem;
    bottom: 100px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
    bottom: 100px;
    right: 15px;
  }
`;

/* ================= COMPONENT ================= */

const MikeConnectTVManager = () => {
  const { domain } = useContext(Context);
  const [items, setItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const fetchItems = () => {
    axios
      .get(`https://www.mikeconnect.com/mc_api/get_mike_connect_tv_posts.php`)
      .then(res => {
        if (res.data?.success) setItems(res.data.items);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const deleteItem = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
    });

    if (!confirm.isConfirmed) return;

    const formData = new FormData();
    formData.append("id", id);

    const res = await axios.post(
      `https://www.mikeconnect.com/mc_api/delete_mike_connect_tv_post.php`,
      formData
    );

    if (res.data.success) {
      Swal.fire("Deleted", "Item removed", "success");
      fetchItems();
    } else {
      Swal.fire("Error", "Failed to delete", "error");
    }
  };

  return (
    <Container>
      <PageTitle>Manage Mike Connect TV</PageTitle>

      <Section>
        {items.map((item, i) => (
          <VideoCard key={i}>
            <VideoThumbnail bg={item.image} />
            <VideoContent>
              <Zoom duration={3000}>
                <h2>{item.title}</h2>
              </Zoom>

              <Slide direction="up" duration={3000}>
                <p>{item.description}</p>
              </Slide>

              <Slide direction="up" duration={3000}>
                <VideoButtons>
                  <a
                    href="#"
                    onClick={() => window.open(item.url, "_blank")}
                    rel="noopener noreferrer"
                  >
                    Watch on YouTube
                  </a>
                </VideoButtons>
              </Slide>

              <Actions>
                <Action
                  color="#34d399"
                  onClick={() => {
                    setEditingItem(item);
                    setOpenModal(true);
                  }}
                >
                  Edit
                </Action>

                <Action
                  color="#f87171"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </Action>
              </Actions>
            </VideoContent>
          </VideoCard>
        ))}
      </Section>

      <FloatingButton
        onClick={() => {
          setEditingItem(null);
          setOpenModal(true);
        }}
      >
        <FaPlus />
      </FloatingButton>

      {openModal && (
        <MikeConnectTVModal
          item={editingItem}
          onClose={() => setOpenModal(false)}
          onSaved={fetchItems}
        />
      )}
    </Container>
  );
};

export default MikeConnectTVManager;
