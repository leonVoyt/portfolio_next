import RootLayout from "../src/app/MainLatout";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
const DynamicThreeCanvas = dynamic(() => import("../components/Box"), {
  ssr: false, // Disable server-side rendering
});
import { FC, Suspense } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
const Index = () => {
  const { theme } = useTypeSelector((state) => state.theme);

  return (
    <RootLayout>
      <div className="index ">
        <div className="index__text">
          <h1 className="_active__animation">
            Hi my name is <strong>Leon</strong>{" "}
          </h1>
          <p className="_active__animation">a WEB developer</p>
          <span className="_active__animation">
            with passion for learning and creating.
          </span>
          <a href="https://robota.ua/candidates/22003575" target="_blank">
            <button className="index__button _active__animation">
              Open CV
            </button>
          </a>
        </div>
      </div>
      <div className={`projects ${!theme ? "dark" : ""} `}>
        <div className="container">
          <h1>Projects</h1>
          <div className="projects__list">
            {projArray.map((proj) => (
              <ProjCard
                label={proj.label}
                png={proj.png}
                projName={proj.projName}
                key={proj.id}
              />
            ))}
            {/* <div className="d">
              <Suspense fallback={null}>
                <Canvas>
                  <ambientLight intensity={5} />
                  <pointLight position={[10, 10, 10]} />
                  <DynamicThreeCanvas
                    position={[0, 0, 0]}
                    png="pizza.png"
                    proj={"pizza"}
                  />
                </Canvas>
              </Suspense>
              <strong>Pizzeria</strong>
            </div>
            <div className="d">
              <Suspense fallback={null}>
                <Canvas>
                  <ambientLight intensity={5} />
                  <pointLight position={[10, 10, 10]} />
                  <DynamicThreeCanvas
                    position={[0, 0, 0]}
                    png="port.png"
                    proj={"portfolio"}
                  />
                </Canvas>
              </Suspense>
              <strong>Portfolio</strong>
            </div>

            <div className="d">
              <Suspense fallback={null}>
                <Canvas>
                  <ambientLight intensity={5} />
                  <pointLight position={[10, 10, 10]} />
                  <DynamicThreeCanvas
                    position={[0, 0, 0]}
                    png="test.jpg"
                    proj={"weather"}
                  />
                </Canvas>
              </Suspense>
              <strong>Weather</strong>
            </div> */}
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Index;

const projArray = [
  {
    id: 1,
    png: "port.png",
    label: "Portfolio",
    projName: "portfolio",
  },
  {
    id: 2,
    png: "test.jpg",
    label: "Weather",
    projName: "weather",
  },
  {
    id: 3,
    png: "transportation.png",
    label: "Transportation",
    projName: "transportation",
  },
  {
    id: 4,
    png: "menegerHelper.png",
    label: "Maneger Helper",
    projName: "manegerHelper",
  },
  {
    id: 5,
    png: "dailyPlaner.png",
    label: "Daily Planer",
    projName: "dailyPlaner",
  },
];

const ProjCard: FC<ProjCardProps> = ({ png, projName, label }) => {
  return (
    <div className="d">
      <Suspense fallback={null}>
        <Canvas>
          <ambientLight intensity={5} />
          <pointLight position={[10, 10, 10]} />
          <DynamicThreeCanvas position={[0, 0, 0]} png={png} proj={projName} />
        </Canvas>
      </Suspense>
      <strong>{label}</strong>
    </div>
  );
};

type ProjCardProps = {
  png: string;
  projName: string;
  label: string;
};
