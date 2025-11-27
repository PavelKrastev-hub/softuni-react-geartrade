import { Link } from "react-router";

export default function PartCard({
    _id,
    name,
    // category,
    // oem_number,
    // suitable_to,
    price,
    // brand,
    // description,
    image_url,
}) {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200 flex flex-col transform hover:scale-105 transition-transform duration-300">
            <img
                src={image_url}
                alt={name}
                className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
            <p className="text-red-600 text-lg font-bold mt-1">${price.toFixed(2)}</p>
            <Link
                to={`/parts/${_id}/details`}
                className="mt-auto block w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-semibold text-center transition">
                View Details
            </Link>
        </div>
    );
}