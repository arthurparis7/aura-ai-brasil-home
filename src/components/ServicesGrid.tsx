
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MessageSquare, 
  Calendar, 
  PenTool, 
  Image, 
  GraduationCap, 
  Globe, 
  Target, 
  Package 
} from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: MessageSquare,
      title: 'Assistentes Virtuais com GPT',
      description: 'Bots inteligentes treinados especificamente para atendimento ao cliente e conversão de vendas.',
      gradient: 'from-ai-blue-500 to-ai-blue-600'
    },
    {
      icon: Calendar,
      title: 'Automação de Agendamentos',
      description: 'Sistemas automatizados para clínicas, salões, consultorias e outros negócios de serviços.',
      gradient: 'from-ai-purple-500 to-ai-purple-600'
    },
    {
      icon: PenTool,
      title: 'Criação de Conteúdo com IA',
      description: 'Geração automática de blogs, posts para redes sociais, anúncios e roteiros publicitários.',
      gradient: 'from-ai-cyan-500 to-ai-cyan-600'
    },
    {
      icon: Image,
      title: 'Design e Vídeo com IA',
      description: 'Criação de imagens, logos, vídeos curtos, reels e shorts usando inteligência artificial.',
      gradient: 'from-ai-blue-500 to-ai-purple-500'
    },
    {
      icon: GraduationCap,
      title: 'Consultoria e Treinamentos',
      description: 'Capacitação personalizada para empresas implementarem IA em seus processos internos.',
      gradient: 'from-ai-purple-500 to-ai-cyan-500'
    },
    {
      icon: Globe,
      title: 'Sites com IA Integrada',
      description: 'Desenvolvimento de websites com chatbots e automações inteligentes incorporadas.',
      gradient: 'from-ai-cyan-500 to-ai-blue-500'
    },
    {
      icon: Target,
      title: 'IA para Marketing e CRM',
      description: 'Automação de campanhas, análise de dados e gestão inteligente de relacionamento com clientes.',
      gradient: 'from-ai-blue-600 to-ai-purple-600'
    },
    {
      icon: Package,
      title: 'Produtos White Label',
      description: 'Bots e soluções prontas para revenda, permitindo que você ofereça IA aos seus clientes.',
      gradient: 'from-ai-purple-600 to-ai-cyan-600'
    }
  ];

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Soluções de IA</span> para seu negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços de inteligência artificial, 
            desde automação básica até soluções corporativas complexas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 group"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold group-hover:text-ai-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
