# inventorySystem-Backend
# Documentação da API

Este documento fornece uma visão geral das rotas disponíveis na API, juntamente com suas descrições.

## Rotas Disponíveis

### Rota de Teste

- **Método:** GET
- **Endpoint:** /api/teste
- **Descrição:** Rota de teste simples para verificar se o servidor está online.

### Autenticação de Usuários

- **Método:** POST
- **Endpoint:** /api/login
- **Descrição:** Rota para efetuar login de usuários.

- **Método:** POST
- **Endpoint:** /api/register
- **Descrição:** Rota para registrar um novo usuário.

### Gerenciamento de Usuários

- **Método:** GET
- **Endpoint:** /api/users
- **Descrição:** Rota para listar todos os usuários.

- **Método:** DELETE
- **Endpoint:** /api/delete-users/:userId
- **Descrição:** Rota para deletar um usuário específico.

- **Método:** POST
- **Endpoint:** /api/logout
- **Descrição:** Rota para realizar logout de usuários.

### Gerenciamento de Estoque

- **Método:** POST
- **Endpoint:** /api/register-stock
- **Descrição:** Rota para registrar um novo produto no estoque.

- **Método:** PUT
- **Endpoint:** /api/update-stock/:id
- **Descrição:** Rota para atualizar um produto de estoque específico.

- **Método:** GET
- **Endpoint:** /api/list-stock
- **Descrição:** Rota para listar todos os produtos do estoque.

- **Método:** DELETE
- **Endpoint:** /api/delete-stock
- **Descrição:** Rota para excluir um produto do estoque.

### Estatísticas e Relatórios

- **Método:** GET
- **Endpoint:** /api/products/count
- **Descrição:** Rota para obter a contagem total de produtos.

- **Método:** GET
- **Endpoint:** /api/users/count
- **Descrição:** Rota para obter a contagem total de usuários.

- **Método:** GET
- **Endpoint:** /api/products/count-by-category
- **Descrição:** Rota para obter a contagem de produtos por categoria.

- **Método:** GET
- **Endpoint:** /api/total-selling-value
- **Descrição:** Rota para obter o valor total de venda dos produtos.

- **Método:** GET
- **Endpoint:** /api/stock/low-count
- **Descrição:** Rota para obter a contagem de produtos com estoque baixo.

- **Método:** POST
- **Endpoint:** /api/manage-stock
- **Descrição:** Rota para gerenciar o estoque de produtos.

