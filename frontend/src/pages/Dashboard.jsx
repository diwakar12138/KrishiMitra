import { useState } from "react";
import CropList from "../components/dashboard/CropList";
import AddCropModal from "../components/crops/AddCropModal";

function Dashboard() {

  const [showModal, setShowModal] = useState(false);
  return (
    <div className="min-h-screen bg-[#F8FAF7] py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Dashboard Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-green-800">
            🌾 Farmer Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Welcome back! Manage your crops and monitor all your farming
            activities from one place.
          </p>
        </div>

        {/* My Crops Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">

            <div>
              <h2 className="text-2xl font-bold text-green-800">
                🌱 My Crops
              </h2>

              <p className="text-gray-500 mt-1">
                View and manage all your registered crops.
              </p>
            </div>

            <button onClick={() => setShowModal(true)}
className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition"
>
  + Add Crop
</button>

          </div>

          <CropList />



          <AddCropModal open={showModal} onClose={() => setShowModal(false)}/>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;