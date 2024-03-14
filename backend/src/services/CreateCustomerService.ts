import prismaClient from "../prisma";

class CreateCustomerService {
    async execute() {
        console.log("the route was called");

        return { ok: true }
    }
}

export { CreateCustomerService }