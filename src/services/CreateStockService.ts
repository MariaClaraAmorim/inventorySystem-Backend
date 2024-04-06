import { PrismaClient } from "@prisma/client";

interface CreateStockDTO {
  name: string;
  category: string;
  quantity: number;
  barcode: string;
  description: string;
  status: boolean;
  imageUrl: string;
  costPrice: number;
  sellingPrice: number;
}

class CreateStockService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async execute(data: CreateStockDTO): Promise<any> {
    const { name, category, quantity, barcode, description, status, imageUrl, costPrice, sellingPrice } =
      data;

    try {
      const createdStock = await this.prisma.stock.create({
        data: {
          name,
          category,
          quantity,
          barcode,
          description,
          status,
          imageUrl,
          costPrice,
          sellingPrice,
        },
      });

      return createdStock;
    } catch (error) {
      throw new Error(`Erro ao criar produto: ${error}`);
    }
  }
}

export { CreateStockService };
