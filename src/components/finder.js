import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

import Main from './video';
import Middle from './middle';
import ResumeForm from './resume';

const API_URL = 'https://api.hh.ru/vacancies';

const VacancyComponent = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedVacancies, setExpandedVacancies] = useState({});
  const [cityFilter, setCityFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}?per_page=50&page=${currentPage}`);
        setData(response.data);
        const initialExpandedVacancies = {};
        response.data.items.forEach((vacancy) => {
          initialExpandedVacancies[vacancy.id] = false;
        });
        setExpandedVacancies(initialExpandedVacancies);
        window.scrollTo({ top: 1600, behavior: 'smooth' });
      } catch (error) {
        console.error('Ошибка при получении данных', error);
      }
    };

    fetchData();
  }, [currentPage, cityFilter, experienceFilter, activeFilter]);

  const handlePageChange = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (direction === 'next') {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const toggleDescription = (vacancyId) => {
    setExpandedVacancies((prevExpanded) => ({
      ...prevExpanded,
      [vacancyId]: !prevExpanded[vacancyId],
    }));
  };

  const handleCityFilterChange = (event) => {
    setCityFilter(event.target.value);
  };

  const handleExperienceFilterChange = (event) => {
    setExperienceFilter(event.target.value);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const applyFilters = (vacancies) => {
    return vacancies.filter((vacancy) => {
      const cityMatch = !cityFilter || (vacancy.area && vacancy.area.name.toLowerCase().includes(cityFilter.toLowerCase()));
      const experienceMatch = !experienceFilter || (vacancy.experience && vacancy.experience.name.toLowerCase().includes(experienceFilter.toLowerCase()));
      const vacancyMatch = !activeFilter || vacancy.name.toLowerCase().includes(activeFilter.toLowerCase());

      return cityMatch && experienceMatch && vacancyMatch;
    });
  };

  const filteredData = data ? { ...data, items: applyFilters(data.items) } : null;

  return (
    <div className="bg-cyan-900 text-white p-6 md:p-12 lg:p-24">
      {filteredData && (
        <div>
          <div className="flex items-center mb-4">
            <label htmlFor="cityFilter" className="mr-2 text-white"></label>
            <input
              type="text"
              id="cityFilter"
              value={cityFilter}
              placeholder='Фильтр по городу'
              onChange={handleCityFilterChange}
              className="border p-1 text-black rounded"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="experienceFilter" className="mr-2 text-white"></label>
            <input
              type="text"
              id="experienceFilter"
              value={experienceFilter}
              placeholder='Фильтр по стажу'
              onChange={handleExperienceFilterChange}
              className="border p-1 text-black rounded"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="vacancyFilter" className="mr-2 text-white"></label>
            <input
              type="text"
              id="vacancyFilter"
              value={activeFilter || ''}
              placeholder='Фильтр по вакансии'
              onChange={(e) => handleFilterChange(e.target.value)}
              className="border p-1 text-black rounded"
            />
          </div>
          <h2 className="text-3xl font-bold mb-4">Вакансии (Страница {currentPage}):</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">


            {filteredData.items.map((vacancy) => (
              <div key={vacancy.id} className="p-8 border border-white rounded-md">
                <h3 className="text-xl font-bold mb-2">{vacancy.name}</h3>
                <p><strong>Зарплата:</strong> {vacancy.salary ? vacancy.salary.from : 'Не указано'}</p>
                <button
                  onClick={() => toggleDescription(vacancy.id)}
                  className="bg-blue-500 text-white p-2 rounded-md mt-2"
                >
                  {expandedVacancies[vacancy.id] ? 'Скрыть дополнительную информацию' : 'Показать дополнительную информацию'}
                </button>
                <div
                  className={`mt-4 transition-max-height duration-500 ease-in-out overflow-hidden ${
                    expandedVacancies[vacancy.id] ? 'max-h-screen' : 'max-h-0'
                  }`}
                >
                  <p className="mt-2">
                    <strong>Местоположение:</strong> {vacancy.area ? vacancy.area.name : 'Не указано'}
                  </p>
                  <p><strong>Тип занятости:</strong> {vacancy.employment ? vacancy.employment.name : 'Не указано'}</p>
                  <p><strong>Опыт работы:</strong> {vacancy.experience ? vacancy.experience.name : 'Не указано'}</p>
                  <p><strong>Дата создания:</strong> {new Date(vacancy.created_at).toLocaleString()}</p>
                  {vacancy.address && (
                    <div>
                      <p><strong>Точное местоположение:</strong> {vacancy.address.city}, {vacancy.address.street}, {vacancy.address.building}</p>
                      <p><strong>Описание местоположения:</strong> {vacancy.address.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-8">
            <button
              onClick={() => handlePageChange('prev')}
              disabled={currentPage === 1}
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Предыдущая страница
            </button>
            <button
              onClick={() => handlePageChange('next')}
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Следующая страница
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Vacancy = () => (
  <div>
    <VacancyComponent />
  </div>
);

export default Vacancy;
