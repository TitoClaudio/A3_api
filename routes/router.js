import express from "express";
import {getMethod, deleteMethod, updateById, postMethod } from "../controller/Perguntas.js";

const router = express.Router()
router.get("/pegarRespostas", getMethod)
router.post("/adicionarResposta", postMethod)
router.delete("/apagarResposta", deleteMethod)
router.put("/atualizarResposta", updateById)

export default router

