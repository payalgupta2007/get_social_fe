import Storyboard from "../components/Storyboard";
import Postcard from "../components/Postcard";
import img1 from "../assets/images.png";
import img2 from "../assets/dp.jpg";
import img3 from "../assets/dp2.webp";
import img4 from "../assets/img3.webp";
import { RiMessengerLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Feed() {
  const posts = [
    {
      id: 1,
      username: "John Doe",
      image: img4,
      caption: "Enjoying a sunny day!",
    },
    {
      id: 2,
      username: "Jane Smith",
      image: img2,
      caption: "New adventure awaits!",
    },
    {
      id: 3,
      username: "Bob Johnson",
      image: img3,
      caption: "Coding all night long.",
    },
    {
      id: 1,
      username: "John Doe",
      image: img1,
      caption: "Enjoying a sunny day!",
    },
    {
      id: 2,
      username: "Jane Smith",
      image: img4,
      caption: "New adventure awaits!",
    },
    {
      id: 3,
      username: "Bob Johnson",
      image: img3,
      caption: "Coding all night long.",
    },
    {
      id: 1,
      username: "John Doe",
      image: img1,
      caption: "Enjoying a sunny day!",
    },
    {
      id: 2,
      username: "Jane Smith",
      image: img2,
      caption: "New adventure awaits!",
    },
    {
      id: 3,
      username: "Bob Johnson",
      image: img3,
      caption: "Coding all night long.",
    },
    {
      id: 1,
      username: "John Doe",
      image: img1,
      caption: "Enjoying a sunny day!",
    },
    {
      id: 2,
      username: "Jane Smith",
      image: img2,
      caption: "New adventure awaits!",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-end mb-4">
        <IoNotificationsOutline className="text-3xl mr-4 mt-1 cursor-pointer" />
        <RiMessengerLine className="text-3xl mr-4 mt-1 cursor-pointer" />
        <button className="bg-gradient-to-r from-orange-600 to-pink-600 text-white font-bold py-2 px-5 mr-8 rounded-3xl">
          Create a Post
        </button>
      </div>
      <Storyboard />
      <div
        className="mt-5 ml-3 text-bold font-serif text-lg"
        style={{ fontSize: "25px" }}
      >
        Feed Page
      </div>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Postcard
            key={post.id}
            image={post.image}
            caption={post.caption}
            username={post.username}
          />
        ))}
      </div>
    </div>
  );
}
