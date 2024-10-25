
var src_default = {
    async fetch(request, env) {
        const { DATABASE } = env;
        const stmt = DATABASE.prepare("SELECT * FROM comments LIMIT 3");
        const { results } = await stmt.all();
        console.log("results-----", JSON.stringify(results, null, 2));
    }
};
export {
    src_default as default
};