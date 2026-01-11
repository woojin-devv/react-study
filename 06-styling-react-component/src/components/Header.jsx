import logo from "../assets/logo.png";

// styled-components 패키지 사용
// 1. import
// import { styled } from "styled-components";

// 2. 정의
// const StyleHeader = styled.header`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 2rem;
//   margin-bottom: 2rem;

// & img {
//   object-fit: contain;
//   margin-bottom: 2rem;
//   width: 11rem;
//   height: 11rem;
// }

// &  h1 {
//   font-size: 1.5rem;
//   font-weight: 600;
//   letter-spacing: 0.4em;
//   text-align: center;
//   text-transform: uppercase;
//   color: #9a3412;
//   font-family: 'Pacifico', cursive;
//   margin: 0;
// }

// & p {
//   text-align: center;
//   color: #a39191;
//   margin: 0;
// }

// @media (min-width: 768px) {
//   margin-bottom: 4rem;

//   & h1 {
//     font-size: 2.25rem;
//   }
// }
// `

//3. 사용
// export default function Header() {
//   return (
//     <StyleHeader>
//       <img src={logo} alt="A canvas" />
//       <h1>ReactArt</h1>
//       <p>
//         A community of artists and art-lovers.
//       </p>
//     </StyleHeader>
//   );
// }

export default function Header() {
  return (
    <header className="flex flex-col items-cente mt">
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
