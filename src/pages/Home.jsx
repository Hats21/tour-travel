import { useSearchParams } from "react-router-dom";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Map from "../ui/Map";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set("type", value);
    setSearchParams(searchParams);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "1.2rem",
          alignItems: "center",
          backgroundColor: "var(--color-stone-100)",
          padding: "8px",
          borderRadius: "1.2rem",
        }}
      >
        <Button
          type="secondary"
          size="small"
          onClick={() => handleClick("all")}
        >
          All
        </Button>
        <Button
          type="secondary"
          size="small"
          onClick={() => handleClick("heritages")}
        >
          Heritages
        </Button>
        <Button
          type="secondary"
          size="small"
          onClick={() => handleClick("churches")}
        >
          Churches
        </Button>
        <Button
          type="secondary"
          size="small"
          onClick={() => handleClick("mosques")}
        >
          Mosques
        </Button>
        <Button
          type="secondary"
          size="small"
          onClick={() => handleClick("other")}
        >
          other
        </Button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            height: "95vh",
            overflowY: "scroll",
            rowGap: "1rem",
            columnGap: "1rem",
            justifyContent: "space-between",
          }}
        >
          <Card imgSrc="img/img1.jpg" />
          <Card imgSrc="img/img2.jpg" />
          <Card imgSrc="img/img3.jpg" />
          <Card imgSrc="img/img4.jpg" />
          <Card imgSrc="img/img5.jpg" />
          <Card imgSrc="img/img6.jpg" />
          <Card imgSrc="img/img7.jpg" />
          <Card imgSrc="img/img8.jpg" />
          <Card imgSrc="img/img9.jpg" />
          <Card imgSrc="img/img10.jpg" />
        </div>
        <Map />
        {/* <h1>Map</h1> */}
      </div>
    </>
  );
}

export default App;
