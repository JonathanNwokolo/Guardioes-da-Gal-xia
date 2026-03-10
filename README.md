# 🚀 Guardiões da Galáxia

Um site interativo e visualmente impressionante dedicado aos personagens dos Guardiões da Galáxia.

## 🌟 Características

- **Interface Responsiva**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Fluidas**: Transições suaves entre personagens
- **Efeito de Texto Animado**: Os nomes dos personagens aparecem com um efeito hacker-style
- **Design Moderno**: Gradientes personalizados para cada personagem
- **Sidebar Interativa**: Navegação fácil entre os personagens

## 🎮 Personagens

- Peter Quill (Star-Lord)
- Gamora Titan
- Drax o Destruidor
- Mantis
- Rocket Raccoon
- I am Groot

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: 
  - Animações e transições
  - Gradientes personalizados
  - Media queries para responsividade
  - Flexbox e Grid Layout
- **JavaScript**: 
  - Manipulação do DOM
  - Efeitos de animação
  - Controle de eventos

## 📁 Estrutura do Projeto

```
guardioes-da-galaxia/
├── index.html
├── assets/
│   ├── favicon.ico
│   ├── logo.png
│   ├── star-guard-italic.ttf
│   └── members/
│       ├── peter-quill.png
│       ├── gamora.png
│       ├── drax.png
│       ├── mantis.png
│       ├── rocket.png
│       ├── groot.png
│       └── card-*.png (thumbnails)
├── styles/
│   └── global.css
└── script/
    ├── index.js
    └── changeName.js
```

## 🚀 Como Usar

1. Clone o repositório:
```bash
git clone 
```

2. Navegue até o diretório:
```bash
cd guardioes-da-galaxia
```

3. Abra o arquivo `index.html` em seu navegador ou use um servidor local:
```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

4. Acesse no navegador: `http://localhost:8000`

## 💡 Funcionalidades

- **Clique nos cards** da sidebar para alternar entre personagens
- **Tecla ESC** para fechar a sidebar
- **Botão de menu** no canto superior direito para abrir/fechar a sidebar
- **Efeito hover** nos cards para pré-visualização
- **Animação automática** do nome do personagem com efeito de letras aleatórias

## 🎨 Personalização

Cada personagem possui um gradiente único definido em `styles/global.css`:

```css
--peter: linear-gradient(45deg, #e11010 25%, #ffa200 80%);
--gamora: linear-gradient(45deg, #6FE863 30%, #FF008D 85%);
--drax: linear-gradient(45deg, #fe0000 10%, #b495a4 70%);
--groot: linear-gradient(45deg, #1AEC38, #ff7c00 90%);
--mantis: linear-gradient(45deg, #fee800, #eb9125);
--rocket: linear-gradient(45deg, #B55D00 22%, #ffffff);
```

## 📱 Responsividade

O site se adapta automaticamente a diferentes tamanhos de tela:

- **Desktop** (> 1200px): Layout completo com sidebar de 400px
- **Tablet** (768px - 1200px): Fonte e elementos ajustados
- **Mobile** (< 768px): Sidebar em tela cheia, grid adaptado
- **Mobile pequeno** (< 480px): Interface otimizada para telas pequenas

