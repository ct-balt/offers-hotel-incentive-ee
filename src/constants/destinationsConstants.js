const destinationsConstants = [
  {
    country: "turgi",
    name: "Türgi",
    friendlyUrl: "turgi",
    id: "1-0",
    type: 0,
    children: [
      {
        id: "5-3",
        type: 3,
        name: "Antalya",
        friendlyUrl: "antalya",
      },
      {
        id: "1-3",
        type: 3,
        name: "Bodrum",
        friendlyUrl: "bodrum",
      },
    ],
  },
  {
    country: "tuneesia",
    name: "Tuneesia",
    friendlyUrl: "tuneesia",
    id: "34-0",
    type: 0,
  },
  {
    country: "kreeka",
    name: "Kreeka",
    friendlyUrl: "kreeka",
    id: "43-0",
    type: 0,
    children: [
      {
        id: "143-3",
        type: 3,
        name: "Heraklion",
        friendlyUrl: "heraklion",
      },
      {
        id: "773-3",
        type: 3,
        name: "Rhodes",
        friendlyUrl: "rhodes",
      },
    ],
  },
  {
    country: "egiptus",
    name: "Egiptus",
    friendlyUrl: "egiptus",
    id: "12-0",
    type: 0,
    children: [
      {
        id: "70-3",
        type: 3,
        name: "Hurghada",
        friendlyUrl: "hurghada",
      },
      {
        id: "83-3",
        type: 3,
        name: "Sharm El Sheikh",
        friendlyUrl: "sharmelsheikh",
      },
    ],
  },
  {
    country: "montenegro",
    name: "Montenegro",
    friendlyUrl: "montenegro",
    id: "80-0",
    type: 0,
    children: [
      {
        id: "11911-3",
        type: 3,
        name: "Tivat",
        friendlyUrl: "tivat",
        parent: {
          id: "80",
          type: 0,
          name: "Montenegro",
          countryId: "80-0",
        },
      },
    ],
  },
  {
    country: "tivat",
    name: "Tivat",
    friendlyUrl: "tivat",
    id: "11911-3",
    type: 3,
    children: [
      {
        id: "10881-5",
        type: 5,
        name: "Dubrovnik",
        friendlyUrl: "dubrovnik",
        parent: {
          id: "11911",
          type: 3,
          name: "Horvaatia",
          countryId: "108-0",
        },
      },
    ],
  },
];
