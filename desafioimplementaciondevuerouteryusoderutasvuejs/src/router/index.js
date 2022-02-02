import Vue from "vue";
import VueRouter from "vue-router";

import Portada from "@/views/Portada";
import SobreMi from "@/views/SobreMi";
import Contacto from "@/views/Contacto";
import Post from "@/views/Post";
import RutasInexistentes from "@/views/RutasInexistentes";
import Articulo from "@/views/Articulo";

import SobreMiTransicion from "@/views/Transicion/SobreMiTransicion";
import ContactoTransicion from "@/views/Transicion/ContactoTransicion";

import Administrador from "@/views/Administrador";
import Simple from "@/views/Administrador/Simple";
import Avanzado from "@/views/Administrador/Avanzado";

Vue.use(VueRouter);

const routes = [
  {
    path: "/contacto",
    name: "Contacto",
    alias: ["/contactame"],
    component: Contacto,
  },
  {
    path: "/articulo",
    name: "Articulo",
    component: Articulo,
  },
  {
    path: "/",
    name: "Portada",
    alias: ["/home", "/inicio", "/portada"],
    component: Portada,
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
    children: [
      {
        path: ":id",
        component: Articulo,
      },
    ],
  },
  {
    path: "/sobremi",
    name: "SobreMi",
    alias: ["/acerca"],
    component: SobreMi,
    children: [
      {
        path: "sobremitransicion",
        name: "SobreMiTransicion",
        component: SobreMiTransicion,
      },
      {
        path: "contactotransicion",
        name: "ContactoTransicion",
        component: ContactoTransicion,
      },
    ],
  },
  {
    path: "/administrador",
    name: "Administrador",
    component: Administrador,
    children: [
      {
        path: "simple",
        name: "Simple",
        component: Simple,
      },
      {
        path: "avanzado",
        name: "Avanzado",
        component: Avanzado,
      },
    ],
  },
  {
    path: "*",
    name: "RutasInexistentes",
    component: RutasInexistentes,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
