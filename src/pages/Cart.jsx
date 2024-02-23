import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ?
          (
            <div>

              <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                {
                  cart.map((item, index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                  })
                }
              </div>

              <div className="flex justify-between mt-5 max-w-6xl mx-auto ">

                <div>
                  <div className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">Your Cart</div>
                  <div className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">Summary</div>
                  <p>
                    <span className="text-green-600 font-semibold">Total Items: {cart.length}</span>
                  </p>
                </div>

                <div className="cursor-pointer">
                  <p className="text-green-600 font-semibold">Total Amount: ${totalAmount}</p>
                  <button className="text-green-400 font-semibold ">
                    CheckOut Now
                  </button>
                </div>

              </div>

            </div>
          ) :
          (
            <div className="flex  justify-center items-center w-full h-screen">
              <div className="flex justify-center items-center ">
                <h1 className="text-gray-700 font-semibold text-3xl text-left truncate w-40 mt-1">Cart Empty</h1>
                <Link to={"/"}>
                  <button className="hover:cursor-pointer  text-2xl">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>

          )
      }
    </div>
  );
};

export default Cart;
