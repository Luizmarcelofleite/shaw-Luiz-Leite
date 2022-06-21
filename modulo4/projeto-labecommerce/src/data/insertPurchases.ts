import { purchaseData } from "../types/typePurchases";
import  connection  from "./dataBase";

export default async function insertPurchase(purchase: purchaseData): Promise<string> {

    const { id, userId, productId, quantity, totalPrice } = purchase

    await connection("labecommerce_purchases").insert({
        id,
        user_id: userId,
        product_id: productId,
        quantity,
        total_price: totalPrice,
    })


    return `Compra o id ${purchase.id} registrada com sucesso`
}