import { Divider, Typography } from '@mui/material';
import { HeaderHeight } from '../variables/variables';

const LegalInfo = () => {
  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
      }}>
      <div className="container mx-auto py-12">
        <div className="mb-6">
          <Typography variant="h4" align="center">
            ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ
          </Typography>
          <Divider />
        </div>
        <div className="mb-6">
          <Typography variant="h6" sx={{ marginBottom: '16px' }}>
            ООО «Хайтера»
          </Typography>
          <ul>
            <li>ОГРН: 1167746456448</li>
            <li>ИНН: 7726377031</li>
            <li>КПП: 770501001</li>
            <li>Юридический адрес: 115054 РФ, г.Москва, Павелецкая площадь, д.2 стр.2, 15 этаж.</li>
          </ul>
        </div>
        <div className="mb-6">
          <Typography variant="h6" sx={{ marginBottom: '16px' }}>
            Время работы интернет-магазина:
          </Typography>
          <ul>
            <li>Понедельник-четверг - 9:00-18:00</li>
            <li>Пятница - 9:00-17:00</li>
            <li className=" font-bold">Сб, Вс - выходной</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LegalInfo;
