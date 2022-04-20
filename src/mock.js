export const CATEGORIES = [
  {
    name: 'TETRA системы',
    id: 'tetra-systems',
    img: 'https://www.hytera.ru/upload/resize_cache/webp/iblock/80c/80c85bdea2ed2f58dade3d71c61acffd.webp',
    products: [
      {
        id: 'dib-r5',
        name: 'DIB-R5',
        subtitle: 'Базовая станция',
        img: 'https://www.hytera.ru/upload/resize_cache/webp/iblock/442/4420c94da17b2028207097c72886f5b6.webp',
        featureImg:
          'https://www.hytera.ru/upload/corvax_iw/3_368ee5b76755512884cedc9ef29215e0.webp',
        description: {
          title: 'Форм-фактор',
          body: 'Конструкция станции модульная и аппаратные компоненты могут заменяться или дополняться в рабочем режиме, при этом возможно резервирование отдельных модулей (контроллера, приёмопередатчиков, модуля питания)',
        },
        features: [
          'DIB-R5 является компонентом системы ACCESSNET-T IP и обеспечивает надежную радиосвязь в своей зоне радиопокрытия. DIB-R5 поддерживает TETRA Release 2 и TEDS',
          'DIB-R5 предназначена для использования в помещении и выпускается в двух вариантах исполнения DIB-R5 advanced и DIB-R5 compact',
          'DIB-R5 advanced поддерживает до 8-ми несущих TETRA и состоит в зависимости от количества несущих из одного или двух шкафов. В каждом шкафу может быть установлено до четырех канальных блоков приёмопередатчиков. Таким образом DIB-R5 advanced обеспечивает для абонентов максимум 32 логических канала одновременного использования',
          'DIB-R5 compact поддерживает до 2-х несущих TETRA и подходит для компактного монтажа в 19-дюймовый шкаф',
          'Конструкция станции модульная и аппаратные компоненты могут заменяться или дополняться в рабочем режиме, при этом возможно резервирование отдельных модулей (контроллера, приёмопередатчиков, модуля питания)',
          'DIB-R5 поддерживает спутниковую синхронизацию от ГЛОНАСС, GPS, Galileo, а также синхронизацию от сети IP, PTP, что делает возможным работу без использования GPS даже под землей',
        ],
        characteristics: [
          {
            key: 'Выходная мощность на антенном разъеме',
            value: '25 Вт при модуляции π/4 DQPSK, 10 Вт при модуляции QAM',
          },
          {
            key: 'Чувствительность приемника (статическая)',
            value: '–119 дБм (BER 4 %)',
          },
          {
            key: 'Чувствительность приемника (динамическая)',
            value:
              '–113 дБм (TU50 (TCH 7.2, BER 4 %)), –110 дБм (класс B), –108 дБм (класс A) при модуляции π / 4DQPSK',
          },
          {
            key: 'Выходная мощность, на антенном выходе',
            value: '25 Вт (44 дБм)',
          },
          {
            key: 'Режим работы',
            value: 'дуплекс',
          },
          {
            key: 'Антенная конфигурация',
            value: 'TX+RX; TX+2RX; TX+3RX, TX/RX; TX/RX+RX; TX/RX+2RX, 1–3 кратное разнесение',
          },
          {
            key: 'Тип антенного комбайнера',
            value: 'гибридный комбайнер резонансный комбайнер',
          },
          {
            key: 'Антенный разъем TX/RX',
            value: '7/16 female',
          },
        ],
      },
      {
        id: 'dib-r5-outdoor',
        name: 'DIB-R5 Outdoor',
        subtitle: 'Базовая станция',
        img: 'https://www.hytera.ru/upload/resize_cache/webp/iblock/2de/2def90481557b8259248991655dbd9a2.webp',
      },
      {
        id: 'ipn',
        name: 'IPN',
        subtitle: 'Транкинговый коммутатор  TETRA',
        img: 'https://www.hytera.ru/upload/resize_cache/webp/iblock/043/043197a2b79870b7148e7aa685fea956.webp',
      },
      {
        id: 'dvrs',
        name: 'DVRS',
        subtitle: 'Система записи транкинговых переговоров',
        img: 'https://www.hytera.ru/upload/resize_cache/webp/iblock/4bb/4bb3d82ea400c258be520ddc3bc0faf5.webp',
      },
      {
        id: 'nms',
        name: 'NMS',
        subtitle: 'Система управления оборудованием TETRA',
        img: 'https://www.hytera.ru/upload/resize_cache/webp/iblock/39c/39cc4183650704331a9fc247851bf0c9.webp',
      },
    ],
  },
];
