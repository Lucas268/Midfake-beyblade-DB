// Add one object per Bey. Store image files under images/ and use relative paths.
// Each observation is a part-specific note with an optional image and source.
window.MIDFAKE_CATALOG = {
  eras: [
    { id: "pre-hybrid", name: "Pre Hybrid", range: "Pre generation", description: "Individual entries from the Pre hybrid era." },
    { id: "metal-fusion", name: "Metal Fusion", range: "First generation", description: "Individual entries from the Metal Fusion era." },
    { id: "metal-masters", name: "Metal Masters", range: "Second generation", description: "Add individual Metal Masters releases here as you research them." },
    { id: "metal-fury", name: "Metal Fury", range: "4D system", description: "Add individual Metal Fury releases here as you research them." },
    { id: "zero-g", name: "Zero-G", range: "Shogun Steel", description: "Add individual Zero-G releases here as you research them." },
    { id: "special-variants", name: "Special Variants", range: "Special Variants", description: "Recolors and limited variants of released beyblades" }
  ],
  beys: [
    {
      id: "Pegasus'105F",
      era: "pre-hybrid",
      name: "Pegasus",
      combo: "105F",
      status: "In progress",
      image: "images/Pegasus/Pegasis105F.webp",
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
      summary: "Storm Pegasus's midfake is easiest to identifty by the performance tip. though a slight shine in the metal wheel might also be a clue, always check the seller for potential obvious midfakes in their collection, always ask for a picture of the facebolt code.",
      observations: [
        {
          component: "Performance tip · RF",
          note: "Rubber Flat performance tips are slightly more plastic-feeling than regular Rubber Flat tips, besides that the indentation on the bottom isn't as good as the genuine one.",
          midfakeImage: "images/Storm Pegasus/tip.webp",
          midfakeImageAlt: "Bottom view of the Storm Pegasus example being compared",
          genuineImage: "images/Storm Pegasus/09StormPegasis.webp",
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
          midfakeImage: "images/Rock Leone/fb.webp",
          midfakeImageAlt: "Add a close-up of the Rock Leone facebolt sticker and code",
          genuineImage: "images/Rock Leone/fb2.webp",
          genuineImageAlt: "Add a close-up of the genuine Rock Leone facebolt sticker and code",
          sourceLabel: "Reddit reference listed in draft",
          sourceUrl: "https://www.reddit.com/r/BeybladeMetal/comments/197anff/rock_leone_midfake/",
          sourceLabel2: "Youtube reference",
          sourceUrl2: "https://www.youtube.com/watch?v=L54bS_L9shc"
        },
        {
          component: "Rock Metal wheel",
          note: "The details in this metal wheel are very hard to notice in the pictures, the shine makes it slightly obvious but sometimes new beyblades could still be shiny. I'd recommend checking out this image's source listed in the Youtube video.",
          midfakeImage: "images/Rock Leone/mf.webp",
          midfakeImageAlt: "Add a Rock Leone metal wheel comparison photo",
          genuineImage: "images/Rock Leone/legit.webp",
          genuineImageAlt: "Add a Rock Leone genuine metal wheel comparison photo",
          sourceLabel: "Youtube reference",
          sourceUrl: "https://www.youtube.com/watch?v=L54bS_L9shc"
        }
      ]
    },
    {
      id: "flame-sagittario-c145s",
      era: "metal-fusion",
      name: "Flame Sagittario",
      combo: "C145S",
      status: "Notes added",
      image: "images/Flame Sagittario/FlameSagittario.webp",
      imageAlt: "Add a clear photo of Flame Sagittario C145S",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: [

        {
          component: "Packaging",
          note: "The packaging for this beyblade has a slightly more faded color than the genuine one.",
          midfakeImage: "images/Flame Sagittario/MidfakeBox.webp",
          midfakeImageAlt: "Add a photo of the Flame Sagittario packaging",
          genuineImage: "images/Flame Sagittario/GenuineBox.webp",
          genuineImageAlt: "Add a photo of the genuine Flame Sagittario packaging",
          sourceLabel: "Reddit reference listed in draft",
          sourceUrl: "https://www.reddit.com/r/BeybladeMetal/comments/zxl5t2/flame_sagittario_midfake_takara_tomyhasbro/?tl=sv"
        },
        {
          component: "Facebolt sticker",
          note: "The midfake has a noticable difference in the facebolt sticker, it has yellow inside the eyes of the saggitarius, while the genuine one only has a solid orange color, making this one nice and easy to see.",
          midfakeImage: "images/Flame Sagittario/mid.webp",
          midfakeImageAlt: "Add a close-up of the Flame Sagittario facebolt sticker",
          genuineImage: "images/Flame Sagittario/gen.webp",
          genuineImageAlt: "Add a close-up of the genuine Flame Sagittario facebolt sticker",
          sourceLabel: "Reddit reference listed in draft",
          sourceUrl: "https://www.reddit.com/r/BeybladeMetal/comments/zxl5t2/flame_sagittario_midfake_takara_tomyhasbro/?tl=sv"
        }
      ]
    },
    {
      id: "Dark Wolf DF145FS",
      era: "metal-fusion",
      name: "Dark Wolf",
      combo: "DF145FS",
      status: "notes added",
      image: "images/Dark Wolf/DarkWolf.webp",
      imageAlt: "Add a clear photo of Dark Wolf DF145FS",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: [
        {
        component: "Fusion wheel",
        note: "The midfake metal wheel has slightly worse molding and a bit of a shine to it compared to the authentic. It appears there are also just these random circles everywhere on the bottom of the midfake dark wheel.",
        midfakeImage: "images/Dark Wolf/mid.webp",
        midfakeImageAlt: "Add a close-up of the Dark Wolf fusion wheel",
        genuineImage: "images/Dark Wolf/gen.webp",
        genuineImageAlt: "Add a close-up of the genuine Dark Wolf fusion wheel.",
        sourceLabel: "Tiktok reference",
        sourceUrl: "https://www.tiktok.com/@ghostblader999/video/7468726800256961814"}
      ]
    },
    {
      id: "Dark Bull H145SD",
      era: "metal-fusion",
      name: "Dark Bull",
      combo: "H145SD",
      status: "In progress",
      image: "images/Dark Bull/DarkBull.webp",
      imageAlt: "Add a clear photo of Dark Bull H145SD",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: [
        {
        component: "Dark Metal wheel",
        note: "The midfake metal wheel has slightly worse molding and a bit of a shine to it compared to the authentic. It appears there are also just these random circles everywhere on the bottom of the midfake dark wheel.",
        midfakeImage: "images/Dark Bull/mid.webp",
        midfakeImageAlt: "Add a close-up of the Dark Bull metal wheel",
        genuineImage: "images/Dark Bull/gen.webp",
        genuineImageAlt: "Add a close-up of the genuine Dark Bull metal wheel.",
        sourceLabel: "Tiktok reference",
        sourceUrl: "https://www.tiktok.com/@ghostblader999/video/7468726800256961814"
        }
      ]
    },
    {
      id: "Storm Aquario M145Q",
      era: "metal-fusion",
      name: "Storm Aquario",
      combo: "M145Q",
      status: "notes added",
      image: "images/Storm Aquario/StormAquario.webp",
      imageAlt: "Add a clear photo of Storm Aquario M145Q",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: [
        {
        component: "Metal wheel",
        note: "The midfake metal wheel has slightly worse molding and it has this weird shine.",
        midfakeImage: "images/Storm Aquario/mid.webp",
        midfakeImageAlt: "Add a close-up of the Storm Aquario metal wheel",
        genuineImage: "images/Storm Aquario/gen.webp",
        genuineImageAlt: "Add a close-up of the genuine Storm Aquario metal wheel.",
        sourceLabel: "Tiktok reference",
        sourceUrl: "https://www.tiktok.com/@vitalbeyblade/video/7657227407740636418",
        sourceLabel2: "World Hobby Shop reference",
        sourceUrl2: "https://worldhobbyshop.in/storm-aquario-m145q/"
        },  
        {
        component: "Clear Wheel color",
        note: "The midfake clear wheel has a slightly different color compared to the genuine one.",
        midfakeImage: "images/Storm Aquario/mid2.webp",
        midfakeImageAlt: "Add a close-up of the Storm Aquario clear wheel",
        genuineImage: "images/Storm Aquario/gen2.webp",
        genuineImageAlt: "Add a close-up of the genuine Storm Aquario clear wheel.",
        sourceLabel: "Tiktok reference",
        sourceUrl: "https://www.tiktok.com/@vitalbeyblade/video/7657227407740636418",
        sourceLabel2: "Beyblade Art Shop reference",
        sourceUrl2: "https://beybladeartshop.com/products/storm-aquario-m145q-a"
        }
      ]
    },
    {
      id: "Storm Capricorne M145Q",
      era: "metal-fusion",
      name: "Storm Capricorne",
      combo: "M145Q",
      status: "In progress",
      image: "images/Storm Capricorne/StormCapricorne.webp",
      imageAlt: "Add a clear photo of Storm Capricorne M145Q",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Flame Libra T125ES",
      era: "metal-fusion",
      name: "Flame Libra",
      combo: "T125ES",
      status: "In progress",
      image: "images/Flame Libra/FlameLibra.webp",
      imageAlt: "Add a clear photo of Flame Libra T125ES",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
      id: "Twisted Tempo 145WD",
      era: "metal-masters",
      name: "Twisted Tempo",
      combo: "145WD",
      status: "notes added",
      image: "images/Twisted Tempo/Basalt_Horogium_145WD.webp",
      imageAlt: "Add a clear photo of Twisted Tempo 145WD",
      summary: "Twisted Tempo can clearly be identified by the molding issues on the bottom of the metal wheel, which are clearly visible in the pictures. The midfake also has a slightly different color and shine to it compared to the genuine one.",
      observations: [
        {
        component: "Metal wheel",
        note: "Molding issues on the bottom of the metal wheel, clearly visible on the pictures",
        midfakeImage: "images/Twisted Tempo/mid.webp",
        genuineImage: "images/Twisted Tempo/gen.webp",
        midfakeImageAlt: "Add a close-up of the Twisted Tempo metal wheel",
        genuineImageAlt: "Add a close-up of the genuine Twisted Tempo metal wheel.",
        sourceLabel: "Source: Vinted  listing, no longer available",
        sourceUrl: "https://Vinted.com"
        }
      ]
    },
    {
      id: "Lightning L-Drago 100HF",
      era: "metal-fusion",
      name: "Lightning L-Drago",
      combo: "100HF",
      status: "In progress",
      image: "images/Lightning L-Drago/LightningLDrago.webp",
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
      image: "images/Dark Gasher/DarkGasher.webp",
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
      image: "images/Burn Phoenix (Fireblaze)/bey.jpg",
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
      image: "images/Earth Eagle/EarthEagle.jpg",
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
      image: "images/Earth Virgo/EarthVirgo.webp",
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
      image: "images/Poison Serpent/PoisonSerpent.webp",
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
      image: "images/Evil Gemios/EvilGemios.webp",
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
      image: "images/Galaxy Pegasus/GalaxyPegasus.webp",
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
      image: "images/Big Bang Pegasus/BigBangPegasus.webp",
      imageAlt: "Add a clear photo of Big Bang Pegasus F:D (Cosmic Pegasus)",
      summary: "Placeholder.",
      observations: []
    },
    {
      id: "Samurai Pegasus W105R²F",
      era: "zero-g",
      name: "Samurai Pegasus",
      combo: "W105R²F",
      status: "In progress",
      image: "images/Samurai Pegasus/SamuraiPegasus.webp",
      imageAlt: "Add a clear photo of Samurai Pegasus W105R²F",
      summary: "Your draft has started this entry but does not include identification notes yet. Add part-by-part observations and reference sources as you research them.",
      observations: []
    },
    {
     id: "Ray Striker D125CS",
     era: "metal-masters",
     name: "Ray Striker",
     combo: "D125CS",
     status: "in progress",
     image: "",
     imageAlt: "Placeholder",
     summary: "Placeholder",
     observations: [] 

    },
    {
      id: "Burn Phoenix 90WF",
      era: "special-variants",
      name: "Burn Phoenix Blizzard Version",
      combo: "90WF",
      status: "in progress",
      image: "images/Burn Phoenix Blizzard V/BurnFireblazeBlizzard.webp",
      imageAlt: "Placeholder",
      summary: "Placeholder",
      observations: []
    },
    {
      id: "Diablo Nemesis X:D",
      era: "metal-fury",
      name: "Diablo Nemesis",
      combo: "X:D",
      status: "in progress",
      image: "images/Diablo Nemesis/DiabloNemesis.webp",
      imageAlt: "Placeholder",
      summary: "Placeholder",
      observations: [
        {
          component: "Metal wheel",
          note: "The midfake core has smaller laches for the frame to sit on.",
          midfakeImage: "images/Diablo Nemesis/mid_core.webp",
          midfakeImageAlt: "Add a close-up of the Diablo Nemesis metal wheel",
          genuineImage: "images/Diablo Nemesis/gen_core.webp",
          genuineImageAlt: "Add a close-up of the genuine Diablo Nemesis metal wheel.",
          sourceLabel: "YouTube reference",
          sourceUrl: "https://www.youtube.com/watch?v=_zJDxtvoFt4"
        },
        {
          component: "Metal wheel frame",
          note: "The midfake frame has larger openings than the genuine one.",
          midfakeImage: "images/Diablo Nemesis/mid_frame.webp",
          midfakeImageAlt: "Add a close-up of the Diablo Nemesis metal wheel frame",
          genuineImage: "images/Diablo Nemesis/gen_frame.webp",
          genuineImageAlt: "Add a close-up of the genuine Diablo Nemesis metal wheel frame.",
          sourceLabel: "YouTube reference",
          sourceUrl: "https://www.youtube.com/watch?v=_zJDxtvoFt4"
        }
      ]
    }
  ]
};
