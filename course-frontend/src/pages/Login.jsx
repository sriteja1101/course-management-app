import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    navigate("/courses");
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password:e.target.value})} />
      <button>Login</button>
    </form>
  );
}
