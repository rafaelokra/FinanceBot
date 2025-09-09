import React, { useState } from 'react';
import { 
  MessageCircle, 
  DollarSign, 
  BarChart3, 
  Calendar, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Phone,
  Mail,
  Instagram,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  PieChart,
  FileText,
  Users,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      icon: MessageCircle,
      title: "Controle via WhatsApp",
      description: "Registre seus gastos e receitas diretamente pelo WhatsApp, de forma simples e rápida"
    },
    {
      icon: BarChart3,
      title: "Relatórios Automáticos",
      description: "Receba relatórios semanais e mensais detalhados sobre suas finanças"
    },
    {
      icon: PieChart,
      title: "Categorização Inteligente",
      description: "Organize seus gastos por categorias para melhor controle"
    },
    {
      icon: TrendingUp,
      title: "Análise de Tendências",
      description: "Identifique padrões nos seus gastos e melhore seu planejamento"
    },
    {
      icon: Calendar,
      title: "Resumos Personalizados",
      description: "Receba resumos da semana e do mês para acompanhar sua evolução"
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Seus dados financeiros são protegidos com criptografia de ponta"
    }
  ];

  const benefits = [
    "Economize tempo no controle financeiro",
    "Tenha visibilidade total dos seus gastos",
    "Melhore seu planejamento financeiro",
    "Receba insights personalizados",
    "Acesso 24/7 pelo WhatsApp",
    "Relatórios automáticos e detalhados"
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empreendedora",
      content: "O FinanceBot mudou completamente como eu controlo minhas finanças. Agora consigo acompanhar tudo pelo WhatsApp de forma super prática!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Freelancer",
      content: "Desde que comecei a usar, já consegui economizar 30% dos meus gastos mensais. Os relatórios são muito detalhados!",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Consultora",
      content: "Praticidade e eficiência em um só lugar. Recomendo para todos que querem ter controle financeiro sem complicação.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Como funciona o FinanceBot?",
      answer: "O FinanceBot é um assistente inteligente que funciona diretamente no seu WhatsApp. Você envia mensagens informando seus gastos e receitas, e ele organiza tudo automaticamente, enviando relatórios periódicos."
    },
    {
      question: "Meus dados ficam seguros?",
      answer: "Sim! Utilizamos criptografia de ponta a ponta e não armazenamos informações sensíveis. Sua privacidade e segurança são nossas prioridades."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Claro! Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento através do próprio WhatsApp ou entrando em contato conosco."
    },
    {
      question: "Funciona em qualquer celular?",
      answer: "Sim! Como funciona pelo WhatsApp, é compatível com qualquer smartphone que tenha o aplicativo instalado."
    },
    {
      question: "Há limite de transações?",
      answer: "Não há limite! Você pode registrar quantas transações quiser durante o mês, sempre por apenas R$ 19,90."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-black bg-opacity-20 backdrop-blur-lg rounded-full p-4">
                <MessageCircle className="h-16 w-16 text-black" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-black">
                FinanceBot
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-black opacity-80 max-w-3xl mx-auto leading-relaxed">
              O assistente de finanças pessoais que funciona direto no seu WhatsApp. 
              Controle seus gastos, receba relatórios e melhore sua vida financeira.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="bg-black bg-opacity-20 backdrop-blur-lg rounded-full px-8 py-3">
                <span className="text-2xl font-bold">Apenas R$ 19,90/mês</span>
              </div>
            </div>
            <button className="bg-black hover:bg-gray-800 text-yellow-400 font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-2xl">
              <a href="https://pay.hotmart.com/R101653811F?off=v356dc7u&sck=HOTMART_MEM_CA&bid=1757377547755" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Começar Agora <ArrowRight className="inline ml-2 h-6 w-6" />
              </a>
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stone-50 to-transparent"></div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o FinanceBot?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma solução completa para suas finanças pessoais, simples como uma conversa no WhatsApp
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Transforme sua relação com o dinheiro
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a href="https://pay.hotmart.com/R101653811F?off=v356dc7u&sck=HOTMART_MEM_CA&bid=1757377547755" target="_blank" rel="noopener noreferrer">
                  <button className="bg-black hover:bg-gray-800 text-yellow-400 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl">
                    Quero o FinanceBot
                  </button>
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-stone-100 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 rounded-full p-2 mr-3">
                    <MessageCircle className="h-5 w-5 text-black" />
                  </div>
                  <span className="font-semibold text-gray-900">FinanceBot</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p><strong>Você:</strong> Gastei R$ 45,00 com almoço</p>
                  </div>
                  <div className="bg-stone-50 p-3 rounded-lg">
                    <p><strong>Bot:</strong> ✅ Gasto registrado! Categoria: Alimentação</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p><strong>Você:</strong> Relatório da semana</p>
                  </div>
                  <div className="bg-stone-50 p-3 rounded-lg">
                    <p><strong>Bot:</strong> 📊 Aqui está seu resumo semanal...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Investimento que vale a pena
          </h2>
          <div className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
            <div className="mb-8">
              <span className="text-6xl font-bold text-gray-900">R$ 19</span>
              <span className="text-3xl text-gray-600">,90</span>
              <span className="text-xl text-gray-500 ml-2">/mês</span>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Menos que um almoço no restaurante por mês para ter controle total das suas finanças!
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8 text-sm">
              <div className="flex items-center justify-center">
                <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                <span>Configuração Instantânea</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="h-5 w-5 text-yellow-500 mr-2" />
                <span>Dados Seguros</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                <span>Suporte 24/7</span>
              </div>
            </div>
            <button className="bg-black hover:bg-gray-800 text-yellow-400 font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-2xl w-full sm:w-auto">
              <a href="https://pay.hotmart.com/R101653811F?off=v356dc7u&sck=HOTMART_MEM_CA&bid=1757377547755" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Assinar Agora <ArrowRight className="inline ml-2 h-6 w-6" />
              </a>
            </button>
            <p className="text-sm text-gray-500 mt-4">Cancele quando quiser • Sem fidelidade</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 1.000 pessoas já transformaram suas finanças com o FinanceBot
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full h-12 w-12 flex items-center justify-center text-black font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Encontre respostas para as principais questões sobre o FinanceBot
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200">
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                  {openFaq === index ? 
                    <ChevronUp className="h-6 w-6 text-gray-500" /> : 
                    <ChevronDown className="h-6 w-6 text-gray-500" />
                  }
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para transformar suas finanças?
          </h2>
          <p className="text-xl mb-8 text-black opacity-80 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já estão no controle total de suas finanças pessoais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="https://pay.hotmart.com/R101653811F?off=v356dc7u&sck=HOTMART_MEM_CA&bid=1757377547755" target="_blank" rel="noopener noreferrer">
              <button className="bg-black hover:bg-gray-800 text-yellow-400 font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-2xl">
                Começar Minha Transformação Financeira
              </button>
            </a>
          </div>
          <p className="text-black opacity-70">
            💳 Pagamento 100% seguro • ⚡ Ativação imediata • 🔄 Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <MessageCircle className="h-10 w-10 text-yellow-400 mr-3" />
                <span className="text-2xl font-bold">FinanceBot</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-lg">
                O assistente financeiro mais inteligente do WhatsApp. 
                Controle suas finanças de forma simples e eficiente.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 cursor-pointer">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="bg-gray-800 p-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 cursor-pointer">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="bg-gray-800 p-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 cursor-pointer">
                  <Instagram className="h-6 w-6" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Produto</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Como funciona</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Preços</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Suporte</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Contato</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 FinanceBot. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;