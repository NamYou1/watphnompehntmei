import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";

import Carousel from "./Carousel";
import Activities from "./Card/Activities.jsx";
import Structure from "./Structure";
import Founder from "./Founder";
import Article from "./Article.jsx";

const Home = () => {
  const { t, language } = useTranslation();

  const stats = [
    {
      value: "2017",
      labelEn: "Founded",
      labelKm: "ឆ្នាំបង្កើត",
    },
    {
      value: "12+",
      labelEn: "Monks Residing",
      labelKm: "ព្រះសង្ឃ",
    },
    {
      value: "100+",
      labelEn: "Supporters",
      labelKm: "អ្នកគាំទ្រ",
    },
    {
      value: "8+",
      labelEn: "Annual Festivals",
      labelKm: "ពិធីបុណ្យប្រចាំឆ្នាំ",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200">

      <Carousel />

      {/* Stats Bar */}
      <section className="mx-4 md:mx-8 lg:mx-16 my-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-base-100 rounded-xl shadow-sm border border-base-200 flex flex-col items-center justify-center py-4 px-3 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</span>
              <span className="text-xs md:text-sm text-base-content/60 mt-1 text-center">
                {language === 'en' ? stat.labelEn : stat.labelKm}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-4 md:mx-8 lg:mx-16 mt-4 mb-8">
        <div className="rounded-2xl bg-gradient-to-r from-amber-100 via-orange-50 to-lime-100 p-6 md:p-8 shadow-md border border-amber-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-amber-900">{t('support.title')}</h2>
              <p className="text-amber-800 mt-2">{t('support.subtitle')}</p>
            </div>
            <div className="flex gap-3">
              <Link to="/contact" className="btn btn-primary">{t('support.contactTitle')}</Link>
              <Link to="/purpose" className="btn btn-outline border-amber-500 text-amber-700 hover:bg-amber-100">{t('nav.purpose')}</Link>
            </div>
          </div>
        </div>
      </section>
      {/* <CardPhoto /> */}
      <Activities />
      <Article />
      <Founder />
      <Structure />
    </div>
  );
};

export default Home;
