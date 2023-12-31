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

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  // Conecte-se ao seu banco de dados MongoDB
  await mongoose.connect('mongodb://localhost:27017/E-commerce');

  // Crie o modelo do produto se ele ainda não existir
  const Produto: Model<IProduto> = mongoose.models.Produto || mongoose.model<IProduto>('Produto', produtoSchema);

  // Crie e salve o novo produto
  const novoProduto = new Produto(req.body);
  await novoProduto.save();

  // Desconecte-se do banco de dados
  await mongoose.disconnect();

  res.status(200).json({ message: 'Produto adicionado com sucesso!' });
};
