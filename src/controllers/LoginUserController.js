"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.LoginUserController = void 0;
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var findUserByUsername_1 = require("../services/findUserByUsername");
var SECRET_KEY = process.env.SECRET_KEY || 'sua_chave_secreta';
var JWT_EXPIRATION_TIME = '1h';
var HTTP_UNAUTHORIZED = 401;
var HTTP_INTERNAL_SERVER_ERROR = 500;
var generateToken = function (userId, isAdmin) {
    return jwt.sign({ userId: userId, isAdmin: isAdmin }, SECRET_KEY, {
        expiresIn: JWT_EXPIRATION_TIME,
    });
};
var LoginUserController = /** @class */ (function () {
    function LoginUserController() {
    }
    LoginUserController.prototype.handle = function (request, reply) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, username, password, user, passwordMatch, isAdmin, token, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, username = _a.username, password = _a.password;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        if (!username || !password) {
                            reply
                                .status(HTTP_UNAUTHORIZED)
                                .send({ success: false, message: 'Credenciais de login inválidas' });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, findUserByUsername_1.findUserByUsername)(username)];
                    case 2:
                        user = _b.sent();
                        if (!user) {
                            reply
                                .status(HTTP_UNAUTHORIZED)
                                .send({ success: false, message: 'Usuário não encontrado' });
                            return [2 /*return*/];
                        }
                        // Verificar se a função findUserByUsername retorna um objeto do tipo User
                        if (!('id' in user &&
                            'username' in user &&
                            'password' in user &&
                            'role' in user)) {
                            reply
                                .status(HTTP_INTERNAL_SERVER_ERROR)
                                .send({
                                success: false,
                                message: 'Usuário retornado incorretamente',
                            });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, bcrypt.compare(password, user.password)];
                    case 3:
                        passwordMatch = _b.sent();
                        if (!passwordMatch) {
                            reply
                                .status(HTTP_UNAUTHORIZED)
                                .send({ success: false, message: 'Senha incorreta' });
                            return [2 /*return*/];
                        }
                        isAdmin = user.role === 'ADMIN';
                        token = generateToken(user.id, isAdmin);
                        reply.send({ success: true, user: __assign(__assign({}, user), { isAdmin: isAdmin }), token: token });
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        reply
                            .status(HTTP_INTERNAL_SERVER_ERROR)
                            .send({ success: false, message: error_1.message });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return LoginUserController;
}());
exports.LoginUserController = LoginUserController;
