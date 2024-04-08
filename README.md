﻿# inventorySystem-Backend
# Documentação das Rotas da Aplicação

Este documento fornece uma visão geral das rotas disponíveis na aplicação, juntamente com suas descrições.

## Rotas Disponíveis

### Rota de Teste

#### GET /teste

Rota de teste simples para verificar se o servidor está online.

### Relatório do Estoque Atual

#### GET /current-stock-report

Rota para obter um relatório do estoque atual.

### Autenticação de Usuários

#### POST /login

Rota para efetuar login de usuários.

#### POST /register

Rota para registrar um novo usuário.

### Gerenciamento de Usuários

#### GET /users

Rota para listar todos os usuários.

#### DELETE /delete-users/:userId

Rota para deletar um usuário específico.

#### POST /logout

Rota para realizar logout de usuários.

### Gerenciamento de Estoque

#### POST /register-stock

Rota para registrar um novo produto no estoque.

#### PUT /update-stock/:id

Rota para atualizar um produto de estoque específico.

#### GET /list-stock

Rota para listar todos os produtos do estoque.

#### DELETE /delete-stock

Rota para excluir um produto do estoque.

### Estatísticas e Relatórios

#### GET /products/count

Rota para obter a contagem total de produtos.

#### GET /users/count

Rota para obter a contagem total de usuários.

#### GET /products/count-by-category

Rota para obter a contagem de produtos por categoria.

#### GET /total-selling-value

Rota para obter o valor total de venda dos produtos.

#### GET /stock/low-count

Rota para obter a contagem de produtos com estoque baixo.

#### POST /manage-stock

Rota para gerenciar o estoque de produtos.

