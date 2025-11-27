import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Auth(){
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try{
      const res = isLogin ? await api.login({ email, password }) : await api.register({ email, password });
      if(res.data?.token){ localStorage.setItem("token", res.data.token); navigate("/dashboard"); }
    }catch(err){ alert("Authentication failed"); }
  };

  return (
    <div className="h-screen grid place-items-center bg-gradient-to-br from-indigo-600 to-purple-600">
      <div className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? "Welcome back" : "Create your account"}</h2>
        <form onSubmit={submit} className="space-y-4">
          <input className="w-full p-3 border rounded-lg input-focus" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" className="w-full p-3 border rounded-lg input-focus" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg">{ isLogin ? "Login" : "Register" }</button>
        </form>
        <div className="text-center mt-4 text-slate-600">
          <button onClick={()=>setIsLogin(!isLogin)} className="text-indigo-600 underline">
            { isLogin ? "Create an account" : "Already have an account? Login" }
          </button>
        </div>
      </div>
    </div>
  );
}
