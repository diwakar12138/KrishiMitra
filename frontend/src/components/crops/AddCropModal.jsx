function AddCropModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md">

        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Add Crop
        </h2>

        <p className="text-gray-600 mb-6">
          Crop form will be added in the next step.
        </p>

        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
        >
          Close
        </button>

      </div>
    </div>
  );
}

export default AddCropModal;