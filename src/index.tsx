import React from "react";
import ReactDOM from "react-dom/client";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "Desenvolvimento",
          amount: 6000,
          createdAt: new Date("2021-10-10 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 800,
          createdAt: new Date("2021-10-11 10:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      const newData = {
        ...data,
        createdAt: new Date(),
      };
      return schema.create("transaction", newData);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
