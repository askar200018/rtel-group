import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore/lite';
import { useState } from 'react';
import CharacteristicsTab from '../components/CharacteristicsTab';
import TabPanel from '../components/TabPanel';
import { db } from '../firebase';
import { HeaderHeight } from '../variables/variables';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CATEGORIES = [
  {
    name: 'TETRA системы',
    value: 'tetra-systems',
  },
  {
    name: 'Система двунаправленных усилителей радиосигнала BDA',
    value: 'bda-systems',
  },
  {
    name: 'TETRA терминалы',
    value: 'tetra-terminals',
  },
  {
    name: 'Системы PoC',
    value: 'poc-systems',
  },
  {
    name: 'Терминалы РоС',
    value: 'poc-terminals',
  },
];

const TestPage = () => {
  const [categoryName, setCategoryName] = useState('');
  const [value, setValue] = useState(0);
  const [name, setName] = useState('');
  const [subtitleKz, setSubtitleKz] = useState('');
  const [subtitleRu, setSubtitleRu] = useState('');

  const [img, setImg] = useState('');
  const [featureImg, setFeatureImg] = useState('');

  const [descriptionNameRu, setDescriptionNameRu] = useState('');
  const [descriptionNameKz, setDescriptionNameKz] = useState('');
  const [descriptionKz, setDescriptionKz] = useState('');
  const [descriptionRu, setDescriptionRu] = useState('');

  const [featuresKz, setFeaturesKz] = useState('');
  const [featuresRu, setFeaturesRu] = useState('');

  const [characteristics, setCharacteristics] = useState([]);

  const getSplittedByNewLine = (text) => {
    return text.trim().split('\n');
  };

  const getDescription = () => {
    const descriptionsKz = getSplittedByNewLine(descriptionKz);
    const descriptionsRu = getSplittedByNewLine(descriptionRu);
    return {
      name_kz: descriptionNameKz,
      name_ru: descriptionNameRu,
      rows_kz: descriptionsKz,
      rows_ru: descriptionsRu,
    };
  };

  const getFeatures = () => {
    const rowsKz = getSplittedByNewLine(featuresKz);
    const rowsRu = getSplittedByNewLine(featuresRu);
    return {
      rows_kz: rowsKz,
      rows_ru: rowsRu,
    };
  };

  const getProduct = () => {
    const description = getDescription();
    const feature = getFeatures();

    return {
      id: name.toLowerCase().split(' ').join('-'),
      name,
      subtitle_kz: subtitleKz,
      subtitle_ru: subtitleRu,
      img,
      featureImg,
      description,
      feature,
      characteristics,
    };
  };

  const save = async () => {
    const product = getProduct();
    console.log({ product });

    const categories = collection(db, 'categories');
    const categoryRef = doc(db, 'categories', categoryName);
    const categorySnap = await getDoc(categoryRef);

    if (categorySnap.exists()) {
      const category = categorySnap.data();
      await setDoc(doc(categories, categoryName), {
        ...category,
        products: [...category.products, product],
      });
      console.log('Document data:', category);
    } else {
      console.log('No such document!');
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAddCharacteristic = (newCharacteristic) => {
    setCharacteristics([...characteristics, newCharacteristic]);
  };

  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
      }}>
      <Container maxWidth="md" sx={{ marginY: '16px' }}>
        <Typography variant="h5" align="center" sx={{ marginBottom: '16px' }}>
          Создание продукта
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Основная информация" {...a11yProps(0)} />
            <Tab label="Характеристики" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <div>
            <FormControl fullWidth sx={{ marginBottom: '16px' }}>
              <InputLabel id="demo-multiple-name-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={categoryName}
                label="Age"
                onChange={(e) => setCategoryName(e.target.value)}>
                {CATEGORIES.map((category) => (
                  <MenuItem value={category.value} key={category.value}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              sx={{ marginBottom: '16px' }}
              fullWidth
              label="Название"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex space-x-4">
              <TextareaAutosize
                className="p-2 mb-4 w-full border border-gray-300 rounded-lg"
                aria-label="minimum height"
                minRows={2}
                placeholder="Subtitle"
                style={{ width: '100%' }}
                value={subtitleRu}
                onChange={(e) => setSubtitleRu(e.target.value)}
              />
              <TextareaAutosize
                className="p-2 mb-4 w-full border border-gray-300 rounded-lg"
                aria-label="minimum height"
                minRows={2}
                placeholder="Subtitle"
                style={{ width: '100%' }}
                value={subtitleKz}
                onChange={(e) => setSubtitleKz(e.target.value)}
              />
            </div>

            <div>
              <Typography sx={{ marginBottom: '8px' }}>Картинки</Typography>
              <div className="flex space-x-4">
                <TextField
                  sx={{ marginBottom: '16px' }}
                  fullWidth
                  label="Img"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                />
                <TextField
                  sx={{ marginBottom: '16px' }}
                  fullWidth
                  label="Feature img"
                  value={featureImg}
                  onChange={(e) => setFeatureImg(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Typography sx={{ marginBottom: '8px' }}>Описание</Typography>
              <div className="flex space-x-4">
                <TextField
                  sx={{ marginBottom: '8px' }}
                  fullWidth
                  label="Название описания Ru"
                  value={descriptionNameRu}
                  onChange={(e) => setDescriptionNameRu(e.target.value)}
                />
                <TextField
                  sx={{ marginBottom: '8px' }}
                  fullWidth
                  label="Название описания Kz"
                  value={descriptionNameKz}
                  onChange={(e) => setDescriptionNameKz(e.target.value)}
                />
              </div>

              <div className="flex space-x-4">
                <TextareaAutosize
                  className="p-2 mb-4 w-full border border-gray-300 rounded-lg text-sm"
                  aria-label="minimum height"
                  minRows={4}
                  maxRows={8}
                  placeholder="Description Ru"
                  style={{ width: '100%' }}
                  value={descriptionRu}
                  onChange={(e) => setDescriptionRu(e.target.value)}
                />
                <TextareaAutosize
                  className="p-2 mb-4 w-full border border-gray-300 rounded-lg text-sm"
                  aria-label="minimum height"
                  minRows={4}
                  maxRows={8}
                  placeholder="Description Kz"
                  style={{ width: '100%' }}
                  value={descriptionKz}
                  onChange={(e) => setDescriptionKz(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Typography>Особенности</Typography>
              <div className="flex space-x-4">
                <TextareaAutosize
                  className="p-2 mb-4 w-full border border-gray-300 rounded-lg text-sm"
                  aria-label="minimum height"
                  minRows={4}
                  maxRows={8}
                  placeholder="Features Ru"
                  style={{ width: '100%' }}
                  value={featuresRu}
                  onChange={(e) => setFeaturesRu(e.target.value)}
                />
                <TextareaAutosize
                  className="p-2 mb-4 w-full border border-gray-300 rounded-lg text-sm"
                  aria-label="minimum height"
                  minRows={4}
                  maxRows={8}
                  placeholder="Features Kz"
                  style={{ width: '100%' }}
                  value={featuresKz}
                  onChange={(e) => setFeaturesKz(e.target.value)}
                />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CharacteristicsTab
            characteristics={characteristics}
            handleAddCharacteristic={handleAddCharacteristic}
          />
        </TabPanel>
        <div>
          <Button
            variant="contained"
            sx={{
              height: '36px',
            }}
            color="success"
            onClick={save}>
            Сохранить
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default TestPage;
