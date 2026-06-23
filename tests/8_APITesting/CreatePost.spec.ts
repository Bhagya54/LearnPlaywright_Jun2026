/*
request
newContext{baseURL:"",header}
requestContext.post()
*/

import { test, request, expect } from "@playwright/test";

test("Create Post", async () => {

    const requestContext = await request.newContext(
        {
            baseURL: "https://jsonplaceholder.typicode.com",
            extraHTTPHeaders: {
                "Content-Type": "application/json; charset=UTF-8",
                //Authorization:"bearer <token>"
            }
        });
    const postData = { title: "Playwright", body: "Playwright for web and api automation", userId: 1 };

    const response = await requestContext.post("/posts",
        {
            data: postData
        });
    console.log(response.status());
    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.title).toBe("Playwright");
    expect(responseBody.body).toBe("Playwright for web and api automation");
    expect(responseBody.userId).toBe(1);
});


