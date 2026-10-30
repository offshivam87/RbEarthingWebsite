'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronRight, CheckCircle2 } from 'lucide-react';
import { productCategories } from '@/lib/productData';

// ─── Sidebar Category Item ──────────────────────────────────────────────────
function SidebarItem({ category, isActive, activeProductSlug, onProductClick }) {
  const [expanded, setExpanded] = useState(isActive);

  useEffect(() => {
    if (isActive) setExpanded(true);
  }, [isActive]);

  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium transition-colors cursor-pointer ${isActive
          ? 'text-[#00a2e8] bg-blue-50/50'
          : 'text-slate-700 hover:text-[#00a2e8] hover:bg-slate-50/70'
          }`}
      >
        <span className="flex items-center gap-2">
          {isActive && (
            <span className="w-[3px] h-5 bg-[#00a2e8] rounded-full shrink-0" />
          )}
          {category.name}
        </span>
        <ChevronRight
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${expanded ? 'rotate-90' : ''
            }`}
        />
      </button>

      {/* Sub-products */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="pl-6 pr-3 pb-2 space-y-0.5">
          {category.products.map((product) => (
            <button
              key={product.slug}
              type="button"
              onClick={() => onProductClick(product.slug)}
              className={`w-full text-left block px-3 py-2 rounded-md text-[13px] transition-colors cursor-pointer ${activeProductSlug === product.slug
                ? 'text-[#00a2e8] font-semibold bg-blue-50/80'
                : 'text-slate-500 hover:text-[#00a2e8] hover:bg-slate-50'
                }`}
            >
              {product.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Accordion Section ───────────────────────────────────────────────────────
function AccordionSection({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between py-4 px-1 text-left cursor-pointer group"
      >
        <h3 className="text-base font-semibold text-[#00a2e8] group-hover:text-[#00a2e8] transition-colors">
          {title}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180' : ''
            }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[600px] opacity-100 pb-5' : 'max-h-0 opacity-0'
          }`}
      >
        {children}
      </div>
    </div>
  );
}

// ─── Main Product Page Component ─────────────────────────────────────────────
export default function ProductPageClient({ initialSlug }) {
  const router = useRouter();
  const [activeSlug, setActiveSlug] = useState(initialSlug);
  const [activeTab, setActiveTab] = useState('details');

  // Find the active product
  let activeProduct = null;
  let activeCategoryId = null;
  for (const cat of productCategories) {
    const found = cat.products.find((p) => p.slug === activeSlug);
    if (found) {
      activeProduct = found;
      activeCategoryId = cat.id;
      break;
    }
  }

  // If product not found, use first product
  if (!activeProduct) {
    activeProduct = productCategories[0].products[0];
    activeCategoryId = productCategories[0].id;
  }

  const handleProductClick = (slug) => {
    setActiveSlug(slug);
    setActiveTab('details');
    router.push(`/products/${slug}`, { scroll: false });
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* ─── Top Section: Sidebar + Product Hero ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden sticky top-32">
              {/* Sidebar Header */}
              <div className="bg-gradient-to-r from-[#00a2e8] to-[#00a2e8] px-4 py-3">
                <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">

                  Earthing & Lightning
                </span>
              </div>

              {/* Category List */}
              <div className="divide-y divide-slate-100">
                {productCategories.map((cat) => (
                  <SidebarItem
                    key={cat.id}
                    category={cat}
                    isActive={activeCategoryId === cat.id}
                    activeProductSlug={activeSlug}
                    onProductClick={handleProductClick}
                  />
                ))}
              </div>
            </div>
          </aside>

          {/* Product Hero Section */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
              {/* Product Image */}
              <div className="md:col-span-4">
                <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                  <div className="relative w-full aspect-[3/4] bg-gradient-to-b from-slate-50 to-white rounded-lg overflow-hidden">
                    <Image
                      src={activeProduct.image}
                      alt={activeProduct.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-2"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="md:col-span-8 flex flex-col justify-center">
                <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-[#00a2e8] leading-tight mb-3">
                  {activeProduct.name}
                </h1>

                <p className="text-sm italic text-slate-500 mb-4">
                  {activeProduct.tagline}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {activeProduct.description}
                </p>

                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {activeProduct.additionalInfo}
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-fit px-7 py-3 rounded-lg bg-gradient-to-r from-[#00a2e8] to-[#00a2e8] text-white text-sm font-semibold shadow-md hover:shadow-lg hover:from-[#0070a0] hover:to-[#0070a0] active:scale-[0.98] transition-all duration-200"
                >
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Bottom Section: Accordions + Specs ─── */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Accordion Sections */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-6">
              {/* Advantages */}
              <AccordionSection title="Advantages" defaultOpen={true}>
                <ul className="space-y-2.5 pl-1">
                  {activeProduct.advantages?.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionSection>

              {/* Industries */}
              <AccordionSection title="Industries">
                <ul className="space-y-2.5 pl-1">
                  {activeProduct.industries?.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionSection>

              {/* Benefits */}
              <AccordionSection title={`Benefits of ${activeProduct.name}`}>
                <ul className="space-y-2.5 pl-1">
                  {activeProduct.benefits?.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionSection>

              {/* Applications */}
              <AccordionSection title="Applications">
                <ul className="space-y-2.5 pl-1">
                  {activeProduct.applications?.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionSection>
            </div>
          </div>

          {/* Right: Tabbed Content (Product Details + Specifications) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Tab Headers */}
              <div className="flex border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setActiveTab('details')}
                  className={`px-5 py-3.5 text-sm font-semibold transition-colors cursor-pointer relative ${activeTab === 'details'
                    ? 'text-[#00a2e8] bg-white'
                    : 'text-slate-500 hover:text-slate-700 bg-slate-50/50'
                    }`}
                >
                  Product Details
                  {activeTab === 'details' && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00a2e8]" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('specifications')}
                  className={`px-5 py-3.5 text-sm font-semibold transition-colors cursor-pointer relative ${activeTab === 'specifications'
                    ? 'text-[#00a2e8] bg-white'
                    : 'text-slate-500 hover:text-slate-700 bg-slate-50/50'
                    }`}
                >
                  Specifications
                  {activeTab === 'specifications' && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00a2e8]" />
                  )}
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-5 sm:p-6">
                {activeTab === 'details' && (
                  <div className="animate-in fade-in duration-300">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {activeProduct.productDetails}
                    </p>
                  </div>
                )}

                {activeTab === 'specifications' && activeProduct.specifications && (
                  <div className="animate-in fade-in duration-300 overflow-x-auto -mx-2">
                    <table className="w-full text-left text-sm min-w-[600px]">
                      <thead>
                        <tr className="border-b-2 border-slate-200">
                          {activeProduct.specifications.headers.map((h, i) => (
                            <th
                              key={i}
                              className="px-3 py-3 text-xs font-bold text-[#00a2e8] uppercase tracking-wide whitespace-nowrap"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {activeProduct.specifications.rows.map((row, ri) => (
                          <tr
                            key={ri}
                            className={`border-b border-slate-100 transition-colors hover:bg-blue-50/30 ${ri % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'
                              }`}
                          >
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className={`px-3 py-3 whitespace-nowrap ${ci === 0
                                  ? 'font-semibold text-slate-800'
                                  : 'text-slate-600'
                                  }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
