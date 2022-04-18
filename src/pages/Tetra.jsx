import { Container, Typography } from '@mui/material';
import { ReactComponent as TetraIcon } from '../assets/icons/tetra.svg';
import Advantage from '../components/Advantage';
import SectionCard from '../components/SectionCard';

const Tetra = () => {
  return (
    <div className="tetra">
      <div className="tetra__hero flex flex-col items-center justify-center space-y-8 min-h-screen bg-center bg-no-repeat bg-cover">
        <Typography variant="h4" color="white">
          TETRA СИСТЕМЫ И ТЕРМИНАЛЫ
        </Typography>
        <TetraIcon height="60" fill="white" />
      </div>
      <div className="about py-12 text-center">
        <Container maxWidth="md" className="mb-8">
          <Typography
            sx={{
              marginBottom: '16px',
            }}
            variant="h5"
            className="text-green-800">
            TETRA системы и терминалы
          </Typography>
          <Typography variant="body1">
            Мы можем предоставить полную инфраструктуру базовых станций, универсальные терминалы,
            протоколы, индивидуальные приложения и качественное обслуживание. Мы установили хорошие
            отношения сотрудничества с клиентами из всех отраслей промышленности. Благодаря
            постоянным инвестициям в технологии TETRA и LTE мы предоставляем серию решений для
            узкополосной и широкополосной конвергенции, чтобы удовлетворить растущие потребности в
            передаче голоса и данных.
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
            <Advantage title="Качество, на которое можно положиться">
              Одним из достоинств системы TETRA является надежность конструкции, защита от
              избыточности и отказоустойчивость системы. Целью резервной защиты является отсутствие
              единой точки отказа в работе системы. Существует 3 уровня защиты: резервирование BS,
              резервирование центрального коммутатора и резервирование приложений. Устойчивость
              системы в основном отражается в устойчивости к бедствиям. Система TETRA обеспечивает
              высокую устойчивость к бедствиям, главным образом за счет гибкой архитектуры и
              полнофункционального аварийного режима
            </Advantage>
            <Advantage title="Передовые технологии">
              Увеличение дальности радиосвязи до 20% Качественная передача и минимум помех на
              соседних каналах Приём даже очень слабых сигналов, что позволяет увеличить дистанцию
              радиосвязи
            </Advantage>
          </div>
          <div className="flex space-x-8">
            <Advantage title="Качественный звук">
              Чистый звук даже в шумной обстановке Дуплексный вызов – без проблем Яркий звук в
              шумной и в обычной обстановке Автоматическое усиление, уверенность в комфортном
              звучании
            </Advantage>
            <Advantage title="Длительное время работы радиостанций">
              В нашем оборудовании снижена потребляемая мощность и увеличено время работы от батареи
              Увеличенная емкость аккумулятора радиостанции Интеллектуальная технология
              энергосбережения
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
            Разделы каталога TETRA систем и терминалов
          </Typography>
          <div className="flex justify-between">
            <SectionCard
              linkTo="/test"
              imgLink="https://www.hytera.ru/upload/resize_cache/webp/iblock/80c/80c85bdea2ed2f58dade3d71c61acffd.webp"
              alt="Tetra Systems"
              title="TETRA системы"
            />
            <SectionCard
              linkTo="/test"
              imgLink="https://www.hytera.ru/upload/resize_cache/webp/iblock/dc8/dc8c79831d6c6fc8e3600215f3ded547.webp"
              alt="Systems"
              title="Система двунаправленных усилителей радиосигнала BDA"
            />
            <SectionCard
              linkTo="/test"
              imgLink="https://www.hytera.ru/upload/resize_cache/webp/iblock/6b1/6b1a08e276dfc7aba6addb8aa175a661.webp"
              alt="TETRA терминалы"
              title="TETRA терминалы"
            />
          </div>
        </Container>
      </div>
      <div className="information"></div>
    </div>
  );
};

export default Tetra;
