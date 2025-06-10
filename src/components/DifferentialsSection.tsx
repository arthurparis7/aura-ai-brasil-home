
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Users, Settings, Trophy } from 'lucide-react';

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Zap,
      title: 'Implementação Rápida',
      description: 'Soluções funcionando em até 48 horas, sem complicações técnicas.'
    },
    {
      icon: Settings,
      title: 'Personalização Total',
      description: 'Cada projeto desenvolvido sob medida para as necessidades específicas.'
    },
    {
      icon: Users,
      title: 'Integração GPT',
      description: 'Utilizamos as mais avançadas tecnologias de IA e modelos GPT.'
    },
    {
      icon: Trophy,
      title: 'Agência #1 do Brasil',
      description: 'Reconhecida como líder em automação inteligente para empresas.'
    }
  ];

  return (
    <section id="sobre" className="section-spacing bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Por que escolher a AgênciaIA?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Somos especialistas em transformar ideias em soluções inteligentes que realmente funcionam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((differential, index) => (
            <Card key={index} className="minimal-card text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-foreground flex items-center justify-center">
                  <differential.icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  {differential.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {differential.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
