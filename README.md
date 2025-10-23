# Projeto Algoritmos Fundamentais e Testes Unitários

Este projeto tem como objetivo desenvolver e testar implementações de algoritmos fundamentais (como Somatório, MDC, QuickSort, etc.) utilizando testes unitários com a biblioteca **Jest**.

## 💻 Estrutura do Projeto

O código é organizado em duas pastas principais:

* **`javascript/`**: Contém a implementação das funções de cada algoritmo (`fibonacci.js`, `primo.js`, `mdc.js`, etc.).
* **`jest/`**: Contém os arquivos de testes unitários (`fibonacci.test.js`, `mdc.test.js`, etc.) que validam a lógica de cada função.

## 🚀 Como Executar e Testar o Código

Para rodar o projeto e executar todos os testes unitários, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados em sua máquina.

### Instalação

1.  **Clone o repositório** (se você ainda não o fez):
    ```bash
    git clone [https://github.com/davidfrott/projeto-algoritmos.git](https://github.com/davidfrott/projeto-algoritmos.git)
    cd projeto-algoritmos
    ```

2.  **Instale as dependências** do projeto (incluindo o Jest):
    ```bash
    npm install
    ```

### Executando os Testes Unitários

Após a instalação, use o comando `npm test` para executar todos os testes:

```bash
npm test