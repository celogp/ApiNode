const express = require('express');
const routes = express.Router();

const EstaticoService = require('./services/Estatico');
const UsuarioService = require('./services/Usuario');
const ParceiroService = require('./services/Parceiro');
const ProdutoService = require('./services/Produto');
const PedidoService = require('./services/Pedido');

routes.get('/estatico/ufs', EstaticoService.showUfs);
routes.get('/estatico', EstaticoService.showSexo);

routes.get('/usuario', UsuarioService.showAll);
routes.get('/usuario/:id', UsuarioService.show);
routes.post('/usuario', UsuarioService.save);
routes.put('/usuario/:id', UsuarioService.update);
routes.delete('/usuario/:id', UsuarioService.delete);

routes.get('/parceiro', ParceiroService.showAll);
routes.get('/parceiro/:id', ParceiroService.show);
routes.post('/parceiro', ParceiroService.save);
routes.put('/parceiro/:id', ParceiroService.update);
routes.delete('/parceiro/:id', ParceiroService.delete);

routes.get('/produto', ProdutoService.showAll);
routes.get('/produto/:id', ProdutoService.show);
routes.post('/produto', ProdutoService.save);
routes.put('/produto/:id', ProdutoService.update);
routes.delete('/produto/:id', ProdutoService.delete);

routes.get('/pedido', PedidoService.showAll);
routes.get('/pedido/:id', PedidoService.show);
routes.post('/pedido', PedidoService.save);
routes.put('/pedido/:id', PedidoService.update);
routes.delete('/pedido/:id', PedidoService.delete);

module.exports = routes;