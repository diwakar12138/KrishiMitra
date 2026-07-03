import { useEffect, useState } from "react";
import { getAllCrops } from "../../services/cropServices";

function CropList() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCrops();
  }, []);

  const fetchCrops = async () => {
    try {
      const response = await getAllCrops();
      setCrops(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 overflow-hidden"
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

            <h2 className="text-2xl font-bold text-green-700">
              {crop.cropName}
            </h2>

            <p className="text-gray-500 mb-4">
              {crop.cropVariety || "No Variety"}
            </p>

            <div className="space-y-2 text-sm">

              <p>
                <strong>Season:</strong> {crop.season}
              </p>

              <p>
                <strong>Area:</strong> {crop.area} {crop.areaUnit}
              </p>

              <p>
                <strong>Status:</strong> {crop.status}
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

          </div>

        </div>

      ))}

    </div>
  );
}

export default CropList;