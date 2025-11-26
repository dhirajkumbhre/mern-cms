import React from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';


export default function Auth() {
const [mode, setMode] = React.useState('login');
const [form, setForm] = React.useState({ email: '', password: '', name: '' });
const nav = useNavigate();


async function submit(e) {
  e.preventDefault();
  try {
    let res;
    if (mode === 'login') {
      res = await api.login({ email: form.email, password: form.password });
    } else {
      res = await api.register({ name: form.name, email: form.email, password: form.password });
    }

    // ⭐ Save the JWT token returned by backend
    localStorage.setItem("token", res.data.token);

    // Redirect after login
    nav('/dashboard');
  } catch (err) {
    alert('Auth failed');
  }
}




return (
<div className="max-w-md mx-auto bg-white/80 dark:bg-slate-900/70 p-6 rounded shadow">
<h3 className="text-xl font-bold mb-4">{mode === 'login' ? 'Sign in' : 'Create account'}</h3>
<form onSubmit={submit} className="space-y-3">
{mode === 'register' && (
<input placeholder="Full name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full p-2 rounded border" />
)}
<input placeholder="Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full p-2 rounded border" />
<input placeholder="Password" type="password" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} className="w-full p-2 rounded border" />
<div className="flex items-center justify-between">
<button className="px-4 py-2 rounded bg-brand-500 text-white" type="submit">{mode === 'login' ? 'Sign in' : 'Register'}</button>
<button type="button" onClick={() => setMode(m => (m === 'login' ? 'register' : 'login'))} className="text-sm text-slate-500">{mode === 'login' ? 'Create account' : 'Already have account'}</button>
</div>
</form>
</div>
);
}