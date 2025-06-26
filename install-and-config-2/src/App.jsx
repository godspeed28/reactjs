import { useState } from "react";
import Header from "./components/Header";

function App() {
  const students = [
    { id: 1, nama: "Abe" },
    { id: 2, nama: "Emen" },
    { id: 3, nama: "Alfa" },
  ];

  const [likes, setLikes] = useState(0);
  const [angka, setAngka] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <Header />
      <button onClick={handleClick}>Like ({likes})</button> <br /> <br />
      <button onClick={() => setAngka(angka + 1)}>+</button> &nbsp;&nbsp;
      {angka} &nbsp;&nbsp;
      <button onClick={() => setAngka(Math.max(angka - 1, 0))}>-</button> <br />
      <button
        style={{ marginLeft: "12px", marginTop: "10px" }}
        onClick={() => setAngka(0)}
      >
        Reset
      </button>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.id}
            {". "}
            {student.nama}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
