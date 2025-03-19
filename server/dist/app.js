"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_errors_1 = __importDefault(require("http-errors"));
var exampleRoutes_1 = __importDefault(require("./routes/exampleRoutes"));
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var mongoose_1 = __importDefault(require("mongoose"));
var errorHanlder_1 = require("./middleware/errorHanlder");
var passport_1 = __importDefault(require("passport"));
var passport_2 = __importDefault(require("./middleware/passport"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "../.env") });
app.use((0, cors_1.default)({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
}));
console.log("DB Connection String:", process.env.DB);
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(passport_1.default.initialize());
(0, passport_2.default)(passport_1.default);
app.use("/", exampleRoutes_1.default);
app.use("/user", userRoutes_1.default);
app.use(function () {
    throw (0, http_errors_1.default)(404, "Route not found");
});
app.use(errorHanlder_1.errorHandler);
var PORT = process.env.PORT;
if (!process.env.DB) {
    throw new Error("DB environment variable is not defined.");
}
mongoose_1.default
    .connect(process.env.DB)
    .then(function () {
    console.log("Connected to the database.");
    app.listen(PORT, function () {
        console.log("Server is listening on PORT ".concat(PORT));
    });
})
    .catch(function (err) {
    console.error("Database connection error:", err);
    throw (0, http_errors_1.default)(501, "Unable to connect to database");
});
