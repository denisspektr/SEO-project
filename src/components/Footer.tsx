import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a href="tel:+79001234567" className="flex items-center space-x-2 hover:text-rose-400">
                <Phone className="h-5 w-5" />
                <span>+7 (900) 123-45-67</span>
              </a>
              <a href="mailto:info@rukodelie.ru" className="flex items-center space-x-2 hover:text-rose-400">
                <Mail className="h-5 w-5" />
                <span>info@rukodelie.ru</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Адрес</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 mt-1" />
              <span>ул. Пример, д. 10<br />Якутск, 123456</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Социальные сети</h3>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-rose-400">
              <Instagram className="h-5 w-5" />
              <span>@rukodelie.store</span>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© 2025 Рукоделие. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}