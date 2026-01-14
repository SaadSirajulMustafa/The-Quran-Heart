const SURAH_AYAT_COUNT = {
  "الفاتحة": 7,
  "البقرة": 286,
  "آل عمران": 200,
  "النساء": 176,
  "المائدة": 120,
  "الأنعام": 165,
  "الأعراف": 206,
  "الأنفال": 75,
  "التوبة": 129,
  "يونس": 109,
  "هود": 123,
  "يوسف": 111,
  "الرعد": 43,
  "إبراهيم": 52,
  "الحجر": 99,
  "النحل": 128,
  "الإسراء": 111,
  "الكهف": 110,
  "مريم": 98,
  "طه": 135,
  "الأنبياء": 112,
  "الحج": 78,
  "المؤمنون": 118,
  "النور": 64,
  "الفرقان": 77,
  "الشعراء": 227,
  "النمل": 93,
  "القصص": 88,
  "العنكبوت": 69,
  "الروم": 60,
  "لقمان": 34,
  "السجدة": 30,
  "الأحزاب": 73,
  "سبأ": 54,
  "فاطر": 45,
  "يس": 83,
  "الصافات": 182,
  "ص": 88,
  "الزمر": 75,
  "غافر": 85,
  "فصلت": 54,
  "الشورى": 53,
  "الزخرف": 89,
  "الدخان": 59,
  "الجاثية": 37,
  "الأحقاف": 35,
  "محمد": 38,
  "الفتح": 29,
  "الحجرات": 18,
  "ق": 45,
  "الذاريات": 60,
  "الطور": 49,
  "النجم": 62,
  "القمر": 55,
  "الرحمن": 78,
  "الواقعة": 96,
  "الحديد": 29,
  "المجادلة": 22,
  "الحشر": 24,
  "الممتحنة": 13,
  "الصف": 14,
  "الجمعة": 11,
  "المنافقون": 11,
  "التغابن": 18,
  "الطلاق": 12,
  "التحريم": 12,
  "الملك": 30,
  "القلم": 52,
  "الحاقة": 52,
  "المعارج": 44,
  "نوح": 28,
  "الجن": 28,
  "المزمل": 20,
  "المدثر": 56,
  "القيامة": 40,
  "الإنسان": 31,
  "المرسلات": 50,
  "النبأ": 40,
  "النازعات": 46,
  "عبس": 42,
  "التكوير": 29,
  "الإنفطار": 19,
  "المطففين": 36,
  "الإنشقاق": 25,
  "البروج": 22,
  "الطارق": 17,
  "الأعلى": 19,
  "الغاشية": 26,
  "الفجر": 30,
  "البلد": 20,
  "الشمس": 15,
  "الليل": 21,
  "الضحى": 11,
  "الشرح": 8,
  "التين": 8,
  "العلق": 19,
  "القدر": 5,
  "البينة": 8,
  "الزلزلة": 8,
  "العاديات": 11,
  "القارعة": 11,
  "التكاثر": 8,
  "العصر": 3,
  "الهمزة": 9,
  "الفيل": 5,
  "قريش": 4,
  "الماعون": 7,
  "الكوثر": 3,
  "الكافرون": 6,
  "النصر": 3,
  "المسد": 5,
  "الإخلاص": 4,
  "الفلق": 5,
  "الناس": 6
};

fetch("./heart.svg")
  .then((res) => res.text())
  .then((svg) => {
    const container = document.getElementById("svg-container");
    container.innerHTML = svg;

    const groups = container.querySelectorAll(".section-group");
    const STORAGE_KEY = "quran-heart-active-sections";

    const THEME_KEY = "quran-heart-theme";

    const themeBtn = document.getElementById("theme-btn");
    const themePanel = document.getElementById("theme-panel");

    const themeInputs = {
      bg: document.getElementById("bg-color"),
      surah: document.getElementById("surah-color"),
      text: document.getElementById("text-color"),
      surahActive: document.getElementById("surah-active-color"),
      textActive: document.getElementById("text-active-color"),
    };

    const cssVars = {
      bg: "--bg-color",
      surah: "--surah-color",
      text: "--text-color",
      surahActive: "--surah-active-color",
      textActive: "--text-active-color",
    };

    const savedTheme = JSON.parse(localStorage.getItem(THEME_KEY) || "{}");
    Object.keys(cssVars).forEach((key) => {
      if (savedTheme[key]) {
        document.documentElement.style.setProperty(
          cssVars[key],
          savedTheme[key]
        );
        if (themeInputs[key]) {
          themeInputs[key].value = savedTheme[key];
        }
      }
    });

    if (themeBtn && themePanel) {
      themeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        themePanel.classList.toggle("active");
      });
    }

    Object.keys(themeInputs).forEach((key) => {
      const input = themeInputs[key];
      if (!input) return;

      input.addEventListener("input", (e) => {
        const value = e.target.value;
        document.documentElement.style.setProperty(cssVars[key], value);

        const currentTheme =
          JSON.parse(localStorage.getItem(THEME_KEY)) || {};
        currentTheme[key] = value;
        localStorage.setItem(THEME_KEY, JSON.stringify(currentTheme));
      });
    });

    document.addEventListener("click", (e) => {
      if (
        themePanel &&
        !e.target.closest(".theme-panel") &&
        !e.target.closest("#theme-btn")
      ) {
        themePanel.classList.remove("active");
      }
    });

    function updateStats() {
    const total = groups.length;
    let completed = 0;

    groups.forEach((g) => {
      const path = g.querySelector(".section");
      if (path && path.classList.contains("active")) {
        completed++;
      }
    });

    const remaining = total - completed;
    const completedPercentage =
      total === 0 ? 0 : Math.round((completed / total) * 100);
    const remainingPercentage = 100 - completedPercentage;

    let completedAyat = 0;

    groups.forEach((g) => {
      const path = g.querySelector(".section");
      const textElement = g.querySelector(".section-text");
      if (!path || !textElement) return;

      let surahName = textElement.textContent
        .replace("سورة", "")
        .trim();

      if (
        path.classList.contains("active") &&
        SURAH_AYAT_COUNT[surahName]
      ) {
        completedAyat += SURAH_AYAT_COUNT[surahName];
      }
    });

    const ayatProgress = Math.round((completedAyat / 6236) * 100);

    document.getElementById(
      "stat-completed"
    ).textContent = `${completed} سورة`;

    document.getElementById(
      "stat-remaining"
    ).textContent = `${remaining} سورة`;

    document.getElementById(
      "stat-progress-bar"
    ).style.width = `${ayatProgress}%`;

    document.getElementById(
      "stat-percentage"
    ).textContent =
      `تم حفظ ${ayatProgress}% من القرآن الكريم والمتبقي ${100 - ayatProgress}%`;
  }

    let scale = 1;
    let pointX = 0;
    let pointY = 0;
    let startX = 0;
    let startY = 0;
    let isPanning = false;
    let isDragging = false;

    const svgElement = container.querySelector("svg");

    function setTransform() {
      svgElement.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
    }

    const zoomInBtn = document.getElementById("zoom-in");
    const zoomOutBtn = document.getElementById("zoom-out");
    const zoomResetBtn = document.getElementById("zoom-reset");

    if (zoomInBtn) {
      zoomInBtn.addEventListener("click", () => {
        scale = Math.min(scale + 0.2, 4);
        setTransform();
      });
    }

    if (zoomOutBtn) {
      zoomOutBtn.addEventListener("click", () => {
        scale = Math.max(scale - 0.2, 0.5);
        setTransform();
      });
    }

    if (zoomResetBtn) {
      zoomResetBtn.addEventListener("click", () => {
        scale = 1;
        pointX = 0;
        pointY = 0;
        setTransform();
      });
    }

    container.addEventListener("mousedown", (e) => {
      if (
        e.target.closest(".zoom-btn") ||
        e.target.closest(".download-btn") ||
        e.target.closest(".modal")
      )
        return;
      isPanning = true;
      isDragging = false;
      startX = e.clientX - pointX;
      startY = e.clientY - pointY;
      svgElement.style.cursor = "grabbing";
    });

    container.addEventListener("mousemove", (e) => {
      if (!isPanning) return;
      e.preventDefault();
      if (
        Math.abs(e.clientX - startX - pointX) > 5 ||
        Math.abs(e.clientY - startY - pointY) > 5
      ) {
        isDragging = true;
      }
      pointX = e.clientX - startX;
      pointY = e.clientY - startY;
      setTransform();
    });

    container.addEventListener("mouseup", () => {
      isPanning = false;
      svgElement.style.cursor = "grab";
      setTimeout(() => {
        isDragging = false;
      }, 50);
    });

    container.addEventListener("mouseleave", () => {
      isPanning = false;
      svgElement.style.cursor = "grab";
      isDragging = false;
    });

    container.addEventListener("wheel", (e) => {
      e.preventDefault();
      const zoomSensitivity = 0.001;
      const delta = -e.deltaY * zoomSensitivity;
      scale = Math.min(Math.max(0.5, scale + delta), 4);
      setTransform();
    });

    container.addEventListener(
      "touchstart",
      (e) => {
        if (
          e.target.closest(".zoom-btn") ||
          e.target.closest(".download-btn") ||
          e.target.closest(".modal")
        )
          return;
        if (e.touches.length === 1) {
          isPanning = true;
          isDragging = false;
          startX = e.touches[0].clientX - pointX;
          startY = e.touches[0].clientY - pointY;
        }
      },
      { passive: false }
    );

    container.addEventListener(
      "touchmove",
      (e) => {
        if (!isPanning) return;
        if (e.touches.length === 1) {
          e.preventDefault();
          isDragging = true;
          pointX = e.touches[0].clientX - startX;
          pointY = e.touches[0].clientY - startY;
          setTransform();
        }
      },
      { passive: false }
    );

    container.addEventListener("touchend", () => {
      isPanning = false;
      setTimeout(() => {
        isDragging = false;
      }, 50);
    });

    const savedSelections = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    groups.forEach((group) => {
      const textElement = group.querySelector(".section-text");
      if (textElement) {
        const name = textElement.textContent.trim();
        if (savedSelections.includes(name)) {
          const paths = group.querySelectorAll(".section");
          paths.forEach((p) => p.classList.add("active"));
        }
      }
    });

    updateStats();

    groups.forEach((group) => {
      group.addEventListener("click", (e) => {
        if (isDragging) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        const paths = group.querySelectorAll(".section");
        const isActive = paths[0].classList.contains("active");

        const textElement = group.querySelector(".section-text");
        let name = "";
        if (textElement) {
          name = textElement.textContent.trim();
        }

        paths.forEach((p) => {
          p.classList.toggle("active", !isActive);
        });

        if (name) {
          let selections = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || "[]"
          );
          if (!isActive) {
            if (!selections.includes(name)) selections.push(name);
          } else {
            selections = selections.filter((item) => item !== name);
          }
          localStorage.setItem(STORAGE_KEY, JSON.stringify(selections));
        }

        updateStats();
      });
    });

    const resetBtn = document.getElementById("reset-progress");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("هل أنت متأكد أنك تريد حذف كل ما تم حفظه؟")) {
          localStorage.removeItem(STORAGE_KEY);
          groups.forEach((group) => {
            const paths = group.querySelectorAll(".section");
            paths.forEach((p) => p.classList.remove("active"));
          });
          updateStats();
        }
      });
    }

    const downloadDesktop = document.getElementById("download-desktop");
    const downloadMobile = document.getElementById("download-mobile");
    const downloadCustom = document.getElementById("download-custom");
    const modal = document.getElementById("custom-modal");
    const modalCancel = document.getElementById("modal-cancel");
    const modalDownload = document.getElementById("modal-download");
    const customWidth = document.getElementById("custom-width");
    const customHeight = document.getElementById("custom-height");

    customWidth.value = window.screen.width;
    customHeight.value = window.screen.height;

    function downloadSVG(width, height) {
      const svgElement = container.querySelector("svg");
      if (!svgElement) return;

      const clonedSVG = svgElement.cloneNode(true);
      const bbox = svgElement.getBBox();
      const svgWidth = bbox.width;
      const svgHeight = bbox.height;
      const svgAspectRatio = svgWidth / svgHeight;

      const targetAspectRatio = width / height;
      let scaledWidth, scaledHeight;

      if (svgAspectRatio > targetAspectRatio) {
        scaledWidth = width * 0.8;
        scaledHeight = scaledWidth / svgAspectRatio;
      } else {
        scaledHeight = height * 0.8;
        scaledWidth = scaledHeight * svgAspectRatio;
      }

      const x = (width - scaledWidth) / 2;
      const y = (height - scaledHeight) / 2;

      clonedSVG.setAttribute(
        "viewBox",
        `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`
      );
      clonedSVG.setAttribute("width", scaledWidth);
      clonedSVG.setAttribute("height", scaledHeight);

      const styles = getComputedStyle(document.documentElement);

      const surahColor = styles.getPropertyValue("--surah-color").trim();
      const surahActiveColor = styles.getPropertyValue("--surah-active-color").trim();
      const textColor = styles.getPropertyValue("--text-color").trim();
      const textActiveColor = styles.getPropertyValue("--text-active-color").trim();

      const styleElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "style"
      );

      styleElement.textContent = `
        .section { fill: ${surahColor}; }
        .section.active { fill: ${surahActiveColor}; }
        .section-text {
          fill: ${textColor};
          font-size: 14px;
          font-weight: bold;
        }
        .section.active + .section-text {
          fill: ${textActiveColor};
        }
      `;

      clonedSVG.insertBefore(styleElement, clonedSVG.firstChild);


      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");

      const bgColor = getComputedStyle(document.documentElement).getPropertyValue("--bg-color").trim();

      ctx.fillStyle = bgColor || "#222831";
      ctx.fillRect(0, 0, width, height);

      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(clonedSVG);
      const blob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const img = new Image();

      img.onload = function () {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

        canvas.toBlob(
          function (blob) {
            const link = document.createElement("a");
            link.download = `quran-heart-${width}x${height}.png`;
            link.href = URL.createObjectURL(blob);
            link.click();
            URL.revokeObjectURL(link.href);
          },
          "image/png",
          1.0
        );

        URL.revokeObjectURL(url);
      };

      img.src = url;
    }

    downloadDesktop.addEventListener("click", () => {
      downloadSVG(1920, 1080);
    });

    downloadMobile.addEventListener("click", () => {
      downloadSVG(1080, 1920);
    });

    downloadCustom.addEventListener("click", () => {
      modal.classList.add("active");
    });

    modalCancel.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modalDownload.addEventListener("click", () => {
      const width = parseInt(customWidth.value);
      const height = parseInt(customHeight.value);

      if (width >= 100 && width <= 10000 && height >= 100 && height <= 10000) {
        downloadSVG(width, height);
        modal.classList.remove("active");
      } else {
        alert("Please enter valid dimensions between 100 and 10000 pixels.");
      }
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });