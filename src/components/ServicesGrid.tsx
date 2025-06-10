
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
      title: 'Assistentes Virtuais',
      description: 'Bots inteligentes treinados especificamente para atendimento ao cliente e conversão de vendas.'
    },
    {
      icon: Calendar,
      title: 'Automação de Processos',
      description: 'Sistemas automatizados para clínicas, salões, consultorias e outros negócios de serviços.'
    },
    {
      icon: PenTool,
      title: 'Criação de Conteúdo',
      description: 'Geração automática de blogs, posts para redes sociais, anúncios e roteiros publicitários.'
    },
    {
      icon: Image,
      title: 'Design com IA',
      description: 'Criação de imagens, logos, vídeos curtos, reels e shorts usando inteligência artificial.'
    },
    {
      icon: GraduationCap,
      title: 'Consultoria',
      description: 'Capacitação personalizada para empresas implementarem IA em seus processos internos.'
    },
    {
      icon: Globe,
      title: 'Sites com IA',
      description: 'Desenvolvimento de websites com chatbots e automações inteligentes incorporadas.'
    },
    {
      icon: Target,
      title: 'Marketing & CRM',
      description: 'Automação de campanhas, análise de dados e gestão inteligente de relacionamento.'
    },
    {
      icon: Package,
      title: 'White Label',
      description: 'Bots e soluções prontas para revenda, permitindo que você ofereça IA aos seus clientes.'
    }
  ];

  return (
    <section id="servicos" className="section-spacing bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Soluções completas de IA
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Um portfólio completo de serviços de inteligência artificial, 
            desde automação básica até soluções corporativas complexas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="minimal-card group cursor-pointer"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-foreground transition-colors">
                  <service.icon className="w-6 h-6 text-foreground group-hover:text-background transition-colors" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed text-sm">
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
