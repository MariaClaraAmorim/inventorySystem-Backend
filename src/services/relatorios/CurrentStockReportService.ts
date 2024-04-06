import { PrismaClient } from "@prisma/client";

interface CurrentStockReport {
  name: string;
  category: string | null;
  quantity: number | null;
  color: string | null;
  size: string | null;
}

class CurrentStockReportService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async generateReport(): Promise<CurrentStockReport[]> {
    // Atualiza a consulta para incluir cor e tamanho
    const currentStock = await this.prisma.stock.findMany({
      select: {
        name: true,
        category: true,
        quantity: true,
        color: true,
        size: true,
      },
    });

    // Mapeia os dados retornados para o tipo CurrentStockReport
    return currentStock.map((stockItem) => ({
      name: stockItem.name,
      category: stockItem.category,
      quantity: stockItem.quantity,
      color: stockItem.color || null,
      size: stockItem.size || null,
    }));
  }
}

export { CurrentStockReportService, CurrentStockReport };
