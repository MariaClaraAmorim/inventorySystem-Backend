import { PrismaClient } from "@prisma/client";

interface SalesByPeriodReport {
  date: Date;
  totalSales: number;
}

class SalesByPeriodReportService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async generateReport(startDate: Date, endDate: Date): Promise<SalesByPeriodReport[]> {
    const sales = await this.prisma.sale.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      select: {
        date: true,
        totalAmount: true,
      },
    });

    const salesByPeriod: SalesByPeriodReport[] = sales.map((sale: { date: any; totalAmount: any; }) => ({
      date: sale.date,
      totalSales: sale.totalAmount,
    }));

    return salesByPeriod;
  }
}

export { SalesByPeriodReportService, SalesByPeriodReport };
