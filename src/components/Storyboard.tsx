import profileImg from "../assets/profile_img.jpeg";
import img1 from "../assets/images.png";
import img2 from "../assets/dp.jpg";
import img3 from "../assets/dp2.webp";

export default function Storyboard() {
  const items = [
    { id: 1, name: "John Doe", image: profileImg },
    { id: 2, name: "Jane Smith", image: img1 },
    { id: 3, name: "Bob Johnson", image: img2 },
    { id: 4, name: "Dobby", image: img3 },
    { id: 2, name: "Jane Smith", image: img1 },
    { id: 3, name: "Bob Johnson", image: img2 },
    { id: 4, name: "Dobby", image: img3 },
  ];
  return (
    <>
      <div
        className="mt-3 ml-3 text-bold font-serif text-lg"
        style={{ fontSize: "25px" }}
      >
        Stories
      </div>
      <div className="flex">
        {items.map((item) => (
          <div key={item.id} className="mx-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-full object-cover mt-10 border-4 border-pink-500 p-1"
            />
            <div className="items-center">{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
