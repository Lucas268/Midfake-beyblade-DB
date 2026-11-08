// Add one object per Bey. Store image files under images/ and use relative paths.
// Each observation is a part-specific note with an optional image and source.
window.MIDFAKE_CATALOG = {
  eras: [
    { id: "pre-hybrid", name: "Pre Hybrid", range: "Pre generation", description: "Individual entries from the Pre hybrid era." },
    { id: "metal-fusion", name: "Metal Fusion", range: "First generation", description: "Individual entries from the Metal Fusion era." },
    { id: "metal-masters", name: "Metal Masters", range: "Second generation", description: "Add individual Metal Masters releases here as you research them." },
    { id: "metal-fury", name: "Metal Fury", range: "4D system", description: "Add individual Metal Fury releases here as you research them." },
    { id: "zero-g", name: "Zero-G", range: "Shogun Steel", description: "Add individual Zero-G releases here as you research them." }
  ],
  beys: [
    {
      id: "Pegasus'105F",
      era: "pre-hybrid",
      name: "Pegasus",
      combo: "105F",
      status: "In progress",
      image: "images/Pegasus/Pegasis105F.png",
      imageAlt: "Add a clear photo of Pegasus 105F",
      summary: "Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "storm-pegasus-105rf",
      era: "metal-fusion",
      name: "Storm Pegasus",
      combo: "105RF",
      status: "Notes added",
      image: "images/Storm Pegasus/s-l1200.jpg",
      imageAlt: "Storm Pegasus 105RF product photo",
      summary: "Storm Pegasus's midfake is easiest to identifty by the performance tip. though a slight shine in the metal wheel might also be a clue, always check the seller for potential obious midfakes in their collection, always ask for a picture of the facebolt code.",
      observations: [
        {
          component: "Performance tip · RF",
          note: "Rubber Flat performance tips are slightly more plastic-feeling than regular Rubber Flat tips, besides that the indentation on the bottom isn't as good as the genuine one.",
          midfakeImage: "images/Storm Pegasus/tip.png",
          midfakeImageAlt: "Bottom view of the Storm Pegasus example being compared",
          genuineImage: "images/Storm Pegasus/09StormPegasis.png",
          genuineImageAlt: "Add a genuine Storm Pegasus RF bottom-view reference",
          sourceLabel: "Video reference",
          sourceUrl: "https://www.youtube.com/watch?v=Q06DvVg3aSI&t"
        }
      ]
    },
    {
      id: "rock-leone-145wb",
      era: "metal-fusion",
      name: "Rock Leone",
      combo: "145WB",
      status: "Notes added",
      image: "images/Rock Leone/RL.jpg",
      imageAlt: "Add a clear photo of Rock Leone 145WB",
      summary: "For Rock Leone the differences are in the facebolt sticker and facebolt code, and the metal wheel finish. Below is a clear comparison of both the metal wheels and stickers. The reason why only these 2 parts are compared is because these are most obvious differences between the midfake and genuine Rock Leone.",
      observations: [
        {
          component: "Facebolt sticker & code",
          note: "The draft reports that some examples have a blurred or pixelated facebolt sticker and recommends asking for a clear code photo. This is a lead to investigate, not proof by itself.",
          midfakeImage: "images/Rock Leone/fb.png",
          midfakeImageAlt: "Add a close-up of the Rock Leone facebolt sticker and code",
          genuineImage: "images/Rock Leone/fb2.png",
          genuineImageAlt: "Add a close-up of the genuine Rock Leone facebolt sticker and code",
          sourceLabel: "Reddit reference listed in draft",
          sourceUrl: "https://www.reddit.com/r/BeybladeMetal/comments/197anff/rock_leone_midfake/",
          sourceLabel2: "Youtube reference",
          sourceUrl2: "https://www.youtube.com/watch?v=L54bS_L9shc"
        },
        {
          component: "Metal wheel",
          note: "The details in this metal wheel are very hard to notice in the pictures, the shine makes it slightly obvious but sometimes new beyblades could still be shiny. I'd recommend checking out this image's source listed in the Youtube video.",
          midfakeImage: "images/Rock Leone/mf.png",
          midfakeImageAlt: "Add a Rock Leone metal wheel comparison photo",
          genuineImage: "images/Rock Leone/legit.png",
          genuineImageAlt: "Add a Rock Leone genuine metal wheel comparison photo",
          sourceLabel: "Youtube reference",
          sourceUrl: "https://www.youtube.com/watch?v=L54bS_L9shc"
        }
      ]
    },
    {
      id: "flame-saggitario-c145s",
      era: "metal-fusion",
      name: "Flame Saggitario",
      combo: "C145S",
      status: "In progress",
      image: "",
      imageAlt: "Add a clear photo of Flame Saggitario C145S",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Dark Wolf D145S",
      era: "metal-fusion",
      name: "Dark Wolf",
      combo: "D145S",
      status: "In progress",
      image: "",
      imageAlt: "Add a clear photo of Dark Wolf D145S",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Dark Bull H145SD",
      era: "metal-fusion",
      name: "Dark Bull",
      combo: "H145SD",
      status: "In progress",
      image: "",
      imageAlt: "Add a clear photo of Dark Bull H145SD",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Storm Aquario 100HF/S",
      era: "metal-fusion",
      name: "Storm Aquario",
      combo: "100HF/S",
      status: "In progress",
      image: "",
      imageAlt: "Add a clear photo of Storm Aquario 100HF/S",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Storm Capricorn M145Q",
      era: "metal-fusion",
      name: "Storm Capricorn",
      combo: "M145Q",
      status: "In progress",
      image: "",
      imageAlt: "Add a clear photo of Storm Capricorn M145Q",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Rock Orso D125B",
      era: "metal-fusion",
      name: "Rock Orso",
      combo: "D125B",
      status: "In progress",
      image: "",
      imageAlt: "Add a clear photo of Rock Orso D125B",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Flame Libra T125ES",
      era: "metal-fusion",
      name: "Flame Libra",
      combo: "T125ES",
      status: "In progress",
      image: "",
      imageAlt: "Add a clear photo of Flame Libra T125ES",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Lightning L-Drago 100HF",
      era: "metal-fusion",
      name: "Lightning L-Drago",
      combo: "100HF",
      status: "In progress",
      image: "",
      imageAlt: "Add a clear photo of Lightning L-Drago 100HF",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Dark Gasher CH120FS",
      era: "metal-fusion",
      name: "Dark Gasher",
      combo: "CH120FS",
      status: "In progress",
      image: "",
      imageAlt: "Add a clear photo of Dark Gasher CH120FS",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Burn Fireblaze 135MS",
      era: "metal-fusion",
      name: "Burn Fireblaze",
      combo: "135MS",
      status: "In progress",
      image: "",
      imageAlt: "Add a clear photo of Burn Fireblaze 135MS",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Earth Eagle 145WD",
      era: "metal-fusion",
      name: "Earth Eagle",
      combo: "145WD",
      status: "In progress",
      image: "",
      imageAlt: "Add a clear photo of Earth Eagle 145WD",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Earth Virgo GB145BS",
      era: "metal-fusion",
      name: "Earth Virgo",
      combo: "GB145BS",
      status: "In progress",
      image: "",
      imageAlt: "Add a clear photo of Earth Virgo GB145BS",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Poison Serpent SW145SD",
      era: "metal-fusion",
      name: "Poison Serpent",
      combo: "SW145SD",
      status: "In progress",
      image: "",
      imageAlt: "Add a clear photo of Poison Serpent SW145SD",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Evil Gemios DF145FS",
      era: "metal-fusion",
      name: "Evil Gemios",
      combo: "DF145FS",
      status: "In progress",
      image: "",
      imageAlt: "Add a clear photo of Evil Gemios DF145FS",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Galaxy Pegasus W105R²F",
      era: "metal-masters",
      name: "Galaxy Pegasus",
      combo: "W105R²F",
      status: "In progress",
      image: "images/Pegasus/GalaxyPegasus105R2F.png",
      imageAlt: "Add a clear photo of Galaxy Pegasus W105R²F",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Big Bang Pegasus F:D (Cosmic Pegasus) F:D",
      era: "metal-fury",
      name: "Big Bang Pegasus F:D (Cosmic Pegasus)",
      combo: "F:D",
      status: "In progress",
      image: "images/Pegasus/BigBangPegasusFD.png",
      imageAlt: "Add a clear photo of Big Bang Pegasus F:D (Cosmic Pegasus)",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Samurai Pegasus W105R²F",
      era: "zero-g",
      name: "Samurai Pegasus",
      combo: "W105R²F",
      status: "In progress",
      image: "images/Pegasus/SamuraiPegasus105R2F.png",
      imageAlt: "Add a clear photo of Samurai Pegasus W105R²F",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    }
  ]
};
