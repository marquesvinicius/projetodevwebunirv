import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    cpf: '',
    birthdate: '',
    fullName: '',
    username: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const validateCPF = (cpf) => {
    const cleanCPF = cpf.replace(/\D/g, '')
    if (cleanCPF.length !== 11) return 'CPF deve ter 11 dígitos'
    if (/^(\d)\1{10}$/.test(cleanCPF)) return 'CPF inválido'
    return ''
  }

  const validateField = (name, value) => {
    switch (name) {
      case 'cpf':
        return validateCPF(value)
      case 'birthdate':
        if (!value) return 'Data de nascimento é obrigatória'
        const today = new Date()
        const birthDate = new Date(value)
        const age = today.getFullYear() - birthDate.getFullYear()
        if (age < 18) return 'Você deve ter pelo menos 18 anos'
        return ''
      case 'fullName':
        if (!value.trim()) return 'Nome completo é obrigatório'
        if (value.trim().length < 2) return 'Nome deve ter pelo menos 2 caracteres'
        if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(value)) return 'Nome deve conter apenas letras'
        return ''
      case 'username':
        if (!value.trim()) return 'Nome de usuário é obrigatório'
        if (value.length < 3) return 'Nome de usuário deve ter pelo menos 3 caracteres'
        if (!/^[a-zA-Z0-9_]+$/.test(value)) return 'Nome de usuário deve conter apenas letras, números e _'
        return ''
      case 'password':
        if (!value) return 'Senha é obrigatória'
        if (value.length < 6) return 'Senha deve ter pelo menos 6 caracteres'
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) return 'Senha deve conter ao menos: 1 letra minúscula, 1 maiúscula e 1 número'
        return ''
      default:
        return ''
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = {}
    const newTouched = {}
    
    Object.keys(formData).forEach(field => {
      newTouched[field] = true
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    })
    
    setTouched(newTouched)
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      alert('Formulário enviado com sucesso!')
      console.log('Dados do formulário:', formData)
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Cadastro de Usuário</h2>
          <p className="text-gray-600">Preencha os dados abaixo para criar sua conta</p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-2">
              CPF:
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="000.000.000-00"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition duration-200 ${
                errors.cpf && touched.cpf 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
              required
            />
            {errors.cpf && touched.cpf && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                {errors.cpf}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-2">
              Data de Nascimento:
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition duration-200 outline-none ${
                errors.birthdate && touched.birthdate 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
              required
            />
            {errors.birthdate && touched.birthdate && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                {errors.birthdate}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Nome Completo:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Digite seu nome completo"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition duration-200 outline-none ${
                errors.fullName && touched.fullName 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
              required
            />
            {errors.fullName && touched.fullName && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Nome de Usuário:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Digite seu nome de usuário"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition duration-200 outline-none ${
                errors.username && touched.username 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
              required
            />
            {errors.username && touched.username && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                {errors.username}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Senha:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Digite sua senha"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition duration-200 outline-none ${
                errors.password && touched.password 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
              required
            />
            {errors.password && touched.password && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                {errors.password}
              </p>
            )}
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
