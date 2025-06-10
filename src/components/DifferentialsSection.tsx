
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Users, Settings, Trophy } from 'lucide-react';

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Zap,
      title: 'Implementação Rápida',
      description: 'Soluções de IA funcionando em até 48 horas, sem complicações técnicas.'
    },
    {
      icon: Settings,
      title: 'Personalização Total',
      description: 'Cada projeto é desenvolvido sob medida para as necessidades específicas do seu negócio.'
    },
    {
      icon: Users,
      title: 'Integração com GPT',
      description: 'Utilizamos as mais avançadas tecnologias de IA, incluindo modelos GPT de última geração.'
    },
    {
      icon: Trophy,
      title: 'Agência #1 do Brasil',
      description: 'Reconhecida como líder em automação inteligente e soluções de IA para empresas.'
    }
  ];

  return (
    <section id="diferenciais" className="py-16 lg:py-24 bg-gradient-to-br from-ai-blue-50 to-ai-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Por que escolher a <span className="text-gradient">AgênciaIA</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos especialistas em transformar ideias em soluções inteligentes que realmente funcionam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover-lift bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-ai-blue-500 to-ai-purple-500 flex items-center justify-center">
                  <differential.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {differential.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {differential.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-ai-cyan-100 text-ai-cyan-900 rounded-full text-lg font-medium">
            🚀 Projeto em expansão – Seja nosso parceiro estratégico
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
