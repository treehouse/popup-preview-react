import { useState } from "react";
import InfoCard from "./InfoCard";
import Overlay from "./Overlay";

const webDevelopmentData = [
  {
    title: "Frontend Web Development",
    shortDescription:
      "Frontend web development focuses on creating the user interface and experience of a website using technologies like HTML, CSS, and JavaScript.",
    longDescription:
      "Frontend web development involves designing and implementing the visual and interactive aspects of a website that users directly interact with. This includes structuring content with HTML, styling it with CSS, and adding interactivity and dynamic behavior using JavaScript. Frontend developers work closely with designers to bring mockups and wireframes to life, ensuring that websites are both visually appealing and functional across different devices and browsers.",
  },
  {
    title: "Backend Web Development",
    shortDescription:
      "Backend web development involves building and maintaining the server-side logic, databases, and application architecture that power a website.",
    longDescription:
      "Backend web development is concerned with the server-side aspects of a web application, including server logic, database interactions, and API integrations. Backend developers use languages such as Python, Ruby, Java, PHP, or Node.js to create robust, scalable, and efficient systems that handle data processing, user authentication, and business logic. They ensure that the server, application, and database communicate seamlessly, providing the necessary data and functionality to the frontend for a complete user experience.",
  },
  {
    title: "Fullstack Web Development",
    shortDescription:
      "Fullstack web development encompasses both frontend and backend development, allowing a developer to handle all aspects of a web application.",
    longDescription:
      "Fullstack web development involves working on both the frontend and backend parts of a web application, enabling a developer to manage the entire development process from start to finish. Fullstack developers possess a broad skill set that includes creating user interfaces, designing server-side logic, managing databases, and integrating various web services. They are capable of building fully functional web applications by combining their knowledge of frontend technologies like HTML, CSS, and JavaScript with backend technologies such as Python, Ruby, or Node.js. This versatility allows fullstack developers to handle complex projects and collaborate effectively with different teams.",
  },
];

const App = () => {
  const [activeData, setActiveData] = useState(null);
  const [overlay, setOverlay] = useState(false);

  return (
    <div className="grid place-items-center h-screen bg-zinc-300 p-5 text-[#454545]">
      {overlay && <Overlay activeData={activeData} setOverlay={setOverlay} />}
      <ul className="w-auto">
        {webDevelopmentData.map((data, index) => {
          return (
            <InfoCard
              key={index}
              data={data}
              setActiveData={setActiveData}
              setOverlay={setOverlay}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default App;
