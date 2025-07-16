import React, { useEffect, useState } from 'react';
import { Shield, Rocket, Brain, Target, Lock, AlertTriangle } from 'lucide-react';

function App() {
  const [glitchEffect, setGlitchEffect] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-x-hidden">
      {/* Background glitch effect */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
        <div className={`absolute inset-0 transition-opacity duration-200 ${glitchEffect ? 'opacity-30' : 'opacity-10'}`}>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-yellow-500/10 blur-2xl animate-pulse"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-6xl font-black mb-6 text-white transition-all duration-200 ${glitchEffect ? 'animate-pulse text-red-400' : ''}`}>
            VOCÊ SAIU DA PÁGINA... MAS A PORTA NÃO FECHOU.
          </h1>
          
          <div className="bg-red-600/20 border border-red-500/50 p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-red-300 font-bold mb-2">O sistema vazou.</p>
            <p className="text-xl md:text-2xl text-red-300 font-bold mb-2">Agora tem como entrar… pagando menos.</p>
            <p className="text-xl md:text-2xl text-red-300 font-bold mb-2">Mas você precisa escolher rápido —</p>
            <p className="text-xl md:text-2xl text-red-300 font-bold">Essa zona vai ser lacrada a qualquer momento.</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-lg md:text-xl mb-4 text-gray-300">
            Você recusou o acesso completo ao Cofre de IA.<br />
            Tudo certo.<br />
            Mas aqui é guerra.<br />
            E até no campo de batalha… quem recusa uma granada pronta explode primeiro.
          </p>
          
          <p className="text-xl md:text-2xl font-bold text-yellow-400 mb-8">
            Aqui estão 3 versões reduzidas da arma que você quase levou:
          </p>
        </div>

        {/* Package Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {/* Package 1 */}
          <div className="bg-gray-900 border border-gray-600 p-6 relative overflow-hidden group hover:border-red-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 bg-red-600 px-3 py-1 text-sm font-bold">
              TÁTICA
            </div>
            <div className="text-center mb-6">
              <Shield className="w-12 h-12 mx-auto mb-4 text-red-400" />
              <h3 className="text-2xl font-bold text-white mb-2">PACOTE TÁTICA RÁPIDA</h3>
              <div className="text-3xl font-black text-yellow-400">R$9,97</div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400">CapCut Pro desbloqueado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400">Templates virais para Reels</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400">IA com prompts de criativo (3 modelos)</span>
              </div>
            </div>
            
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 border-2 border-red-500 hover:border-red-400 transition-all duration-300 text-lg uppercase">
              PEGAR TÁTICA RÁPIDA
            </button>
          </div>

          {/* Package 2 */}
          <div className="bg-gray-900 border border-gray-600 p-6 relative overflow-hidden group hover:border-yellow-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 bg-yellow-600 px-3 py-1 text-sm font-bold text-black">
              HACK
            </div>
            <div className="text-center mb-6">
              <Rocket className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white mb-2">PACOTE HACK VISUAL</h3>
              <div className="text-3xl font-black text-yellow-400">R$27 <span className="text-lg line-through text-gray-500">(antes R$48)</span></div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400">Acesso ao CapCut Pro</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400">15 criativos prontos no estilo "black"</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400">Tutorial oculto: como clonar criativos com IA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400">Ferramenta para espiar anúncios do seu nicho</span>
              </div>
            </div>
            
            <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-4 px-6 border-2 border-yellow-500 hover:border-yellow-400 transition-all duration-300 text-lg uppercase">
              PEGAR HACK VISUAL
            </button>
          </div>

          {/* Package 3 */}
          <div className="bg-gray-900 border border-gray-600 p-6 relative overflow-hidden group hover:border-red-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 bg-red-600 px-3 py-1 text-sm font-bold">
              INFILTRADO
            </div>
            <div className="text-center mb-6">
              <Brain className="w-12 h-12 mx-auto mb-4 text-red-400" />
              <h3 className="text-2xl font-bold text-white mb-2">PACOTE INFILTRADO IA</h3>
              <div className="text-3xl font-black text-yellow-400">R$47 <span className="text-lg line-through text-gray-500">(antes R$67)</span></div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400">Todos os hacks do plano anterior</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400">GPT PRO + comandos secretos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400">IA espiã para identificar criativos que vendem</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400">3 ferramentas que ninguém compartilha</span>
              </div>
            </div>
            
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 border-2 border-red-500 hover:border-red-400 transition-all duration-300 text-lg uppercase">
              PEGAR INFILTRAÇÃO IA
            </button>
          </div>
        </div>

        {/* Observation */}
        <div className="max-w-4xl mx-auto mb-12 bg-gray-900 border border-gray-600 p-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-red-400 font-bold">❌</span>
              <span className="text-gray-300">Todos os planos são avulsos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-400 font-bold">❌</span>
              <span className="text-gray-300">Não incluem comunidade nem atualizações</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 font-bold">✅</span>
              <span className="text-green-400">Mas já são armas suficientes pra multiplicar resultado com IA</span>
            </div>
          </div>
        </div>

        {/* Final Warning */}
        <div className="max-w-4xl mx-auto mb-12 bg-red-900/30 border border-red-500 p-8 text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-red-400" />
          <p className="text-2xl md:text-3xl font-bold text-red-300 mb-4">
            Depois que essa tela fechar, acabou.
          </p>
          <p className="text-xl md:text-2xl font-bold text-red-300 mb-4">
            Essa falha no sistema vai ser selada.
          </p>
          <p className="text-xl md:text-2xl font-bold text-red-300">
            É você contra o algoritmo.
          </p>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-gray-600 p-4 text-center">
          <p className="text-gray-300 text-sm md:text-base">
            Se você sair agora, volta a competir com quem já está usando IA no modo guerra.
            <span className="text-red-400 font-bold ml-2">Boa sorte.</span>
          </p>
        </div>
      </div>

      {/* Glitch lines overlay */}
      <div className={`fixed inset-0 pointer-events-none transition-opacity duration-100 ${glitchEffect ? 'opacity-20' : 'opacity-0'}`}>
        <div className="absolute top-1/4 left-0 right-0 h-px bg-red-500"></div>
        <div className="absolute top-2/4 left-0 right-0 h-px bg-red-500"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-red-500"></div>
      </div>
    </div>
  );
}

export default App;