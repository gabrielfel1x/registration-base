import prismaClient from "../prisma";

interface CreateCrustomerProps{
    name: string;
    email: string;
}

class CreateCustomerService {
    async execute({ name, email }: CreateCrustomerProps) {
        console.log("the route was called");

        if (!name || !email) {
            throw new Error("not all fields are filled in!")
        }

        const costumer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true
            }
        })

        return costumer
    }
}

export { CreateCustomerService }