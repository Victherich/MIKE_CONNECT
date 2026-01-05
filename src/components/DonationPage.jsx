
// import React, { useState } from "react";
// import styled from "styled-components";
// import { Slide } from "react-awesome-reveal";
// import d1 from '../Images/d1.png'

// export default function DonationPage() {
//   const [amount, setAmount] = useState("");
//   const [note, setNote] = useState("");
//   const [status, setStatus] = useState(null); // null | "error" | "success"
//   const [message, setMessage] = useState("");

//   const parseAmount = (val) => Number(String(val).replace(/[, ]+/g, ""));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const num = parseAmount(amount);
//     if (!num || isNaN(num) || num <= 0) {
//       setStatus("error");
//       setMessage("Please enter a valid donation amount (e.g. 100).");
//       return;
//     }

//     setStatus("success");
//     setMessage(`Thank you! You donated ₦${num.toLocaleString()}.`);
//     setAmount("");
//     setNote("");
//   };

//   const Animated = ({ children }) => (
//     <Slide direction="up" duration={3000} triggerOnce>
//       {children}
//     </Slide>
//   );

//   return (
//     <PageWrapper>
//       {/* HERO SECTION */}
//       <Hero>
//         <HeroInner>
//           <Animated>
//             <h1>Donation</h1>
//           </Animated>
//           <Animated>
//             <Lead>Support our work — every contribution counts.</Lead>
//           </Animated>
//         </HeroInner>
//       </Hero>

//       {/* FORM SECTION */}
//       <FormSection>
//         <FormCard onSubmit={handleSubmit} noValidate>
//           <Animated>
//             <Label htmlFor="amount">₦ Amount</Label>
//           </Animated>

//           <Animated>
//             <AmountRow>
//               <Currency>₦</Currency>
//               <AmountInput
//                 id="amount"
//                 name="amount"
//                 inputMode="decimal"
//                 placeholder="Ex.100"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 aria-label="Donation amount in naira"
//               />
//             </AmountRow>
//           </Animated>

//           <Animated>
//             <Label htmlFor="note">Note (optional)</Label>
//           </Animated>

//           <Animated>
//             <NoteInput
//               id="note"
//               name="note"
//               rows={3}
//               placeholder="Add a short note"
//               value={note}
//               onChange={(e) => setNote(e.target.value)}
//             />
//           </Animated>

//           <Animated>
//             <ButtonRow>
//               <SubmitButton type="submit">Add Donation</SubmitButton>
//             </ButtonRow>
//           </Animated>

//           {status && (
//             <Animated>
//               <Alert role={status === "error" ? "alert" : "status"} $variant={status}>
//                 {message}
//               </Alert>
//             </Animated>
//           )}
//         </FormCard>
//       </FormSection>
//     </PageWrapper>
//   );
// }

// /* ================= STYLES ================= */

// const PageWrapper = styled.div`
//   font-family: "Poppins", sans-serif;
//   color: #222;
//   background: #fafafa;
//   min-height: 100vh;
// `;

// const Hero = styled.section`
//   background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${d1});
//   background-size: cover;
//   background-position: bottom;
//   color: white;
//   text-align: center;
//   padding: 80px 20px;
// `;

// const HeroInner = styled.div`
//   max-width: 900px;
//   margin: 0 auto;

//   h1 {
//     font-size: 3rem;
//     margin: 0 0 12px;
//     letter-spacing: 0.6px;
//   }
// `;

// const Lead = styled.p`
//   margin: 0;
//   font-size: 1.15rem;
//   opacity: 0.95;
// `;

// const FormSection = styled.section`
//   max-width: 720px;
//   margin: 40px auto;
//   padding: 0 20px;
// `;

// const FormCard = styled.form`
//   background: #fff;
//   border-radius: 12px;
//   padding: 28px;
//   box-shadow: 0 6px 24px rgba(12,12,20,0.06);
//   display: flex;
//   flex-direction: column;
//   gap: 14px;
// `;

// const Label = styled.label`
//   font-size: 0.95rem;
//   font-weight: 600;
//   color: #000080;
// `;

// const AmountRow = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
// `;

// const Currency = styled.span`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   background: #f3f3f3;
//   border-radius: 8px;
//   padding: 10px 12px;
//   font-weight: 700;
//   color: #222;
//   min-width: 56px;
//   text-align: center;
// `;

// const AmountInput = styled.input`
//   flex: 1;
//   padding: 12px 14px;
//   font-size: 1rem;
//   border-radius: 8px;
//   border: 1px solid #e6e6e6;
//   outline: none;

//   &:focus {
//     border-color: #410b77ff;
//     box-shadow: 0 0 0 4px rgba(65,11,119,0.06);
//   }
// `;

// const NoteInput = styled.textarea`
//   padding: 12px 14px;
//   font-size: 0.98rem;
//   border-radius: 8px;
//   border: 1px solid #e6e6e6;
//   resize: vertical;
//   min-height: 72px;

//   &:focus {
//     border-color: #410b77ff;
//     box-shadow: 0 0 0 4px rgba(65,11,119,0.06);
//   }
// `;

// const ButtonRow = styled.div`
//   display: flex;
//   gap: 12px;
//   justify-content: flex-end;
// `;

// const SubmitButton = styled.button`
//   background: #ff9f1c;
//   color: white;
//   padding: 10px 18px;
//   border: none;
//   border-radius: 8px;
//   font-weight: 700;
//   cursor: pointer;
//   transition: transform .12s ease, box-shadow .12s ease;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 18px rgba(255,159,28,0.18);
//   }
//   &:active { transform: translateY(0); }
// `;

// const Alert = styled.div`
//   margin-top: 4px;
//   padding: 10px 12px;
//   border-radius: 8px;
//   font-weight: 600;
//   font-size: 0.95rem;
//   ${(p) =>
//     p.$variant === "error"
//       ? `background: #ffe9e9; color: #b00020; border: 1px solid rgba(176,0,32,0.08);`
//       : `background: #e9fbe9; color: #167f3f; border: 1px solid rgba(22,127,63,0.08);`}
// `;


import React, { useState } from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import d1 from '../Images/d1.png';

export default function DonationPage() {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState(null); // null | "error" | "success"
  const [message, setMessage] = useState("");

  const parseAmount = (val) => Number(String(val).replace(/[, ]+/g, ""));

  const handlePaystackPayment = () => {
    const num = parseAmount(amount);
    if (!num || isNaN(num) || num <= 0) {
      setStatus("error");
      setMessage("Please enter a valid donation amount (e.g. 100).");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: "YOUR_PAYSTACK_PUBLIC_KEY", // <-- replace with your public key
      email: "donor@example.com",       // in real use, get from user login or form
      amount: num * 100,                // Paystack uses kobo
      currency: "NGN",
      ref: `DONATION-${Math.floor(Math.random() * 1000000000)}`, // unique ref
      metadata: {
        custom_fields: [
          {
            display_name: "Note",
            variable_name: "note",
            value: note || "No note provided"
          }
        ]
      },
      callback: function (response) {
        // Payment successful
        setStatus("success");
        setMessage(`Payment successful! Reference: ${response.reference}`);
        setAmount("");
        setNote("");
      },
      onClose: function () {
        setStatus("error");
        setMessage("Payment window closed. Donation not completed.");
      }
    });

    handler.openIframe();
  };

  const Animated = ({ children }) => (
    <Slide direction="up" duration={3000} triggerOnce>
      {children}
    </Slide>
  );

  return (
    <PageWrapper>
      <Hero>
        <HeroInner>
          <Animated>
            <h1>Donation</h1>
          </Animated>
          <Animated>
            <Lead>Support our work — every contribution counts.</Lead>
          </Animated>
        </HeroInner>
      </Hero>

      <FormSection>
        <FormCard noValidate>
          <Animated>
            <Label htmlFor="amount">₦ Amount</Label>
          </Animated>

          <Animated>
            <AmountRow>
              {/* <Currency>₦</Currency> */}
              <AmountInput
                id="amount"
                name="amount"
                inputMode="decimal"
                placeholder="Ex.100"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </AmountRow>
          </Animated>

          <Animated>
            <Label htmlFor="note">Note (optional)</Label>
          </Animated>

          <Animated>
            <NoteInput
              id="note"
              name="note"
              rows={3}
              placeholder="Add a short note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </Animated>

          <Animated>
            <ButtonRow>
              <SubmitButton type="button" onClick={handlePaystackPayment}>
                Donate Now
              </SubmitButton>
            </ButtonRow>
          </Animated>

          {status && (
            <Animated>
              <Alert role={status === "error" ? "alert" : "status"} $variant={status}>
                {message}
              </Alert>
            </Animated>
          )}
        </FormCard>
      </FormSection>

      {/* Paystack script */}
      <script src="https://js.paystack.co/v1/inline.js"></script>
    </PageWrapper>
  );
}

/* ================= STYLES ================= */
const PageWrapper = styled.div`
  font-family: "Poppins", sans-serif;
  color: #222;
  background: #fafafa;
  min-height: 100vh;
`;

const Hero = styled.section`
  background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${d1});
  background-size: cover;
  background-position: bottom;
  color: white;
  text-align: center;
  padding: 80px 20px;
`;

const HeroInner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  h1 {
    font-size: 3rem;
    margin: 0 0 12px;
    letter-spacing: 0.6px;
  }
`;

const Lead = styled.p`
  margin: 0;
  font-size: 1.15rem;
  opacity: 0.95;
`;

const FormSection = styled.section`
  max-width: 720px;
  margin: 40px auto;
  padding: 0 20px;
`;

const FormCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 28px;
  box-shadow: 0 6px 24px rgba(12,12,20,0.06);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: #000080;
`;

const AmountRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Currency = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  border-radius: 8px;
  padding: 10px 12px;
  font-weight: 700;
  color: #222;
  min-width: 56px;
  text-align: center;
`;

const AmountInput = styled.input`
  flex: 1;
  padding: 12px 14px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  outline: none;
  &:focus {
    border-color: #410b77ff;
    box-shadow: 0 0 0 4px rgba(65,11,119,0.06);
  }
`;

const NoteInput = styled.textarea`
  padding: 12px 14px;
  font-size: 0.98rem;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  resize: vertical;
  min-height: 72px;
  &:focus {
    border-color: #410b77ff;
    box-shadow: 0 0 0 4px rgba(65,11,119,0.06);
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  background: #ff9f1c;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: transform .12s ease, box-shadow .12s ease;
  &:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(255,159,28,0.18); }
  &:active { transform: translateY(0); }
`;

const Alert = styled.div`
  margin-top: 4px;
  padding: 10px 12px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  ${(p) =>
    p.$variant === "error"
      ? `background: #ffe9e9; color: #b00020; border: 1px solid rgba(176,0,32,0.08);`
      : `background: #e9fbe9; color: #167f3f; border: 1px solid rgba(22,127,63,0.08);`}
`;
