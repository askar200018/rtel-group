import { Box, Container, Divider, Typography } from '@mui/material';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { db } from '../firebase';
import { CATEGORIES } from '../mock/mock';
import { HeaderHeight } from '../variables/vairables';

const CatalogDetail = () => {
  const categoryName = useParams().categoryName;
  const [products, setProducts] = useState([]);
  const { t, i18n } = useTranslation();
  console.log('language', i18n.language);
  useEffect(async () => {
    // const categories = collection(db, 'categories');

    // await setDoc(doc(categories, 'tetra-systems'), CATEGORIES[0]);
    const categoryRef = doc(db, 'categories', categoryName);
    const categorySnap = await getDoc(categoryRef);
    if (categorySnap.exists()) {
      const category = categorySnap.data();
      setProducts(category.products);
      console.log('Document data:', categorySnap.data());
    } else {
      console.log('No such document!');
    }
  }, []);
  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
      }}>
      <Box
        sx={{
          paddingY: '48px',
        }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '16px' }}>
          TETRA СИСТЕМЫ
        </Typography>
        <Container maxWidth="xl">
          <Divider variant="middle" />
        </Container>
      </Box>
      <div className=" bg-gray-100">
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            paddingY: '32px',
          }}>
          {products &&
            products.map((product) => (
              <ProductCard
                key={product.id}
                linkTo={product.id}
                img={product.img}
                title={product.name}
                subtitle={product[`subtitle_${i18n.language}`]}
              />
            ))}
        </Container>
      </div>
    </div>
  );
};

export default CatalogDetail;
