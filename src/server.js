"use strict";
/* import { app } from './app.js';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3333';
const PORT = Number(process.env.PORT) || 3333;

// Função assíncrona para iniciar o servidor
const start = async () => {
  try {
    await app.listen({ port: PORT });
    console.log(`Server running at ${BASE_URL}`);
  } catch (err) {
    // Em caso de erro ao iniciar o servidor, encerra o processo
    console.error(err);
    process.exit(1);
  }
};

// Inicia o servidor chamando a função start
start();
 */
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
// Importa o middleware de CORS do Fastify para lidar com as políticas de CORS
var cors_1 = require("@fastify/cors");
// Importa o módulo Fastify para criar o servidor web e registrar rotas
var fastify_1 = require("fastify");
// Importa as definições de rotas da aplicação
var routes_1 = require("./routes");
var passPlugin_1 = require("./plugins/passPlugin");
// Define o baseURL do servidor
var baseURL = "http://localhost:3333";
var port = process.env.PORT || 3333;
// Cria uma instância do aplicativo Fastify, habilitando o registro de logs
var app = (0, fastify_1.default)({ logger: true });
// Configura um manipulador de erros para responder com status 400 e mensagem de erro em caso de exceção
app.setErrorHandler(function (error, request, reply) {
    reply.code(400).send({ message: error.message });
});
// Função assíncrona para iniciar o servidor
var start = function () { return __awaiter(void 0, void 0, void 0, function () {
    var err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // Registra o middleware de CORS para lidar com as políticas de CORS
            return [4 /*yield*/, app.register(cors_1.default)];
            case 1:
                // Registra o middleware de CORS para lidar com as políticas de CORS
                _a.sent();
                app.register(passPlugin_1.default);
                // Registra as rotas da aplicação
                return [4 /*yield*/, app.register(routes_1.routes, { prefix: "/api" })];
            case 2:
                // Registra as rotas da aplicação
                _a.sent(); // Prefixa todas as rotas com '/api'
                _a.label = 3;
            case 3:
                _a.trys.push([3, 5, , 6]);
                // Inicia o servidor na porta 3333
                return [4 /*yield*/, app.listen({ port: 3333 })];
            case 4:
                // Inicia o servidor na porta 3333
                _a.sent();
                console.log("Server running at ".concat(baseURL));
                return [3 /*break*/, 6];
            case 5:
                err_1 = _a.sent();
                // Em caso de erro ao iniciar o servidor, encerra o processo
                console.error(err_1);
                process.exit(1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
// Inicia o servidor chamando a função start
start();
