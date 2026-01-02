// import React, { useState, useRef, useEffect } from "react";
// import styled from "styled-components";
// import { Fade } from "react-awesome-reveal";
// import { FaUser } from "react-icons/fa";

// const Wrapper = styled.div`
//   position: relative;
//   display: inline-block;
//   font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI",
//     Roboto, "Helvetica Neue", Arial;
//   user-select: none;
// `;

// const Trigger = styled.button`
//   display: inline-flex;
//   align-items: center;
//   gap: 5px;
//   padding: 10px 14px;
//   font-size: 14px;
//   border-radius: 10px;
//   background: linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%);
//   box-shadow: 0 6px 18px rgba(31, 41, 55, 0.08);
//   border: 1px solid rgba(99, 102, 241, 0.12);
//   cursor: pointer;
//   min-width: 160px;
//   transition: transform 220ms ease, box-shadow 220ms ease;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 12px 28px rgba(31, 41, 55, 0.12);
//   }

//   &:focus {
//     outline: 3px solid rgba(99, 102, 241, 0.14);
//   }
// `;

// const Label = styled.span`
//   flex: 1;
//   text-align: left;
//   font-weight: bold;
//   color:rgba(0,0,255,0.6);
//   font-size: 1rem;
// `;

// const Caret = styled.span`
//   display: inline-block;
//   width: 12px;
//   height: 12px;
//   transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
//   transition: transform 320ms cubic-bezier(.22, 1, .36, 1);
//   opacity: 0.9;
// `;

// const Menu = styled.ul`
//   position: absolute;
//   top: ${({ placement }) => (placement === "top" ? "auto" : "calc(100% + 12px)")};
//   bottom: ${({ placement }) => (placement === "top" ? "calc(100% + 12px)" : "auto")};
//   right: 0;
//   width: 200px;
//   margin: 0;
//   padding: 10px;
//   list-style: none;
//   border-radius: 14px;
//   background: linear-gradient(180deg, #ffffff, #fbfdff);
//   box-shadow: 0 20px 40px rgba(2, 6, 23, 0.2);
//   border: 1px solid rgba(15, 23, 42, 0.04);
 
//   z-index: 1000;
// `;

// const Item2 = styled.li`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   padding: 10px 12px;
//   border-radius: 10px;
//   cursor: pointer;
//   font-size: 0.8rem;
//   transition: background 160ms ease, transform 160ms ease;

//   &:hover,
//   &[data-focused="true"] {
//     // background: rgba(99, 102, 241, 0.2);
//     transform: translateX(4px);
//     color:white;
//   }

//   a {
//     // color: #222;
//      color:rgba(0,0,255,0.7);
//     text-decoration: none;
//     flex: 1;
//     font-weight: 600;
//   }
// `;

// export default function BeautifulDropdown({
//   label = "GET CONNECTED",
//   animationDuration = 600,
//   placement = "bottom",
// }) {
//   const [open, setOpen] = useState(false);
//   const [focusedIndex, setFocusedIndex] = useState(-1);
//   const wrapperRef = useRef(null);
//   const itemsRef = useRef([]);

//   const options = [
//     { label: `ONE-ON-ONE COUNSELLING`, href: "/counselling" },
//     { label: `RESOURCES`, href: "/resources" },

//   ];

//   useEffect(() => {
//     function handleClick(e) {
//       if (!wrapperRef.current) return;
//       if (!wrapperRef.current.contains(e.target)) {
//         setOpen(false);
//         setFocusedIndex(-1);
//       }
//     }
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   useEffect(() => {
//     function handleKey(e) {
//       if (!open) return;
//       if (e.key === "Escape") {
//         setOpen(false);
//         setFocusedIndex(-1);
//       } else if (e.key === "ArrowDown") {
//         e.preventDefault();
//         setFocusedIndex((i) => Math.min(i + 1, options.length - 1));
//       } else if (e.key === "ArrowUp") {
//         e.preventDefault();
//         setFocusedIndex((i) => Math.max(i - 1, 0));
//       } else if (e.key === "Enter") {
//         if (focusedIndex >= 0 && focusedIndex < options.length) {
//           const opt = options[focusedIndex];
//           window.location.href = opt.href;
//           setOpen(false);
//         }
//       }
//     }
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [open, focusedIndex, options]);

//   useEffect(() => {
//     if (focusedIndex >= 0 && itemsRef.current[focusedIndex]) {
//       itemsRef.current[focusedIndex].scrollIntoView({ block: "nearest" });
//     }
//   }, [focusedIndex]);

//   return (
//     <Wrapper ref={wrapperRef}>
//       <Trigger
//         onClick={() => setOpen((o) => !o)}
//         aria-haspopup="menu"
//         aria-expanded={open}
//         aria-controls="beautiful-dropdown-menu"
//       >
//         <Label>{label}</Label>
//         <Caret open={open} aria-hidden>
//           <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//             <path
//               d="M6 9l6 6 6-6"
//               stroke="currentColor"
//               strokeWidth="1.6"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </Caret>
//       </Trigger>

//       {open && (
//         <Fade
//           cascade={false}
//           duration={animationDuration}
//           triggerOnce={false}
//           direction="up"
//         >
//           <Menu id="beautiful-dropdown-menu" role="menu" placement={placement}>
//             {options.map((opt, i) => (
//               <Item2
//                 key={i}
//                 role="menuitem"
//                 tabIndex={-1}
//                 ref={(el) => (itemsRef.current[i] = el)}
//                 data-focused={focusedIndex === i}
//                 onMouseEnter={() => setFocusedIndex(i)}
//                 onClick={() => {
//                   window.location.href = opt.href;
//                   setOpen(false);
//                 }}
//               >
//                 <a href={opt.href}>{opt.label}</a>
//               </Item2>
//             ))}
//           </Menu>
//         </Fade>
//       )}
//     </Wrapper>
//   );
// }

// /*
// USAGE
// ------
// import BeautifulDropdown from './BeautifulDropdown.react';

// <BeautifulDropdown label="Membership" />

// This dropdown will navigate directly to the respective pages when an option is clicked.
// */




import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  font-family: Inter, sans-serif;
  user-select: none;
`;

const Trigger = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 12px;
  background: linear-gradient(180deg, #ffffff, #f7f9fc);
  border: 1px solid rgba(99, 102, 241, 0.2);
  box-shadow: 0 6px 18px rgba(31, 41, 55, 0.08);
  cursor: pointer;
  min-width: 180px;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(31, 41, 55, 0.12);
  }

  &:focus {
    outline: 3px solid rgba(99, 102, 241, 0.25);
  }
`;

const Label = styled.span`
  flex: 1;
  font-weight: 600;
  font-size: 0.8rem;
  color: #1e3a8a;
  text-align: left;
`;

const Caret = styled(FaChevronDown)`
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
  color: #1e3a8a;
`;

const Menu = styled.ul`
  position: absolute;
  top: ${({ placement }) => (placement === "top" ? "auto" : "calc(100% + 8px)")};
  bottom: ${({ placement }) => (placement === "top" ? "calc(100% + 8px)" : "auto")};
  right: 0;
  width: 220px;
  margin: 0;
  padding: 8px 0;
  list-style: none;
  border-radius: 12px;
  background: linear-gradient(180deg, #ffffff, #f8fbff);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(15, 23, 42, 0.08);
  z-index: 1000;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  color: #1e3a8a; /* default text color */
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover,
  &[data-focused="true"] {
    background: rgba(59, 130, 246, 0.1);
    transform: translateX(4px);
    color: #1e40af; /* hover/focus color */
  }

  span {
    flex: 1;
    color: inherit; /* ensures text is always visible */
    font-size:0.8rem;
    font-weight:700;
  }
`;

export default function BeautifulDropdown({
  label = "GET CONNECTED",
  placement = "bottom",
  options = [
    { label: "ONE-ON-ONE COUNSELLING", href: "/counselling" },
    { label: "RESOURCES", href: "/resources" },
  ],
}) {
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const wrapperRef = useRef(null);
  const itemsRef = useRef([]);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
        setFocusedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") {
        setOpen(false);
        setFocusedIndex(-1);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((i) => Math.min(i + 1, options.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        if (focusedIndex >= 0 && focusedIndex < options.length) {
          navigate(options[focusedIndex].href);
          setOpen(false);
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, focusedIndex, options, navigate]);

  // Scroll focused item into view
  useEffect(() => {
    if (focusedIndex >= 0 && itemsRef.current[focusedIndex]) {
      itemsRef.current[focusedIndex].scrollIntoView({ block: "nearest" });
    }
  }, [focusedIndex]);

  return (
    <Wrapper ref={wrapperRef}>
      <Trigger
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Label>{label}</Label>
        <Caret open={open} />
      </Trigger>

      {open && (
        <Fade cascade={false} duration={400} triggerOnce={false} direction="up">
          <Menu role="menu" placement={placement}>
            {options.map((opt, i) => (
              <Item
                key={i}
                role="menuitem"
                tabIndex={-1}
                ref={(el) => (itemsRef.current[i] = el)}
                data-focused={focusedIndex === i}
                onMouseEnter={() => setFocusedIndex(i)}
                onClick={() => {
                  navigate(opt.href);
                  setOpen(false);
                }}
              >
                <span>{opt.label}</span>
              </Item>
            ))}
          </Menu>
        </Fade>
      )}
    </Wrapper>
  );
}
