import { Map } from "../components/Map";
import { MapSettings } from "../components/MapSettings";

export const HomePage = () => {
  return (
    <main id="main">
      <header></header>
      <h1>Карта Новосибирска</h1>

      <Map />
      <MapSettings />

      <footer id="footer">Сделано в учебных целях ООО "Яжевичка"</footer>
    </main>
  );
};
