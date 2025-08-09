import React from "react";

export function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-800 mb-4">
                            Sobre Nós
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Conheça nossa história, valores e missão
                        </p>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-12 mb-12">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Nossa História
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Fundada em 2020, nossa empresa nasceu da paixão por tecnologia 
                                e inovação. Começamos como uma pequena startup e hoje somos 
                                referência no mercado.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Ao longo dos anos, desenvolvemos soluções que impactaram 
                                positivamente milhares de usuários e empresas.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Nossos Valores
                            </h2>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-600">
                                    <span className="text-green-500 mr-3">✓</span>
                                    Inovação constante
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <span className="text-green-500 mr-3">✓</span>
                                    Qualidade em primeiro lugar
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <span className="text-green-500 mr-3">✓</span>
                                    Foco no cliente
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <span className="text-green-500 mr-3">✓</span>
                                    Sustentabilidade
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                            Nossa Equipe
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    JS
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    João Silva
                                </h3>
                                <p className="text-gray-600">CEO & Fundador</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    MS
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Maria Santos
                                </h3>
                                <p className="text-gray-600">CTO</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    PC
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Pedro Costa
                                </h3>
                                <p className="text-gray-600">Designer Chefe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}