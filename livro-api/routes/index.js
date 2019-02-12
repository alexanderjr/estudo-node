module.exports = app => {
    app.get("/", (req, res) => res.json({status: "API"}));
}

module.exports = app => {
    app.get("/tasks", (req, res) => {
        const tasks = [
            {title: "Testes"},
            {title: "teste2"}
        ];
        res.json(tasks);
    });
}


