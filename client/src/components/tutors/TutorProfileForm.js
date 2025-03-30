import { useState, useEffect, useContext } from "react";
import { TutorContext } from "../../context/TutorContext";
import { uploadImage, updateProfile, getProfile } from "../../utils/api";

const TutorProfileForm = () => {
  const { tutor, setTutor } = useContext(TutorContext);
  const [formData, setFormData] = useState({
    name: "",
    qualifications: "",
    bio: "",
    subjects: "",
    hourlyRate: "",
    availability: "",
    teachingMode: "online",
    profileImage: "",
  });

  useEffect(() => {
    // Fetch existing profile data
    getProfile().then((data) => setFormData(data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const imageUrl = await uploadImage(file);
    setFormData({ ...formData, profileImage: imageUrl });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTutor = await updateProfile(formData);
    setTutor(updatedTutor);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Tutor Profile Management</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} placeholder="Qualifications" required />
        <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Short Bio" required />
        <input type="text" name="subjects" value={formData.subjects} onChange={handleChange} placeholder="Subjects (comma separated)" required />
        <input type="number" name="hourlyRate" value={formData.hourlyRate} onChange={handleChange} placeholder="Hourly Rate ($)" required />
        <input type="text" name="availability" value={formData.availability} onChange={handleChange} placeholder="Availability (e.g. Mon-Fri 9 AM - 5 PM)" required />
        <select name="teachingMode" value={formData.teachingMode} onChange={handleChange}>
          <option value="online">Online</option>
          <option value="in-person">In-Person</option>
        </select>
        <input type="file" onChange={handleImageUpload} />
        {formData.profileImage && <img src={formData.profileImage} alt="Profile" className="w-24 h-24 rounded-full mt-2" />}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Profile</button>
      </form>
    </div>
  );
};

export default TutorProfileForm;
