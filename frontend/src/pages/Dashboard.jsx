import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import CropList from "../components/dashboard/CropList";
import AddCropModal from "../components/crops/AddCropModal";
// import { getAllCrops } from "../services/cropServices";
import { getAllCrops, deleteCrop } from "../services/cropServices";

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning ☀️";
    if (hour < 17) return "Good Afternoon 🌤";
    if (hour < 21) return "Good Evening 🌇";

    return "Good Night 🌙";
  };

  const firstName = user?.fullName?.split(" ")[0] || "Farmer";

  const fetchCrops = async () => {
    try {
      setLoading(true);

      const response = await getAllCrops();

      setCrops(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };



  const handleEdit = (crop) => {
    setSelectedCrop(crop);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this crop?"
    );

    if (!confirmDelete) return;

    try {
      await deleteCrop(id);

      fetchCrops();

      alert("Crop deleted successfully.");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to delete crop."
      );
    }
  };

  useEffect(() => {
    fetchCrops();
  }, []);

  // Dashboard Statistics
  const totalCrops = crops.length;

  const growingCrops = crops.filter(
    (crop) => crop.status === "Growing"
  ).length;

  const harvestedCrops = crops.filter(
    (crop) => crop.status === "Harvested"
  ).length;

  const upcomingHarvest = crops.filter((crop) => {
    const today = new Date();
    const harvestDate = new Date(crop.expectedHarvestDate);

    const diff =
      (harvestDate - today) / (1000 * 60 * 60 * 24);

    return diff >= 0 && diff <= 30;
  }).length;

  return (
    <div className="min-h-screen bg-[#F8FAF7] py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Dashboard Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">

          <div>
            <h1 className="text-4xl font-bold text-green-800">
              {getGreeting()}, {firstName} 👋
            </h1>

            <p className="text-gray-600 mt-3 text-lg">
              Welcome back! Manage your farming activities from one place.
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedCrop(null);
              setShowModal(true);
            }}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300"
          >
            + Add Crop
          </button>

        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <p className="text-gray-500 text-sm">🌾 Total Crops</p>

            <h2 className="text-3xl font-bold text-green-700 mt-3">
              {totalCrops}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <p className="text-gray-500 text-sm">🌱 Growing</p>

            <h2 className="text-3xl font-bold text-blue-600 mt-3">
              {growingCrops}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <p className="text-gray-500 text-sm">✅ Harvested</p>

            <h2 className="text-3xl font-bold text-orange-600 mt-3">
              {harvestedCrops}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <p className="text-gray-500 text-sm">📅 Upcoming Harvest</p>

            <h2 className="text-3xl font-bold text-purple-600 mt-3">
              {upcomingHarvest}
            </h2>
          </div>

        </div>

        {/* My Crops */}
        <div className="bg-white rounded-2xl shadow-lg p-6">

          <div className="mb-6">

            <h2 className="text-2xl font-bold text-green-800">
              🌱 My Crops
            </h2>

            <p className="text-gray-500 mt-1">
              View and manage all your registered crops.
            </p>

          </div>

          <CropList
            crops={crops}
            loading={loading}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

        </div>

        {/* Add Crop Modal */}
        <AddCropModal
          open={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedCrop(null);
          }}
          refreshCrops={fetchCrops}
          selectedCrop={selectedCrop}
        />

      </div>
    </div>
  );
}

export default Dashboard;