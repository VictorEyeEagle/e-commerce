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

    console.log(`Rota '/api/mongodb/buscarid' acessada com ID: ${id}`);

    await mongoose.connect('mongodb://localhost:27017/E-commerce');
    const Produto: Model<IProduto> = mongoose.models.Produto || mongoose.model<IProduto>('Produto', produtoSchema);

    if (req.method === 'GET') {
        const produto = await Produto.findById(id);
        console.log('Produto encontrado:', produto);
        await mongoose.disconnect();

        if (!produto) {
            console.log('Produto não encontrado');
            res.status(404).json({ message: 'Produto não encontrado' });
            return;
        }

        res.status(200).json(produto);
    }
};
