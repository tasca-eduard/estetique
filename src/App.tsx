import Slide from "./components/Slider/Slide";

const slides = [
  {
    fontFamily: "Montserrat",
    bgColor: "#000f2d",
    textColor: "#f99195",
    title: "Montserrat",
  },
  {
    fontFamily: "Playfair Display",
    bgColor: "#f3e3d6",
    textColor: "#282222",
    title: "Playfair Display",
  },
  {
    fontFamily: "Abril Fatface",
    bgColor: "#18281b",
    textColor: "#efe5cf",
    title: "Abril Fatface",
  },
  {
    fontFamily: "Rochester",
    bgColor: "#f7f7f9",
    textColor: "#091442",
    title: "Rochester",
  }
]

function App() {
  return (
    <div className="slider">
      {slides.map((slide, index) => {
        return (
          <Slide 
            key={slide.title}
            {...slide}
            index={index + 1}
          />
        )
      })}
    </div>
  );
}

export default App;
