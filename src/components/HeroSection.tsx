
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            <span className="text-foreground">Sua empresa</span>{' '}
            <span className="text-muted-foreground">pronta para o</span>{' '}
            <span className="text-foreground">futuro</span>{' '}
            <span className="text-muted-foreground">com</span>{' '}
            <span className="text-foreground">inteligência artificial</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Automatize processos, atenda com bots inteligentes e aumente a produtividade 
            com soluções de IA sob medida para sua empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 transition-all px-8 py-4 text-base font-medium group"
            >
              Fale com nossa IA
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-base font-medium border-foreground text-foreground hover:bg-foreground hover:text-background"
            >
              Ver demonstração
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
