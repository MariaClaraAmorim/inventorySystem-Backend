// models/StockProps.ts
interface StockProps {
  id: string;
  name: string;
  category: string;
  quantity: number;
  barcode: string;
  description: string;
  imageUrl: string;
  costPrice: number;
  sellingPrice: number;
  status: boolean;
  color: string;
  size: string;
}

export default StockProps;
