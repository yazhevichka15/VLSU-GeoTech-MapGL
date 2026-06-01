import { Map } from "../components/Map";
import { MapSettings } from "../components/MapSettings";

export const HomePage = () => {
  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        padding: "0 1%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1%",
      }}
    >
      <header></header>
      <h1>Карта Новосибирска</h1>

      <Map />
      <MapSettings />

      <footer
        style={{
          width: "100%",
          height: "10vh",
          borderTop: "1px solid lightgray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "gray",
        }}
      >
        Сделано в учебных целях ООО "Яжевичка"
      </footer>
    </main>
  );
};
