import React from "react";
import Select from "react-select";

export default function CountryDetails({ formData, setFormData }) {
  const countryOptions = [
    { value: 1, label: "India" },        // Changed to number
    { value: 2, label: "Afghanistan" },   // Changed to number
    { value: 3, label: "Albania" },      // Changed to number
  ];
  
  const stateOptions = [
    { value: 1, label: "Maharashtra" },   // Changed to number
    { value: 2, label: "Gujarat" },       // Changed to number
    { value: 3, label: "Kerala" },        // Changed to number
  ];

  return (
    <div className="flex w-full p-2">
      <div className="w-full">
        <h1 className="block text-left w-full text-gray-800 text-2xl font-bold mb-6">
          Details
        </h1>
        <form action="/" method="post">
          <div className="grid gap-2 md:grid-cols-2">
            {/* Country Selection */}
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-700 text-left"
                htmlFor="country"
              >
                Select Country
              </label>
              <Select
                className="basic-single text-left text-sm text-gray-700 rounded border border-gray-200"
                classNamePrefix="select"
                options={countryOptions}
                value={countryOptions.find(
                  option => option.value === parseInt(formData.countryId?.value || formData.countryId)
                ) || null}
                onChange={(selectedOption) =>
                  setFormData({
                    ...formData,
                    countryId: selectedOption?.value || '' // Store just the numeric value
                  })
                }
                isSearchable={true}
                placeholder="Select a country"
              />
            </div>

            {/* State Selection */}
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-700 text-left"
                htmlFor="state"
              >
                Select State
              </label>
              <Select
                className="basic-single text-left text-sm rounded text-gray-700 border border-gray-200"
                classNamePrefix="select"
                options={stateOptions}
                value={stateOptions.find(
                  option => option.value === parseInt(formData.stateId?.value || formData.stateId)
                ) || null}
                onChange={(selectedOption) =>
                  setFormData({
                    ...formData,
                    stateId: selectedOption?.value || '' // Store just the numeric value
                  })
                }
                isSearchable={true}
                placeholder="Select a state"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}