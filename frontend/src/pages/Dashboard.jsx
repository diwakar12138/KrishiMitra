function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold text-green-800 mb-3">
        Welcome to Dashboard 🌾
      </h1>

      <p className="text-gray-600 mb-10">
        Manage your crops, weather updates, mandi prices and government schemes.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold">🌾 My Crops</h2>
          <p className="text-gray-500 mt-2">
            Manage your crop records.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold">🌦 Weather</h2>
          <p className="text-gray-500 mt-2">
            View weather updates.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold">📈 Mandi Prices</h2>
          <p className="text-gray-500 mt-2">
            Check latest market prices.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold">🏛 Schemes</h2>
          <p className="text-gray-500 mt-2">
            Government schemes for farmers.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;