"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersContext = exports.Mongoose = void 0;
const db_schema_1 = require("../db-schema");
const connection_manager_1 = require("./connection-manager");
Object.defineProperty(exports, "Mongoose", { enumerable: true, get: function () { return connection_manager_1.Mongoose; } });
const CustomersContext = connection_manager_1.Mongoose.model("customers", new connection_manager_1.Mongoose.Schema(db_schema_1.CustomerSchema));
exports.CustomersContext = CustomersContext;
