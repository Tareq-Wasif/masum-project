import Image from "next/image";

const HomeCard = ({ product }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={product?.img} width="100" height="100" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.productName}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;