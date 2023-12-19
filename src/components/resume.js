import React, { useState } from 'react';

const ResumeForm = () => {
  const [resumeData, setResumeData] = useState({
    first_name: '',
    last_name: '',
    mid_name: '',
    middle_name: '',
    phone: '',
    email: '',
    job_search_status: '',
    when_can_start_work_status: '',
  });

  const [postedData, setPostedData] = useState(null);
  const [isDataDeleted, setIsDataDeleted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostedData(resumeData);
    setIsDataDeleted(false);
  };

  const handleDelete = () => {
    setPostedData(null);
    setIsDataDeleted(true);
  };

  return (
    <div className="flex flex-col items-center bg-sky-950">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center p-20 text-white">
        <label className="hidden">Имя:</label>
        <input
          type="text"
          name="first_name"
          value={resumeData.first_name}
          placeholder="Имя"
          className="bg-sky-950 border-b rounded"
          onChange={handleChange}
        />

        <label className="hidden">Фамилия:</label>
        <input
          type="text"
          name="last_name"
          value={resumeData.last_name}
          placeholder="Фамилия"
          className="bg-sky-950 border-b rounded"
          onChange={handleChange}
        />

        <label className="hidden">Отчество (если есть):</label>
        <input
          type="text"
          name="mid_name"
          value={resumeData.mid_name}
          placeholder="Отчество (если есть)"
          className="bg-sky-950 border-b rounded"
          onChange={handleChange}
        />

        <label className="hidden">Второе отчество (если есть):</label>
        <input
          type="text"
          name="middle_name"
          value={resumeData.middle_name}
          placeholder="Второе отчество (если есть)"
          className="bg-sky-950 border-b rounded"
          onChange={handleChange}
        />

        <label className="hidden">Телефон:</label>
        <input
          type="tel"
          name="phone"
          value={resumeData.phone}
          placeholder="Телефон"
          className="bg-sky-950 border-b rounded"
          onChange={handleChange}
        />

        <label className="hidden">Email:</label>
        <input
          type="email"
          name="email"
          value={resumeData.email}
          placeholder="Email"
          className="bg-sky-950 border-b rounded"
          onChange={handleChange}
        />

        <label className="hidden">Статус поиска работы:</label>
        <select
          name="job_search_status"
          value={resumeData.job_search_status}
          placeholder="Выберите статус"
          className="bg-sky-950 border-blue-300 rounded"
          onChange={handleChange}
        >
          <option value="">Выберите статус</option>
          <option value="active_search">В активном поиске работы</option>
        </select>

        <label className="hidden">Готовность начать работу:</label>
        <select
          className="bg-sky-950 border-blue-300 rounded"
          name="when_can_start_work_status"
          value={resumeData.when_can_start_work_status}
          placeholder="Выберите готовность"
          onChange={handleChange}
        >
          <option value="">Выберите готовность</option>
          <option value="can_start_tomorrow">Готов выйти завтра</option>
        </select>

        <button type="submit">Сохранить резюме</button>
      </form>

      {postedData && !isDataDeleted && (
        <div className="mt-4 text-xl p-20 text-white">
          <h2>Поставленные данные:</h2>
          <ul>
            {Object.entries(postedData).map(([key, value]) => (
              <li key={key} className='border-b'>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
          <button onClick={handleDelete}>Удалить данные</button>
        </div>
      )}

      {isDataDeleted && (
        <div className="mt-4 text-xl p-20 text-white">
          <p>Данные удалены.</p>
        </div>
      )}
    </div>
  );
};

export default ResumeForm;
