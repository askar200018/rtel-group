import { useTranslation } from 'react-i18next';
import { HeaderHeight } from '../variables/variables';

const Main = () => {
  const { t } = useTranslation();
  return (
    <section
      className="py-8 bg-white"
      style={{
        paddingTop: `${HeaderHeight}px`,
      }}>
      <div className="container max-w-5xl mx-auto m-8">
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-black font-bold leading-none mb-3">
              {t('main.about.title')}
            </h3>
            <p className="text-gray-800 indent-8">{t('main.about.body1')}</p>
            <p className="text-gray-800 mb-8 indent-8">{t('main.about.body2')}</p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img
              src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
              alt="Company Img"
            />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img
              src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
              alt="Company Img"
            />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-black font-bold leading-none mb-3">
                {t('main.partners.title')}
              </h3>
              <p className="text-gray-800 mb-8 indent-8">{t('main.partners.body1')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;