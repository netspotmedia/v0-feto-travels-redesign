"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DestinationsManagerPage() {
  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Destinations Manager</h1>
          <Link href="/admin/dashboard">
            <Button variant="outline" className="text-white border-slate-600 bg-transparent">
              Back
            </Button>
          </Link>
        </div>
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Manage Destinations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">Destinations management interface coming soon</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
