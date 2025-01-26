dataSetVersion = "2024-08-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Operator CLass",
    key: "class",
    tooltip: "Check this to restrict to certain classes.",
    checked: false,
    sub: [
      { name: "Vanguard", key: "vanguard" },
      { name: "Guard", key: "guard" },
      { name: "Caster", key: "caster" },
      { name: "Sniper", key: "sniper" },
      { name: "Medic", key: "medic" },
      { name: "Specialist", key: "specialist" },
      { name: "Supporter", key: "supporter" },
      { name: "Defender", key: "defender" },
    ]
  },
  {
    name: "Filter by Rarity",
    key: "rarity",
    tooltip: "Check this to restrict to operators from certain rarities.",
    checked: false,
    sub: [ { name: "1*", key: "1star" }, { name: "2*", key: "2star" }, { name: "3*", key: "3star" }, { name: "4*", key: "4star" }, { name: "5*", key: "5star" }, { name: "6*", key: "6star" }
    ]
  },
  {
    name: "Remove Alters",
    key: "alter",
    tooltip: "Check this to remove operator alters (includes Amiya transformations)."
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female operators.",
    checked: false
  },
  {
    name: "Remove Collab",
    key: "collab",
    tooltip: "Check this to remove all collaboration operators.",
    checked: false
  },
  {
    name: "Remove CN",
    key: "cn",
    tooltip: "Check this to remove all operators not currently available in the Global server.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Lancet-2",
    img: "5qiiIBX.png",
    opts: {
      class: ["medic"],
      rarity: ["1star"]
    }
  },
  {
    name: "Castle-3",
    img: "rUCXIZE.png",
    opts: {
      class: ["guard"],
      rarity: ["1star"],
      notgirl: true
    }
  },
  {
    name: "12F",
    img: "uOQWIDv.png",
    opts: {
      class: ["caster"],
      rarity: ["2star"],
      notgirl: true
    }
  },
  {
    name: "Yato",
    img: "6h2PXHk.png",
    opts: {
      class: ["vanguard"],
      rarity: ["2star"]
    }
  },
  {
    name: "Rangers",
    img: "rCFiMXJ.png",
    opts: {
      class: ["sniper"],
      rarity: ["2star"],
      notgirl: true
    }
  },
  {
    name: "Durin",
    img: "Ix4tmim.png",
    opts: {
      class: ["caster"],
      rarity: ["2star"]
    }
  },
  {
    name: "Fang",
    img: "W5EutGo.png",
    opts: {
      class: ["vanguard"],
      rarity: ["3star"]
    }
  },
  {
    name: "Noir Corne",
    img: "VR8wYm8.png",
    opts: {
      class: ["defender"],
      rarity: ["2star"],
      notgirl: true
    }
  },
  {
    name: "Kroos",
    img: "hT571M2.png",
    opts: {
      class: ["sniper"],
      rarity: ["3star"]
    }
  },
  {
    name: "Cardigan",
    img: "33eZ2Qo.png",
    opts: {
      class: ["defender"],
      rarity: ["3star"]
    }
  },
  {
    name: "Melantha",
    img: "k3arRVT.png",
    opts: {
      class: ["guard"],
      rarity: ["3star"]
    }
  },
  {
    name: "Beagle",
    img: "4bQBHBQ.png",
    opts: {
      class: ["defender"],
      rarity: ["3star"]
    }
  },
  {
    name: "Plume",
    img: "3nTVLlb.png",
    opts: {
      class: ["vanguard"],
      rarity: ["3star"]
    }
  },
  {
    name: "Vanilla",
    img: "kr2nwoF.png",
    opts: {
      class: ["vanguard"],
      rarity: ["3star"]
    }
  },
  {
    name: "Adnachiel",
    img: "J1Gz0Ln.png",
    opts: {
      class: ["sniper"],
      rarity: ["3star"],
      notgirl: true
    }
  },
  {
    name: "Ansel",
    img: "UAoOWng.png",
    opts: {
      class: ["medic"],
      rarity: ["3star"],
      notgirl: true
    }
  },
  {
    name: "Lava",
    img: "BszfoTr.png",
    opts: {
      class: ["caster"],
      rarity: ["3star"]
    }
  },
  {
    name: "Hibiscus",
    img: "dbjOC4s.png",
    opts: {
      class: ["medic"],
      rarity: ["3star"]
    }
  },
  {
    name: "Steward",
    img: "eaTCIou.png",
    opts: {
      class: ["caster"],
      rarity: ["3star"],
      notgirl: true
    }
  },
  {
    name: "Haze",
    img: "nBRYSSD.png",
    opts: {
      class: ["caster"],
      rarity: ["4star"]
    }
  },
  {
    name: "Jessica",
    img: "xZ0LOFZ.png",
    opts: {
      class: ["sniper"],
      rarity: ["4star"]
    }
  },
  {
    name: "Orchid",
    img: "X8lLnWL.png",
    opts: {
      class: ["supporter"],
      rarity: ["3star"]
    }
  },
  {
    name: "Gitano",
    img: "KhUQUXg.png",
    opts: {
      class: ["caster"],
      rarity: ["4star"]
    }
  },
  {
    name: "Meteor",
    img: "bOJw8YF.png",
    opts: {
      class: ["sniper"],
      rarity: ["4star"]
    }
  },
  {
    name: "Scavenger",
    img: "PghbHKk.png",
    opts: {
      class: ["vanguard"],
      rarity: ["4star"]
    }
  },
  {
    name: "ShiraYuki",
    img: "tw44kI1.png",
    opts: {
      class: ["sniper"],
      rarity: ["4star"]
    }
  },
  {
    name: "Vigna",
    img: "UfMns74.png",
    opts: {
      class: ["vanguard"],
      rarity: ["4star"]
    }
  },
  {
    name: "Courier",
    img: "2jINNpw.png",
    opts: {
      class: ["vanguard"],
      rarity: ["4star"],
      notgirl: true
    }
  },
  {
    name: "Mousse",
    img: "OIfHd0A.png",
    opts: {
      class: ["guard"],
      rarity: ["4star"]
    }
  },
  {
    name: "Dobermann",
    img: "dyYFOO6.png",
    opts: {
      class: ["guard"],
      rarity: ["4star"]
    }
  },
  {
    name: "Matoimaru",
    img: "4wPo04H.png",
    opts: {
      class: ["guard"],
      rarity: ["4star"]
    }
  },
  {
    name: "Estelle",
    img: "L40SM5H.png",
    opts: {
      class: ["guard"],
      rarity: ["4star"]
    }
  },
  {
    name: "Frostleaf",
    img: "LYmmU8p.png",
    opts: {
      class: ["guard"],
      rarity: ["4star"]
    }
  },
  {
    name: "Gavial",
    img: "iMzrQfh.png",
    opts: {
      class: ["medic"],
      rarity: ["4star"]
    }
  },
  {
    name: "Rope",
    img: "O9gLoXA.png",
    opts: {
      class: ["specialist"],
      rarity: ["4star"]
    }
  },
  {
    name: "Myrrh",
    img: "wp5Jqo7.png",
    opts: {
      class: ["medic"],
      rarity: ["4star"]
    }
  },
  {
    name: "Gravel",
    img: "IgREfC9.png",
    opts: {
      class: ["specialist"],
      rarity: ["4star"]
    }
  },
  {
    name: "Matterhorn",
    img: "bMcZfeo.png",
    opts: {
      class: ["defender"],
      rarity: ["4star"],
      notgirl: true
    }
  },
  {
    name: "Perfumer",
    img: "GVcPo9z.png",
    opts: {
      class: ["medic"],
      rarity: ["4star"]
    }
  },
  {
    name: "Gummy",
    img: "FsfHM0W.png",
    opts: {
      class: ["defender"],
      rarity: ["4star"]
    }
  },
  {
    name: "Earthspirit",
    img: "I7Nn2bU.png",
    opts: {
      class: ["supporter"],
      rarity: ["4star"]
    }
  },
  {
    name: "Deepcolor",
    img: "lVwibJw.png",
    opts: {
      class: ["supporter"],
      rarity: ["4star"]
    }
  },
  {
    name: "Cuora",
    img: "3rWacAl.png",
    opts: {
      class: ["defender"],
      rarity: ["4star"]
    }
  },
  {
    name: "Shaw",
    img: "Eea8wK3.png",
    opts: {
      class: ["specialist"],
      rarity: ["4star"]
    }
  },
  {
    name: "Zima",
    img: "uFPgX8F.png",
    opts: {
      class: ["vanguard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Indra",
    img: "LRvkoJO.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Texas",
    img: "OzCv5oX.png",
    opts: {
      class: ["vanguard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Ptilopsis",
    img: "QdGJpja.png",
    opts: {
      class: ["medic"],
      rarity: ["5star"]
    }
  },
  {
    name: "Franka",
    img: "0ToO5xD.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Specter",
    img: "XuzfdnJ.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Lappland",
    img: "1Z2iORf.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Platinum",
    img: "5XFam2h.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"]
    }
  },
  {
    name: "Blue Poison",
    img: "L0TrTIG.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"]
    }
  },
  {
    name: "Meteorite",
    img: "ifpZqtA.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"]
    }
  },
  {
    name: "Nearl",
    img: "Yd5ZWWm.png",
    opts: {
      class: ["defender"],
      rarity: ["5star"]
    }
  },
  {
    name: "Warfarin",
    img: "h6Uxzr0.png",
    opts: {
      class: ["medic"],
      rarity: ["5star"]
    }
  },
  {
    name: "Skyfire",
    img: "wZyJoYn.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"]
    }
  },
  {
    name: "Mayer",
    img: "O8PTbbC.png",
    opts: {
      class: ["supporter"],
      rarity: ["5star"]
    }
  },
  {
    name: "Silence",
    img: "DOHGHTd.png",
    opts: {
      class: ["medic"],
      rarity: ["5star"]
    }
  },
  {
    name: "Amiya",
    img: "t6FOdpM.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"]
    }
  },
  {
    name: "Croissant",
    img: "HbpTcWU.png",
    opts: {
      class: ["defender"],
      rarity: ["5star"]
    }
  },
  {
    name: "Provence",
    img: "XM24xTH.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"]
    }
  },
  {
    name: "Vulcan",
    img: "OwFagG1.png",
    opts: {
      class: ["defender"],
      rarity: ["5star"]
    }
  },
  {
    name: "Projekt Red",
    img: "VIUd6eb.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"]
    }
  },
  {
    name: "Liskarm",
    img: "0GOjkxf.png",
    opts: {
      class: ["defender"],
      rarity: ["5star"]
    }
  },
  {
    name: "Pramanix",
    img: "tOTcwWT.png",
    opts: {
      class: ["supporter"],
      rarity: ["5star"]
    }
  },
  {
    name: "Firewatch",
    img: "tcd5qB2.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"]
    }
  },
  {
    name: "Cliffheart",
    img: "N1in8tD.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"]
    }
  },
  {
    name: "Manticore",
    img: "P4Bb9uz.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"]
    }
  },
  {
    name: "Istina",
    img: "xYofIGB.png",
    opts: {
      class: ["supporter"],
      rarity: ["5star"]
    }
  },
  {
    name: "Sora",
    img: "umTPsN1.png",
    opts: {
      class: ["supporter"],
      rarity: ["5star"]
    }
  },
  {
    name: "Ifrit",
    img: "3espH6r.png",
    opts: {
      class: ["caster"],
      rarity: ["6star"]
    }
  },
  {
    name: "Siege",
    img: "FNI95UH.png",
    opts: {
      class: ["vanguard"],
      rarity: ["6star"]
    }
  },
  {
    name: "Exusiai",
    img: "kzZQxRj.png",
    opts: {
      class: ["sniper"],
      rarity: ["6star"]
    }
  },
  {
    name: "Eyjafjalla",
    img: "FZ36Cjj.png",
    tooltip: "pea's wife",
    opts: {
      class: ["caster"],
      rarity: ["6star"]
    }
  },
  {
    name: "FEater",
    img: "bbqClrv.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"]
    }
  },
  {
    name: "Saria",
    img: "78FB7Qr.png",
    opts: {
      class: ["defender"],
      rarity: ["6star"]
    }
  },
  {
    name: "Nightingale",
    img: "E1jNZ7H.png",
    opts: {
      class: ["medic"],
      rarity: ["6star"]
    }
  },
  {
    name: "Angelina",
    img: "jlt0sdf.png",
    opts: {
      class: ["supporter"],
      rarity: ["6star"]
    }
  },
  {
    name: "Hoshiguma",
    img: "b6SnVM6.png",
    opts: {
      class: ["defender"],
      rarity: ["6star"]
    }
  },
  {
    name: "SilverAsh",
    img: "7MPSEA3.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Shining",
    img: "hzJJLtx.png",
    opts: {
      class: ["medic"],
      rarity: ["6star"]
    }
  },
  {
    name: "Nightmare",
    img: "GpnJ7Qj.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"]
    }
  },
  {
    name: "Savage",
    img: "0vzauHn.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Midnight",
    img: "harYtjR.png",
    opts: {
      class: ["guard"],
      rarity: ["3star"],
      notgirl: true
    }
  },
  {
    name: "Grani",
    img: "rR6XCCn.png",
    opts: {
      class: ["vanguard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Beehunter",
    img: "fQyD5pV.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Catapult",
    img: "5tYAyRl.png",
    opts: {
      class: ["sniper"],
      rarity: ["3star"]
    }
  },
  {
    name: "Spot",
    img: "mQ5D8KR.png",
    opts: {
      class: ["defender"],
      rarity: ["3star"],
      notgirl: true
    }
  },
  {
    name: "Skadi",
    img: "LeDRKw1.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"]
    }
  },
  {
    name: "Greyy",
    img: "d2yq0AC.png",
    opts: {
      class: ["caster"],
      rarity: ["4star"],
      notgirl: true
    }
  },
  {
    name: "Popukar",
    img: "8Iyauox.png",
    opts: {
      class: ["guard"],
      rarity: ["3star"]
    }
  },
  {
    name: "Swire",
    img: "CjEvnYB.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Ch'en",
    img: "XqU7Akh.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"]
    }
  },
  {
    name: "Astesia",
    img: "KP5zyKy.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Glaucus",
    img: "75zqt2Z.png",
    opts: {
      class: ["supporter"],
      rarity: ["5star"]
    }
  },
  {
    name: "Myrtle",
    img: "aO8QpAi.png",
    opts: {
      class: ["vanguard"],
      rarity: ["4star"]
    }
  },
  {
    name: "Sussurro",
    img: "BGma3Oj.png",
    opts: {
      class: ["medic"],
      rarity: ["4star"]
    }
  },
  {
    name: "Ceylon",
    img: "WMXGvNq.png",
    opts: {
      class: ["medic"],
      rarity: ["5star"]
    }
  },
  {
    name: "Schwarz",
    img: "3scg4gl.png",
    opts: {
      class: ["sniper"],
      rarity: ["6star"]
    }
  },
  {
    name: "Dur-nar",
    img: "DL6b2K8.png",
    opts: {
      class: ["defender"],
      rarity: ["4star"]
    }
  },
  {
    name: "Flamebringer",
    img: "cW24Je9.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Vermeil",
    img: "d4gwhsz.png",
    opts: {
      class: ["sniper"],
      rarity: ["4star"]
    }
  },
  {
    name: "Hellagur",
    img: "nnKmZuG.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Executor",
    img: "cdhIclg.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Magallan",
    img: "wcI4oVQ.png",
    opts: {
      class: ["supporter"],
      rarity: ["6star"]
    }
  },
  {
    name: "Ethan",
    img: "iePzTQa.png",
    opts: {
      class: ["specialist"],
      rarity: ["4star"],
      notgirl: true
    }
  },
  {
    name: "Breeze",
    img: "zGyoK9f.png",
    opts: {
      class: ["medic"],
      rarity: ["5star"]
    }
  },
  {
    name: "Bison",
    img: "B8gx9GG.png",
    opts: {
      class: ["defender"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "May",
    img: "3EAZzdG.png",
    opts: {
      class: ["sniper"],
      rarity: ["4star"]
    }
  },
  {
    name: "Waai Fu",
    img: "TDAs4kh.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"]
    }
  },
  {
    name: "Ambriel",
    img: "Ip34nBp.png",
    opts: {
      class: ["sniper"],
      rarity: ["4star"]
    }
  },
  {
    name: "Broca",
    img: "paouZml.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "GreyThroat",
    img: "Evq8vlC.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"]
    }
  },
  {
    name: "Blaze",
    img: "7QDWfwb.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"]
    }
  },
  {
    name: "Reed",
    img: "i1byDfX.png",
    opts: {
      class: ["vanguard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Mostima",
    img: "uA1bHag.png",
    opts: {
      class: ["caster"],
      rarity: ["6star"]
    }
  },
  {
    name: "Ceobe",
    img: "D2AD2Az.png",
    opts: {
      class: ["caster"],
      rarity: ["6star"]
    }
  },
  {
    name: "Hung",
    img: "ltGVwMy.png",
    opts: {
      class: ["defender"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Nian",
    img: "wBQB71G.png",
    opts: {
      class: ["defender"],
      rarity: ["6star"]
    }
  },
  {
    name: "Leizi",
    img: "SF6QmJw.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"]
    }
  },
  {
    name: "Aak",
    img: "hdMsxB7.png",
    opts: {
      class: ["specialist"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Snowsant",
    img: "By5ylZy.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"]
    }
  },
  {
    name: "Utage",
    img: "SfZRNlA.png",
    tooltip: "gooner character",
    opts: {
      class: ["guard"],
      rarity: ["4star"]
    }
  },
  {
    name: "Sesa",
    img: "DKNyZ7H.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Conviction",
    img: "yZ5lDdl.png",
    opts: {
      class: ["guard"],
      rarity: ["4star"]
    }
  },
  {
    name: "Bibeak",
    img: "AuoF2lz.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Purestream",
    img: "K82nvTu.png",
    opts: {
      class: ["medic"],
      rarity: ["4star"]
    }
  },
  {
    name: "Bagpipe",
    img: "eUHULWM.png",
    opts: {
      class: ["vanguard"],
      rarity: ["6star"]
    }
  },
  {
    name: "THRM-EX",
    img: "q1PsUiW.png",
    opts: {
      class: ["specialist"],
      rarity: ["1star"],
      notgirl: true
    }
  },
  {
    name: "Phantom",
    img: "1SmqK79.png",
    opts: {
      class: ["specialist"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Cutter",
    img: "5QDywSP.png",
    opts: {
      class: ["guard"],
      rarity: ["4star"]
    }
  },
  {
    name: "Shamare",
    img: "qnuhu4w.png",
    opts: {
      class: ["supporter"],
      rarity: ["5star"]
    }
  },
  {
    name: "Elysium",
    img: "X1xVxpb.png",
    opts: {
      class: ["vanguard"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Sideroca",
    img: "bTWmoqF.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "W",
    img: "QYzjgA4.png",
    opts: {
      class: ["sniper"],
      rarity: ["6star"]
    }
  },
  {
    name: "Tsukinogi",
    img: "55cjfDF.png",
    opts: {
      class: ["supporter"],
      rarity: ["5star"]
    }
  },
  {
    name: "Podenco",
    img: "VDHQdvW.png",
    opts: {
      class: ["supporter"],
      rarity: ["4star"]
    }
  },
  {
    name: "Weedy",
    img: "D86jxhM.png",
    opts: {
      class: ["specialist"],
      rarity: ["6star"]
    }
  },
  {
    name: "Asbestos",
    img: "4C1sPji.png",
    opts: {
      class: ["defender"],
      rarity: ["5star"]
    }
  },
  {
    name: "Absinthe",
    img: "hrOAMFE.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"]
    }
  },
  {
    name: "Folinic",
    img: "NQgkhhE.png",
    opts: {
      class: ["medic"],
      rarity: ["5star"]
    }
  },
  {
    name: "Click",
    img: "9faN6h2.png",
    opts: {
      class: ["caster"],
      rarity: ["4star"]
    }
  },
  {
    name: "Ayerscarpe",
    img: "5pwCWlt.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Rosa",
    img: "EVMV1kb.png",
    opts: {
      class: ["sniper"],
      rarity: ["6star"]
    }
  },
  {
    name: "Leonhardt",
    img: "v9VOLrN.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Jaye",
    img: "xV5lrn5.png",
    opts: {
      class: ["specialist"],
      rarity: ["4star"],
      notgirl: true
    }
  },
  {
    name: "Scene",
    img: "LfvSAuI.png",
    opts: {
      class: ["supporter"],
      rarity: ["5star"]
    }
  },
  {
    name: "Beeswax",
    img: "2UIZO0l.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"]
    }
  },
  {
    name: "Chiave",
    img: "Nd8JPPR.png",
    opts: {
      class: ["vanguard"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Suzuran",
    img: "gztTS9Z.png",
    opts: {
      class: ["supporter"],
      rarity: ["6star"]
    }
  },
  {
    name: "Andreana",
    img: "iyBPSh0.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"]
    }
  },
  {
    name: "Thorns",
    img: "A9k78y8.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Flint",
    img: "BgIEzya.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Tomimi",
    img: "alfvTbi.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"]
    }
  },
  {
    name: "Aciddrop",
    img: "P4PkcHR.png",
    opts: {
      class: ["sniper"],
      rarity: ["4star"]
    }
  },
  {
    name: "April",
    img: "U6Gjhlw.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"]
    }
  },
  {
    name: "Eunectes",
    img: "09rvqmn.png",
    opts: {
      class: ["defender"],
      rarity: ["6star"]
    }
  },
  {
    name: "Arene",
    img: "LaWTpDu.png",
    opts: {
      class: ["guard"],
      rarity: ["4star"],
      notgirl: true
    }
  },
  {
    name: "Mint",
    img: "Ao0BdX7.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"]
    }
  },
  {
    name: "Surtr",
    img: "6aR3jQv.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"]
    }
  },
  {
    name: "Aosta",
    img: "PQBNJDe.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Bubble",
    img: "fcBbNb4.png",
    opts: {
      class: ["defender"],
      rarity: ["4star"]
    }
  },
  {
    name: "Whislash",
    img: "VhyidYc.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Jackie",
    img: "2PK1vHk.png",
    opts: {
      class: ["guard"],
      rarity: ["4star"]
    }
  },
  {
    name: "Blemishine",
    img: "kFoucT8.png",
    opts: {
      class: ["defender"],
      rarity: ["6star"]
    }
  },
  {
    name: "Whisperain",
    img: "9kG5r8n.png",
    opts: {
      class: ["medic"],
      rarity: ["5star"]
    }
  },
  {
    name: "Mudrock",
    img: "V6nXuZh.png",
    opts: {
      class: ["defender"],
      rarity: ["6star"]
    }
  },
  {
    name: "Rosmontis",
    img: "WnVrqaI.png",
    opts: {
      class: ["sniper"],
      rarity: ["6star"]
    }
  },
  {
    name: "Amiya (Guard)",
    img: "LBpofyX.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"],
      alter: true
    }
  },
  {
    name: "Pinecone",
    img: "FwE5N4q.png",
    opts: {
      class: ["sniper"],
      rarity: ["4star"]
    }
  },
  {
    name: "Robin",
    img: "23FVeVT.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"]
    }
  },
  {
    name: "Kafka",
    img: "4SmU1iC.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"]
    }
  },
  {
    name: "Mountain",
    img: "MJcUK3W.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Beanstalk",
    img: "lrfDKcl.png",
    opts: {
      class: ["vanguard"],
      rarity: ["4star"]
    }
  },
  {
    name: "Tuye",
    img: "fpNvFCr.png",
    opts: {
      class: ["medic"],
      rarity: ["5star"]
    }
  },
  {
    name: "Lava The Purgatory",
    img: "Gkbxbeo.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"],
      alter: true
    }
  },
  {
    name: "Iris",
    img: "VGLiKrc.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"]
    }
  },
  {
    name: "Archetto",
    img: "rLbT60P.png",
    opts: {
      class: ["sniper"],
      rarity: ["6star"]
    }
  },
  {
    name: "Mr. Nothing",
    img: "eVnbskD.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Saga",
    img: "J877goI.png",
    opts: {
      class: ["vanguard"],
      rarity: ["6star"]
    }
  },
  {
    name: "Dusk",
    img: "iTPRwJ6.png",
    opts: {
      class: ["caster"],
      rarity: ["6star"]
    }
  },
  {
    name: "Tachanka",
    img: "nFtxk5k.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"],
      notgirl: true,
      collab: true
    }
  },
  {
    name: "Blitz",
    img: "ZqDdXpv.png",
    opts: {
      class: ["defender"],
      rarity: ["5star"],
      notgirl: true,
      collab: true
    }
  },
  {
    name: "Heavyrain",
    img: "xnJketW.png",
    opts: {
      class: ["defender"],
      rarity: ["5star"]
    }
  },
  {
    name: "Ash",
    img: "gemuvY1.png",
    opts: {
      class: ["sniper"],
      rarity: ["6star"],
      collab: true
    }
  },
  {
    name: "Frost",
    img: "O6Z7Hrp.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"],
      collab: true
    }
  },
  {
    name: "Toddifons",
    img: "2pAm617.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"]
    }
  },
  {
    name: "Passenger",
    img: "AJslvce.png",
    opts: {
      class: ["caster"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Kal'tsit",
    img: "zfBYwRM.png",
    opts: {
      class: ["medic"],
      rarity: ["6star"]
    }
  },
  {
    name: "Gladiia",
    img: "NrlgJV8.png",
    opts: {
      class: ["specialist"],
      rarity: ["6star"]
    }
  },
  {
    name: "Skadi The Corrupting Heart",
    img: "1qCrhmj.png",
    opts: {
      class: ["supporter"],
      rarity: ["6star"],
      alter: true
    }
  },
  {
    name: "Indigo",
    img: "lNBri9s.png",
    opts: {
      class: ["caster"],
      rarity: ["4star"]
    }
  },
  {
    name: "Akafuyu",
    img: "KvvCOhJ.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Carnelian",
    img: "MKWGEU4.png",
    opts: {
      class: ["caster"],
      rarity: ["6star"]
    }
  },
  {
    name: "Pallas",
    img: "KneeC4Y.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"]
    }
  },
  {
    name: "Kirara",
    img: "4rj5ert.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"]
    }
  },
  {
    name: "Bena",
    img: "oc5xJqi.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"]
    }
  },
  {
    name: "La Pluma",
    img: "lJGvnXB.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Tequila",
    img: "oS0bmmQ.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Mizuki",
    img: "25cx6Q6.png",
    opts: {
      class: ["specialist"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Ch'en The Holungday",
    img: "YYsQZQS.png",
    opts: {
      class: ["sniper"],
      rarity: ["6star"],
      alter: true
    }
  },
  {
    name: "Mulberry",
    img: "iJ5pMBI.png",
    opts: {
      class: ["medic"],
      rarity: ["5star"]
    }
  },
  {
    name: "Roberta",
    img: "pWmY0Zr.png",
    opts: {
      class: ["supporter"],
      rarity: ["4star"]
    }
  },
  {
    name: "Ashlock",
    img: "7tlhrll.png",
    opts: {
      class: ["defender"],
      rarity: ["5star"]
    }
  },
  {
    name: "Saileach",
    img: "7QKkb91.png",
    opts: {
      class: ["vanguard"],
      rarity: ["6star"]
    }
  },
  {
    name: "'Justice Knight'",
    img: "dyqu7fp.png",
    opts: {
      class: ["sniper"],
      rarity: ["1star"]
    }
  },
  {
    name: "Fartooth",
    img: "D0DafkT.png",
    opts: {
      class: ["sniper"],
      rarity: ["6star"]
    }
  },
  {
    name: "Pudding",
    img: "wOia7gj.png",
    opts: {
      class: ["caster"],
      rarity: ["4star"]
    }
  },
  {
    name: "Corroserum",
    img: "VKjx8qc.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Honeyberry",
    img: "64RGJRI.png",
    opts: {
      class: ["medic"],
      rarity: ["5star"]
    }
  },
  {
    name: "Wild Mane",
    img: "6qzGxVg.png",
    opts: {
      class: ["vanguard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Aurora",
    img: "eCObRTw.png",
    opts: {
      class: ["defender"],
      rarity: ["5star"]
    }
  },
  {
    name: "Gnosis",
    img: "VaGqKB5.png",
    opts: {
      class: ["supporter"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Flametail",
    img: "Kl6Pc0n.png",
    opts: {
      class: ["vanguard"],
      rarity: ["6star"]
    }
  },
  {
    name: "Nearl The Radiant Knight",
    img: "xA8U2UB.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"],
      alter: true
    }
  },
  {
    name: "Kjera",
    img: "8RI1ne7.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"]
    }
  },
  {
    name: "Nine-Colored Deer",
    img: "z8mabLu.png",
    opts: {
      class: ["supporter"],
      rarity: ["5star"],
      collab: true
    }
  },
  {
    name: "Blacknight",
    img: "XM2uPRm.png",
    opts: {
      class: ["vanguard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Kroos The Keen Glint",
    img: "WsmWzfx.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"],
      alter: true
    }
  },
  {
    name: "Shalem",
    img: "NWXg2oD.png",
    opts: {
      class: ["defender"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Lee",
    img: "picNgs2.png",
    opts: {
      class: ["specialist"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Ling",
    img: "EBa2pGF.png",
    opts: {
      class: ["supporter"],
      rarity: ["6star"]
    }
  },
  {
    name: "Quercus",
    img: "UWJpwji.png",
    opts: {
      class: ["supporter"],
      rarity: ["5star"]
    }
  },
  {
    name: "Goldenglow",
    img: "KdOosHU.png",
    opts: {
      class: ["caster"],
      rarity: ["6star"]
    }
  },
  {
    name: "Fiammetta",
    img: "oV5G14M.png",
    opts: {
      class: ["sniper"],
      rarity: ["6star"]
    }
  },
  {
    name: "Chestnut",
    img: "KwY133Z.png",
    opts: {
      class: ["medic"],
      rarity: ["4star"],
      notgirl: true
    }
  },
  {
    name: "Enforcer",
    img: "EpwLFIe.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Kazemaru",
    img: "2Aoy8To.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"]
    }
  },
  {
    name: "Horn",
    img: "jihU5xd.png",
    opts: {
      class: ["defender"],
      rarity: ["6star"]
    }
  },
  {
    name: "Windflit",
    img: "nSviAdD.png",
    opts: {
      class: ["supporter"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Rockrock",
    img: "MTkXIAn.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"]
    }
  },
  {
    name: "Heidi",
    img: "a0R9p21.png",
    opts: {
      class: ["supporter"],
      rarity: ["5star"]
    }
  },
  {
    name: "Erato",
    img: "qcsfUZL.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"]
    }
  },
  {
    name: "Specter The Unchained",
    img: "58fvS0P.png",
    opts: {
      class: ["specialist"],
      rarity: ["6star"],
      alter: true
    }
  },
  {
    name: "Lumen",
    img: "RqJjYDZ.png",
    opts: {
      class: ["medic"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Irene",
    img: "kduxVRe.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"]
    }
  },
  {
    name: "Hibiscus The Purifier",
    img: "VN4GQTf.png",
    opts: {
      class: ["medic"],
      rarity: ["5star"],
      alter: true
    }
  },
  {
    name: "Czerny",
    img: "eT9h4oD.png",
    opts: {
      class: ["defender"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Ebenholz",
    img: "ND0YbNH.png",
    opts: {
      class: ["caster"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Dorothy",
    img: "hKOkba9.png",
    opts: {
      class: ["specialist"],
      rarity: ["6star"]
    }
  },
  {
    name: "Greyy The Lightningbearer",
    img: "JGpOKLf.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Astgenne",
    img: "YxYPoQN.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"]
    }
  },
  {
    name: "Minimalist",
    img: "ZpfjLG7.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Cantabile",
    img: "SZybvjo.png",
    opts: {
      class: ["vanguard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Pozëmka",
    img: "zam0Jtt.png",
    opts: {
      class: ["sniper"],
      rarity: ["6star"]
    }
  },
  {
    name: "Proviso",
    img: "GADPK0U.png",
    opts: {
      class: ["supporter"],
      rarity: ["5star"]
    }
  },
  {
    name: "Młynar",
    img: "2udEzkA.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Gavial The Invincible",
    img: "68dz6xI.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"],
      alter: true
    }
  },
  {
    name: "Paprika",
    img: "11b39mt.png",
    opts: {
      class: ["medic"],
      rarity: ["5star"]
    }
  },
  {
    name: "Highmore",
    img: "nJVBw4u.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Stainless",
    img: "Di8imH9.png",
    opts: {
      class: ["supporter"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Luo Xiaohei",
    img: "0drnDDs.png",
    opts: {
      class: ["guard"],
      rarity: ["4star"],
      notgirl: true,
      collab: true
    }
  },
  {
    name: "Dagda",
    img: "6noSh1E.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Totter",
    img: "EY8sfZp.png",
    opts: {
      class: ["sniper"],
      rarity: ["4star"],
      notgirl: true
    }
  },
  {
    name: "Vigil",
    img: "bUdsTwJ.png",
    opts: {
      class: ["vanguard"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Lunacub",
    img: "a8ze4bi.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"]
    }
  },
  {
    name: "Penance",
    img: "1z1GiEI.png",
    opts: {
      class: ["defender"],
      rarity: ["6star"]
    }
  },
  {
    name: "Quartz",
    img: "MgtR0dl.png",
    opts: {
      class: ["guard"],
      rarity: ["4star"]
    }
  },
  {
    name: "Texas The Omertosa",
    img: "NNgtkpT.png",
    opts: {
      class: ["specialist"],
      rarity: ["6star"],
      alter: true
    }
  },
  {
    name: "Qanipalaat",
    img: "5zhXKny.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Harmonie",
    img: "qmXJ31a.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"]
    }
  },
  {
    name: "Puzzle",
    img: "wwRpUU0.png",
    opts: {
      class: ["vanguard"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Jieyun",
    img: "kHGWQEx.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"]
    }
  },
  {
    name: "Lin",
    img: "md0KJ6Y.png",
    opts: {
      class: ["caster"],
      rarity: ["6star"]
    }
  },
  {
    name: "Firewhistle",
    img: "epM8LOh.png",
    opts: {
      class: ["defender"],
      rarity: ["5star"]
    }
  },
  {
    name: "Reed The Flame Shadow",
    img: "Er9xAhX.png",
    opts: {
      class: ["medic"],
      rarity: ["6star"],
      alter: true
    }
  },
  {
    name: "Qiubai",
    img: "Gl0YapE.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"]
    }
  },
  {
    name: "Terra Research Commission",
    img: "1eahwJD.png",
    opts: {
      class: ["sniper"],
      rarity: ["1star"],
      collab: true,
      notgirl: true
    }
  },
  {
    name: "Rathalos S Noir Corne",
    img: "6oxS5IM.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"],
      notgirl: true,
      collab: true,
      alter: true
    }
  },
  {
    name: "Chongyue",
    img: "RuIlelZ.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Wind Chimes",
    img: "xTZGCf5.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "U-Official",
    img: "WoWAyBG.png",
    opts: {
      class: ["supporter"],
      rarity: ["1star"]
    }
  },
  {
    name: "Humus",
    img: "g2RnFAM.png",
    opts: {
      class: ["guard"],
      rarity: ["4star"],
      notgirl: true
    }
  },
  {
    name: "Morgan",
    img: "RINDnKo.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Cement",
    img: "PyYH4rc.png",
    opts: {
      class: ["defender"],
      rarity: ["5star"]
    }
  },
  {
    name: "Kirin R Yato",
    img: "OytqOd3.png",
    opts: {
      class: ["specialist"],
      rarity: ["6star"],
      collab: true,
      alter: true
    }
  },
  {
    name: "Ines",
    img: "mWGsdiP.png",
    opts: {
      class: ["vanguard"],
      rarity: ["6star"]
    }
  },
  {
    name: "Silence The Paradigmatic",
    img: "AK2BBcN.png",
    opts: {
      class: ["supporter"],
      rarity: ["6star"],
      alter: true
    }
  },
  {
    name: "Melanite",
    img: "ykL5sEq.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"]
    }
  },
  {
    name: "Friston-3",
    img: "W2Iluk0.png",
    opts: {
      class: ["defender"],
      rarity: ["1star"],
      notgirl: true
    }
  },
  {
    name: "Spuria",
    img: "NDhQWyL.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"]
    }
  },
  {
    name: "Muelsyse",
    img: "w1RoJNf.png",
    opts: {
      class: ["vanguard"],
      rarity: ["6star"]
    }
  },
  {
    name: "Insider",
    img: "6gz46EJ.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Ho'olheyak",
    img: "le8uOnJ.png",
    opts: {
      class: ["caster"],
      rarity: ["6star"]
    }
  },
  {
    name: "Valarqvin",
    img: "3XlFXXN.png",
    opts: {
      class: ["supporter"],
      rarity: ["5star"]
    }
  },
  {
    name: "Executor The Ex Foedere",
    img: "3el7dru.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"],
      alter: true,
      notgirl: true
    }
  },
  {
    name: "Santalla",
    img: "izgjJiI.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"]
    }
  },
  {
    name: "Typhon",
    img: "IdRd4j5.png",
    opts: {
      class: ["sniper"],
      rarity: ["6star"]
    }
  },
  {
    name: "Bryophyta",
    img: "93Ldm0m.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Coldshot",
    img: "UFzOlel.png",
    opts: {
      class: ["sniper"],
      rarity: ["5star"]
    }
  },
  {
    name: "Almond",
    img: "F8zcDBb.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"]
    }
  },
  {
    name: "Swire The Elegant Wit",
    img: "m1LgjYi.png",
    opts: {
      class: ["specialist"],
      rarity: ["6star"],
      alter: true
    }
  },
  {
    name: "Eyjafjalla The Hvít Aska",
    img: "tzSStiU.png",
    tooltip: "pea's very beautiful wife",
    opts: {
      class: ["medic"],
      rarity: ["6star"],
      alter: true
    }
  },
  {
    name: "Poncirus",
    img: "IlTzTJj.png",
    opts: {
      class: ["vanguard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Vendela",
    img: "ZDnq8Dt.png",
    opts: {
      class: ["medic"],
      rarity: ["5star"]
    }
  },
  {
    name: "Delphine",
    img: "AD5VBRt.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"]
    }
  },
  {
    name: "Jessica The Liberated",
    img: "d7FPSwm.png",
    opts: {
      class: ["defender"],
      rarity: ["6star"],
      alter: true
    }
  },
  {
    name: "Verdant",
    img: "HvaHTCm.png",
    opts: {
      class: ["specialist"],
      rarity: ["4star"],
      notgirl: true
    }
  },
  {
    name: "Hoederer",
    img: "CP7Uf7M.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Diamante",
    img: "1qYRiBP.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Lessing",
    img: "ZNpBUiO.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Bassline",
    img: "MWT65UD.png",
    opts: {
      class: ["defender"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Viviana",
    img: "pbSJaBN.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"]
    }
  },
  {
    name: "Caper",
    img: "Ubw6H0H.png",
    opts: {
      class: ["sniper"],
      rarity: ["4star"]
    }
  },
  {
    name: "Harold",
    img: "tNmlNTY.png",
    opts: {
      class: ["medic"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Arturia",
    img: "X9NBwiN.png",
    opts: {
      class: ["supporter"],
      rarity: ["6star"]
    }
  },
  {
    name: "Warmy",
    img: "i23hXB5.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"]
    }
  },
  {
    name: "Leto",
    img: "YITzRPk.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Degenbrecher",
    img: "0ABndWh.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"]
    }
  },
  {
    name: "Wanqing",
    img: "Gvp8Kcm.png",
    opts: {
      class: ["vanguard"],
      rarity: ["5star"],
      notgirl: true
    }
  },
  {
    name: "Grain Buds",
    img: "GOhFeuX.png",
    opts: {
      class: ["supporter"],
      rarity: ["5star"]
    }
  },
  {
    name: "Zuo Le",
    img: "zWhguCS.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"],
      notgirl: true
    }
  },
  {
    name: "Ray",
    img: "E3bBpVz.png",
    opts: {
      class: ["sniper"],
      rarity: ["6star"]
    }
  },
  {
    name: "Doc",
    img: "QGBIGYo.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"],
      notgirl: true,
      collab: true,
      cn: true
    }
  },
  {
    name: "Iana",
    img: "S1up8PO.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"],
      collab: true,
      cn: true
    }
  },
  {
    name: "Fuze",
    img: "LxYDzoA.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"],
      notgirl: true,
      collab: true,
      cn: true
    }
  },
  {
    name: "Kestrel",
    img: "GTfRvLL.png",
    opts: {
      class: ["vanguard"],
      rarity: ["5star"]
    }
  },
  {
    name: "Shu",
    img: "jKLkUHg.png",
    opts: {
      class: ["defender"],
      rarity: ["6star"]
    }
  },
  {
    name: "Odda",
    img: "YIy0oB8.png",
    opts: {
      class: ["guard"],
      rarity: ["5star"],
      notgirl: true,
      cn: true
    }
  },
  {
    name: "Ela",
    img: "YaEImh2.png",
    opts: {
      class: ["specialist"],
      rarity: ["6star"],
      collab: true,
      cn: true
    }
  },
  {
    name: "Ascalon",
    img: "gio1I5N.png",
    opts: {
      class: ["specialist"],
      rarity: ["6star"],
      cn: true
    }
  },
  {
    name: "Aroma",
    img: "YYHh57w.png",
    opts: {
      class: ["caster"],
      rarity: ["5star"],
      cn: true
    }
  },
  {
    name: "Lutonada",
    img: "NLBooLV.png",
    opts: {
      class: ["defender"],
      rarity: ["4star"],
      cn: true
    }
  },
  {
    name: "PhonoR-0",
    img: "1blqGMZ.png",
    opts: {
      class: ["supporter"],
      rarity: ["1star"],
      cn: true
    }
  },
  {
    name: "Fang The Fire-sharpened",
    img: "RbvSEJh.png",
    opts: {
      class: ["vanguard"],
      rarity: ["5star"],
      cn: true,
      alter: true
    }
  },
  {
    name: "Wis'adel",
    img: "hNt21rU.png",
    opts: {
      class: ["sniper"],
      rarity: ["6star"],
      alter: true,
      cn: true
    }
  },
  {
    name: "Logos",
    img: "hZ0bFSS.png",
    opts: {
      class: ["caster"],
      rarity: ["6star"],
      notgirl: true,
      cn: true
    }
  },
  {
    name: "Civilight Eterna",
    img: "d7TIidV.png",
    opts: {
      class: ["supporter"],
      rarity: ["6star"],
      cn: true
    }
  },
  {
    name: "Ulpianus",
    img: "hGYt97K.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"],
      notgirl: true,
      cn: true
    }
  },
  {
    name: "Lucilla",
    img: "BE7e9un.png",
    opts: {
      class: ["supporter"],
      rarity: ["5star"],
      cn: true
    }
  },
  {
    name: "Underflow",
    img: "iDCoLui.png",
    opts: {
      class: ["defender"],
      rarity: ["5star"],
      cn: true
    }
  },
  {
    name: "Mitm",
    img: "TGFNXHo.png",
    opts: {
      class: ["vanguard"],
      rarity: ["5star"],
      cn: true,
      notgirl: true
    }
  },
  {
    name: "Amiya (Medic)",
    img: "rM0OiGh.png",
    opts: {
      class: ["medic"],
      rarity: ["5star"],
      alter: true,
      cn: true
    }
  },
  {
    name: "Pepe",
    img: "39oN8xo.png",
    opts: {
      class: ["guard"],
      rarity: ["6star"],
      cn: true
    }
  },
  {
    name: "Nymph",
    img: "BsNdcfF.png",
    opts: {
      class: ["caster"],
      rarity: ["6star"],
      cn: true
    }
  },
  {
    name: "Narantuya",
    img: "DL7MvAz.png",
    opts: {
      class: ["sniper"],
      rarity: ["6star"],
      cn: true
    }
  },
  {
    name: "Papyrus",
    img: "sH0KMvx.png",
    opts: {
      class: ["medic"],
      rarity: ["5star"],
      cn: true
    }
  },
  {
    name: "Sand Reckoner",
    img: "zmlgYzV.png",
    opts: {
      class: ["supporter"],
      rarity: ["5star"],
      cn: true,
      notgirl: true
    }
  },
  {
    name: "Tin Man",
    img: "GjY9fXY.png",
    opts: {
      class: ["specialist"],
      rarity: ["5star"],
      notgirl: true,
      cn: true
    }
  }
];
