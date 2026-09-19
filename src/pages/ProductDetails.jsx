import React from 'react'
import { ArrowLeft, Heart, Plus, ShieldCheck, Star, Truck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'


export default function ProductDetails({ onAddToCart, onToggleFavorite, favorites }) {
