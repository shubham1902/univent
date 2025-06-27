'use server'

const eventsData = [
  {
    id: 1,
    title: "Tech Symposium 2023",
    college: "State University",
    date: "2023-11-15",
    time: "10:00 AM",
    type: "workshop",
    category: "Technology",
    location: "Campus Tech Center",
    description:
      "Annual technology conference featuring industry leaders and hands-on workshops",
    details:
      "Join us for our premier annual technology symposium where cutting-edge innovations meet practical applications. This comprehensive event features keynote presentations from Fortune 500 CTOs, interactive coding workshops, AI demonstration sessions, and networking opportunities with tech industry professionals. Participants will explore emerging technologies including machine learning, blockchain, cybersecurity, and cloud computing through hands-on experiences and expert-led discussions.",
    image: "/tech-event.jpg", 
  },
  {
    id: 2,
    title: "Cultural Fest",
    college: "City College",
    date: "2023-11-20",
    time: "2:00 PM",
    type: "festival",
    category: "Cultural",
    location: "Main Quadrangle",
    description:
      "Celebrate diversity with food, music and performances from around the world",
    details:
      "Experience a vibrant celebration of global cultures featuring authentic cuisine from over 20 countries, traditional dance performances, live music concerts, art exhibitions, and cultural workshops. Students and faculty will showcase their heritage through interactive booths, storytelling sessions, language demonstrations, and hands-on craft activities. This immersive festival promotes cultural understanding and unity while providing entertainment for the entire campus community.",
    image: "/cultural-event.jpg",
  },
  {
    id: 3,
    title: "Startup Pitch Competition",
    college: "Business Institute",
    date: "2023-12-05",
    time: "9:30 AM",
    type: "competition",
    category: "Business",
    location: "Innovation Hub",
    description: "Student entrepreneurs pitch their ideas to investors",
    details:
      "Aspiring student entrepreneurs will present their innovative business concepts to a distinguished panel of venture capitalists, successful entrepreneurs, and industry experts. Participants compete for cash prizes, mentorship opportunities, and potential seed funding. The competition includes preliminary rounds, final presentations, networking sessions with investors, and workshops on business plan development, market analysis, and presentation skills for emerging entrepreneurs.",
    image: "/startup-event.jpg",
  },
  {
    id: 4,
    title: "Science Fair",
    college: "Polytechnic University",
    date: "2023-12-10",
    time: "11:00 AM",
    type: "exhibition",
    category: "Science",
    location: "Science Building",
    description: "Showcase of student research projects and innovations",
    details:
      "Discover groundbreaking research and innovative solutions developed by undergraduate and graduate students across various scientific disciplines. The exhibition features interactive displays, live demonstrations, poster presentations, and prototype showcases covering fields like biotechnology, renewable energy, robotics, environmental science, and materials engineering. Visitors can engage directly with researchers, learn about cutting-edge methodologies, and witness the future of scientific innovation.",
    image: "/science-event.jpg",
  },
];



export async function AllEvents() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return eventsData;
}

export async function AddEvent(formData) {
  return {msg: "Event Added"}
}

export async function GetEvent(id) {
  return {data: `details of event ${id}`}
}


