/* eslint-disable react/prop-types */
import { IF } from "../url";

const HomePosts = ({ post }) => {
  return (
    <div
      className="w-[70%] flex mt-8 space-x-4 ml-[150px]
        px-4 bg-white shadow-xl rounded-lg text-gray-900 "
    >
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center align-center relative">
        <img
          src={IF + post.photo}
          alt=""
          className="object-cover object-center h-32
          "
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl pt-2 font-semibold md:mb-2 mb-1 md:text-2x">
          {post.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@{post.username}</p>
          <div className="flex space-x-2 text-sm ">
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>
        <p className="text-sm md:text-lg text-gray-500 text-sm">
          {post.desc.slice(0, 200) + " ...Read more"}
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
