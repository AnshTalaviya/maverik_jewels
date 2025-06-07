import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ShareDialog from "./ShareDialog";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    fetch("/jewellers.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  const productUrl = `${window.location.origin}/product/${product.id}`;

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[80vh]">
        {/* Left Side - Image */}
        <div>
          <img
            src={product.imageFront}
            alt={product.title}
            className="w-full h-auto rounded-xl shadow-md object-cover"
          />
          <div className="flex mt-4 gap-4">
            <img
              src={product.imageFront}
              alt="thumb1"
              className="w-20 h-20 object-cover rounded border"
            />
          </div>
        </div>

        {/* Right Side - Centered Content */}
        <div className="flex flex-col justify-center h-full items-center">
          <p className="text-gray-600 text-sm mb-1">{product.brand}</p>
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>

          <p className="text-2xl font-semibold mb-1">
            ₹ {parseFloat(product.price.replace(/,/g, "")).toLocaleString()}
          </p>

          {product.metal && (
            <div className="mb-4">
              <label className="block mb-1 text-sm">METAL TYPE</label>
              <select className="w-full border px-4 py-2 rounded">
                <option>{product.metal}</option>
              </select>
            </div>
          )}

          {product.sizes && (
            <div className="mb-4">
              <label className="block mb-1 text-sm">Ring Size</label>
              <select className="w-full border px-4 py-2 rounded">
                {product.sizes.map((size) => (
                  <option key={size}>{size}</option>
                ))}
              </select>
            </div>
          )}

          <div className="flex flex-col gap-4 mt-4 ">
            <button className="w-full bg-black text-white px-5 py-2 rounded shadow hover:bg-gray-800">
              Inquiry Now
            </button>

            <button
              onClick={() => setShowShare(true)}
              className="w-full bg-black text-white  px-5 py-2 rounded shadow hover:bg-gray-800"
            >
              Share
            </button>
          </div>

        </div>
      </div>

      {/* Share Dialog */}
      <ShareDialog
        show={showShare}
        onClose={() => setShowShare(false)}
        productUrl={productUrl}
        title={product.title}
      />
    </>
  );
};

export default SingleProduct;
