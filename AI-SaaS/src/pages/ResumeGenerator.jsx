import { useState } from "react";
import axios from "axios";
import "./ResumeGenerator.css"; // CSS file

export default function ResumeGenerator() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: [],
    experience: [],
    education: [],
  });

  const [skillInput, setSkillInput] = useState("");
  const [expInput, setExpInput] = useState("");
  const [eduInput, setEduInput] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addSkill = () => {
    if (skillInput.trim()) {
      setForm({ ...form, skills: [...form.skills, skillInput] });
      setSkillInput("");
    }
  };

  const addExperience = () => {
    if (expInput.trim()) {
      setForm({ ...form, experience: [...form.experience, expInput] });
      setExpInput("");
    }
  };

  const addEducation = () => {
    if (eduInput.trim()) {
      setForm({ ...form, education: [...form.education, eduInput] });
      setEduInput("");
    }
  };

  const generateResume = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/resume/generate",
        form,
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error("Error generating resume:", err);
    }
  };

  return (
    <div className="resume-container">
      <h1 className="resume-title">Resume Generator</h1>

      {/* Personal Info */}
      <div className="grid">
        <input type="text" name="name" placeholder="Full Name"
          value={form.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email"
          value={form.email} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone"
          value={form.phone} onChange={handleChange} />
        <input type="text" name="linkedin" placeholder="LinkedIn Profile"
          value={form.linkedin} onChange={handleChange} />
        <input type="text" name="github" placeholder="GitHub Profile"
          value={form.github} onChange={handleChange} />
      </div>

      {/* Skills */}
      <div className="section">
        <h2>Skills</h2>
        <div className="input-row">
          <input type="text" placeholder="Add Skill"
            value={skillInput} onChange={(e) => setSkillInput(e.target.value)} />
          <button onClick={addSkill}>Add</button>
        </div>
        <ul>
          {form.skills.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      <div className="section">
        <h2>Experience</h2>
        <div className="input-row">
          <input type="text" placeholder="Add Experience"
            value={expInput} onChange={(e) => setExpInput(e.target.value)} />
          <button onClick={addExperience}>Add</button>
        </div>
        <ul>
          {form.experience.map((exp, i) => (
            <li key={i}>{exp}</li>
          ))}
        </ul>
      </div>

      {/* Education */}
      <div className="section">
        <h2>Education</h2>
        <div className="input-row">
          <input type="text" placeholder="Add Education"
            value={eduInput} onChange={(e) => setEduInput(e.target.value)} />
          <button onClick={addEducation}>Add</button>
        </div>
        <ul>
          {form.education.map((edu, i) => (
            <li key={i}>{edu}</li>
          ))}
        </ul>
      </div>

      {/* Submit */}
      <button onClick={generateResume} className="generate-btn">
        Generate Resume
      </button>
    </div>
  );
}
