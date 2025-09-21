import { createClient } from "@supabase/supabase-js";
import { faker } from "@faker-js/faker";

// Configuration
const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_SERVICE_ROLE_KEY = "YOUR_SUPABASE_SERVICE_ROLE_KEY";
const PASSWORD = "password";

// Initialize Supabase client with service role key
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// Fake profile data
const fakeProfiles = [
  {
    full_name: "Sarah Johnson",
    username: "sarah_j",
    email: "sarah.johnson@example.com",
    gender: "female" as const,
    birthdate: "1999-03-15",
    bio: "Love hiking, coffee, and good conversations. Looking for someone to explore the world with! 🌍",
    avatar_url:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 23, max: 35 },
      distance: 50,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Alex Chen",
    username: "alex_c",
    email: "alex.chen@example.com",
    gender: "female" as const,
    birthdate: "1992-07-22",
    bio: "Passionate about photography and travel. Always up for an adventure! 📸✈️",
    avatar_url:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 28, max: 38 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Emma Wilson",
    username: "emma_w",
    email: "emma.wilson@example.com",
    gender: "female" as const,
    birthdate: "1990-11-08",
    bio: "Book lover and yoga enthusiast. Seeking someone who values personal growth and meaningful conversations. 📚🧘‍♀️",
    avatar_url:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 30, max: 40 },
      distance: 25,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Michael Rodriguez",
    username: "mike_r",
    email: "michael.rodriguez@example.com",
    gender: "male" as const,
    birthdate: "1988-05-12",
    bio: "Tech enthusiast and fitness lover. Looking for someone to share adventures and good food with! 💻🏋️‍♂️",
    avatar_url:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 40,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Jessica Kim",
    username: "jess_k",
    email: "jessica.kim@example.com",
    gender: "female" as const,
    birthdate: "1993-09-18",
    bio: "Artist and coffee addict. Love exploring new places and meeting interesting people. 🎨☕",
    avatar_url:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 35,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "David Thompson",
    username: "dave_t",
    email: "david.thompson@example.com",
    gender: "male" as const,
    birthdate: "1989-12-03",
    bio: "Musician and outdoor enthusiast. Guitar, hiking, and good vibes only! 🎸🏔️",
    avatar_url:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 24, max: 34 },
      distance: 45,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Sophie Martin",
    username: "sophie_m",
    email: "sophie.martin@example.com",
    gender: "female" as const,
    birthdate: "1994-02-28",
    bio: "Foodie and travel blogger. Always on the hunt for the best restaurants and hidden gems! 🍕✈️",
    avatar_url:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 27, max: 37 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Ryan Park",
    username: "ryan_p",
    email: "ryan.park@example.com",
    gender: "male" as const,
    birthdate: "1991-06-14",
    bio: "Entrepreneur and fitness coach. Passionate about helping others achieve their goals! 💪🚀",
    avatar_url:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Isabella Garcia",
    username: "bella_g",
    email: "isabella.garcia@example.com",
    gender: "female" as const,
    birthdate: "1996-08-07",
    bio: "Dance instructor and fitness enthusiast. Love spreading positivity and good energy! 💃✨",
    avatar_url:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 23, max: 33 },
      distance: 25,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "James Anderson",
    username: "james_a",
    email: "james.anderson@example.com",
    gender: "male" as const,
    birthdate: "1987-04-25",
    bio: "Software engineer and board game enthusiast. Looking for someone to share nerdy adventures with! 👨‍💻🎲",
    avatar_url:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 40,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Olivia Brown",
    username: "olivia_b",
    email: "olivia.brown@example.com",
    gender: "female" as const,
    birthdate: "2001-01-10",
    bio: "Animal lover and weekend traveler. Always planning the next getaway! 🐾✈️",
    avatar_url:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 19, max: 30 },
      distance: 40,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Liam Davis",
    username: "liam_d",
    email: "liam.davis@example.com",
    gender: "male" as const,
    birthdate: "1989-09-30",
    bio: "Coffee snob and runner. Early mornings and long runs keep me going! ☕🏃",
    avatar_url:
      "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 28, max: 35 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Taylor Nguyen",
    username: "taylor_n",
    email: "taylor.nguyen@example.com",
    gender: "other" as const,
    birthdate: "1993-04-19",
    bio: "Advocate for equality and creative spirit. Enjoy painting and late-night talks about life. 🎨🌌",
    avatar_url:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 27, max: 37 },
      distance: 30,
      gender_preference: ["male", "female", "other"],
    },
  },
  {
    full_name: "Ethan Miller",
    username: "ethan_m",
    email: "ethan.miller@example.com",
    gender: "male" as const,
    birthdate: "1990-08-12",
    bio: "Cyclist and foodie. Love trying out new cuisines after a long ride. 🚴🍲",
    avatar_url:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 45,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Chloe Patel",
    username: "chloe_p",
    email: "chloe.patel@example.com",
    gender: "female" as const,
    birthdate: "1984-05-22",
    bio: "Student of life and languages. Fluent in three and learning two more! 🌍📚",
    avatar_url:
      "https://images.unsplash.com/photo-1558377235-76f53857000b?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 30, max: 35 },
      distance: 20,
      gender_preference: ["male", "other"],
    },
  },
  {
    full_name: "Noah Smith",
    username: "noah_s",
    email: "noah.smith@example.com",
    gender: "male" as const,
    birthdate: "1991-02-17",
    bio: "Engineer with a love for puzzles and escape rooms. Always ready for a challenge! 🧩🔐",
    avatar_url:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 35,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Ava Martinez",
    username: "ava_m",
    email: "ava.martinez@example.com",
    gender: "female" as const,
    birthdate: "1994-07-09",
    bio: "Writer and dreamer. Love journaling, poetry, and cozy bookshops. ✍️📖",
    avatar_url:
      "https://images.unsplash.com/photo-1559144975-22228b3bb1d3?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 27, max: 37 },
      distance: 25,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Mason Lee",
    username: "mason_l",
    email: "mason.lee@example.com",
    gender: "male" as const,
    birthdate: "1997-11-21",
    bio: "Adventurer at heart. Camping, climbing, and spontaneous road trips fuel me. 🏕️🚙",
    avatar_url:
      "https://images.unsplash.com/photo-1611403119860-57c4937ef987?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 28, max: 38 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Sophia Rivera",
    username: "sophia_r",
    email: "sophia.rivera@example.com",
    gender: "female" as const,
    birthdate: "1992-06-04",
    bio: "Chef-in-training who loves experimenting in the kitchen. Food is my love language! 🍳❤️",
    avatar_url:
      "https://images.unsplash.com/photo-1594311418510-ee5485be4f73?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Caleb Wright",
    username: "caleb_w",
    email: "caleb.wright@example.com",
    gender: "male" as const,
    birthdate: "1990-03-28",
    bio: "Music festival junkie and vinyl collector. Sharing playlists is my love language. 🎶🎧",
    avatar_url:
      "https://images.unsplash.com/photo-1613940102159-1e7a40f2b60e?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 40,
      gender_preference: ["female", "other"],
    },
  },
  {
    full_name: "Lily Evans",
    username: "lily_e",
    email: "lily.evans@example.com",
    gender: "female" as const,
    birthdate: "1999-12-01",
    bio: "Student with a passion for art history and late-night debates. 🎨📜",
    avatar_url:
      "https://images.unsplash.com/photo-1620216464122-52de3fcbe32f?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 22, max: 30 },
      distance: 15,
      gender_preference: ["male", "female"],
    },
  },
  {
    full_name: "Jackson Harris",
    username: "jackson_h",
    email: "jackson.harris@example.com",
    gender: "male" as const,
    birthdate: "1988-10-11",
    bio: "Sports fanatic and amateur chef. Sundays are for football and cooking big meals! 🏈🍝",
    avatar_url:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 45,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Zoe Carter",
    username: "zoe_c",
    email: "zoe.carter@example.com",
    gender: "female" as const,
    birthdate: "1995-04-06",
    bio: "Nature lover and aspiring photographer. Always chasing sunsets. 🌅📷",
    avatar_url:
      "https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 35,
      gender_preference: ["male", "other"],
    },
  },
  {
    full_name: "Elijah Scott",
    username: "elijah_s",
    email: "elijah.scott@example.com",
    gender: "male" as const,
    birthdate: "1993-01-23",
    bio: "Tech geek and part-time DJ. Into gadgets, music, and a good espresso. 🎧☕",
    avatar_url:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 27, max: 37 },
      distance: 30,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Harper Green",
    username: "harper_g",
    email: "harper.green@example.com",
    gender: "other" as const,
    birthdate: "1991-09-15",
    bio: "Traveler, storyteller, and lover of all cultures. Open-minded and curious about life. 🌍✨",
    avatar_url:
      "https://images.unsplash.com/photo-1542596594-649edbc13630?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 40,
      gender_preference: ["male", "female", "other"],
    },
  },
  {
    full_name: "Amelia Clark",
    username: "amelia_c",
    email: "amelia.clark@example.com",
    gender: "female" as const,
    birthdate: "1996-12-12",
    bio: "Baker and food blogger. Always experimenting with recipes and sweets! 🍰📸",
    avatar_url:
      "https://images.unsplash.com/photo-1502767882403-636aee14f873?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 24, max: 34 },
      distance: 25,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Benjamin Lewis",
    username: "ben_l",
    email: "benjamin.lewis@example.com",
    gender: "male" as const,
    birthdate: "1987-07-19",
    bio: "History buff and trivia night regular. Always up for a good challenge. 📚🎲",
    avatar_url:
      "https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 28, max: 38 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Natalie Foster",
    username: "natalie_f",
    email: "natalie.foster@example.com",
    gender: "female" as const,
    birthdate: "1993-11-05",
    bio: "Fitness junkie who loves yoga and running. Let's grab smoothies after a workout! 🧘🥤",
    avatar_url:
      "https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Logan Perez",
    username: "logan_p",
    email: "logan.perez@example.com",
    gender: "male" as const,
    birthdate: "1990-05-03",
    bio: "Big into board games and weekend brunches. Strategy and pancakes, anyone? 🎲🥞",
    avatar_url:
      "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 40,
      gender_preference: ["female", "other"],
    },
  },
  {
    full_name: "Grace Thompson",
    username: "grace_t",
    email: "grace.thompson@example.com",
    gender: "female" as const,
    birthdate: "1995-03-25",
    bio: "Nature lover and hiker. Weekends are for mountains and fresh air. 🌲🥾",
    avatar_url:
      "https://images.unsplash.com/photo-1540317939342-e01a9976f517?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 50,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Owen Ramirez",
    username: "owen_r",
    email: "owen.ramirez@example.com",
    gender: "male" as const,
    birthdate: "1989-08-15",
    bio: "Gamer and coder. Love designing games and solving puzzles. 🎮💻",
    avatar_url:
      "https://images.unsplash.com/photo-1604494747044-2e080876c5f1?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 24, max: 34 },
      distance: 40,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Riley Morgan",
    username: "riley_m",
    email: "riley.morgan@example.com",
    gender: "other" as const,
    birthdate: "1992-02-11",
    bio: "Coffee enthusiast and creative writer. Always chasing new ideas. ☕✍️",
    avatar_url:
      "https://images.unsplash.com/photo-1527565290982-018bcfdbee74?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 30,
      gender_preference: ["male", "female", "other"],
    },
  },
  {
    full_name: "Lucas White",
    username: "lucas_w",
    email: "lucas.white@example.com",
    gender: "male" as const,
    birthdate: "1990-11-29",
    bio: "Musician and adventurer. Life is better with a guitar and a road trip. 🎸🚗",
    avatar_url:
      "https://images.unsplash.com/photo-1621873982312-1f83e89a2f21?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 45,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Mia Sullivan",
    username: "mia_s",
    email: "mia.sullivan@example.com",
    gender: "female" as const,
    birthdate: "1996-06-18",
    bio: "Traveler and amateur photographer. Life is better with memories and photos. 📸✈️",
    avatar_url:
      "https://images.unsplash.com/photo-1513673054901-2b5f51551112?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 23, max: 33 },
      distance: 25,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Evan Hughes",
    username: "evan_h",
    email: "evan.hughes@example.com",
    gender: "male" as const,
    birthdate: "1987-12-02",
    bio: "Fitness coach and outdoor explorer. Love sharing adventures and healthy meals. 💪🏞️",
    avatar_url:
      "https://images.unsplash.com/photo-1665753534790-d11b1d68926d?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Hannah Brooks",
    username: "hannah_b",
    email: "hannah.brooks@example.com",
    gender: "female" as const,
    birthdate: "1993-09-23",
    bio: "Yoga and wellness enthusiast. Seeking meaningful conversations and calm moments. 🧘‍♀️🌿",
    avatar_url:
      "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 35,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Aiden Cooper",
    username: "aiden_c",
    email: "aiden.cooper@example.com",
    gender: "male" as const,
    birthdate: "1991-05-14",
    bio: "Entrepreneur and tech enthusiast. Passionate about startups and innovation. 🚀💡",
    avatar_url:
      "https://images.unsplash.com/photo-1618561271670-88eab4ad40da?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Ella Foster",
    username: "ella_f",
    email: "ella.foster@example.com",
    gender: "female" as const,
    birthdate: "1994-02-07",
    bio: "Baker and travel lover. Always ready to try new cuisines and desserts. 🍰✈️",
    avatar_url:
      "https://images.unsplash.com/photo-1616325629936-99a9013c29c6?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 24, max: 34 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Nathan Scott",
    username: "nathan_s",
    email: "nathan.scott@example.com",
    gender: "male" as const,
    birthdate: "1988-03-12",
    bio: "Gamer and board game lover. Always up for strategy nights with friends. 🎲🕹️",
    avatar_url:
      "https://images.unsplash.com/photo-1728659697516-9f0fe04832a3?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 40,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Luna Diaz",
    username: "luna_d",
    email: "luna.diaz@example.com",
    gender: "female" as const,
    birthdate: "1996-08-21",
    bio: "Artist and nature lover. Sketching and long walks keep me inspired. 🎨🌿",
    avatar_url:
      "https://images.unsplash.com/photo-1727470287932-cdd5e4784bb1?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 23, max: 33 },
      distance: 25,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Gabriel Turner",
    username: "gabriel_t",
    email: "gabriel.turner@example.com",
    gender: "male" as const,
    birthdate: "1990-09-03",
    bio: "Cyclist and coffee lover. Exploring new trails and cafes on weekends. 🚴☕",
    avatar_url:
      "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 45,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Aria Bennett",
    username: "aria_b",
    email: "aria.bennett@example.com",
    gender: "female" as const,
    birthdate: "1992-12-11",
    bio: "Poet and dreamer. Love sharing stories and late-night conversations. ✍️🌌",
    avatar_url:
      "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 24, max: 34 },
      distance: 30,
      gender_preference: ["male", "other"],
    },
  },
  {
    full_name: "Calvin Brooks",
    username: "calvin_b",
    email: "calvin.brooks@example.com",
    gender: "male" as const,
    birthdate: "1987-07-20",
    bio: "Sports enthusiast and hobbyist chef. Sundays are for games and cooking. 🏀🍳",
    avatar_url:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Violet Hayes",
    username: "violet_h",
    email: "violet.hayes@example.com",
    gender: "female" as const,
    birthdate: "1995-05-30",
    bio: "Yoga practitioner and tea lover. Looking for someone to explore mindfulness with. 🧘🍵",
    avatar_url:
      "https://images.unsplash.com/photo-1695141306812-8b43efcc6deb?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 35,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Dylan Ward",
    username: "dylan_w",
    email: "dylan.ward@example.com",
    gender: "male" as const,
    birthdate: "1983-06-10",
    bio: "Entrepreneur and photographer. Capturing memories and creating businesses. 📸💼",
    avatar_url:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Stella Price",
    username: "stella_p",
    email: "stella.price@example.com",
    gender: "female" as const,
    birthdate: "1993-03-19",
    bio: "Food blogger and adventurer. Always on the lookout for hidden gems. 🍜✈️",
    avatar_url:
      "https://images.unsplash.com/photo-1672830622803-508b65a48cc8?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 24, max: 34 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Milo Jackson",
    username: "milo_j",
    email: "milo.jackson@example.com",
    gender: "male" as const,
    birthdate: "2000-04-02",
    bio: "Tech enthusiast and musician. Combining coding with melodies. 💻🎸",
    avatar_url:
      "https://images.unsplash.com/photo-1521151716396-b2da27b1a19f?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 40,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Zoey Simmons",
    username: "zoey_s",
    email: "zoey.simmons@example.com",
    gender: "female" as const,
    birthdate: "1998-09-07",
    bio: "Dancer and writer. Love expressing creativity through movement and words. 💃✍️",
    avatar_url:
      "https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 23, max: 33 },
      distance: 25,
      gender_preference: ["male", "other"],
    },
  },
  {
    full_name: "Nathaniel Moore",
    username: "nathaniel_m",
    email: "nathaniel.moore@example.com",
    gender: "male" as const,
    birthdate: "1988-11-20",
    bio: "Hiker and photographer. Weekends are for mountains and sunsets. 🏞️📷",
    avatar_url:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Clara Watson",
    username: "clara_w",
    email: "clara.watson@example.com",
    gender: "female" as const,
    birthdate: "1994-07-12",
    bio: "Bookworm and coffee lover. Libraries and cozy cafes are my happy place. 📚☕",
    avatar_url:
      "https://images.unsplash.com/photo-1484360751593-36ec906bad60?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Ezra Kelly",
    username: "ezra_k",
    email: "ezra.kelly@example.com",
    gender: "other" as const,
    birthdate: "1992-05-05",
    bio: "Creative spirit and traveler. Capturing moments and collecting memories. 🌍✍️",
    avatar_url:
      "https://images.unsplash.com/photo-1597612041762-93a90e22af06?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 40,
      gender_preference: ["male", "female", "other"],
    },
  },
  {
    full_name: "Julian Price",
    username: "julian_p",
    email: "julian.price@example.com",
    gender: "male" as const,
    birthdate: "1990-08-16",
    bio: "Techie and music lover. Always tinkering with gadgets and playlists. 🎶💻",
    avatar_url:
      "https://images.unsplash.com/photo-1595268108971-680d086f8cb2?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 45,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Vera Thompson",
    username: "vera_t",
    email: "vera.thompson@example.com",
    gender: "female" as const,
    birthdate: "1995-02-14",
    bio: "Yoga enthusiast and painter. Seeking meaningful connections and inspiration. 🧘‍♀️🎨",
    avatar_url:
      "https://images.unsplash.com/photo-1679466061812-211a6b737175?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 24, max: 34 },
      distance: 25,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Isaac Bennett",
    username: "isaac_b",
    email: "isaac.bennett@example.com",
    gender: "male" as const,
    birthdate: "1987-03-21",
    bio: "Cyclist and foodie. Weekends are for long rides and good meals. 🚴🍲",
    avatar_url:
      "https://images.unsplash.com/photo-1514353456378-94e73f7204b5?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Nora James",
    username: "nora_j",
    email: "nora.james@example.com",
    gender: "female" as const,
    birthdate: "1993-10-08",
    bio: "Travel blogger and foodie. Exploring cultures and cuisines wherever I go. ✈️🍜",
    avatar_url:
      "https://images.unsplash.com/photo-1536426694225-d9c33045c03d?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 24, max: 34 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Leo Sanders",
    username: "leo_s",
    email: "leo.sanders@example.com",
    gender: "male" as const,
    birthdate: "1989-12-09",
    bio: "Gamer and puzzle solver. Love escape rooms and strategy games. 🎮🧩",
    avatar_url:
      "https://images.unsplash.com/photo-1531287333398-6d7bd77ef790?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 40,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Maya Richardson",
    username: "maya_r",
    email: "maya.richardson@example.com",
    gender: "female" as const,
    birthdate: "1996-04-02",
    bio: "Artist and nature lover. Painting, hiking, and creativity fill my days. 🎨🌿",
    avatar_url:
      "https://images.unsplash.com/photo-1656074520589-bd325dc7aa4f?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 23, max: 33 },
      distance: 25,
      gender_preference: ["male", "other"],
    },
  },
  {
    full_name: "Sebastian Cole",
    username: "sebastian_c",
    email: "sebastian.cole@example.com",
    gender: "male" as const,
    birthdate: "1991-06-17",
    bio: "Entrepreneur and tech geek. Always on the lookout for new opportunities. 🚀💻",
    avatar_url:
      "https://images.unsplash.com/photo-1484517186945-df8151a1a871?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Aurora Hill",
    username: "aurora_h",
    email: "aurora.hill@example.com",
    gender: "female" as const,
    birthdate: "1994-11-25",
    bio: "Dancer and dreamer. Love expressing creativity through movement. 💃✨",
    avatar_url:
      "https://images.unsplash.com/photo-1720210786716-f089657cf816?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Wyatt Foster",
    username: "wyatt_f",
    email: "wyatt.foster@example.com",
    gender: "male" as const,
    birthdate: "1988-02-08",
    bio: "Sports enthusiast and music lover. Sundays are for games and jams. 🏀🎵",
    avatar_url:
      "https://images.unsplash.com/photo-1552337480-48918be048b9?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 45,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Lila Morgan",
    username: "lila_m",
    email: "lila.morgan@example.com",
    gender: "female" as const,
    birthdate: "1995-08-12",
    bio: "Writer and tea lover. Cozy afternoons with books and reflections. 📚🍵",
    avatar_url:
      "https://images.unsplash.com/photo-1624395416066-f8e7874a7b67?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 24, max: 34 },
      distance: 25,
      gender_preference: ["male", "other"],
    },
  },
  {
    full_name: "Julio Ramirez",
    username: "julio_r",
    email: "julio.ramirez@example.com",
    gender: "male" as const,
    birthdate: "1990-09-27",
    bio: "Gamer and traveler. Exploring new worlds, real and virtual. 🎮✈️",
    avatar_url:
      "https://images.unsplash.com/photo-1725724676366-cafa80c232d7?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 40,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Sienna Knight",
    username: "sienna_k",
    email: "sienna.knight@example.com",
    gender: "female" as const,
    birthdate: "1993-05-16",
    bio: "Photographer and adventurer. Always chasing sunsets and stories. 📸🌅",
    avatar_url:
      "https://images.unsplash.com/photo-1495490140452-5a226aef25d4?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 24, max: 34 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Emmett Stone",
    username: "emmett_s",
    email: "emmett.stone@example.com",
    gender: "male" as const,
    birthdate: "1989-01-12",
    bio: "Tech enthusiast and runner. Coding by day, running by night. 💻🏃",
    avatar_url:
      "https://images.unsplash.com/photo-1492462543947-040389c4a66c?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Harper Lane",
    username: "harper_l",
    email: "harper.lane@example.com",
    gender: "female" as const,
    birthdate: "1995-10-11",
    bio: "Book lover and tea enthusiast. Cozy afternoons are my favorite. 📚🍵",
    avatar_url:
      "https://images.unsplash.com/photo-1613498382159-0972b7b4c9f1?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Theo Bennett",
    username: "theo_b",
    email: "theo.bennett@example.com",
    gender: "male" as const,
    birthdate: "1989-12-18",
    bio: "Gamer and tech enthusiast. Always exploring new tech and strategies. 🎮💻",
    avatar_url:
      "https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 24, max: 34 },
      distance: 45,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Avery Cole",
    username: "avery_c",
    email: "avery.cole@example.com",
    gender: "other" as const,
    birthdate: "1992-04-04",
    bio: "Traveler and creative soul. Love capturing memories wherever I go. 🌍📸",
    avatar_url:
      "https://images.unsplash.com/photo-1474134747415-e3f837fc52da?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 40,
      gender_preference: ["male", "female", "other"],
    },
  },
  {
    full_name: "Juliette Parks",
    username: "juliette_p",
    email: "juliette.parks@example.com",
    gender: "female" as const,
    birthdate: "1994-08-23",
    bio: "Dancer and artist. Life is all about movement and expression. 💃🎨",
    avatar_url:
      "https://images.unsplash.com/photo-1680920092274-0a8e239062d8?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 24, max: 34 },
      distance: 25,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Caleb Foster",
    username: "caleb_f",
    email: "caleb.foster@example.com",
    gender: "male" as const,
    birthdate: "1988-05-09",
    bio: "Cyclist and foodie. Exploring trails and cafes whenever possible. 🚴☕",
    avatar_url:
      "https://images.unsplash.com/photo-1586628345267-d9db8d893f9e?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Lydia Armstrong",
    username: "lydia_a",
    email: "lydia.armstrong@example.com",
    gender: "female" as const,
    birthdate: "1993-09-05",
    bio: "Yoga and wellness enthusiast. Enjoying calm moments and meaningful talks. 🧘‍♀️🌿",
    avatar_url:
      "https://images.unsplash.com/photo-1577253313708-cab167d2c474?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 35,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Mason Rivera",
    username: "mason_r",
    email: "mason.rivera@example.com",
    gender: "male" as const,
    birthdate: "1991-03-17",
    bio: "Entrepreneur and adventurer. Always chasing new experiences. 🚀🌄",
    avatar_url:
      "https://images.unsplash.com/photo-1636377985881-8b4f7194912a?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Clara Hughes",
    username: "clara_h",
    email: "clara.hughes@example.com",
    gender: "female" as const,
    birthdate: "1996-06-21",
    bio: "Foodie and travel enthusiast. Exploring cultures and cuisines everywhere. 🍜✈️",
    avatar_url:
      "https://images.unsplash.com/photo-1520512202623-51c5c53957df?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 23, max: 33 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Eli Parker",
    username: "eli_p",
    email: "eli.parker@example.com",
    gender: "male" as const,
    birthdate: "1990-11-30",
    bio: "Musician and board game enthusiast. Always up for jam sessions and strategy nights. 🎸🎲",
    avatar_url:
      "https://images.unsplash.com/photo-1541618937854-2577dd93ddc4?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 40,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Zoe Bennett",
    username: "zoe_b",
    email: "zoe.bennett@example.com",
    gender: "female" as const,
    birthdate: "1995-02-28",
    bio: "Artist and dancer. Life is better when expressing creativity freely. 🎨💃",
    avatar_url:
      "https://images.unsplash.com/photo-1665065952009-a5dc00f423d4?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 25,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Asher Quinn",
    username: "asher_q",
    email: "asher.quinn@example.com",
    gender: "male" as const,
    birthdate: "1987-07-10",
    bio: "Runner and tech enthusiast. Coding, running, and coffee keep me sane. 💻🏃☕",
    avatar_url:
      "https://images.unsplash.com/photo-1620031179120-29111bc93ca6?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Luna Griffin",
    username: "luna_g",
    email: "luna.griffin@example.com",
    gender: "female" as const,
    birthdate: "1994-12-15",
    bio: "Photographer and explorer. Capturing life’s moments one click at a time. 📸🌅",
    avatar_url:
      "https://images.unsplash.com/photo-1522512115668-c09775d6f424?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 24, max: 34 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Jasper Ellis",
    username: "jasper_e",
    email: "jasper.ellis@example.com",
    gender: "male" as const,
    birthdate: "1989-05-04",
    bio: "Gamer and outdoorsman. Strategy games and hiking are my go-to hobbies. 🎮🥾",
    avatar_url:
      "https://images.unsplash.com/photo-1558487661-9d4f01e2ad64?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 40,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Ivy Morales",
    username: "ivy_m",
    email: "ivy.morales@example.com",
    gender: "female" as const,
    birthdate: "1996-09-09",
    bio: "Writer and yoga lover. Finding balance in words and stretches. ✍️🧘‍♀️",
    avatar_url:
      "https://images.unsplash.com/photo-1508602636771-613ba0112c30?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 23, max: 33 },
      distance: 25,
      gender_preference: ["male", "other"],
    },
  },
  {
    full_name: "Liam Fox",
    username: "liam_f",
    email: "liam.fox@example.com",
    gender: "male" as const,
    birthdate: "1990-01-17",
    bio: "Adventure seeker and coffee lover. Always exploring new trails and local cafés! ☕🏞️",
    avatar_url:
      "https://images.unsplash.com/photo-1633116177594-3305531291a6?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 40,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Maya Patel",
    username: "maya_p",
    email: "maya.patel@example.com",
    gender: "female" as const,
    birthdate: "1995-05-30",
    bio: "Yoga enthusiast and amateur chef. Love cooking meals and finding inner peace on the mat. 🧘‍♀️🍲",
    avatar_url:
      "https://images.unsplash.com/photo-1542648870-438579cbd0ba?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 27, max: 37 },
      distance: 25,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Jordan Lee",
    username: "jordan_l",
    email: "jordan.lee@example.com",
    gender: "other" as const,
    birthdate: "1993-12-11",
    bio: "Music lover and weekend hiker. Enjoy discovering new tunes and scenic trails. 🎶🏔️",
    avatar_url:
      "https://images.unsplash.com/photo-1714834654374-a004fa8cd5c1?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 50,
      gender_preference: ["male", "female", "other"],
    },
  },
  {
    full_name: "Sophia Nguyen",
    username: "sophia_n",
    email: "sophia.nguyen@example.com",
    gender: "female" as const,
    birthdate: "1992-08-14",
    bio: "Digital artist and cat lover. Always sketching and exploring new cafés. 🐱🎨",
    avatar_url:
      "https://images.unsplash.com/photo-1573496800808-56566a492b63?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 28, max: 38 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Ethan Brooks",
    username: "ethan_b",
    email: "ethan.brooks@example.com",
    gender: "male" as const,
    birthdate: "1989-06-22",
    bio: "Tech enthusiast and gamer. Love building apps and exploring virtual worlds. 💻🎮",
    avatar_url:
      "https://images.unsplash.com/photo-1620481662032-f0133ccc7dbd?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 40,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Ava Morales",
    username: "ava_m",
    email: "ava.morales@example.com",
    gender: "female" as const,
    birthdate: "1996-03-03",
    bio: "Fitness coach and foodie. Love creating healthy meals and motivating others. 💪🥗",
    avatar_url:
      "https://images.unsplash.com/photo-1536914307996-bcef0f608f2f?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 24, max: 34 },
      distance: 35,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Noah Carter",
    username: "noah_c",
    email: "noah.carter@example.com",
    gender: "male" as const,
    birthdate: "1991-09-10",
    bio: "Photographer and traveler. Always on the lookout for the perfect shot and adventure. 📸✈️",
    avatar_url:
      "https://images.unsplash.com/photo-1625282297115-8ef0f576028c?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 26, max: 36 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Lila Thompson",
    username: "lila_t",
    email: "lila.thompson@example.com",
    gender: "female" as const,
    birthdate: "1994-11-05",
    bio: "Bookworm and gardener. Love curling up with a novel or tending to my plants. 📚🌿",
    avatar_url:
      "https://images.unsplash.com/photo-1468488718849-422a2a5efc03?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 27, max: 37 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Kai Morgan",
    username: "kai_m",
    email: "kai.morgan@example.com",
    gender: "other" as const,
    birthdate: "1993-07-19",
    bio: "Adventurer and foodie. Love trying new cuisines and exploring offbeat locations. 🍜🏞️",
    avatar_url:
      "https://images.unsplash.com/photo-1639619628924-eced0acbab4f?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 45,
      gender_preference: ["male", "female", "other"],
    },
  },
  {
    full_name: "Ella Rivera",
    username: "ella_r",
    email: "ella.rivera@example.com",
    gender: "female" as const,
    birthdate: "1995-02-28",
    bio: "Painter and yoga lover. Love expressing myself creatively and finding balance. 🎨🧘‍♀️",
    avatar_url:
      "https://images.unsplash.com/photo-1583147610149-78ac5cb5a303?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 24, max: 34 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Mason Kelly",
    username: "mason_k",
    email: "mason.kelly@example.com",
    gender: "male" as const,
    birthdate: "1988-12-02",
    bio: "Guitarist and traveler. Love performing and discovering new cultures. 🎸🌎",
    avatar_url:
      "https://images.unsplash.com/photo-1697811614091-426210be3695?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 28, max: 38 },
      distance: 40,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Zoe Bennett",
    username: "zoe_b",
    email: "zoe.bennett@example.com",
    gender: "female" as const,
    birthdate: "1992-06-14",
    bio: "Food blogger and traveler. Always hunting for the next great recipe or destination. 🍕✈️",
    avatar_url:
      "https://images.unsplash.com/photo-1739133783212-e1c93795d9c7?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 27, max: 37 },
      distance: 30,
      gender_preference: ["male"],
    },
  },
  {
    full_name: "Leo Sanders",
    username: "leo_s",
    email: "leo.sanders@example.com",
    gender: "male" as const,
    birthdate: "1990-05-25",
    bio: "Fitness trainer and tech enthusiast. Love helping others reach goals and explore gadgets. 💪💻",
    avatar_url:
      "https://images.unsplash.com/photo-1583343246877-c088659f6417?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 25, max: 35 },
      distance: 50,
      gender_preference: ["female"],
    },
  },
  {
    full_name: "Riley Adams",
    username: "riley_a",
    email: "riley.adams@example.com",
    gender: "other" as const,
    birthdate: "1994-08-21",
    bio: "Artist and music lover. Passionate about creativity and sharing vibes with others. 🎨🎶",
    avatar_url:
      "https://images.unsplash.com/photo-1494354145959-25cb82edf23d?w=400&h=400&fit=crop&crop=face",
    preferences: {
      age_range: { min: 24, max: 34 },
      distance: 35,
      gender_preference: ["male", "female", "other"],
    },
  },
];

async function createFakeProfiles() {
  console.log("🚀 Starting to create fake profiles...");

  for (let i = 0; i < fakeProfiles.length; i++) {
    const profile = fakeProfiles[i];

    try {
      console.log(
        `\n📝 Creating profile ${i + 1}/${fakeProfiles.length + 1}: ${
          profile.full_name
        }`
      );

      // 1. Check if auth user already exists
      const { data: existingAuthUsers } = await supabase.auth.admin.listUsers();
      const existingAuthUser = existingAuthUsers.users.find(
        (u) => u.email === profile.email
      );

      let userId: string;

      if (existingAuthUser) {
        console.log(
          `⚠️ Auth user already exists for ${profile.full_name}, using existing...`
        );
        userId = existingAuthUser.id;
      } else {
        // Create new auth user
        const { data: authData, error: authError } =
          await supabase.auth.admin.createUser({
            email: profile.email,
            password: PASSWORD,
            email_confirm: true, // Auto-confirm email
            user_metadata: {
              full_name: profile.full_name,
              username: profile.username,
            },
          });

        if (authError) {
          console.error(
            `❌ Error creating auth user for ${profile.full_name}:`,
            authError
          );
          continue;
        }

        userId = authData.user.id;
        console.log(`✅ Auth user created: ${userId}`);
      }

      // 2. Check if user profile already exists
      const { data: existingProfile } = await supabase
        .from("users")
        .select("id")
        .eq("id", userId)
        .single();

      if (existingProfile) {
        console.log(
          `⚠️ Profile already exists for ${profile.full_name}, updating...`
        );

        // Update existing profile with new data
        const { error: updateError } = await supabase
          .from("users")
          .update({
            full_name: profile.full_name,
            username: profile.username,
            email: profile.email,
            gender: profile.gender,
            birthdate: profile.birthdate,
            bio: profile.bio,
            avatar_url: profile.avatar_url,
            preferences: profile.preferences,
            location_lat: faker.location.latitude({ min: 37.7, max: 37.8 }), // San Francisco area
            location_lng: faker.location.longitude({
              min: -122.5,
              max: -122.4,
            }),
            is_verified: true,
            is_online: Math.random() > 0.5,
          })
          .eq("id", userId);

        if (updateError) {
          console.error(
            `❌ Error updating profile for ${profile.full_name}:`,
            updateError
          );
          continue;
        }
      } else {
        // Insert new user profile data
        const { error: profileError } = await supabase.from("users").insert({
          id: userId,
          full_name: profile.full_name,
          username: profile.username,
          email: profile.email,
          gender: profile.gender,
          birthdate: profile.birthdate,
          bio: profile.bio,
          avatar_url: profile.avatar_url,
          preferences: profile.preferences,
          location_lat: faker.location.latitude({ min: 37.7, max: 37.8 }), // San Francisco area
          location_lng: faker.location.longitude({ min: -122.5, max: -122.4 }),
          is_verified: true,
          is_online: Math.random() > 0.5,
        });

        if (profileError) {
          console.error(
            `❌ Error creating profile for ${profile.full_name}:`,
            profileError
          );
          // Try to clean up the auth user if profile creation fails
          await supabase.auth.admin.deleteUser(userId);
          continue;
        }
      }

      console.log(`✅ Profile created successfully for ${profile.full_name}`);
      console.log(`   📧 Email: ${profile.email}`);
      console.log(`   🔑 Password: ${PASSWORD}`);
      console.log(`   👤 Username: ${profile.username}`);
    } catch (error) {
      console.error(
        `❌ Unexpected error creating profile for ${profile.full_name}:`,
        error
      );
    }
  }

  console.log("\n🎉 Fake profile creation completed!");
  console.log("\n📋 Summary:");
  console.log('All accounts use password: "password"');
  console.log("All emails are auto-confirmed");
  console.log("Profiles include random location data in San Francisco area");
  console.log("Some users are marked as online for testing");
}

// Run the script npm run create-fake-profiles
createFakeProfiles().catch(console.error);
