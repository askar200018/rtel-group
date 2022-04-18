import { Container, Typography } from '@mui/material';
import { ReactComponent as PocIcon } from '../assets/icons/poc.svg';
import Advantage from '../components/Advantage';
import SectionCard from '../components/SectionCard';

const PocSolutions = () => {
  return (
    <div className="poc">
      <div className="poc__hero flex flex-col items-center justify-center space-y-8 min-h-screen bg-center bg-no-repeat bg-cover">
        <Container maxWidth="sm">
          <Typography variant="h4" color="white" align="center">
            POC-РЕШЕНИЯ ДЛЯ ОПЕРАТИВНОЙ СВЯЗИ ПОВЕРХ СЕТИ СОТОВОГО ОПЕРАТОРА
          </Typography>
        </Container>
        <PocIcon height="60" fill="white" />
      </div>
      <div className="about py-12 text-center">
        <Container maxWidth="md" className="mb-8">
          <Typography
            sx={{
              marginBottom: '16px',
            }}
            variant="h5"
            className="text-green-800">
            PoC-решения для оперативной связи поверх сети сотового оператора
          </Typography>
          <Typography variant="body1">
            Hytera предлагает универсальное решение PoC, состоящее из PoC-терминалов, мобильных
            приложений, а также платформ диспетчеризации и управления. Это решение предоставляет
            разносторонние услуги, включая мгновенную связь «один-к-одному» и «один-ко-многим»,
            полнодуплексные голосовые и видеозвонки, диспетчеризацию на основе карты и обмен
            мгновенными сообщениями по общедоступным сетям. Применимый к различным сценариям, он
            отличается низкой стоимостью, высокой безопасностью, простотой развертывания и
            повышенной надежностью. Благодаря стандартным интерфейсам API, PoC-терминалы от Hytera
            открыты для настройки сторонними приложениями и платформами.
          </Typography>
        </Container>
        <div className="flex items-center justify-center">
          <img
            src="https://www.hytera.ru/upload/resize_cache/webp/uf/61a/61a64f43b24ad58044787cfccc908168.webp"
            alt="Tetra Image"
          />
        </div>
      </div>
      <div className="advantages py-12">
        <Container>
          <Typography
            sx={{
              marginBottom: '16px',
              textAlign: 'center',
            }}
            variant="h5"
            className="text-green-800">
            Преимущества
          </Typography>
          <div className="flex space-x-8 mb-8">
            <Advantage title="PoC использует существующие сотовые сети и сети WLAN">
              Традиционные инвестиции в радиочастотный спектр не требуются
            </Advantage>
            <Advantage title="Отсутствие инвестиций в дорогостоящую инфраструктуру радиосети">
              Существующие сотовые сети и сети WLAN обеспечивают мгновенную общенациональную связь
              без необходимости создания инфраструктуры
            </Advantage>
          </div>
          <div className="flex space-x-8">
            <Advantage title="Разнообразные услуги видео и данных">
              Решение PoC может предоставить вам не только голосовые вызовы, но также видеозвонки,
              мультимедийные сообщения, отправку видео и многое другое
            </Advantage>
            <Advantage title="Надежный и прочный">
              Выдерживает пребывание в суровых условиях, даже после того, как PoC-терминал будет
              погружен в воду на глубину 1 метр не менее 30 минут, он все еще может нормально
              работать
            </Advantage>
          </div>
        </Container>
      </div>
      <div className="section py-12 bg-gray-100">
        <Container>
          <Typography
            sx={{
              marginBottom: '32px',
            }}
            variant="h5"
            align="center"
            className="text-gray-600">
            Разделы каталога PoC-решений для оперативной связи поверх сети сотового оператора
          </Typography>
          <div className="flex justify-between">
            <SectionCard
              linkTo="/test"
              imgLink="https://www.hytera.ru/upload/resize_cache/webp/upload/iblock/f69/f696f6088e6741eac57666ab3741398a.webp"
              alt="Tetra Systems"
              title="Системы PoC"
            />
            <SectionCard
              linkTo="/test"
              imgLink="https://www.hytera.ru/upload/resize_cache/webp/upload/iblock/5be/5be3867e350f7ed362bd0c3b554d3b1b.webp"
              alt="Systems"
              title="Терминалы РоС"
            />
            <SectionCard
              linkTo="/test"
              imgLink="https://www.hytera.ru/upload/resize_cache/webp/poc/Hytalk/img/wx.webp"
              alt="TETRA терминалы"
              title="Hytera Hytalk"
            />
          </div>
        </Container>
      </div>
      <div className="information"></div>
    </div>
  );
};

export default PocSolutions;
