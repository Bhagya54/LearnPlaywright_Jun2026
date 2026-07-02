import { test, expect, request } from '@playwright/test';

test('CRUD API Example', async () => {

  // ✅ Create API context
  const apiContext = await request.newContext({
    baseURL: 'http://localhost:8080',
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  });

  // =======================
  // ✅ 1. CREATE (POST)
  // =======================
  const createPayload = {
    title: "Test User",
    body: "Automation",
    userId: 1
  };

  const postResponse = await apiContext.post('/api/posts', {
    data: createPayload
  });

  expect(postResponse.status()).toBe(201);

  const postResponseBody = await postResponse.json();
  console.log("POST Response:", postResponseBody);

  // ✅ Extract ID
  const id = postResponseBody.id;
  console.log("Created ID:", id);

  // =======================
  // ✅ 2. READ (GET)
  // =======================
  const getResponse = await apiContext.get(`/api/posts/${id}`);

  expect(getResponse.status()).toBe(200);

  const getResponseBody = await getResponse.json();
  console.log("GET Response:", getResponseBody);

  expect(getResponseBody.id).toBe(id);

  // =======================
  // ✅ 3. UPDATE (PUT)
  // =======================
  const updatePayload = {
    title: "Updated Title",
    body: "Updated Body",
    userId: 1
  };

  const putResponse = await apiContext.put(`/api/posts/${id}`, {
    data: updatePayload
  });

  expect(putResponse.status()).toBe(200);

  const putResponseBody = await putResponse.json();
  console.log("PUT Response:", putResponseBody);

  expect(putResponseBody.title).toBe(updatePayload.title);

  // =======================
  // ✅ 4. PARTIAL UPDATE (PATCH)
  // =======================
  const patchPayload = {
    title: "Patched Title"
  };

  const patchResponse = await apiContext.patch(`/api/posts/${id}`, {
    data: patchPayload
  });

  expect(patchResponse.status()).toBe(200);

  const patchResponseBody = await patchResponse.json();
  console.log("PATCH Response:", patchResponseBody);

  expect(patchResponseBody.title).toBe(patchPayload.title);

  // =======================
  // ✅ 5. DELETE
  // =======================
  const deleteResponse = await apiContext.delete(`/api/posts/${id}`);

  expect(deleteResponse.status()).toBe(200); // or 204 based on API

  console.log("DELETE successful for ID:", id);

});