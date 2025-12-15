import IMG1 from "../assets/1-3.png";
import IMG2 from "../assets/CC-1.png";
import IMG3 from "../assets/PAPERENZA_P01.png";
import IMG4 from "../assets/techno.png";
import IMG5 from "../assets/Artboard 1.jpg";
import IMG6 from "../assets/frank.png";
import IMG7 from "../assets/dn.png";

// images for non-tech
import IMGn1 from "../assets/brain a holic (1).png";
import IMGn2 from "../assets/brando palooza (1).png";
import IMGn3 from "../assets/Cyber Trial_01.png";
import IMGn4 from "../assets/digital_blueprint1.png";
import IMGn5 from "../assets/grill and skill.png";
import IMGn6 from "../assets/one shot.png";

// images for workshop
import IMGw1 from "../assets/trojans_linux.png";
import IMGw2 from "../assets/trojans_ncs2.png";
import IMGw3 from "../assets/trojans_ve.png";
import IMGw4 from "../assets/trojans_webdev.png";

// images for gaming
import IMGg1 from "../assets/freefire.jpg";
import IMGg2 from "..//assets/Valo main.jpg";
import IMGg3 from "../assets/bgmi main.png";

const carouselData = [
  {
    id: "tech",
    title: "Technical Events",
    bgColor: "linear-gradient(135deg, #2A0845, #6441A5)",
    cards: [
      {
        imagen: IMG1,
        title: "CODE MANIA",
        time: "TO BE ANNOUNCED",
        fee: "FREE",
        // category: "SOLO-PLAY",
        buttons: [
          { text: "REGISTER", href: "/register-tech1" },
          { text: "RULES", href: "/rules-tech1" },
        ],
        isMax: false,
      },
      {
        imagen: IMG2,
        title: "CODERS CHEMISTRY",
        time: "TO BE ANNOUNCED",
        fee: "FREE",
        // category: "DUO-PLAY",
        buttons: [
          { text: "REGISTER", href: "/register-tech2" },
          { text: "RULES", href: "/rules-tech2" },
        ],
        isMax: false,
      },
      {
        imagen: IMG3,
        title: "PAPERENZA",
        time: "TO BE ANNOUNCED",
        fee: "FREE",
        // category: "Cloud Computing",
        buttons: [
          { text: "REGISTER", href: "/register-tech3" },
          { text: "RULES", href: "/rules-tech3" },
        ],
        isMax: false,
        link: "https://forms.gle/YcA1uzebGcUyLCNbA",
      },
      {
        imagen: IMG4,
        title: "TECHNO RHYTHM",
        time: "TO BE ANNOUNCED",
        fee: "FREE",
        // category: "SQUAD-PLAY(3 PLAYERS)",
        buttons: [
          { text: "REGISTER", href: "/register-tech3" },
          { text: "RULES", href: "/rules-tech3" },
        ],
        isMax: false,
      },
      {
        imagen: IMG5,
        title: "TECH TRIVIA",
        time: "TO BE ANNOUNCED",
        fee: "FREE",
        // category: "SOLO-PLAY",
        buttons: [
          { text: "REGISTER", href: "/register-tech3" },
          { text: "RULES", href: "/rules-tech3" },
        ],
        isMax: false,
      },
      {
        imagen: IMG6,
        title: "FRANKENSTEIN",
        time: "TO BE ANNOUNCED",
        fee: "FREE",
        // category: "DUO-PLAY",
        buttons: [
          { text: "REGISTER", href: "/register-tech3" },
          { text: "RULES", href: "/rules-tech3" },
        ],
        isMax: false,
      },
      {
        imagen: IMG7,
        title: "DEVELOPER'S NIGHTMARE",
        time: "TO BE ANNOUNCED",
        fee: "FREE",
        // category:"SOLO-PLAY",
        buttons: [
          { text: "REGISTER", href: "/register-tech3" },
          { text: "RULES", href: "/rules-tech3" },
        ],
        isMax: false,
      },
    ],
  },
  {
    id: "nontech",
    title: "Non-Technical Events",
    bgColor: "linear-gradient(135deg, #43cea2, #185a9d)",
    cards: [
      {
        imagen: IMGn1,

        title: "Brain A Holic",
        time: "TO BE ANNOUNCED",
        fee: "Free",
        // category: "Fun Tech",
        buttons: [
          { text: "REGISTER", href: "/register-art" },
          { text: "RULES", href: "/rules-art" },
        ],
        isMax: false,
      },
      {
        imagen: IMGn2,
        title: "BRAND O PALOOZA",
        description: "Get ready to groove and compete in our Dance Battle.",
        time: "TO BE ANNOUNCED",

        fee: "Free",
        // category: "Fun-Tech",
        buttons: [
          { text: "REGISTER", href: "/register-dance" },
          { text: "RULES", href: "/rules-dance" },
        ],
        isMax: false,
      },
      {
        imagen: IMGn3,
        title: "CYBER TRAIL",
        time: "TO BE ANNOUNCED",
        fee: "Free",
        // category: "Fun-tech",
        buttons: [
          { text: "REGISTER", href: "/register-quiz" },
          { text: "RULES", href: "/rules-quiz" },
        ],
        isMax: false,
      },
      {
        imagen: IMGn4,
        title: "DIGITAL BLUE PRINT",
        time: "TO BE ANNOUNCED",
        fee: "Free",
        // category: "Fun-tech",
        buttons: [
          { text: "REGISTER", href: "/register-quiz" },
          { text: "RULES", href: "/rules-quiz" },
        ],
        isMax: false,
      },
      {
        imagen: IMGn5,
        title: "GRILL & SKILL",
        time: "TO BE ANNOUNCED",
        fee: "Free",
        // category: "Fun-tech",
        buttons: [
          { text: "REGISTER", href: "/register-quiz" },
          { text: "RULES", href: "/rules-quiz" },
        ],
        isMax: false,
      },
      {
        imagen: IMGn6,
        title: "ONE SHOT",
        time: "TO BE ANNOUNCED",
        fee: "Free",
        // category: "Fun-Tech",
        buttons: [
          { text: "REGISTER", href: "/register-quiz" },
          { text: "RULES", href: "/rules-quiz" },
        ],
        isMax: false,
      },
    ],
  },
  {
    id: "workshop",
    title: "Workshops",
    bgColor: "linear-gradient(135deg, #F7971E, #FFD200)",
    cards: [
      {
        imagen: IMGw1,
        title: "Linux Workshop",
        time: "to be Announced",
        fee: "129",
        // category: "Workshop",
        buttons: [
          { text: "REGISTER", href: "/register-graphicdesign" },
          { text: "DETAILS", href: "/details-graphicdesign" },
        ],
        isMax: false,
        link: "https://forms.gle/h8NAP9frUfR7uW7E9",
      },
      {
        imagen: IMGw2,
        title: "Networking and CyberSecurity",
        time: "TO BE ANNOUNCED",
        fee: "129",
        // category: "Workshop",
        buttons: [
          { text: "REGISTER", href: "/register-webdev" },
          { text: "DETAILS", href: "/details-webdev" },
        ],
        isMax: false,
        link: "https://forms.gle/h8NAP9frUfR7uW7E9",
      },
      {
        imagen: IMGw3,
        title: "Video Editing Workshop",
        time: "TO BE ANNOUNCED",
        fee: "129",
        // category: "Workshop",
        buttons: [
          { text: "REGISTER", href: "/register-datascience" },
          { text: "DETAILS", href: "/details-datascience" },
        ],
        isMax: false,
        link: "https://forms.gle/h8NAP9frUfR7uW7E9",
      },
      {
        imagen: IMGw4,
        title: "Web Development Workshop",
        time: "TO BE ANNOUNCED",
        fee: "129",
        // category: "Workshop",
        buttons: [
          { text: "REGISTER", href: "/register-datascience" },
          { text: "DETAILS", href: "/details-datascience" },
        ],
        isMax: false,
        link: "https://forms.gle/h8NAP9frUfR7uW7E9",
      },
    ],
  },
  {
    id: "game",
    title: "Gaming Events",
    bgColor: "linear-gradient(135deg, #8E2DE2, #FF0080)",
    cards: [
      {
        imagen: IMGg1,
        title: "FREE FIRE",
        description: "Showcase your clashes with battles",
        time: "10:00 AM - 2:00 PM",
        date: "05/02/2025",
        fee: "69",
        category: "Offline",
        buttons: [
          { text: "REGISTER", href: "/register-art" },
          { text: "RULES", href: "/rules-art" },
        ],
        isMax: false,
        link: "https://forms.gle/hJj9BqtF92FbRRp59",
      },
      {
        imagen: IMGg2,
        title: "VALORANT",
        description: "Get ready to groove and compete in our Dance Battle.",
        time: "6:00 PM - 11:00 PM",
        date: "04/02/2025",
        fee: "99",
        category: "Online",
        buttons: [
          { text: "REGISTER", href: "/register-dance" },
          { text: "RULES", href: "/rules-dance" },
        ],
        isMax: false,
        link: "https://forms.gle/fKoPQ4MLwCUGeaj48",
      },
      {
        imagen: IMGg3,
        title: "BGMI",
        description: "Put your knowledge to the test in our Quiz Competition.",
        time: "10:00 AM - 2:00 PM",
        date: "05/02/2025",
        fee: "69",
        category: "Offline",
        buttons: [
          { text: "REGISTER", href: "/register-quiz" },
          { text: "RULES", href: "/rules-quiz" },
        ],
        isMax: false,
        link: "https://forms.gle/Ab8bWHUTws4rb2ft7",
      },
    ],
  },
];

export default carouselData;
