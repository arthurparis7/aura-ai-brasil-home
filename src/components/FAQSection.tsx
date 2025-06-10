
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Quanto tempo leva para implementar uma solução de IA?',
      answer: 'Dependendo da complexidade, nossas soluções podem estar funcionando entre 24 a 72 horas. Para projetos mais simples como chatbots básicos, conseguimos entregar em até 48 horas.'
    },
    {
      question: 'Vocês atendem pequenas empresas ou só grandes corporações?',
      answer: 'Atendemos desde profissionais autônomos até grandes corporações. Temos pacotes específicos para cada tipo de negócio, sempre com foco na viabilidade e retorno do investimento.'
    },
    {
      question: 'As soluções de IA realmente substituem funcionários?',
      answer: 'Nossas soluções são projetadas para otimizar e automatizar processos, liberando sua equipe para atividades mais estratégicas. O objetivo é aumentar a produtividade, não substituir pessoas.'
    },
    {
      question: 'Como funciona o suporte técnico após a implementação?',
      answer: 'Oferecemos suporte 24/7 através de nossos próprios assistentes de IA, além de uma equipe técnica especializada para casos mais complexos. Também fornecemos treinamento completo para sua equipe.'
    },
    {
      question: 'É possível integrar com sistemas que já utilizamos?',
      answer: 'Sim! Nossas soluções são desenvolvidas para integrar facilmente com CRMs, ERPs, WhatsApp, redes sociais e praticamente qualquer sistema que sua empresa já utilize.'
    },
    {
      question: 'Qual o investimento necessário para começar?',
      answer: 'Temos soluções a partir de R$ 497/mês. O valor varia conforme a complexidade e quantidade de automações necessárias. Oferecemos uma consultoria gratuita para definir a melhor solução para seu orçamento.'
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Perguntas</span> frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossas soluções de inteligência artificial.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
