import './hero.css';
import { Button, Col, Row, Typography } from 'antd';

export const Hero = () => {
  return (
    <div className='hero'>
      <Row>
        <Col span={24}>
          <Typography.Title level={1}>Grzegorz Karwowski</Typography.Title>
          <Typography.Title level={3}>
            Serwisant Maszyn Poligraficznych Romayor 314, 313{' '}
          </Typography.Title>
          <Button type='primary' ghost>
            Kontakt
          </Button>
        </Col>
      </Row>
    </div>
  );
};
