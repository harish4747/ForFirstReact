import User from "./User";

const details = [
  {
    name: "james",
    place: "UK",
    desc: "Back end Developer",
    status: true,
    skill: ["java","springboot","hibernate" ,"jdbc"],
  },
  {
    name: "Caroline",
    place: "USA",
    desc: "Front end Designer",
    status: false,
    skill: ["html", "css", "java script" ,"UI/UX"],
  },
  {
    name: "TOM",
    place: "India",
    desc: "Front end Developer",
    status: true,
    skill: ["html", "css", "java script", "react", "java"],
  },
  {
    name: "goku",
    place: "UK",
    desc: "Back end Developer",
    status: false,
    skill: ["java","springboot","hibernate" ,"jdbc"],
  },
  {
    name: "Catherine",
    place: "london",
    desc: "Front end Designer",
    status: true,
    skill: ["html", "css", "java script" ,"UI/UX"],
  },
  {
    name: "spidey",
    place: "India",
    desc: "Front end Developer",
    status: true,
    skill: ["html", "css", "java script", "react", "java"],
  },
  {
    name: "ram",
    place: "UK",
    desc: "Back end Developer",
    status: true,
    skill: ["java","springboot","hibernate" ,"jdbc"],
  },
  {
    name: "Caroline",
    place: "USA",
    desc: "Front end Designer",
    status: true,
    skill: ["html", "css", "java script" ,"UI/UX"],
  },
  {
    name: "jerry",
    place: "India",
    desc: "Front end Developer",
    status: false,
    skill: ["html", "css", "java script", "react", "java"],
  },
];

const Container = () => {
  return (
    <>
      {details.map((val, index) => (
        <User
          key={index}
          name={val.name}
          place={val.place}
          desc={val.desc}
          status={val.status}
          skill={val.skill}
        />
      ))}
    </>
  );
};

export default Container;
