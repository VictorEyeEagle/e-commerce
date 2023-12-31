import { NextApiRequest, NextApiResponse } from 'next';
import mongoose, { Document, Model } from 'mongoose';

interface IProduto extends Document {
    imagemUrl: string;
    nome: string;
    preco: number;
    descricao: string;
}

const produtoSchema = new mongoose.Schema<IProduto>({
    imagemUrl: String,
    nome: String,
    preco: Number,
    descricao: String
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    await mongoose.connect('mongodb://localhost:27017/E-commerce');
    const Produto: Model<IProduto> = mongoose.models.Produto || mongoose.model<IProduto>('Produto', produtoSchema);

    if (req.method === 'GET') {
        const produtos = await Produto.find({});
        await mongoose.disconnect();
        res.status(200).json(produtos);
    }
};
