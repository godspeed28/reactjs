export default function Header({ name }) {
  return (
    <>
      <h1>
        Belajar
        <span style={{ color: "#0dcaf0", fontFamily: "arial" }}>
          {" "}
          React {name ? name : " "}{" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React Icon"
            width="35"
          />
        </span>{" "}
        Brook 🚀
      </h1>
      <img
        className="header-img"
        width="250"
        src="img/albert.jpg"
        alt="My Image"
      />
      <p
        onClick={() => {
          alert("Mantap");
        }}
      >
        Ingin menjadi programmer handal namun enggan ngoding
      </p>
    </>
  );
}
