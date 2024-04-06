// Tipos de Relatórios
enum ReportType {
  SalesByPeriod = "Relatório de Vendas por Período",
  CurrentStock = "Relatório de Estoque Atual",
  TopSellingProducts = "Relatório de Produtos mais Vendidos",
}

// Interface para o Relatório de Vendas por Período
interface SalesByPeriodReport {
  type: ReportType.SalesByPeriod;
  sales: {
    date: Date;
    productName: string;
    quantitySold: number;
    unitPrice: number;
    totalSale: number;
  }[];
}

// Interface para o Relatório de Estoque Atual
interface CurrentStockReport {
  type: ReportType.CurrentStock;
  stock: {
    productName: string;
    category: string;
    quantity: number;
  }[];
}

// Interface para o Relatório de Produtos mais Vendidos
interface TopSellingProductsReport {
  type: ReportType.TopSellingProducts;
  topProducts: {
    productName: string;
    quantitySold: number;
  }[];
}

// Exportando os tipos de relatórios
export type Report =
  | SalesByPeriodReport
  | CurrentStockReport
  | TopSellingProductsReport;
export { ReportType };
