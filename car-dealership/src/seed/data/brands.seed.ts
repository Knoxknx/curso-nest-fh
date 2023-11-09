import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRAND_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Nike',
    createAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Adidas',
    createAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Reebok',
    createAt: new Date().getTime(),
  },

];