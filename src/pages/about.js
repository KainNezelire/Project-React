import React from 'react';

const About = () => (
    <div className='bg-sky-950'>
    <div className="flex flex-row justify-center gap-20 p-40">
      <div className="col-span-1 row-span-1">
        <div className="md:max-w-sm">
          <p className="text-2xl font-bold mb-4 text-white">Наша миссия</p>
          <p className="text-gray-700 text-white opacity-50">
          Приветствуем вас на странице "О нас"! Мы - команда профессионалов, объединенных общей целью помощи вам в поиске идеального сотрудника или идеальной рабочей позиции. Наша платформа – не просто ресурс для поиска работы или кандидатов, это целый мир возможностей и потенциала.
          </p>
        </div>
      </div>

      <div className="col-span-2 row-span-1 ">
        <div className="md:max-w-sm">
          <p className="text-2xl font-bold mb-4 text-white">Мотив</p>
          <p className="text-gray-700 text-white opacity-50">
            Мы верим, что ключ к успеху любого бизнеса – в правильном подборе персонала. Наша миссия заключается в том,
            чтобы облегчить этот процесс, сделать его эффективным и удовлетворительным для всех сторон.
          </p>
      </div>
      </div>

      <div className="col-span-2 row-span-1">
        <div className="md:max-w-sm">
          <p className="text-2xl font-bold mb-4 text-white">Почему мы?</p>
          <ul className="text-gray-700 list-disc pl-4 text-white opacity-50">
            <li>Опыт и профессионализм.</li>
            <li>Инновации и технологии.</li>
            <li>Широкая сеть контактов.</li>
            <li>Индивидуальный подход.</li>
            <li>Прозрачность и честность.</li>
          </ul>
        </div>
      </div>

      <div className="col-span-1 row-span-4">
        <div className="md:max-w-sm">
          <p className="text-2xl font-bold mb-4 text-white">Наш подход</p>
          <p className="text-gray-700 text-white opacity-50">
            Мы не просто предоставляем платформу для поиска вакансий или кандидатов. Мы предлагаем комплексное решение,
            включающее в себя анализ потребностей, персонализированный подбор, обучение и развитие сотрудников. Наш подход
            ориентирован на долгосрочное партнерство и успех наших клиентов.
          </p>
        </div>
      </div>
    </div>
    </div>
);

export default About;
