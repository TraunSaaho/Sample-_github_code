/**
 * My Love — Personal Romantic Website Configuration
 * Customize names, dates, quotes, songs, and memories here.
 */
const LOVE_CONFIG = {
  couple: {
    partner1: "Lucia",
    partner2: "Juan",
    displayName: "Lucia & Juan",
    relationshipStartDate: "2021-11-29T00:00:00", // Start date (YYYY-MM-DDTHH:MM:SS)
    anniversaryDate: "2026-11-29T16:00:00",       // Special Day / Next Anniversary
    weddingLocation: "Santa María Chapel & Finca La Concepción, Ronda",
    hashtag: "#LuciaAndJuan"
  },

  hero: {
    subtitle: "A digital love journal & celebration of us",
    title: "Every love story is beautiful, but ours is my favorite.",
    dateBadge: "November 29, 2021 • Forever & Always",
    buttonText: "Explore Our Story"
  },

  song: {
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    album: "Easy On My Eyes",
    coverImg: "assets/img/couple-laughing.png",
    durationSec: 184 // 3:04
  },

  loveLetter: {
    salutation: "My Dearest Lucia,",
    paragraphs: [
      "I still remember the very first moment our eyes met across that crowded sunlit room. It felt as if time quietly stopped, and the rest of the world faded into background noise.",
      "Since that day, loving you has been the easiest and most breathtaking adventure of my life. You make the ordinary moments feel like poetry—from quiet Sunday morning coffees to dancing with me in the kitchen while dinner simmers.",
      "Thank you for your warmth, your unwavering kindness, your infectious laughter, and for choosing to walk beside me through every season.",
      "No matter where the road takes us, my hand will always seek yours. I loved you yesterday, I love you today, and I will choose you in every tomorrow."
    ],
    closing: "Forever yours,",
    signature: "Juan"
  },

  littleThings: [
    {
      title: "Your Morning Smile",
      description: "How your eyes crinkle before you've even had your first sip of coffee, filling the room with warmth.",
      tag: "Everyday Magic"
    },
    {
      title: "Holding Hands in Crowds",
      description: "The gentle way your fingers instinctively find mine whenever we walk through busy streets.",
      tag: "Comfort"
    },
    {
      title: "Uncontrollable Laughs",
      description: "Those moments when something silly happens and we both laugh so hard that no sound comes out.",
      tag: "Pure Joy"
    },
    {
      title: "Your Golden Kindness",
      description: "How genuinely you care for every living thing, always giving the warmest compassion to everyone around.",
      tag: "Your Heart"
    },
    {
      title: "Kitchen Slow Dances",
      description: "Swaying to gentle acoustic tunes by the stove while pasta boils, forgetting the rest of the world exists.",
      tag: "Romance"
    },
    {
      title: "Quiet Understanding",
      description: "How we can sit in total silence for hours reading or watching the rain, and it feels completely full.",
      tag: "Peace"
    },
    {
      title: "Your Fierce Support",
      description: "Believing in my wildest dreams even when I doubt myself, always being my steady anchor.",
      tag: "My Rock"
    },
    {
      title: "The Way You Say My Name",
      description: "With a tenderness that instantly turns the hardest day into a quiet sense of coming home.",
      tag: "Home"
    }
  ],

  timeline: [
    {
      date: "November 29, 2021",
      title: "Where It All Began",
      location: "Old Town Cafe, Seville",
      icon: "assets/icons/location.svg",
      image: "assets/img/couple-hero.png",
      caption: "Our first conversation stretched for four hours until the cafe closed.",
      story: "A simple invitation for coffee turned into talking until midnight under string lights. Neither of us wanted the evening to end."
    },
    {
      date: "August 14, 2022",
      title: "Our First Summer Escape",
      location: "Costa Brava",
      icon: "assets/icons/toast.svg",
      image: "assets/img/couple-laughing.png",
      caption: "Sunburned noses, salt in our hair, and endless laughter by the Mediterranean.",
      story: "We drove along winding coastal cliffs with the windows rolled down, singing along to old acoustic records and watching the sun melt into the sea."
    },
    {
      date: "December 24, 2023",
      title: "Making Our First Home",
      location: "Madrid",
      icon: "assets/icons/dinner.svg",
      image: "assets/img/couple-tender.png",
      caption: "Unpacking boxes on the wooden floor and eating takeout by candlelight.",
      story: "Surrounded by cardboard boxes and fairy lights, we toasted to our new chapter. It wasn't the furniture that made it home—it was you."
    },
    {
      date: "October 18, 2024",
      title: "The Golden Sunset Proposal",
      location: "Ronda Cliffs Overlook",
      icon: "assets/icons/chapel.svg",
      image: "assets/img/couple-bg.png",
      caption: "With shaking hands and a full heart: 'Will you spend forever with me?'",
      story: "As golden hour bathed the ancient bridge in amber light, I asked you the easiest question of my life. Your 'Yes' was the sweetest melody."
    },
    {
      date: "November 29, 2025",
      title: "The Wedding Celebration",
      location: "Santa María Chapel & Finca La Concepción",
      icon: "assets/icons/party.svg",
      image: "assets/img/couple-hero.png",
      caption: "Surrounded by everyone we cherish, dancing under the Andalusian stars.",
      story: "Vows whispered with tears of joy, glasses raised high, and dancing until the morning light broke over the olive groves."
    }
  ],

  dreams: [
    {
      title: "Hot Air Balloon in Cappadocia",
      category: "Adventure",
      tag: "Next Year",
      image: "assets/img/couple-laughing.png",
      desc: "Floating above fairy chimneys at sunrise with warm spiced tea."
    },
    {
      title: "A Sunlit Library & Garden",
      category: "Our Home",
      tag: "Forever Dream",
      image: "assets/img/couple-tender.png",
      desc: "Floor-to-ceiling bookshelves, climbing jasmine, and two comfortable reading armchairs."
    },
    {
      title: "Autumn in Kyoto",
      category: "Travel",
      tag: "Bucket List",
      image: "assets/img/couple-bg.png",
      desc: "Walking through fiery maple canopies and ancient stone temples together."
    },
    {
      title: "Growing Old & Silly Together",
      category: "Life",
      tag: "Always",
      image: "assets/img/couple-hero.png",
      desc: "Sitting on our porch with grey hair, holding hands, laughing at the exact same jokes."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LOVE_CONFIG;
}
