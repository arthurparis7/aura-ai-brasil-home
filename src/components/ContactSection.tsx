
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="section-spacing bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Pronto para revolucionar seu negócio?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Entre em contato e descubra como a inteligência artificial pode transformar sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="minimal-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Consultoria gratuita
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Nome completo</Label>
                  <Input id="name" placeholder="Seu nome" className="border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium">Empresa</Label>
                  <Input id="company" placeholder="Nome da empresa" className="border-border" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" className="border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">WhatsApp</Label>
                  <Input id="phone" placeholder="(11) 99999-9999" className="border-border" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">Descreva seu projeto</Label>
                <Textarea 
                  id="message" 
                  placeholder="Conte-nos sobre seu negócio e como podemos ajudar..."
                  className="min-h-[100px] border-border"
                />
              </div>

              <Button className="w-full bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium">
                Enviar solicitação
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: Phone, title: 'Telefone', info: '(11) 99999-9999' },
              { icon: Mail, title: 'E-mail', info: 'contato@agenciaai.com.br' },
              { icon: MapPin, title: 'Localização', info: 'São Paulo, SP - Brasil' }
            ].map((contact, index) => (
              <Card key={index} className="minimal-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <contact.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{contact.title}</h3>
                      <p className="text-muted-foreground text-sm">{contact.info}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="minimal-card bg-foreground text-background">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">
                  Atendimento 24/7 com IA
                </h3>
                <p className="mb-6 opacity-90 text-sm">
                  Nossa IA está disponível para tirar dúvidas e agendar reuniões a qualquer momento.
                </p>
                <Button 
                  variant="secondary" 
                  className="bg-background text-foreground hover:bg-background/90 font-medium"
                >
                  Conversar agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
