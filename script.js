const SURAH_AYAT_COUNT_AR = {
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

const SURAH_PAGE_COUNT_EN = {
  "Al-Fatiha": 1,
  "Al-Baqarah": 48,
  "Ale-Imran": 26.93,
  "An-Nisa": 29.4,
  "Al-Ma'ida": 21.67,
  "Al-An'am": 23.0,
  "Al-A'raf": 26.0,
  "Al-Anfal": 10.0,
  "Al-Taubah": 20.93,
  "Yunus": 13.47,
  "Hud": 14.13,
  "Yusuf": 13.47,
  "Ar-Ra'd": 6.13,
  "Ibrahim": 6.87,
  "Al-Hijr": 5.4,
  "An-Nahl": 14.6,
  "Al-Isra": 11.6,
  "Al-Kahf": 11.4,
  "Maryam": 7.27,
  "Ta-Ha": 9.73,
  "Al-Anbiya": 9.93,
  "Al-Hajj": 10.0,
  "Al-Mu'minun": 8.0,
  "An-Noor": 9.73,
  "Al-Furqan": 7.27,
  "Ash-Shuara": 10.0,
  "An-Naml": 8.53,
  "Al-Qasas": 11.0,
  "Al-Ankaboot": 8.13,
  "Ar-Room": 6.4,
  "Luqman": 3.93,
  "As-Sajda": 3.0,
  "Al-Ahzab": 10.07,
  "Saba": 6.47,
  "Fatir": 5.73,
  "Ya-Seen": 5.73,
  "As-Saffat": 7.0,
  "Saad": 5.27,
  "Az-Zumar": 8.93,
  "Ghafir": 9.87,
  "Fussilat": 6.0,
  "Ash-Shura": 6.27,
  "Az-Zukhruf": 6.73,
  "Ad-Dukhan": 2.93,
  "Al-Jathiya": 3.47,
  "Al-Ahqaf": 4.53,
  "Muhammad": 4.07,
  "Al-Fath": 4.4,
  "Al-Hujraat": 2.6,
  "Qaf": 2.73,
  "Adh-Dhariyat": 2.73,
  "At-Tur": 2.47,
  "An-Najm": 2.67,
  "Al-Qamar": 2.67,
  "Ar-Rahman": 3.13,
  "Al-Waqia": 3.27,
  "Al-Hadid": 4.33,
  "Al-Mujadila": 3.4,
  "Al-Hashr": 3.53,
  "Al-Mumtahana": 2.47,
  "As-Saff": 1.6,
  "Al-Jumua": 1.4,
  "Al-Munafiqoon": 1.53,
  "At-Taghabun": 2.0,
  "At-Talaq": 2.07,
  "At-Tahrim": 2.0,
  "Al-Mulk": 2.33,
  "Al-Qalam": 2.27,
  "Al-Haaqqa": 1.93,
  "Al-Maarij": 1.73,
  "Nooh": 1.73,
  "Al-Jinn": 2.0,
  "Al-Muzzammil": 1.47,
  "Al-Muddaththir": 1.87,
  "Al-Qiyama": 1.27,
  "Al-Insan": 1.8,
  "Al-Mursalat": 1.6,
  "An-Naba": 1.47,
  "An-Naziat": 1.47,
  "Abasa": 1.13,
  "At-Takwir": 0.93,
  "Al-Infitar": 0.73,
  "Al-Mutaffifin": 1.4,
  "Al-Inshiqaq": 0.93,
  "Al-Burooj": 0.93,
  "At-Tariq": 0.6,
  "Al-Ala": 0.67,
  "Al-Ghashiya": 0.87,
  "Al-Fajr": 1.2,
  "Al-Balad": 0.73,
  "Ash-Shams": 0.6,
  "Al-Lail": 0.67,
  "Ad-Dhuha": 0.47,
  "Ash-Sharh": 0.33,
  "At-Tin": 0.4,
  "Al-Alaq": 0.67,
  "Al-Qadr": 0.33,
  "Al-Bayyina": 0.8,
  "Al-Zalzala": 0.4,
  "Al-Adiyaat": 0.47,
  "Al-Qaria": 0.47,
  "At-Takaathur": 0.33,
  "Al-Asr": 0.27,
  "Al-Humaza": 0.4,
  "Al-Feel": 0.33,
  "Quraish": 0.33,
  "Al-Maun": 0.4,
  "Al-Kawthar": 0.27,
  "Al-Kafiroon": 0.33,
  "An-Nasr": 0.33,
  "Al-Masad": 0.33,
  "Al-Ikhlaas": 0.27,
  "Al-Falaq": 0.33,
  "An-Naas": 0.4
}

//Extracting values once to save memory/processing
const pageValues = Object.values(SURAH_PAGE_COUNT_EN);
const ayahValues = Object.values(SURAH_AYAT_COUNT_AR);

const SURAH_PAGE_COUNT_AR = Object.fromEntries(
  Object.keys(SURAH_AYAT_COUNT_AR).map((key, index) => [key, pageValues[index]])
);

const SURAH_AYAT_COUNT_EN = Object.fromEntries(
  Object.keys(SURAH_PAGE_COUNT_EN).map((key, index) => [key, ayahValues[index]])
);


// Calculate total ayats dynamically
// .reduce() sums them up starting from 0
const TOTAL_AYATS = ayahValues.reduce((total, count) => total + count, 0);

// Calculate total pages dynamically
const TOTAL_PAGES = Math.round(pageValues.reduce((total, count) => total + count, 0), 0); // 604 pages

fetch("./heart.svg")
  .then((res) => {
    if (!res.ok) throw new Error("Failed to load SVG");
    return res.text();
  })
  .then((svg) => {
    const container = document.getElementById("svg-container");
    container.innerHTML = svg;

    // --- DOM Elements & Constants ---
    const groups = container.querySelectorAll(".section-group");
    const THEME_KEY = "quran-heart-theme";

    const themeBtn = document.getElementById("theme-btn");
    const themePanel = document.getElementById("theme-panel");

    // --- Memorization Level State ---
    let currentLevel = null;
    const levelButtons = {
      good: document.getElementById('level-good'),
      middle: document.getElementById('level-middle'),
      weak: document.getElementById('level-weak')
    };

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

    // ==========================================
    //              THEME LOGIC
    // ==========================================
    const savedTheme = JSON.parse(localStorage.getItem(THEME_KEY) || "{}");
    Object.keys(cssVars).forEach((key) => {
      if (savedTheme[key]) {
        document.documentElement.style.setProperty(cssVars[key], savedTheme[key]);
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
        const currentTheme = JSON.parse(localStorage.getItem(THEME_KEY)) || {};
        currentTheme[key] = value;
        localStorage.setItem(THEME_KEY, JSON.stringify(currentTheme));
      });
    });

    document.addEventListener("click", (e) => {
      if (themePanel && !e.target.closest(".theme-panel") && !e.target.closest("#theme-btn")) {
        themePanel.classList.remove("active");
      }
    });

    // ==========================================
    //           STATS MODE TOGGLE
    // ==========================================
    const modeToggleBtn = document.getElementById('stats-mode-toggle');
    const modeLabel = document.getElementById('mode-label');
    const modeIcon = document.getElementById('mode-icon');

    // Default to 'page' if not set
    let statsMode = localStorage.getItem('statsMode') || 'page';

    function updateModeDisplay() {
      if (statsMode === 'page') {
        modeLabel.textContent = 'حساب بالصفحات';
        modeIcon.textContent = '📄';
      } else {
        modeLabel.textContent = 'حساب بالآيات';
        modeIcon.textContent = '🔢';
      }
      updateStats();
    }

    if (modeToggleBtn) {
      modeToggleBtn.addEventListener('click', () => {
        statsMode = statsMode === 'page' ? 'ayat' : 'page';
        localStorage.setItem('statsMode', statsMode);
        updateModeDisplay();
      });
    }

    // ==========================================
    //            STATISTICS LOGIC
    // ==========================================
    function updateStats() {
      const total = groups.length;
      let completedSurahs = 0;
      let completedAyat = 0;
      let completedPage = 0;

      groups.forEach((g) => {
        const path = g.querySelector(".section");
        const textElement = g.querySelector(".section-text");
        if (!path || !textElement) return;

        // Count as completed if it has any level OR the legacy 'active' class
        const isDone = path.classList.contains("active") ||
          path.classList.contains("level-good") ||
          path.classList.contains("level-middle") ||
          path.classList.contains("level-weak");

        if (isDone) {
          completedSurahs++;
          let surahName = textElement.textContent.replace("سورة", "").trim();
          // Arabic Ayat Count 
          if (SURAH_AYAT_COUNT_AR[surahName]) {
            completedAyat += SURAH_AYAT_COUNT_AR[surahName];
          }
          // Arabic Page Count
          if (SURAH_PAGE_COUNT_AR[surahName]) {
            completedPage += SURAH_PAGE_COUNT_AR[surahName];
          }
        }
      });

      const remaining = total - completedSurahs;
      const percentage = (statsMode === 'page')
        ? Math.round((completedPage / TOTAL_PAGES) * 100)
        : Math.round((completedAyat / TOTAL_AYATS) * 100);
      document.getElementById("stat-completed").textContent = `${completedSurahs} سورة`;
      document.getElementById("stat-remaining").textContent = `${remaining} سورة`;
      document.getElementById("stat-progress-bar").style.width = `${percentage}%`;
      document.getElementById("stat-percentage").textContent =
        `تم حفظ ${percentage}% من القرآن الكريم والمتبقي ${100 - percentage}%`;
    }

    const resetBtn = document.getElementById('reset-progress');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        showModal('custom', {
          title: 'إعادة ضبط',
          message: 'هل أنت متأكد من رغبتك في إعادة ضبط تقدم حفظك بالكامل؟ لا يمكن التراجع عن هذا الإجراء.',
          onConfirm: () => {
            groups.forEach(g => {
              const path = g.querySelector('.section');
              if (path) {
                path.classList.remove('active', 'level-good', 'level-middle', 'level-weak');
              }
            });
            saveAllState();
            updateModeDisplay();
          },
          icon: '⚠️',
          buttons: ['إلغاء', 'تأكيد'],
          color: 'rgb(244, 67, 54)'
        });
      });
    }

    // ==========================================
    //           ZOOM & PAN LOGIC
    // ==========================================
    let scale = 1;
    let pointX = 0; let pointY = 0;
    let startX = 0; let startY = 0;
    let isPanning = false; let isDragging = false;
    const svgElement = container.querySelector("svg");

    function setTransform() {
      svgElement.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
    }

    const zoomInBtn = document.getElementById("zoom-in");
    const zoomOutBtn = document.getElementById("zoom-out");
    const zoomResetBtn = document.getElementById("zoom-reset");

    if (zoomInBtn) zoomInBtn.addEventListener("click", () => { scale = Math.min(scale + 0.2, 4); setTransform(); });
    if (zoomOutBtn) zoomOutBtn.addEventListener("click", () => { scale = Math.max(scale - 0.2, 0.5); setTransform(); });
    if (zoomResetBtn) zoomResetBtn.addEventListener("click", () => { scale = 1; pointX = 0; pointY = 0; setTransform(); });

    container.addEventListener("mousedown", (e) => {
      if (e.target.closest(".zoom-btn") || e.target.closest(".download-btn") || e.target.closest(".modal")) return;
      isPanning = true; isDragging = false;
      startX = e.clientX - pointX; startY = e.clientY - pointY;
      svgElement.style.cursor = "grabbing";
    });

    container.addEventListener("mousemove", (e) => {
      if (!isPanning) return;
      e.preventDefault();
      if (Math.abs(e.clientX - startX - pointX) > 5 || Math.abs(e.clientY - startY - pointY) > 5) isDragging = true;
      pointX = e.clientX - startX; pointY = e.clientY - startY;
      setTransform();
    });

    container.addEventListener("mouseup", () => {
      isPanning = false;
      svgElement.style.cursor = "grab";
      setTimeout(() => { isDragging = false; }, 50);
    });

    // --- Mouse Wheel Zoom Handler ---
    container.addEventListener("wheel", (e) => {
      e.preventDefault();
      const zoomSensitivity = 0.001;
      const delta = -e.deltaY * zoomSensitivity;
      const newScale = Math.min(Math.max(0.5, scale + delta), 4);

      // Zoom towards mouse position
      scale = newScale;
      setTransform();
    }, { passive: false });

    // --- Touch Gestures (Mobile) Handler ---
    container.addEventListener("touchstart", (e) => {
      // Don't pan if we're clicking buttons or modals
      if (
        e.target.closest(".zoom-btn") ||
        e.target.closest(".download-btn") ||
        e.target.closest(".modal") ||
        e.target.closest(".level-btn")
      ) return;

      if (e.touches.length === 1) {
        isPanning = true;
        isDragging = false;
        startX = e.touches[0].clientX - pointX;
        startY = e.touches[0].clientY - pointY;
      }
    }, { passive: false });

    container.addEventListener("touchmove", (e) => {
      if (!isPanning) return;
      if (e.touches.length === 1) {
        e.preventDefault(); // Prevents page from scrolling while moving the heart
        isDragging = true;
        pointX = e.touches[0].clientX - startX;
        pointY = e.touches[0].clientY - startY;
        setTransform();
      }
    }, { passive: false });

    container.addEventListener("touchend", () => {
      isPanning = false;
      setTimeout(() => {
        isDragging = false;
      }, 50);
    });

    // ==========================================
    //          INTERACTION HANDLERS
    // ==========================================
    Object.keys(levelButtons).forEach(level => {
      if (!levelButtons[level]) return;
      levelButtons[level].addEventListener('click', () => {
        if (currentLevel === level) {
          currentLevel = null;
          levelButtons[level].classList.remove('active');
        } else {
          Object.values(levelButtons).forEach(btn => btn.classList.remove('active'));
          currentLevel = level;
          levelButtons[level].classList.add('active');
        }
      });
    });

    // --- Save State to LocalStorage ---
    function saveAllState() {
      const state = {};
      groups.forEach(group => {
        const path = group.querySelector('.section');
        if (path && path.id) {
          state[path.id] = Array.from(path.classList);
        }
      });
      localStorage.setItem('quranHeartState', JSON.stringify(state));
    }

    // --- Section Click Handler ---
    groups.forEach((group) => {
      group.addEventListener("click", (e) => {
        if (isDragging) return;
        const paths = group.querySelectorAll(".section");

        if (currentLevel) {
          const hasThisLevel = paths[0].classList.contains(`level-${currentLevel}`);
          paths.forEach(p => {
            p.classList.remove('level-good', 'level-middle', 'level-weak', 'active');
            if (!hasThisLevel) p.classList.add(`level-${currentLevel}`);
          });
        } else {
          const isActive = paths[0].classList.contains("active");
          paths.forEach(p => {
            p.classList.remove('level-good', 'level-middle', 'level-weak');
            p.classList.toggle("active", !isActive);
          });
        }
        updateModeDisplay();
        saveAllState();
      });
    });

    // ==========================================
    //        DOWNLOAD & EXPORT LOGIC
    // ==========================================
    const downloadDesktop = document.getElementById("download-desktop");
    const downloadMobile = document.getElementById("download-mobile");
    const downloadCustom = document.getElementById("download-custom");
    const modal = document.getElementById("custom-modal");
    const modalCancel = document.getElementById("modal-cancel");
    const modalDownload = document.getElementById("modal-download");
    const customWidth = document.getElementById("custom-width");
    const customHeight = document.getElementById("custom-height");

    // --- Load Saved State on Startup ---
    const savedState = JSON.parse(localStorage.getItem('quranHeartState') || "{}");
    groups.forEach(g => {
      const path = g.querySelector('.section');
      if (path && path.id && savedState[path.id]) {
        path.classList.add(...savedState[path.id]);
      }
    });

    updateModeDisplay();

    customWidth.value = window.screen.width;
    customHeight.value = window.screen.height;

    /**
     * Generates a PNG from the SVG and triggers a download.
     * @param {number} width - Target width in pixels
     * @param {number} height - Target height in pixels
     */
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

      // Calculate scaling to fit the SVG within the target dimensions (contain)
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

      // Inject styles directly into SVG for Canvas rendering
      const styleElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "style"
      );

      styleElement.textContent = `
        .section {
          fill: ${surahColor};
          transition: fill 0.25s ease;
        }
        .section.active {
          fill: ${surahActiveColor};
        }
        .section.level-good {
          fill: #4caf50 !important;
        }
        .section.level-middle {
          fill: #ffc107 !important;
        }
        .section.level-weak {
          fill: #f44336 !important;
        }
        .section-text {
          fill: ${textColor};
          font-size: 14px;
          font-weight: bold;
        }
        .section.active + .section-text {
          fill: ${textActiveColor};
        }
        .section.level-good + .section-text,
        .section.level-middle + .section-text,
        .section.level-weak + .section-text {
          fill: #ffffff;
        }
      `;

      clonedSVG.insertBefore(styleElement, clonedSVG.firstChild);

      // Create Canvas and Draw
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
        // Draw image centered
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
        showModal('warning', {
          title: 'Invalid Input',
          message: 'Please enter valid dimensions between 100 and 10000 pixels.'
        });
      }
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  })
  .catch((error) => {
    console.error("Error initializing Quran Heart:", error);
  });

// ==========================================
//          Confirmation Modal
// ==========================================
/**
* Main modal function - 3 types: confirm, warning, custom
* @param {string} type - 'confirm', 'warning', or 'custom'
* @param {object} options - Configuration
*/
function showModal(type, options = {}) {
  return new Promise((resolve) => {
    // Destructure options with default values
    const {
      title = 'Notification',
      message = '',
      icon = null,
      color = null,
      timeout = null,
      onConfirm = null,
      onCancel = null,
      buttons,
      direction
    } = options;

    // Configure modal appearance based on type
    let config;
    switch (type) {
      case 'confirm':
        config = { icon: '❓', buttons: ['Cancel', 'Confirm'] };
        break;
      case 'warning':
        config = { icon: '⚠️', buttons: ['OK'] };
        break;
      case 'custom':
        config = {
          icon: icon || 'ℹ️',
          buttons: buttons || ['OK'],
          customColor: color
        };
        break;
      default:
        config = { icon: 'ℹ️', buttons: ['OK'] };
    }

    // Instantiate modal from HTML template
    const template = document.getElementById('modal-template');
    const clone = template.content.cloneNode(true);
    const overlay = clone.querySelector('.modal-overlay');
    const container = clone.querySelector('.modal-container');
    const iconEl = clone.querySelector('.modal-icon');
    const titleEl = clone.querySelector('.modal-title');
    const messageEl = clone.querySelector('.modal-message');
    const buttonsEl = clone.querySelector('.modal-buttons');

    // Apply styling classes
    container.classList.add(type);

    // Criteria: Auto-detect direction based on content if not specified
    // If text contains Arabic characters, use RTL (default). If not, use LTR.
    const hasArabic = /[\u0600-\u06FF]/.test(title + message);
    const isLtr = direction === 'ltr' || (!direction && !hasArabic);

    if (isLtr) {
      container.classList.add('ltr');
    }

    // Apply custom border color if provided
    if (type === 'custom' && config.customColor) {
      container.style.borderTopColor = config.customColor;
    }

    // Set content
    iconEl.textContent = config.icon;
    titleEl.textContent = title;
    messageEl.textContent = message;

    // Generate action buttons dynamically
    config.buttons.forEach((btnText, index) => {
      const btn = document.createElement('button');
      btn.className = 'modal-btn';
      btn.textContent = btnText;

      // LOGIC: The last button in the array is always the "Primary" (Confirm) button
      const isPrimary = index === config.buttons.length - 1;
      btn.classList.add(isPrimary ? 'primary' : 'secondary');

      btn.onclick = () => {
        // The primary action is determined by position, not text, to support multiple languages.
        if (isPrimary && onConfirm) onConfirm();
        else if (!isPrimary && onCancel) onCancel();

        // Resolve promise for 'confirm' type modals
        if (type === 'confirm') resolve(isPrimary);

        closeModal(overlay);
      };

      buttonsEl.appendChild(btn);
    });

    // Add to DOM
    document.body.appendChild(overlay);

    // Handle auto-close timer
    if (timeout) {
      setTimeout(() => {
        if (document.body.contains(overlay)) {
          closeModal(overlay);
          if (type === 'confirm') resolve(false);
        }
      }, timeout);
    }

    // Close on overlay click
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
        if (type === 'confirm') resolve(false);
      }
    });

    // Handle Escape key press
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        closeModal(overlay);
        if (type === 'confirm') resolve(false);
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
  });
}

function closeModal(overlay) {
  // Animate out before removing from DOM
  overlay.classList.add('closing');
  setTimeout(() => overlay.remove(), 300);
}
//         End Modal
// ==============================