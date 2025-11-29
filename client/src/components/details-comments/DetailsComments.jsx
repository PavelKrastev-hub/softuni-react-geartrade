export default function DetailsComments() {
    return (
        <div className="space-y-4">
            <div className="p-4 bg-white rounded-xl shadow border border-gray-200">
                <p className="font-semibold text-gray-800">John Doe</p>
                <p className="text-gray-600 text-sm">“Great part, fits perfectly on my car!”</p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow border border-gray-200">
                <p className="font-semibold text-gray-800">Maria Smith</p>
                <p className="text-gray-600 text-sm">“Fast delivery and excellent quality.”</p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow border border-gray-200">
                <p className="font-semibold text-gray-800">Ivan Petrov</p>
                <p className="text-gray-600 text-sm">“Would definitely recommend this seller.”</p>
            </div>
        </div>
    );
}