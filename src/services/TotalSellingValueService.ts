// services/TotalSellingValueService.ts
import StockProps from '../models/StockProps.js';

class TotalSellingValueService {
  calculateTotalSellingValue(products: StockProps[]): number {
    return products.reduce((total, product) => {
      return total + product.quantity * product.sellingPrice;
    }, 0);
  }
}

export default TotalSellingValueService;
