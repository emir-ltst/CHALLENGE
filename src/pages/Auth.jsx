import { ArrowRight, LockKeyhole, Mail, UserRound } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function Login({ onLogin }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submit = (event) => { event.preventDefault(); onLogin({ email, name: email.split('@')[0] || 'TechMarket customer' }); navigate('/') }
  return <AuthLayout title="Welcome back." detail="Sign in to pick up where you left off."><form className="auth-form" onSubmit={submit}><label><Mail size={16} /> Email address<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" /></label><label><LockKeyhole size={16} /> Password<input required minLength="6" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="At least 6 characters" /></label><button className="button button-dark" type="submit">Sign in <ArrowRight size={16} /></button></form><p className="auth-switch">New here? <Link to="/register">Create an account</Link></p></AuthLayout>
}

export function Register({ onLogin }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const submit = (event) => { event.preventDefault(); localStorage.setItem('techmarket-user', JSON.stringify(form)); onLogin(form); navigate('/') }
  return <AuthLayout title="Make yourself at home." detail="Create an account for a smoother way to shop."><form className="auth-form" onSubmit={submit}><label><UserRound size={16} /> Your name<input required name="name" value={form.name} onChange={update} placeholder="Alex Morgan" /></label><label><Mail size={16} /> Email address<input required name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" /></label><label><LockKeyhole size={16} /> Password<input required minLength="6" name="password" type="password" value={form.password} onChange={update} placeholder="At least 6 characters" /></label><button className="button button-dark" type="submit">Create account <ArrowRight size={16} /></button></form><p className="auth-switch">Already have an account? <Link to="/login">Sign in</Link></p></AuthLayout>
}

function AuthLayout({ title, detail, children }) { return <main className="auth-page"><div className="auth-panel"><Link className="brand" to="/"><span className="brand-mark">T</span>Tech<span>Market</span></Link><div className="auth-heading"><p className="eyebrow">YOUR TECHMARKET</p><h1>{title}</h1><p>{detail}</p></div>{children}<p className="auth-note">Demo account only. Your details stay in this browser and are not sent to a server.</p></div><div className="auth-image"><img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1400&q=85" alt="Bright modern workspace" /><span>Make room<br />for what’s next.</span></div></main> }