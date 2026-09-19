(() => {
  const comparisons = [...document.querySelectorAll(".interactive-comparison[data-video-path]")];

  comparisons.forEach((comparison) => {
    const stage = comparison.querySelector(".wipe-compare");
    const divider = comparison.querySelector(".wipe-range");
    const origin = comparison.querySelector(".compare-origin");
    const tacc = comparison.querySelector(".compare-tacc");
    const buttons = [...comparison.querySelectorAll(".comparison-scenes button")];
    const videoPath = comparison.dataset.videoPath;

    if (!stage || !divider || !origin || !tacc || !videoPath) return;

    const playBoth = async () => {
      tacc.currentTime = origin.currentTime;
      try {
        await Promise.all([origin.play(), tacc.play()]);
      } catch {}
    };

    const pauseBoth = () => {
      origin.pause();
      tacc.pause();
    };

    const loadScene = (sceneId) => {
      pauseBoth();
      origin.src = `./assets/videos/${videoPath}/scene-${sceneId}-origin.mp4`;
      tacc.src = `./assets/videos/${videoPath}/scene-${sceneId}-tacc.mp4`;
      origin.load();
      tacc.load();

      buttons.forEach((button) => {
        const active = button.dataset.scene === String(sceneId);
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });

      let ready = 0;
      const startWhenReady = () => {
        ready += 1;
        if (ready === 2) playBoth();
      };
      origin.addEventListener("loadeddata", startWhenReady, { once: true });
      tacc.addEventListener("loadeddata", startWhenReady, { once: true });
    };

    divider.addEventListener("input", () => {
      stage.style.setProperty("--split", `${divider.value}%`);
    });

    origin.addEventListener("timeupdate", () => {
      if (Math.abs(tacc.currentTime - origin.currentTime) > 0.08) {
        tacc.currentTime = Math.min(origin.currentTime, tacc.duration || origin.currentTime);
      }
    });

    origin.addEventListener("ended", () => {
      origin.currentTime = 0;
      tacc.currentTime = 0;
      playBoth();
    });

    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.classList.contains("active")));
      button.addEventListener("click", () => loadScene(button.dataset.scene));
    });

    let initialReady = 0;
    const startInitial = () => {
      initialReady += 1;
      if (initialReady === 2) playBoth();
    };
    origin.addEventListener("loadeddata", startInitial, { once: true });
    tacc.addEventListener("loadeddata", startInitial, { once: true });
  });
})();

