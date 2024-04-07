"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var CurrentStockReportController_1 = require("./controllers/relatorios/CurrentStockReportController");
var LoginUserController_1 = require("./controllers/LoginUserController");
var RegisterUserController_1 = require("./controllers/RegisterUserController");
var UsersListController_1 = require("./controllers/UsersListController");
var DeleteUserController_1 = require("./controllers/DeleteUserController");
var logoutController_1 = require("./controllers/logoutController");
var CreateStockController_1 = require("./controllers/CreateStockController");
var updateStockController_1 = require("./controllers/updateStockController");
var ListStockController_1 = require("./controllers/ListStockController");
var countHandlers_1 = require("./controllers/countHandlers");
var getProductCountByCategoryHandler_1 = require("./controllers/getProductCountByCategoryHandler");
var CountValueController_1 = require("./controllers/CountValueController");
var CountStockLow_1 = require("./controllers/CountStockLow");
var manageStock_1 = require("./controllers/manageStock");
var DeleteStockController_1 = require("./controllers/DeleteStockController");
// Função responsável por definir as rotas da aplicação
function routes(fastify) {
    return __awaiter(this, void 0, void 0, function () {
        var currentStockReportController, updateStockController;
        var _this = this;
        return __generator(this, function (_a) {
            // Rota de teste simples para verificar se o servidor está online
            fastify.get('/teste', function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, { ok: true }]; // Retorna um objeto indicando que o servidor está online
                });
            }); });
            currentStockReportController = new CurrentStockReportController_1.CurrentStockReportController();
            fastify.get('/current-stock-report', function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // Chame o método `handle` do controlador e retorne sua resposta
                    return [2 /*return*/, currentStockReportController.handle(request, reply)];
                });
            }); });
            // Rota de login
            fastify.post('/login', function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, new LoginUserController_1.LoginUserController().handle(request, reply)];
                });
            }); });
            // Rota para registrar um novo usuario
            fastify.post('/register', function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, new RegisterUserController_1.RegisterUserController().handle(request, reply)];
                });
            }); });
            // Rota para listar usuários
            fastify.get('/users', UsersListController_1.getUsers);
            // Rota para deletar um usuário
            fastify.delete('/delete-users/:userId', DeleteUserController_1.deleteUserHandler);
            /*
              // Exemplo de rota que requer autenticação
              fastify.get(
                '/protected-route',
                { preHandler: isAuthenticated },
                async (request, reply) => {
                  reply.send({
                    message: 'Você está autenticado e tem acesso a esta rota.',
                  });
                }
              );
            
              // Exemplo de rota que requer permissão de administrador
              fastify.get(
                '/admin-route',
                { preHandler: isAdmin },
                async (request, reply) => {
                  reply.send({
                    message: 'Você é um administrador e tem acesso a esta rota.',
                  });
                }
              ); */
            // Rota para logout
            fastify.post('/logout', function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: 
                        // Chama a função do controlador de logout
                        return [4 /*yield*/, (0, logoutController_1.logoutUser)(request, reply)];
                        case 1:
                            // Chama a função do controlador de logout
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            // Rota para registrar um novo produto
            fastify.post('/register-stock', function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // Cria uma instância do controlador de criação de produto e chama o método handle para lidar com a requisição
                    return [2 /*return*/, new CreateStockController_1.CreateStockController().handle(request, reply)];
                });
            }); });
            updateStockController = new updateStockController_1.UpdateStockController();
            // Rota para atualizar um produto de estoque
            fastify.put('/update-stock/:id', function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
                var id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = request.params.id;
                            return [4 /*yield*/, updateStockController.handle(request, reply)];
                        case 1:
                            _a.sent(); // Passar o id para o controlador
                            return [2 /*return*/];
                    }
                });
            }); });
            // Rota para listar produtos
            fastify.get('/list-stock', function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // Cria uma instância do controlador de listagem de produtos e chama o método handle para lidar com a requisição
                    return [2 /*return*/, new ListStockController_1.ListStockController().handle(request, reply)];
                });
            }); });
            fastify.get('/products/count', countHandlers_1.getProductCountHandler);
            fastify.get('/users/count', countHandlers_1.getUserCountHandler);
            fastify.get('/products/count-by-category', getProductCountByCategoryHandler_1.getProductCountByCategoryHandler);
            fastify.get('/total-selling-value', CountValueController_1.getTotalSellingValueHandler);
            fastify.get('/stock/low-count', CountStockLow_1.countLowStockProducts);
            fastify.post('/manage-stock', manageStock_1.manageStock);
            // Rota para excluir um produto
            fastify.delete('/delete-stock', function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // Cria uma instância do controlador de exclusão de produto e chama o método handle para lidar com a requisição
                    return [2 /*return*/, new DeleteStockController_1.DeleteStockController().handle(request, reply)];
                });
            }); });
            return [2 /*return*/];
        });
    });
}
exports.routes = routes;
