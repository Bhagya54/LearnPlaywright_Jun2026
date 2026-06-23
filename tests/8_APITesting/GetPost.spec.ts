/*
Post > extract id > get
request
newContext{baseURL:"",header}
requestContext.post()
*/

import { test, request, expect } from "@playwright/test";

test("Get Post", async () => {

    const requestContext = await request.newContext({ baseURL: "https://jsonplaceholder.typicode.com" });
    const response = await requestContext.get("/posts/1");
    console.log(response.status());
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.title).toContain("sunt aut facere");
    expect(responseBody.body).toContain("quidfdfda et suscipit\nsuscipit");
    expect(responseBody.userId).toBe(1);
});


