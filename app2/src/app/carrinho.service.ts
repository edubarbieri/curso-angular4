import { ItemCarrinho } from './shared/item-carrinho.model';
import Oferta from './shared/oferta.model';
import { OnInit, Injectable } from '@angular/core';

@Injectable()
class CarrinhoService {
    private items: ItemCarrinho[] = [];
    public exibirItems(): ItemCarrinho[] {
        return this.items;
    }

    public getItems() {
        return this.items;
    }
    constructor() {
        console.log('On init');
        const cartString = sessionStorage.getItem('shoppingCart');
        if (cartString) {
            this.items = <ItemCarrinho[]>JSON.parse(cartString);
        }
    }

    public addItemToCart(oferta: Oferta, quantidade: number = 1): void {

        const existItem = this.items.find((i: ItemCarrinho) => {
            return i.id === oferta.id;
        });

        if (existItem) {
            existItem.quantidade += quantidade;
        } else {
            const item = new ItemCarrinho(
                oferta.id,
                oferta.imagens[0],
                oferta.titulo,
                oferta.descricao_oferta,
                oferta.valor,
                quantidade
            );
            this.items.push(item);
        }
        this.updateCart();
    }

    private updateCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(this.items));
    }

    public get total(): number {
        let vlrTotal = 0;
        for (const item of this.items) {
            vlrTotal += item.valor * item.quantidade;
        }
        return vlrTotal;
    }

    public increaseQuantity(itemId: number, quantity: number = 1) {
        const existItem = this.items.find((i: ItemCarrinho) => {
            return i.id === itemId;
        });

        if (existItem) {
            existItem.quantidade += quantity;
        }
        this.updateCart();
    }

    public decreaseQuantity(itemId: number, quantity: number = 1) {
        const existItem = this.items.find((i: ItemCarrinho) => {
            return i.id === itemId;
        });

        if (existItem) {
            if (existItem.quantidade - quantity <= 0) {
                this.items.splice(this.items.indexOf(existItem), 1);
            } else {
                existItem.quantidade -= quantity;
            }
        }
        this.updateCart();
    }

    public clearCart() {
        this.items = [];
        this.updateCart();
    }


}

export { CarrinhoService };
