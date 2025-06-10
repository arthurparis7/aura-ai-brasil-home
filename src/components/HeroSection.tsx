
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ai-blue-50 via-ai-purple-50 to-ai-cyan-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ai-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Sua empresa</span>{' '}
            <span className="text-gradient">pronta para o futuro</span>{' '}
            <span className="text-foreground">com inteligência artificial</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Automatize processos, atenda com bots inteligentes e aumente a produtividade com soluções de IA sob medida para sua empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-ai text-white hover:opacity-90 transition-all px-8 py-4 text-lg group"
            >
              Fale com nossa IA
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg border-ai-blue-500 text-ai-blue-600 hover:bg-ai-blue-50"
            >
              Solicite uma demonstração
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-ai-blue-600">500+</div>
              <div className="text-sm text-muted-foreground">Empresas atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ai-purple-600">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ai-cyan-600">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte IA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ai-blue-600">#1</div>
              <div className="text-sm text-muted-foreground">No Brasil</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
