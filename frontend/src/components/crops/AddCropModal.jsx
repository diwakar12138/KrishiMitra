import { useState, useRef, useEffect, useMemo } from "react";
import {
  createCrop,
  updateCrop,
} from "../../services/cropServices";
import toast from "react-hot-toast";
import {
  X,
  Sprout,
  CloudRain,
  Snowflake,
  Sun,
  Ruler,
  Droplets,
  Layers,
  CalendarDays,
  ArrowRight,
  ImagePlus,
  Trash2,
  Loader2,
  AlertCircle,
  UploadCloud,
  RefreshCw,
  FileImage,
} from "lucide-react";

const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

function formatFileSize(bytes) {
  if (!bytes && bytes !== 0) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const SEASONS = [
  {
    value: "Kharif",
    label: "Kharif",
    hint: "Monsoon · Jun – Oct",
    icon: CloudRain,
    color: "#2E86AB",
    tint: "#EAF4F8",
  },
  {
    value: "Rabi",
    label: "Rabi",
    hint: "Winter · Oct – Mar",
    icon: Snowflake,
    color: "#B8862F",
    tint: "#FAF3E4",
  },
  {
    value: "Zaid",
    label: "Zaid",
    hint: "Summer · Mar – Jun",
    icon: Sun,
    color: "#C4601E",
    tint: "#FBEEE4",
  },
];

const AREA_UNITS = ["Acre", "Hectare"];

const initialFormState = {
  cropName: "",
  cropVariety: "",
  season: "Kharif",
  area: "",
  areaUnit: "Acre",
  sowingDate: "",
  expectedHarvestDate: "",
  irrigationType: "",
  soilType: "",
  notes: "",
  cropImage: null,
};

function SectionHeading({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#EEF3EC] text-[#1F5D3A]">
        <Icon className="h-4 w-4" strokeWidth={2.25} />
      </span>
      <div>
        <h3 className="text-[13px] font-semibold uppercase tracking-wide text-[#1E2521]">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs text-[#8B8F89] -mt-0.5">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

function Field({ label, required, error, children, className = "" }) {
  return (
    <div className={className}>
      <label className="flex items-baseline gap-1 text-sm font-medium text-[#33392F]">
        {label}
        {required && <span className="text-[#B4472A]">*</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-[#B4472A]">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}

const inputBase =
  "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#1E2521] placeholder:text-[#A8ACA3] outline-none transition-colors focus:ring-2 focus:ring-offset-0";

function inputClasses(hasError) {
  return `${inputBase} ${
    hasError
      ? "border-[#D97757] focus:border-[#D97757] focus:ring-[#D97757]/20"
      : "border-[#DEDCD4] focus:border-[#1F5D3A] focus:ring-[#1F5D3A]/15"
  }`;
}

function AddCropModal({
  open,
  onClose,
  refreshCrops,
  selectedCrop,
}) {
  const [formData, setFormData] = useState(initialFormState);
  const [preview, setPreview] = useState(null);
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [imageError, setImageError] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [imageRemoved, setImageRemoved] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (open) {
      const raf = requestAnimationFrame(() => setMounted(true));
      return () => cancelAnimationFrame(raf);
    }
    setMounted(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  useEffect(() => {
    if (selectedCrop) {
      setFormData({
        cropName: selectedCrop.cropName || "",
        cropVariety: selectedCrop.cropVariety || "",
        season: selectedCrop.season || "Kharif",
        area: selectedCrop.area || "",
        areaUnit: selectedCrop.areaUnit || "Acre",
        sowingDate: selectedCrop.sowingDate
          ? selectedCrop.sowingDate.slice(0, 10)
          : "",
        expectedHarvestDate: selectedCrop.expectedHarvestDate
          ? selectedCrop.expectedHarvestDate.slice(0, 10)
          : "",
        irrigationType: selectedCrop.irrigationType || "",
        soilType: selectedCrop.soilType || "",
        notes: selectedCrop.notes || "",
        cropImage: null,
      });

      setPreview(selectedCrop.cropImage || null);
      setImageRemoved(false);
    } else {
      setFormData(initialFormState);
      setPreview(null);
      setImageRemoved(false);
    }
  }, [selectedCrop, open]);

  const harvestEstimate = useMemo(() => {
    if (!formData.sowingDate || !formData.expectedHarvestDate) return null;
    const start = new Date(formData.sowingDate);
    const end = new Date(formData.expectedHarvestDate);
    const diff = Math.round((end - start) / (1000 * 60 * 60 * 24));
    if (Number.isNaN(diff)) return null;
    return diff;
  }, [formData.sowingDate, formData.expectedHarvestDate]);

  const errors = useMemo(() => {
    const next = {};
    if (!formData.cropName.trim()) next.cropName = "Crop name is required.";
    if (!formData.area || Number(formData.area) <= 0)
      next.area = "Enter a valid area greater than 0.";
    if (!formData.sowingDate) next.sowingDate = "Sowing date is required.";
    if (
      formData.sowingDate &&
      formData.expectedHarvestDate &&
      harvestEstimate !== null &&
      harvestEstimate < 0
    )
      next.expectedHarvestDate = "Harvest date must be after sowing date.";
    return next;
  }, [formData, harvestEstimate]);

  const hasErrors = Object.keys(errors).length > 0;

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const applyImageFile = (file) => {
    if (!file) return;

    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      setImageError("Unsupported format. Use JPG, PNG, or WEBP.");
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setImageError(
        `File is ${formatFileSize(file.size)}. Maximum size is 5 MB.`
      );
      return;
    }

    setImageError(null);
    setImageRemoved(false);
    setFormData((prev) => ({ ...prev, cropImage: file }));
    setPreview((old) => {
      if (old && old.startsWith("blob:")) {
        URL.revokeObjectURL(old);
      }
      return URL.createObjectURL(file);
    });

    // Simulated upload progress — replace with real axios onUploadProgress tracking.
    setUploadProgress(0);
    const start = Date.now();
    const duration = 600;
    const tick = () => {
      const pct = Math.min(100, Math.round(((Date.now() - start) / duration) * 100));
      setUploadProgress(pct);
      if (pct < 100) requestAnimationFrame(tick);
      else setTimeout(() => setUploadProgress(null), 250);
    };
    requestAnimationFrame(tick);
  };

  const handleFileInput = (e) => {
    applyImageFile(e.target.files?.[0]);
    e.target.value = "";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    applyImageFile(e.dataTransfer.files?.[0]);
  };

  const removeImage = () => {
    // Only revoke locally created blob URLs — never a remote Cloudinary URL.
    if (preview?.startsWith("blob:")) {
      URL.revokeObjectURL(preview);
    }

    // If editing a crop that already had a saved image and the user is
    // clearing it (not just discarding a newly picked file), flag it so the
    // backend knows to delete the existing image.
    if (selectedCrop?.cropImage && !formData.cropImage) {
      setImageRemoved(true);
    }

    setPreview(null);

    setFormData((prev) => ({
      ...prev,
      cropImage: null,
    }));

    setImageError(null);
    setUploadProgress(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({
      cropName: true,
      area: true,
      sowingDate: true,
      expectedHarvestDate: true,
    });

    if (hasErrors) return;

    try {
      setSubmitting(true);

      const data = new FormData();

      data.append("cropName", formData.cropName);
      data.append("cropVariety", formData.cropVariety);
      data.append("season", formData.season);
      data.append("area", formData.area);
      data.append("areaUnit", formData.areaUnit);
      data.append("sowingDate", formData.sowingDate);
      data.append("expectedHarvestDate", formData.expectedHarvestDate);
      data.append("irrigationType", formData.irrigationType);
      data.append("soilType", formData.soilType);
      data.append("notes", formData.notes);

      if (formData.cropImage) {
        data.append("cropImage", formData.cropImage);
      }

      if (selectedCrop) {
        data.append("removeImage", imageRemoved ? "true" : "false");
      }

      if (selectedCrop) {
        await updateCrop(selectedCrop._id, data);
      } else {
        await createCrop(data);
      }

      toast.success(
        selectedCrop
          ? "Crop Updated Successfully"
          : "Crop Added Successfully"
      );

      removeImage();
      setFormData(initialFormState);
      setImageRemoved(false);

      onClose();

      refreshCrops();

    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          (selectedCrop
            ? "Failed to update crop"
            : "Failed to add crop")
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  const handleCancel = () => {
    removeImage();
    setFormData(initialFormState);
    setTouched({});
    setImageRemoved(false);

    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4 py-8 backdrop-blur-sm transition-opacity duration-200 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
      onMouseDown={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-crop-title"
    >
      <div
        className={`w-full max-w-2xl origin-center rounded-2xl bg-white shadow-2xl transition-all duration-200 ${
          mounted ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <form onSubmit={handleSubmit} noValidate>
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-[#ECEAE3] px-7 py-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-[#1F5D3A] text-white">
                <Sprout className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <div>
                <h2
                  id="add-crop-title"
                  className="text-lg font-bold tracking-tight text-[#1E2521]"
                >
                  {selectedCrop ? "Edit Crop" : "Add New Crop"}
                </h2>
                <p className="text-sm text-[#8B8F89]">
                  {selectedCrop
                    ? "Update crop information"
                    : "Record field, timeline, and cultivation details"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCancel}
              aria-label="Close"
              className="flex h-8 w-8 flex-none items-center justify-center rounded-lg text-[#8B8F89] transition-colors hover:bg-[#F4F3EF] hover:text-[#1E2521] focus:outline-none focus:ring-2 focus:ring-[#1F5D3A]/20"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="max-h-[70vh] overflow-y-auto px-7 py-6">
            {/* Season selector */}
            <div className="mb-7">
              <span className="mb-2.5 block text-[13px] font-semibold uppercase tracking-wide text-[#1E2521]">
                Growing Season
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                {SEASONS.map((s) => {
                  const Icon = s.icon;
                  const active = formData.season === s.value;
                  return (
                    <button
                      type="button"
                      key={s.value}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, season: s.value }))
                      }
                      className="rounded-xl border p-3 text-left transition-all"
                      style={{
                        borderColor: active ? s.color : "#E3E1DB",
                        backgroundColor: active ? s.tint : "#FFFFFF",
                        boxShadow: active ? `0 0 0 1px ${s.color}` : "none",
                      }}
                    >
                      <Icon
                        className="mb-1.5 h-5 w-5"
                        style={{ color: s.color }}
                        strokeWidth={2.25}
                      />
                      <div className="text-sm font-semibold text-[#1E2521]">
                        {s.label}
                      </div>
                      <div className="text-[11px] text-[#8B8F89]">
                        {s.hint}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Crop identity */}
            <SectionHeading icon={Layers} title="Crop Identity" />
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Crop Name"
                required
                error={touched.cropName ? errors.cropName : null}
              >
                <input
                  type="text"
                  name="cropName"
                  value={formData.cropName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. Wheat, Cotton, Sugarcane"
                  className={inputClasses(touched.cropName && errors.cropName)}
                />
              </Field>
              <Field label="Crop Variety">
                <input
                  type="text"
                  name="cropVariety"
                  value={formData.cropVariety}
                  onChange={handleChange}
                  placeholder="e.g. HD-2967"
                  className={inputClasses(false)}
                />
              </Field>
            </div>

            {/* Field & irrigation */}
            <div className="mt-7">
              <SectionHeading icon={Droplets} title="Field & Irrigation" />
              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Area"
                  required
                  error={touched.area ? errors.area : null}
                >
                  <div className="flex overflow-hidden rounded-lg border border-[#DEDCD4] focus-within:border-[#1F5D3A] focus-within:ring-2 focus-within:ring-[#1F5D3A]/15">
                    <input
                      type="number"
                      min="0.01"
                      step="0.01"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="0.00"
                      className="w-full border-0 px-3.5 py-2.5 text-sm text-[#1E2521] outline-none placeholder:text-[#A8ACA3]"
                    />
                    <div className="flex flex-none divide-x divide-[#DEDCD4] border-l border-[#DEDCD4] bg-[#F7F6F3]">
                      {AREA_UNITS.map((unit) => (
                        <button
                          type="button"
                          key={unit}
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              areaUnit: unit,
                            }))
                          }
                          className={`px-3 text-xs font-semibold transition-colors ${
                            formData.areaUnit === unit
                              ? "bg-[#1F5D3A] text-white"
                              : "text-[#6B7268] hover:bg-[#ECEAE3]"
                          }`}
                        >
                          {unit}
                        </button>
                      ))}
                    </div>
                  </div>
                </Field>
                <Field label="Irrigation Type">
                  <input
                    type="text"
                    name="irrigationType"
                    value={formData.irrigationType}
                    onChange={handleChange}
                    placeholder="Drip, Canal, Rain-fed"
                    className={inputClasses(false)}
                  />
                </Field>
                <Field label="Soil Type" className="md:col-span-2">
                  <input
                    type="text"
                    name="soilType"
                    value={formData.soilType}
                    onChange={handleChange}
                    placeholder="Black soil, Sandy loam, Alluvial"
                    className={inputClasses(false)}
                  />
                </Field>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-7">
              <SectionHeading icon={CalendarDays} title="Timeline" />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <Field
                  label="Sowing Date"
                  required
                  error={touched.sowingDate ? errors.sowingDate : null}
                  className="flex-1"
                >
                  <input
                    type="date"
                    name="sowingDate"
                    value={formData.sowingDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClasses(
                      touched.sowingDate && errors.sowingDate
                    )}
                  />
                </Field>
                <div className="hidden pt-9 sm:block">
                  <ArrowRight className="h-4 w-4 text-[#C7C4BA]" />
                </div>
                <Field
                  label="Expected Harvest Date"
                  error={
                    touched.expectedHarvestDate
                      ? errors.expectedHarvestDate
                      : null
                  }
                  className="flex-1"
                >
                  <input
                    type="date"
                    name="expectedHarvestDate"
                    value={formData.expectedHarvestDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClasses(
                      touched.expectedHarvestDate &&
                        errors.expectedHarvestDate
                    )}
                  />
                </Field>
              </div>
              {harvestEstimate !== null && harvestEstimate >= 0 && (
                <p className="mt-2.5 inline-flex items-center gap-1.5 rounded-md bg-[#EEF3EC] px-2.5 py-1 text-xs font-medium text-[#1F5D3A]">
                  <Ruler className="h-3.5 w-3.5" />
                  Approx. {harvestEstimate} days from sowing to harvest
                </p>
              )}
            </div>

            {/* Notes */}
            <div className="mt-7">
              <SectionHeading icon={Layers} title="Additional Notes" />
              <textarea
                rows={3}
                name="notes"
                maxLength={500}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Fertilizer schedule, pest watch, field observations…"
                className={`${inputClasses(false)} resize-none`}
              />
              <div className="mt-1 text-right text-[11px] text-[#A8ACA3]">
                {formData.notes.length}/500
              </div>
            </div>

            {/* Image upload */}
            <div className="mt-2">
              <SectionHeading
                icon={ImagePlus}
                title="Crop Photo"
                subtitle="Optional — helps identify the field at a glance"
              />

              <input
                ref={fileInputRef}
                type="file"
                name="cropImage"
                accept={ACCEPTED_IMAGE_TYPES.join(",")}
                onChange={handleFileInput}
                className="hidden"
              />

              {!preview ? (
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragActive(true);
                  }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={handleDrop}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      fileInputRef.current?.click();
                    }
                  }}
                  className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-9 text-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5D3A]/30 ${
                    dragActive
                      ? "border-[#1F5D3A] bg-[#EEF3EC]"
                      : imageError
                      ? "border-[#D97757] bg-[#FBF1EC]"
                      : "border-[#DEDCD4] bg-[#FAFAF8]"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${
                      dragActive ? "bg-[#DCEAE0]" : "bg-white"
                    } border border-[#E3E1DB]`}
                  >
                    <UploadCloud
                      className={`h-5 w-5 ${
                        dragActive ? "text-[#1F5D3A]" : "text-[#8B8F89]"
                      }`}
                    />
                  </span>

                  <div>
                    <p className="text-sm font-medium text-[#33392F]">
                      Drag and drop a photo here
                    </p>
                    <p className="mt-0.5 text-xs text-[#A8ACA3]">
                      JPG, PNG, or WEBP — up to 5 MB
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="rounded-lg border border-[#DEDCD4] bg-white px-4 py-2 text-sm font-semibold text-[#1E2521] shadow-sm transition-colors hover:bg-[#F4F3EF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5D3A]/30"
                  >
                    Choose File
                  </button>

                  {imageError && (
                    <p className="flex items-center gap-1.5 text-xs font-medium text-[#B4472A]">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {imageError}
                    </p>
                  )}
                </div>
              ) : (
                <div className="overflow-hidden rounded-xl border border-[#E3E1DB] bg-white">
                  <div className="relative">
                    <img
                      src={preview}
                      alt="Crop preview"
                      className="h-48 w-full object-cover"
                    />
                    {uploadProgress !== null && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/45 text-white">
                        <span className="text-sm font-semibold">
                          Uploading… {uploadProgress}%
                        </span>
                        <div className="h-1.5 w-40 overflow-hidden rounded-full bg-white/30">
                          <div
                            className="h-full rounded-full bg-white transition-all"
                            style={{ width: `${uploadProgress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3 border-t border-[#ECEAE3] px-3.5 py-3">
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-[#EEF3EC] text-[#1F5D3A]">
                      <FileImage className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-[#1E2521]">
                        {formData.cropImage
                          ? formData.cropImage.name
                          : "Existing Image"}
                      </p>
                      <p className="text-xs text-[#8B8F89]">
                        {formData.cropImage
                          ? formatFileSize(formData.cropImage.size)
                          : selectedCrop
                          ? "Existing Image"
                          : ""}
                        {uploadProgress === null && " · Ready"}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploadProgress !== null}
                      className="flex flex-none items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#1F5D3A] transition-colors hover:bg-[#EEF3EC] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                      Replace
                    </button>
                    <button
                      type="button"
                      onClick={removeImage}
                      disabled={uploadProgress !== null}
                      aria-label="Remove image"
                      className="flex h-8 w-8 flex-none items-center justify-center rounded-lg text-[#8B8F89] transition-colors hover:bg-[#FBEDEA] hover:text-[#B4472A] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 border-t border-[#ECEAE3] bg-[#FAFAF8] px-7 py-4 rounded-b-2xl">
            <button
              type="button"
              onClick={handleCancel}
              className="rounded-lg border border-[#DEDCD4] px-5 py-2.5 text-sm font-medium text-[#33392F] transition-colors hover:bg-[#F4F3EF]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex items-center gap-2 rounded-lg bg-[#1F5D3A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#184A2E] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {submitting
                ? selectedCrop
                  ? "Updating..."
                  : "Saving..."
                : selectedCrop
                ? "Update Crop"
                : "Save Crop"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCropModal;