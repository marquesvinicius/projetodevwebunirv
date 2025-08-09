import React from "react";

export function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-800 mb-4">
                            Entre em Contato
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Estamos aqui para ajudar. Envie sua mensagem!
                        </p>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Informações de Contato
                            </h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-white text-xl">📍</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Endereço</h3>
                                        <p className="text-gray-600">Rua das Flores, 123<br />São Paulo, SP 01234-567</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-white text-xl">📧</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Email</h3>
                                        <p className="text-gray-600">contato@empresa.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-white text-xl">📞</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Telefone</h3>
                                        <p className="text-gray-600">(11) 99999-9999</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-white text-xl">⏰</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Horário</h3>
                                        <p className="text-gray-600">Seg-Sex: 9h às 18h</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Envie sua Mensagem
                            </h2>
                            
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nome Completo
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                                        placeholder="Digite seu nome"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                                        placeholder="seu@email.com"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Assunto
                                    </label>
                                    <select
                                        id="subject"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                                    >
                                        <option value="">Selecione um assunto</option>
                                        <option value="duvida">Dúvida</option>
                                        <option value="orcamento">Orçamento</option>
                                        <option value="parceria">Parceria</option>
                                        <option value="outro">Outro</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Mensagem
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                                        placeholder="Digite sua mensagem aqui..."
                                    ></textarea>
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
                                >
                                    Enviar Mensagem
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}