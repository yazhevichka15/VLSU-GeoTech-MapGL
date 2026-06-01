import { useState } from "react";

import { Map } from "../components/Map";
import { MapSettings } from "../components/MapSettings";

export const HomePage = () => {
  const [showAccidents, setShowAccidents] = useState(true);

  const [showHeatmap, setShowHeatmap] = useState(false);

  return (
    <main id="main">
      <header></header>
      <h1>Карта Новосибирска</h1>

      <Map showAccidents={showAccidents} showHeatmap={showHeatmap} />

      <MapSettings
        showAccidents={showAccidents}
        setShowAccidents={setShowAccidents}
        showHeatmap={showHeatmap}
        setShowHeatmap={setShowHeatmap}
      />

      <footer id="footer">Сделано в учебных целях ООО "Яжевичка"</footer>
    </main>
  );
};
