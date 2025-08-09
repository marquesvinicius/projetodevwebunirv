import React from "react";

export function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-800 mb-4">
                            Bem-vindo à Página Inicial
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Explore nosso site e descubra tudo o que temos a oferecer
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="text-blue-500 text-3xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Inovação
                            </h3>
                            <p className="text-gray-600">
                                Tecnologias de ponta para soluções modernas
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="text-green-500 text-3xl mb-4">💡</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Criatividade
                            </h3>
                            <p className="text-gray-600">
                                Ideias inovadoras que transformam o futuro
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="text-purple-500 text-3xl mb-4">🌟</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Qualidade
                            </h3>
                            <p className="text-gray-600">
                                Excelência em tudo o que fazemos
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                            Sobre Nós
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed text-center">
                            Somos uma empresa dedicada à inovação e excelência. 
                            Nossa missão é criar soluções que fazem a diferença 
                            na vida das pessoas e das organizações.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}