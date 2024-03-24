import {defineStore} from "pinia";
interface productsInterface {
    category: string
    title: string
    description: string
    image: string
    old_price: string
    price: string
}

export const useTemp = defineStore('temp', {
    state: () => ({
        products: [
            {
                "category": "Tênis",
                "title": "Tênis Esportivo MaxFit",
                "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/394286/19/sv01/fnd/BRA/w/1000/h/1000/fmt/png",
                "old_price": "R$ 199,99",
                "price": "R$ 149,99"
            },
            {
                "category": "Tênis",
                "title": "Tênis Running UltraBoost",
                "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                "image": "https://runningspeed.com.br/app/media/images_product/big/125701490/125701490145127-tenis-adidas-ultraboost-22-colorido-masculino-2.jpg",
                "old_price": "R$ 249,99",
                "price": "R$ 199,99"
            },
            {
                "category": "Tênis",
                "title": "Tênis Casual StreetStyle",
                "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                "image": "https://rivierawear.com.br/cdn/shop/files/S3b2ab12fa44142c59dda64a7c8e39508i-PhotoRoom.png-PhotoRoom_800x.png?v=1702654549",
                "old_price": "R$ 159,99",
                "price": "R$ 129,99"
            },
            {
                "category": "Tênis",
                "title": "Tênis Skateboard Pro",
                "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/380190/12/sv01/fnd/BRA/w/1000/h/1000/fmt/png",
                "price": "R$ 179,99"
            },
            {
                "category": "Tênis",
                "title": "Tênis Retro Vintage",
                "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                "image": "https://images.tcdn.com.br/img/img_prod/1241077/tenis_retro_couro_branco_e_preto_schutz_55_2_af7d04f44548e3ed71dd73151380bcce.png",
                "old_price": "R$ 189,99",
                "price": "R$ 149,99"
            }
        ] as productsInterface[]
    })
})