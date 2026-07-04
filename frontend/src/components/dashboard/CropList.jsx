function CropList({
  crops,
  loading,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <p className="text-center py-10 text-gray-500">
        Loading crops...
      </p>
    );
  }

  if (crops.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-600">
          🌱 No Crops Added Yet
        </h2>

        <p className="mt-2 text-gray-500">
          Click on <strong>Add Crop</strong> to register your first crop.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {crops.map((crop) => (
        <div
          key={crop._id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
        >
          {crop.cropImage ? (
            <img
              src={crop.cropImage}
              alt={crop.cropName}
              className="w-full h-48 object-cover"
            />
          ) : (
            <div className="h-48 bg-green-100 flex items-center justify-center text-6xl">
              🌾
            </div>
          )}

          <div className="p-5">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-bold text-green-700">
                {crop.cropName}
              </h2>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  crop.status === "Growing"
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {crop.status}
              </span>
            </div>

            <p className="text-gray-500 mb-4">
              {crop.cropVariety || "No Variety"}
            </p>

            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Season:</strong> {crop.season}
              </p>

              <p>
                <strong>Area:</strong> {crop.area} {crop.areaUnit}
              </p>

              <p>
                <strong>Sowing:</strong>{" "}
                {new Date(crop.sowingDate).toLocaleDateString()}
              </p>

              <p>
                <strong>Harvest:</strong>{" "}
                {new Date(crop.expectedHarvestDate).toLocaleDateString()}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => onEdit(crop)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
              >
                ✏️ Edit
              </button>

              <button
                onClick={() => onDelete(crop._id)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition"
              >
                🗑 Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CropList;