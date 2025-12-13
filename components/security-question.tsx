"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield } from "lucide-react"

interface SecurityQuestionProps {
  onValidate: (isValid: boolean) => void
  reset?: boolean
}

export function SecurityQuestion({ onValidate, reset }: SecurityQuestionProps) {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [userAnswer, setUserAnswer] = useState("")

  // Generate random numbers between 1-10
  const generateQuestion = () => {
    const n1 = Math.floor(Math.random() * 10) + 1
    const n2 = Math.floor(Math.random() * 10) + 1
    setNum1(n1)
    setNum2(n2)
    setUserAnswer("")
  }

  useEffect(() => {
    generateQuestion()
  }, [reset])

  useEffect(() => {
    const correctAnswer = num1 + num2
    const isCorrect = userAnswer.trim() !== "" && Number.parseInt(userAnswer) === correctAnswer
    onValidate(isCorrect)
  }, [userAnswer, num1, num2, onValidate])

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-2">
        <Shield className="w-5 h-5 text-blue-600" />
        <Label htmlFor="security-answer" className="text-base font-semibold text-gray-900">
          Security Verification
        </Label>
      </div>
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
        <p className="text-sm font-medium text-gray-700 mb-3">
          What is{" "}
          <span className="text-blue-600 font-bold text-lg">
            {num1} + {num2}
          </span>
          ? <span className="text-red-500">*</span>
        </p>
        <Input
          id="security-answer"
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Enter your answer"
          required
          className="h-12 text-base border-2 border-blue-300 focus:border-blue-500 bg-white"
        />
      </div>
      <p className="text-xs text-gray-600 flex items-center gap-1">
        <Shield className="w-3 h-3" />
        This helps us prevent spam and ensure you're a real person
      </p>
    </div>
  )
}
