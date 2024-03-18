import prismaClient from "../prisma";

interface DeleteCostumerProps {
  id: string;
}

class DeleteCostumerService {
  async execute({ id }: DeleteCostumerProps) {
    if (!id) {
      throw new Error("invalid request");
    }

    const findCostumer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCostumer) {
      throw new Error("costumer doesn't exist");
    }

    await prismaClient.customer.delete({
      where: {
        id: findCostumer.id,
      },
    });

    return { message: "successfully deleted" };
  }
}

export { DeleteCostumerService };
