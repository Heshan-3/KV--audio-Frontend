import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
	return (
		<div className="w-[300px] h-[500px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden relative group border border-gray-100 m-[10px]">
			{/* Product Image */}
			<img
				src={item.image[0]}
				alt={item.name}
				className="w-full h-[200px] object-cover"
			/>

			{/* Product Details */}
			<div className="p-4 flex flex-col justify-between h-[calc(100%-200px-60px)]">
				<div>
					<h2 className="text-xl font-bold text-accent mb-1 truncate">{item.name}</h2>
					<p className="text-sm text-gray-500">{item.category}</p>
					<p className="text-gray-700 text-sm mt-2 line-clamp-3">{item.description}</p>
				</div>

				<div className="mt-4 space-y-2">
					<div className="flex justify-between items-center">
						<span className="text-lg font-bold text-green-500">LKR {item.price}</span>
						<span
							className={`px-3 py-1 text-xs font-medium rounded-full ${
								item.availability
									? "bg-green-100 text-green-700"
									: "bg-red-100 text-red-700"
							}`}
						>
							{item.availability ? "In Stock" : "Out of Stock"}
						</span>
					</div>
					<p className="text-xs text-gray-600">
						<span className="font-medium">Dimensions:</span> {item.dimensions}
					</p>
				</div>
			</div>

			<div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[90%]">
				<Link
					to={`/product/${item.key}`}
					className="block w-full text-center bg-accent text-white py-2 rounded-lg hover:opacity-90 transition"
				>
					View Details
				</Link>
			</div>
		</div>
	);
}
