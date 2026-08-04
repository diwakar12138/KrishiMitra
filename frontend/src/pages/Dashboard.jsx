import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import CropList from "../components/dashboard/CropList";
import AddCropModal from "../components/crops/AddCropModal";
import { getAllCrops, deleteCrop } from "../services/cropServices";
import {
  Sprout,
  CheckCircle2,
  CalendarClock,
  Plus,
  Wheat,
  RefreshCw,
  Sun,
  SunMedium,
  Sunset,
  Moon,
} from "lucide-react";

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12)
      return {
        text: "Good Morning",
        icon: <Sun className="text-amber-500 inline-block w-6 h-6" />,
      };
    if (hour < 17)
      return {
        text: "Good Afternoon",
        icon: <SunMedium className="text-amber-500 inline-block w-6 h-6" />,
      };
    if (hour < 21)
      return {
        text: "Good Evening",
        icon: <Sunset className="text-orange-400 inline-block w-6 h-6" />,
      };

    return {
      text: "Good Night",
      icon: <Moon className="text-indigo-400 inline-block w-6 h-6" />,
    };
  };

  const greetingInfo = getGreeting();
  const firstName = user?.fullName?.split(" ")[0] || "Farmer";

  const fetchCrops = async () => {
    try {
      setLoading(true);
      const response = await getAllCrops();
      setCrops(response.data || []);
    } catch (error) {
      console.error("Failed to fetch crop data:", error);
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
      "Are you sure you want to remove this crop record?"
    );

    if (!confirmDelete) return;

    try {
      await deleteCrop(id);
      fetchCrops();
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message || "Failed to delete crop record."
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
    if (!crop.expectedHarvestDate) return false;
    const today = new Date();
    const harvestDate = new Date(crop.expectedHarvestDate);
    const diff = (harvestDate - today) / (1000 * 60 * 60 * 24);
    return diff >= 0 && diff <= 30;
  }).length;

  const statCards = [
    {
      title: "Total Registered",
      value: totalCrops,
      icon: Wheat,
      color: "text-emerald-700",
      bg: "bg-emerald-50",
      borderColor: "border-emerald-100",
      accent: "from-emerald-500 to-green-600",
    },
    {
      title: "Active Growing",
      value: growingCrops,
      icon: Sprout,
      color: "text-blue-700",
      bg: "bg-blue-50",
      borderColor: "border-blue-100",
      accent: "from-blue-500 to-indigo-600",
    },
    {
      title: "Harvest Completed",
      value: harvestedCrops,
      icon: CheckCircle2,
      color: "text-amber-700",
      bg: "bg-amber-50",
      borderColor: "border-amber-100",
      accent: "from-amber-500 to-orange-600",
    },
    {
      title: "Harvest (Next 30 Days)",
      value: upcomingHarvest,
      icon: CalendarClock,
      color: "text-purple-700",
      bg: "bg-purple-50",
      borderColor: "border-purple-100",
      accent: "from-purple-500 to-violet-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/70 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Dashboard Banner Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200/60 rounded-full text-xs font-bold text-emerald-800">
              {greetingInfo.icon}
              <span>{greetingInfo.text}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Welcome back, <span className="text-emerald-700">{firstName}</span> 👋
            </h1>

            <p className="text-slate-600 text-sm sm:text-base font-normal max-w-xl">
              Monitor growth cycles, record diagnostics, and manage harvest timelines directly from your central agricultural hub.
            </p>
          </div>

          {/* Top Actions */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={fetchCrops}
              disabled={loading}
              title="Refresh Crop Data"
              className="p-3.5 bg-slate-100 hover:bg-slate-200/80 text-slate-700 rounded-2xl transition duration-200 active:scale-95 border border-slate-200 shrink-0 cursor-pointer"
            >
              <RefreshCw size={20} className={loading ? "animate-spin text-emerald-700" : ""} />
            </button>

            <button
              onClick={() => {
                setSelectedCrop(null);
                setShowModal(true);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white px-6 py-3.5 rounded-2xl font-bold shadow-lg shadow-emerald-700/20 hover:shadow-xl transition-all duration-200 cursor-pointer"
            >
              <Plus size={20} />
              <span>Add New Crop</span>
            </button>
          </div>
        </div>

        {/* Statistics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Top Ambient Glow Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.accent}`} />

                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {card.title}
                  </span>
                  <div className={`p-2.5 rounded-2xl ${card.bg} ${card.color} border ${card.borderColor}`}>
                    <Icon size={20} />
                  </div>
                </div>

                <div className="mt-4 flex items-baseline justify-between">
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                    {loading ? "..." : card.value}
                  </h2>
                  
                  {totalCrops > 0 && (
                    <span className="text-xs font-semibold text-slate-400">
                      {Math.round((card.value / totalCrops) * 100)}% of total
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Crop Management Content Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/80 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <Sprout className="text-emerald-700" size={24} />
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Registered Crops
                </h2>
              </div>
              <p className="text-slate-500 text-sm mt-1">
                View, filter, and modify all active and historical crop cultivation records.
              </p>
            </div>

            <div className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-3.5 py-1.5 rounded-full self-start sm:self-auto">
              Total Managed: {totalCrops}
            </div>
          </div>

          <CropList
            crops={crops}
            loading={loading}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>

        {/* Add/Edit Crop Modal */}
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