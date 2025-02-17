import React from "react";

export default function SkillsDetails({ formData, setFormData }) {
  
  const handleAddSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, ""]
    });
  };

  
  const handleRemoveSkill = (index) => {
    if (index < 2) return; 
    setFormData({
      ...formData,
      skills: formData.skills.filter((_, i) => i !== index)
    });
  };

  
  const handleSkillChange = (index, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = value;
    setFormData({
      ...formData,
      skills: updatedSkills
    });
  };

  return (
    <>
      <div className="flex w-full p-2">
        <div className="w-full">
          <h1 className="block text-left w-full text-gray-800 text-2xl font-bold mb-6">
            Skills Details
          </h1>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-700 text-left"
              htmlFor="skills"
            >
              Skills
            </label>
            
            
            <div className="flex space-x-6 mb-4">
              <input
                type="text"
                placeholder="Add Skills"
                value={formData.skills[0] || ''}
                className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
                onChange={(e) => handleSkillChange(0, e.target.value)}
              />
             <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  Remove
                </button>
            </div>

            
            <div className="flex space-x-6 mb-4">
              <input
                type="text"
                placeholder="Add Skills"
                value={formData.skills[1] || ''}
                className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
                onChange={(e) => handleSkillChange(1, e.target.value)}
              />
            <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  Remove
                </button>
            </div>

            
            {formData.skills.slice(2).map((skill, index) => (
              <div key={index + 2} className="flex space-x-6 mb-4">
                <input
                  type="text"
                  placeholder="Add Skills"
                  value={skill}
                  className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
                  onChange={(e) => handleSkillChange(index + 2, e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(index + 2)}
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddSkill}
              className="text-white bg-blue-700 text-left flex hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add Skills
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
