import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export function SEO({
  title = 'Интернет-магазин товаров для рукоделия | Всё для творчества и хобби',
  description = 'Широкий выбор товаров для рукоделия: наборы для вышивания, пряжа, инструменты для валяния и бисероплетения. Доставка по всей России.',
  keywords = 'биисэр,рукоделие,пряжа,товары для рукоделия,наборы для вышивки,товары для хобби,фурнитура для шитья,интернет-магазин творчество,всё для рукоделия,магазин пряжи,материалы для творчества,бисер,бусина,бисер чешский,вышивание,валяние,бисероплетение,хобби,творчество',
  image = 'https://images.unsplash.com/photo-1584661156681-540e80a161d3?auto=format&fit=crop&w=800&q=80'
}: SEOProps) {
  const siteUrl = window.location.origin;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Russian" />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
}