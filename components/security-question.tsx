"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
    <div>
      <Label htmlFor="security-answer">
        Security Question: What is {num1} + {num2}? *
      </Label>
      <Input
        id="security-answer"
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Enter the answer"
        required
        className="mt-1"
      />
      <p className="text-xs text-muted-foreground mt-1">Please solve this simple math problem to verify you're human</p>
    </div>
  )
}
