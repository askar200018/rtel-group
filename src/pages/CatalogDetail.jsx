import { Box, Container, Divider, Typography } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { db } from '../firebase';
import { HeaderHeight } from '../variables/vairables';

const CatalogDetail = () => {
  const categoryName = useParams().categoryName;
  let category = null;
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const categories = collection(db, 'category');
    const categorySnapshot = await getDocs(categories);
    const categoryList = categorySnapshot.docs.map((doc) => doc.data());
    category = categoryList.find((category) => category.id === categoryName);
    setProducts(category.products);
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
        <Divider variant="inset" textAlign="center" />
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
                key={product.name}
                linkTo="/test"
                img={product.img}
                title={product.name}
                subtitle={product.subtitle}
              />
            ))}
          <ProductCard
            linkTo="/test"
            img="https://www.hytera.ru/upload/resize_cache/webp/iblock/442/4420c94da17b2028207097c72886f5b6.webp"
            title="DIB-R5"
            subtitle="Базовая станция"
          />
          <ProductCard
            linkTo="/test"
            img="https://www.hytera.ru/upload/resize_cache/webp/iblock/442/4420c94da17b2028207097c72886f5b6.webp"
            title="DIB-R5"
            subtitle="Базовая станция"
          />
          <ProductCard
            linkTo="/test"
            img="https://www.hytera.ru/upload/resize_cache/webp/iblock/442/4420c94da17b2028207097c72886f5b6.webp"
            title="DIB-R5"
            subtitle="Базовая станция"
          />
          <ProductCard
            linkTo="/test"
            img="https://www.hytera.ru/upload/resize_cache/webp/iblock/442/4420c94da17b2028207097c72886f5b6.webp"
            title="DIB-R5"
            subtitle="Базовая станция"
          />
        </Container>
      </div>
    </div>
  );
};

export default CatalogDetail;
