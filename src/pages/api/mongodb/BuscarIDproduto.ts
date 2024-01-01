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
    const { id } = req.query;

    await mongoose.connect('mongodb://localhost:27017/E-commerce');
    const Produto: Model<IProduto> = mongoose.models.Produto || mongoose.model<IProduto>('Produto', produtoSchema);

    const produto = await Produto.findById(id);
    await mongoose.disconnect();

    res.status(200).json(produto);
};