const express = require('express');
const multer = require('multer');
const fs = require('fs');

const app = express();
app.use(express.json())

// Configuração do multer para processar dados binários
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Rota para receber a imagem
app.post('/upload', upload.single('imagem'), (req, res) => {
    // Verifica se o arquivo foi enviado corretamente
    if (!req.file) {
        res.status(400).send("Nenhuma imagem enviada");
        return;
    }

    // Converte o arquivo binário para base64
    const imageData = req.file.buffer.toString('base64');

    // Salva a imagem em base64
    const imagePath = './uploads/image.jpg'; // Caminho onde a imagem será salva
    fs.writeFile(imagePath, imageData, 'base64', (err) => {
        if (err) {
            console.error("Erro ao salvar a imagem:", err);
            res.status(500).send("Erro ao salvar a imagem");
        } else {
            console.log("Imagem salva com sucesso:", imagePath);

            const randomValue = Math.random();

            setTimeout(() => {
                if (randomValue >= 0.5) {
                    return res.status(200).json("imagem processada")
                }
                else {
                    return res.status(500).json('erro ao processae imagem')
                }
            }, 8000)
        }
    });
});

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
