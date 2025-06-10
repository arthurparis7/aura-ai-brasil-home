
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <span className="text-xl font-bold">AgênciaIA</span>
            <p className="text-background/70 leading-relaxed text-sm">
              A agência #1 do Brasil em soluções de inteligência artificial para empresas e profissionais autônomos.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Serviços</h3>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#" className="hover:text-background transition-colors">Assistentes Virtuais</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Automação</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Criação de Conteúdo</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Design com IA</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Empresa</h3>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#" className="hover:text-background transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Cases</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Carreira</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contato</h3>
            <ul className="space-y-2 text-background/70 text-sm">
              <li>(11) 99999-9999</li>
              <li>contato@agenciaai.com.br</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-background/70 text-sm">
          <p>© {currentYear} AgênciaIA. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">Termos</a>
            <a href="#" className="hover:text-background transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
