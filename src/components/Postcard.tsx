import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";

interface PostcardProps {
  image: string;
  caption: string;
  username: string;
}

function Postcard({ image, caption, username }: PostcardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full">
      <div className="font-bold text-lg mb-2">{username}</div>
      <img
        src={image}
        alt={caption}
        className="w-full h-48 object-cover rounded-md mb-2"
      />
      <div className="flex">
        <FaRegHeart className="text-2xl mx-2 cursor-pointer" />
        <FaRegComment className="text-2xl mx-2 cursor-pointer" />
        <LuSend className="text-2xl mx-2 cursor-pointer" />
      </div>
      <p className="text-gray-700">{caption}</p>
    </div>
  );
}

export default Postcard;
