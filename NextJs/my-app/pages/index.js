import { LOAD_ITEMS } from "@/lib/cart";
import localFont from "next/font/local";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        return dispatch(LOAD_ITEMS(result));
      });
  }, []);

  const items = useSelector((store) => store.items);
  // console.log(items);
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {items.length > 0 &&
          items.map((item) => {
            return (
              <div className="border-2 border-gray-500 p-5s m-4 rounded-md p-4 ">
                <div className="w-full relative">
                  {/* <Image src={item.image} width></Image> */}
                  <img src={item.image} className="w-full h-52" />
                </div>
                <h1 className="text-2xl truncate">{item.title}</h1>
                <h1 className="text-xl">${item.price}</h1>
                <h1 className="text-xl">In Stock: ${item.rating.count}</h1>
                <h1 className="text-xl">Rating:{item.rating.rate}</h1>
                <button className=" bg-green-500 hover:bg-blue-400 active:bg-blue-600 px-4 py-2 w-full mt-2">
                  Add To Cart
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}
