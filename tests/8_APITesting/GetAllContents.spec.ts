/*
request
newContext{baseURL:"",header}
requestContext.post()
*/

import { test, request, expect } from "@playwright/test";

test("Get Post", async () => {

    const requestContext = await request.newContext({ baseURL: "http://localhost:8080" });
    const response = await requestContext.get("/api/users");
    console.log(response.status());
    expect(response.status()).toBe(200);


    const responseBody = await response.json();
    console.log(responseBody);
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody.length).toBeGreaterThan(5);
    expect(responseBody.length).toBe(10);

    expect(responseBody[8].firstName).toBe("Selvan");

    responseBody.forEach((res:object)=>{
        expect(res).toHaveProperty("id");
        expect(res).toHaveProperty("email");
        expect(res).toHaveProperty("firstName");
        expect(res).toHaveProperty("lastName");
    })


 });