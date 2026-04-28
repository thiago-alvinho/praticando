import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String, 
      required: [true, "Título do livro é obrigatório"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'autores', 
      required: [true, "Identificador do autor(a) é obrigatório"]
    },
    editora: {
      type: String, 
      required: [true, "Nome da editora é obrigatório"],
      enum: {
        values: ["Thomas Nelson"],
        message: "A editora {VALUE} não está entre as opções de editora aceitas."
      }
    },
    numeroPaginas: {
      type: Number,
      validate: {
        validator: (valor) => valor >= 10 && valor <= 5000,
        message: "O número de páginas deve ser um valor entre 10 e 5000 - Valor fornecido {VALUE}"
      }
    }
  }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;