import { FastifyRequest, FastifyReply } from "fastify";
import { ListCostumerService } from "../services/ListCostumerService";

class ListCostumerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCostumerService = new ListCostumerService();

    const costumers = await listCostumerService.execute();

    reply.send(costumers);
  }
}

export { ListCostumerController };
