'use server'

const collegesData = [
  {
    id: 1,
    name: "State University",
    location: "Springfield, CA",
    eventsCount: 142,
    studentsCount: 24000,
    image: "/state-univ.jpg",
    description:
      "Leading public university with diverse academic programs and vibrant campus life",
    joinedDate: "2022-03-15",
  },
  {
    id: 2,
    name: "City College",
    location: "Metropolis, NY",
    eventsCount: 89,
    studentsCount: 18000,
    image: "/city-college.jpg",
    description: "Urban campus known for its business and arts programs",
    joinedDate: "2022-05-22",
  },
  {
    id: 3,
    name: "Polytechnic Institute",
    location: "Techville, TX",
    eventsCount: 76,
    studentsCount: 12500,
    image: "/polytech.jpg",
    description:
      "STEM-focused institution with cutting-edge research facilities",
    joinedDate: "2022-08-10",
  },
  {
    id: 4,
    name: "Liberal Arts College",
    location: "Greenfield, MA",
    eventsCount: 53,
    studentsCount: 8500,
    image: "/liberal-arts.jpg",
    description:
      "Small college with strong humanities and social sciences programs",
    joinedDate: "2023-01-05",
  },
];

export async function AllColleges(){
    await new Promise(resolve => setTimeout(resolve, 2000));
    return collegesData;
}

export async function CollegeDetails(id){
    return {data:`details of college ${id}`}
}