import { useEffect, useMemo, useRef, useState } from "react";
import YTPlayer from "yt-player";

import lyrics from "./InternetBxxchLyrics";
import styles from "./App.module.scss";

function App() {
  const ytId = "VSjyE2TRz6A";

  const embed = useRef<HTMLDivElement>(null);
  const [ytPlayer, setYtPlayer] = useState<YTPlayer | null>(null);

  useEffect(() => {
    if (embed.current != null) {
      const player = new YTPlayer(embed.current);
      player.load(ytId);
      setYtPlayer(player);
    }
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.lyrics}>{lyrics}</div>
      <div className={styles.player}>
        <div className={styles.embed} ref={embed}></div>
      </div>
    </div>
  );
}

export default App;
