/**
 * My Love — Personal Romantic Website Configuration
 * Customize names, dates, quotes, songs, and memories here.
 */
const LOVE_CONFIG = {
  couple: {
    partner1: "Praveen",
    partner2: "Dhanu Sri",
    displayName: "Praveen & Dhanu Sri",
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
    title: "Feel My Love",
    artist: "Aditya Music",
    album: "Arya",
    coverImg: "assets/img/IMG_8042.PNG",
    durationSec: 184 // 3:04
  },

  loveLetter: {
    salutation: "To Dhanu, My Entire World 🥂❤️",
    paragraphs: [
      "I am writing this because my heart is completely full of love for you—and honestly, because you deserve a medal for dealing with me. Our journey together is a masterpiece, and you are my absolute favorite person.",
      "Ever since you came into my life, I’ve been smiling at my phone like an idiot. People probably think I’ve lost my mind, but honestly, I think I’ve just lost it to you.",
      "Sometimes you annoy me so much that I feel like blocking you. But then I remember that I’d miss you in the next ten seconds. So, unfortunately for me, you’re stuck with me! I can’t promise that I’ll always be romantic. Sometimes I’ll irritate you, steal your food, make silly jokes at the wrong time, and disturb you when you’re trying to sleep. But I can promise that I’ll care for you, stand beside you, and make you laugh even on your worst days.",
      "Anyway, enough of my emotional drama. Just remember one thing: my heart has already selected you, and unfortunately, there’s no return or exchange policy. No refunds either!",
      "The person who loves you more than sleep, food, and occasionally even their own ego."
    ],
    closing: "Your lovingly,",
    signature: "Praveen Kumar ♥️❤️"
  },

  littleThings: [
    {
      title: "Three Years of Us",
      description: "Looking back at the last three years, and I am so incredibly grateful for every single moment we’ve shared. You have brought so much joy, laughter, and warmth into my life. Thank you for being my partner, my best friend, and my favorite person in the world. I love you more today than I did on day one, and I can’t wait for all the years ahead of us.",
      tag: "Grateful for Every Moment"
    },
    {
      title: "I Hit the Jackpot",
      description: "Three years ago, I hit the absolute jackpot. You aren’t just my girlfriend; you are my best friend, my safest space, and my favorite person to do life with.",
      tag: "My Favorite Person"
    },
    {
      title: "I’d Choose You Again",
      description: "It has been hundreds of days since I first asked you to be mine, and if I could go back in time, I would choose you all over again.",
      tag: "Every Single Time"
    },
    {
      title: "My Love Keeps Growing",
      description: "Sending a little reminder today of how much I love you. From the moment I proposed to this very day, my love for you has only grown deeper.",
      tag: "From Then to Today"
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
