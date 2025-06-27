'use client'
import { useState, useTransition } from 'react'
import Link from 'next/link'
import { signup } from '@/app/api/actions/auth'

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'student', 
    collegeName: ''
  })
  const [errors, setErrors] = useState({})
  const [isPending, startTransition] = useTransition()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    
    const formDataObj = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value)
    })

    startTransition(async () => {
      try {
        console.log("Sending data");
        
        const result = await signup(formDataObj)
        if (result && !result.success) {
          setErrors(result.errors)
        }
       
      } catch (error) {
        setErrors({ form: 'An unexpected error occurred' })
      }
    })
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-800 mb-2">
              Join <span className="text-orange-500">Univent</span>
            </h1>
            <p className="text-gray-600">
              {formData.accountType === 'student' 
                ? 'Discover amazing campus events' 
                : 'Promote your college events to thousands'}
            </p>
          </div>

          {errors.form && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <p className="text-red-700">{errors.form[0]}</p>
            </div>
          )}

          <div className="flex rounded-lg border border-gray-300 overflow-hidden mb-6">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, accountType: 'student' }))}
              className={`flex-1 py-2 px-4 text-sm font-medium ${formData.accountType === 'student' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              I'm a Student
            </button>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, accountType: 'college' }))}
              className={`flex-1 py-2 px-4 text-sm font-medium ${formData.accountType === 'college' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              I'm a College
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {formData.accountType === 'student' ? 'Full Name' : 'Representative Name'}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                placeholder={formData.accountType === 'student' ? 'John Smith' : 'Jane Doe'}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name[0]}</p>}
            </div>

            {formData.accountType === 'college' && (
              <div>
                <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700 mb-1">
                  College/University Name
                </label>
                <input
                  id="collegeName"
                  name="collegeName"
                  type="text"
                  value={formData.collegeName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.collegeName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                  placeholder="State University"
                />
                {errors.collegeName && <p className="mt-1 text-sm text-red-600">{errors.collegeName[0]}</p>}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                placeholder={formData.accountType === 'student' ? 'student@university.edu' : 'events@university.edu'}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email[0]}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                placeholder="••••••••"
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password[0]}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword[0]}</p>}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isPending}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors ${isPending ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isPending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating account...
                  </>
                ) : (
                  `Sign up as ${formData.accountType === 'student' ? 'Student' : 'College'}`
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="font-medium text-orange-500 hover:text-orange-600">
              Log in
            </Link>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500">
            <p>By registering, you agree to our <Link href="/terms" className="underline">Terms</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.</p>
          </div>
        </div>
      </div>
    </main>
  )
}