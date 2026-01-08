"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

interface Tour {
  id: string
  title: string
  destination: string
  description: string
  price: number
  featured: boolean
}

export default function ToursManagerPage() {
  const [tours, setTours] = useState<Tour[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({
    title: "",
    destination: "",
    description: "",
    price: "",
    image_url: "",
    duration_days: "",
    featured: false,
  })

  useEffect(() => {
    fetchTours()
  }, [])

  async function fetchTours() {
    try {
      const response = await fetch("/api/admin/tours")
      if (!response.ok) throw new Error("Failed to fetch tours")
      const data = await response.json()
      setTours(data)
    } catch (error) {
      console.error("Error fetching tours:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/admin/tours", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error("Failed to create tour")
      setFormData({
        title: "",
        destination: "",
        description: "",
        price: "",
        image_url: "",
        duration_days: "",
        featured: false,
      })
      await fetchTours()
    } catch (error) {
      console.error("Error creating tour:", error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return
    try {
      const response = await fetch(`/api/admin/tours?id=${id}`, { method: "DELETE" })
      if (!response.ok) throw new Error("Failed to delete tour")
      await fetchTours()
    } catch (error) {
      console.error("Error deleting tour:", error)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Tours Manager</h1>
          <Link href="/admin/dashboard">
            <Button variant="outline" className="text-white border-slate-600 bg-transparent">
              Back
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-slate-800 border-slate-700 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-white">Create Tour</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-slate-300">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="destination" className="text-slate-300">
                    Destination
                  </Label>
                  <Input
                    id="destination"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="price" className="text-slate-300">
                    Price
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description" className="text-slate-300">
                    Description
                  </Label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white border rounded w-full p-2"
                    required
                  />
                </div>
                <div className="flex items-center">
                  <input
                    id="featured"
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="rounded"
                  />
                  <Label htmlFor="featured" className="text-slate-300 ml-2 cursor-pointer">
                    Featured
                  </Label>
                </div>
                <Button type="submit" className="w-full">
                  Create Tour
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="lg:col-span-2">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Tours List</CardTitle>
                <CardDescription className="text-slate-400">{tours.length} tours total</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <p className="text-slate-300">Loading...</p>
                ) : tours.length > 0 ? (
                  <div className="space-y-4">
                    {tours.map((tour) => (
                      <div key={tour.id} className="bg-slate-700 p-4 rounded-lg flex justify-between items-start">
                        <div>
                          <h3 className="text-white font-semibold">{tour.title}</h3>
                          <p className="text-slate-300 text-sm">{tour.destination}</p>
                          <p className="text-accent font-semibold">${tour.price.toLocaleString()}</p>
                          {tour.featured && (
                            <span className="text-xs bg-accent text-white px-2 py-1 rounded mt-2 inline-block">
                              Featured
                            </span>
                          )}
                        </div>
                        <Button variant="destructive" size="sm" onClick={() => handleDelete(tour.id)}>
                          Delete
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-400">No tours yet</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
