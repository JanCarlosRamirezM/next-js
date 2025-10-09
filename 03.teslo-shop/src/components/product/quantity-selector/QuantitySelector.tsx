import { IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}
export const QuantitySelector = ({ quantity }: Props) => {
  return (
    <div className="flex text-center items-center">
      <button className="cursor-pointer">
        <IoRemoveCircleOutline size={30} />
      </button>

      <span className="w-20 nx-3 px-5 bg-gray-200">{quantity}</span>

      <button className="cursor-pointer">
        <IoRemoveCircleOutline size={30} />
      </button>
    </div>
  );
};
