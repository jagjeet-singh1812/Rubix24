const users = [
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "securepassword3",
    district: "Sample District",
    address: "987 Willow Street",
    phone: "555-222-3333",
    points: 0,
  },
  {
    name: "David Wilson",
    email: "david.wilson@example.com",
    password: "strongpassword4",
    district: "Another District",
    address: "654 Birch Street",
    phone: "555-444-5555",
    points: 0,
  },
  {
    name: "Ella Martinez",
    email: "ella.martinez@example.com",
    password: "password567",
    district: "Yet Another District",
    address: "321 Cedar Street",
    phone: "555-666-7777",
    points: 0,
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    password: "mypassword123",
    district: "Different District",
    address: "222 Oak Avenue",
    phone: "555-888-9999",
    points: 0,
  },
  {
    name: "Olivia Davis",
    email: "olivia.davis@example.com",
    password: "olivia12345",
    district: "New District",
    address: "123 Pine Road",
    phone: "555-123-9876",
    points: 0,
  },
];

const ngo = [
  {
    name: "Hope Foundation",
    ngo_id: "NGO001",
    email: "info@hopefoundation.org",
    password: "securepassword1",
    district: "Sample District",
    address: "123 Charity Lane",
  },
  {
    name: "Helping Hands",
    ngo_id: "NGO002",
    email: "contact@helpinghands.org",
    password: "strongpassword2",
    district: "Another District",
    address: "456 Aid Street",
  },
  {
    name: "Unity for All",
    ngo_id: "NGO003",
    email: "unityforall@example.com",
    password: "password123",
    district: "Yet Another District",
    address: "789 Care Avenue",
  },
];

const events = [
  {
    name: "Community Recycling Drive",
    description:
      "Join us in collecting recyclables to reduce waste in our community.",
    date: new Date("2023-10-15T09:00:00"),
    location: "Green Park, Sample City",
    isVirtual: false,
    photos: "https://example.com/recycling-drive.jpg",
  },
  {
    name: "Nature Cleanup Day",
    description:
      "Help clean up local parks and trails to protect our environment.",
    date: new Date("2023-11-05T10:00:00"),
    location: "City Park, Another Town",
    isVirtual: false,
    photos: "https://example.com/cleanup-day.jpg",
  },
  {
    name: "Webinar: Sustainable Living Tips",
    description:
      "Learn practical tips for sustainable living in this online webinar.",
    date: new Date("2023-10-25T18:30:00"),
    location: "Virtual Event",
    isVirtual: true,
    photos: "https://example.com/webinar-sustainable-living.jpg",
  },
  {
    name: "Tree Planting Workshop",
    description: "Plant trees to combat deforestation and improve air quality.",
    date: new Date("2023-11-12T11:00:00"),
    location: "Green Valley Park, Eco City",
    isVirtual: false,
    photos: "https://example.com/tree-planting.jpg",
  },
  {
    name: "Environmental Film Screening",
    description:
      "Watch inspiring documentaries about environmental conservation.",
    date: new Date("2023-10-30T19:00:00"),
    location: "Local Community Center",
    isVirtual: false,
    photos: "https://example.com/film-screening.jpg",
  },
];

const User = require("./models/user_schema");
const Ngo = require("./models/ngo_schema");
const Event = require("./models/events_schema");

const seedDB = async () => {
  try {
    await User.deleteMany({});
    await Ngo.deleteMany({});
    await Event.deleteMany({});
    await User.insertMany(users);
    await Ngo.insertMany(ngo);
    await Event.insertMany(events);
    console.log("DB Seeded");
  } catch (error) {
    console.log(error);
  }
};
seedDB();
