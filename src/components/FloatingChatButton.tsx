
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, X } from 'lucide-react';

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 p-6 bg-background rounded-lg shadow-xl border border-border max-w-sm animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-sm">🤖 Assistente IA</h3>
            <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Olá! Sou a IA da AgênciaIA. Como posso ajudar você hoje?
          </p>
          <Button 
            size="sm" 
            className="w-full bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium"
          >
            Iniciar conversa
          </Button>
        </div>
      )}
      
      <Button
        size="lg"
        className="w-12 h-12 rounded-full bg-foreground text-background shadow-lg hover:shadow-xl transition-all hover:scale-105"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquare className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default FloatingChatButton;
