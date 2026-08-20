# Software Dev Intern Assignment - Meta Lead Webhook Backend

## Overview
This Express server handles Meta (Facebook) Lead Webhook verification (`GET /webhook`) and incoming lead event payload processing (`POST /webhook`).

## Features & Verification Logic
- **GET /webhook**: Validates `hub.verify_token` against `MY_VERIFY_TOKEN` and echoes `hub.challenge` with HTTP 200. Rejects invalid tokens with HTTP 403.
- **POST /webhook**: Accepts incoming lead notification payloads and responds with HTTP 200.

## Local Testing & Verification
Automated integration tests were implemented using **Jest** and **Supertest** to verify backend logic without reliance on external tunneling tools.

### Running Tests
1. Install dependencies:
   ```bash
   npm install
