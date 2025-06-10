
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, X } from 'lucide-react';

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 p-4 bg-white rounded-lg shadow-lg border max-w-sm animate-fade-in">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-sm">🤖 Assistente IA</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Olá! Sou a IA da AgênciaIA. Como posso ajudar você hoje?
          </p>
          <Button 
            size="sm" 
            className="w-full gradient-ai text-white hover:opacity-90 transition-opacity"
          >
            Iniciar conversa
          </Button>
        </div>
      )}
      
      <Button
        size="lg"
        className="w-14 h-14 rounded-full gradient-ai text-white shadow-lg hover:shadow-xl transition-all animate-float"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquare className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingChatButton;
