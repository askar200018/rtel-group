import { Box, Container, Divider, Typography } from '@mui/material';
import { doc, getDoc } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebase';
import { HeaderHeight } from '../variables/vairables';

const ProductDetail = () => {
  const navigate = useNavigate();

  const categoryId = useParams().categoryId;
  const productId = useParams().productId;

  const [product, setProduct] = useState(null);

  useEffect(async () => {
    const categoryRef = doc(db, 'categories', categoryId);
    const categorySnap = await getDoc(categoryRef);
    if (categorySnap.exists()) {
      const category = categorySnap.data();
      const product = category.products.find((product) => product.id === productId);
      if (!product) {
        navigate('/not-found');
      }
      setProduct(product);
    } else {
      navigate('/not-found');
    }
  }, []);

  if (!product) {
    return (
      <div
        style={{
          paddingTop: `${HeaderHeight}px`,
        }}>
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
      }}>
      <Box
        sx={{
          paddingY: '48px',
        }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ marginBottom: '16px' }}
          className="text-gray-600">
          {product.name}
        </Typography>
        <Divider variant="inset" textAlign="center" />
      </Box>
      <div className="bg-gray-100 py-8">
        <Container maxWidth="lg">
          <div className="flex space-x-8">
            <div className="flex-1 flex justify-center items-center">
              <img src={product.featureImg} alt="Image" />
            </div>
            <div className="flex-1">
              <Typography variant="h5" align="center" sx={{ marginBottom: '16px' }}>
                ОПИСАНИЕ
              </Typography>
              <Divider sx={{ marginBottom: '16px' }} />
              <Typography variant="subtitle1" sx={{ marginBottom: '8px' }}>
                {product.description.title}
              </Typography>
              <ul className="list-disc pl-4">
                <li>
                  <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                    {product.description.body}
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-8">
        <Container maxWidth="lg">
          <div className="flex space-x-8">
            <div className="flex-1">
              <Typography variant="h5" align="center" sx={{ marginBottom: '16px' }}>
                ОСОБЕННОСТИ
              </Typography>
              <Divider sx={{ marginBottom: '16px' }} />
              <ul className="list-disc pl-4">
                {product.features.map((feature, i) => (
                  <li key={i}>
                    <Typography variant="body2" className="text-gray-600">
                      {feature}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <Typography variant="h5" align="center" sx={{ marginBottom: '16px' }}>
                ХАРАКТЕРИСТИКИ
              </Typography>
              <Divider sx={{ marginBottom: '16px' }} />
              <Typography variant="subtitle1" sx={{ marginBottom: '16px' }}>
                Основные технические характеристики
              </Typography>
              <ul>
                {product.characteristics.map((item, i) => (
                  <li key={i} className="mb-1">
                    <div className="flex space-x-4 mb-1">
                      <div style={{ minWidth: '40%', maxWidth: '40%' }}>
                        <Typography variant="body2" className="text-gray-600">
                          {item.key}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="body2" className="text-gray-600">
                          {item.value}
                        </Typography>
                      </div>
                    </div>
                    <Divider />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProductDetail;
